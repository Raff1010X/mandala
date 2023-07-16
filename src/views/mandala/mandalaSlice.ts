import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getMandala, postNewMandala } from './mandalaAPI';

import {
    newLayer,
    mandalaTransform,
    transformType,
    mandalaType,
    MandalaState,
    mandalaArr,
} from './mandalaType';
import { sendMessage } from '../../features/message/messageSlice';

const initialState: MandalaState = {
    mandalaArr,
    layer: 0,
    hoveredLayer: -1,
    transform: mandalaTransform,
    fileName: 0,
    fileMandala: mandalaArr,
    fileTransform: mandalaTransform,
    userInfo: { name: '', origin: '', message: '' },
    status: 'idle',
};

export const mandalaSlice = createSlice({
    name: 'mandala',
    initialState,
    reducers: {
        setLayer: (state, action: PayloadAction<number>) => {
            const current: number = Number(state.layer);
            if (
                action.payload === 100 &&
                current < state.mandalaArr.length - 1
            ) {
                state.layer = current + 1;
                if (state.transform.rotateX + state.transform.rotateY === 0)
                    state.hoveredLayer = current + 1;
                return;
            }
            if (
                action.payload === 100 &&
                current === state.mandalaArr.length - 1
            ) {
                state.layer = 0;
                if (state.transform.rotateX + state.transform.rotateY === 0)
                    state.hoveredLayer = 0;
                return;
            }
            if (action.payload === -100 && current > 0) {
                state.layer = current - 1;
                if (state.transform.rotateX + state.transform.rotateY === 0)
                    state.hoveredLayer = current - 1;
                return;
            }
            if (action.payload === -100 && current === 0) {
                state.layer = state.mandalaArr.length - 1;
                if (state.transform.rotateX + state.transform.rotateY === 0)
                    state.hoveredLayer = state.mandalaArr.length - 1;
                return;
            }
            state.layer = action.payload;
        },
        setHoveredLayer: (state, action: PayloadAction<number>) => {
            if (state.transform.rotateX + state.transform.rotateY === 0)
                state.hoveredLayer = action.payload;
        },
        changeLayerArr: (
            state,
            action: PayloadAction<{ name: string; value: any }>
        ) => {
            state.mandalaArr[state.layer][
                action.payload['name'] as mandalaType
            ] = action.payload['value'];
        },
        deleteLayer: (state, action: PayloadAction<number>) => {
            if (action.payload > -1 && state.mandalaArr.length > 1) {
                state.layer = 0;
                state.mandalaArr = state.mandalaArr.filter(
                    (el, index) => index !== Number(action.payload)
                );
            }
        },
        addLayer: (state) => {
            state.mandalaArr = [...state.mandalaArr, newLayer];
        },
        changeTransform: (
            state,
            action: PayloadAction<{ name: string; value: number }>
        ) => {
            state.transform[action.payload['name'] as transformType] =
                action.payload['value'];
        },
        editMandalaFromGallery: (state) => {
            state.transform = state.fileTransform;
            state.mandalaArr = state.fileMandala;
        },
        setFileName: (state) => {
            state.fileName = 0;
        },
        // postMandala: (state, action: PayloadAction<{ name: string | undefined; origin: string | undefined, message: string | undefined}>) => {
        //     const {mandalaArr, transform} = current(state) //current from '@reduxjs/toolkit';
        //     const userInfo = action.payload
        //     const data = {mandalaArr, transform, userInfo}
        //     console.log(data)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postNewMandala.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postNewMandala.fulfilled, (state, action: any) => {
                state.status = 'idle';
                if (action.payload.status === 'error') {
                    action.asyncDispatch(sendMessage('Server error...'))
                }
                if (action.payload.status === 'ok') {
                    action.asyncDispatch(sendMessage('Your Mandala has been saved. You will find it in Art Gallery.'))
                }
                if (action.payload.status === 'saved') {
                    action.asyncDispatch(sendMessage('Your Mandala has been saved to local storage. After connecting to the server, you will find it in Art Gallery.'))
                }
            })
            .addCase(postNewMandala.rejected, (state, action: any) => {
                state.status = 'failed';
                action.asyncDispatch(sendMessage('Server error...'))
            })

            .addCase(getMandala.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMandala.fulfilled, (state, action: any) => {
                if (action.payload.status === 'error') {
                    state.userInfo = { name: 'Mandala Creators', origin: 'Offline', message: 'There was a problem connecting to the server!' }
                    action.asyncDispatch(sendMessage('Server error...'))
                }
                if (action.payload.status === 'ok') {
                    const file = JSON.parse(action.payload.file);
                    const { fileName, body } = file;
                    const { mandalaArr, transform, userInfo } = body;
                    state.fileName = fileName;
                    state.fileMandala = mandalaArr;
                    state.fileTransform = transform;
                    state.userInfo = userInfo;
                }
                state.status = 'idle';
            })
            .addCase(getMandala.rejected, (state, action: any) => {
                state.status = 'failed';
                action.asyncDispatch(sendMessage('Server error...'))
            });
    },
});

export const {
    setLayer,
    setHoveredLayer,
    changeLayerArr,
    deleteLayer,
    addLayer,
    changeTransform,
    editMandalaFromGallery,
    setFileName,
} = mandalaSlice.actions;

export const selectStatus = (state: RootState) => state.mandala.status;
export const selectMandalaArr = (state: RootState) => state.mandala.mandalaArr;
export const selectLayer = (state: RootState) => state.mandala.layer;
export const selectHoveredLayer = (state: RootState) =>
    state.mandala.hoveredLayer;
export const selectTransform = (state: RootState) => state.mandala.transform;

export const selectFileName = (state: RootState) => state.mandala.fileName;
export const selectFileMandala = (state: RootState) =>
    state.mandala.fileMandala;
export const selectFileTransform = (state: RootState) =>
    state.mandala.fileTransform;
export const selectUserInfo = (state: RootState) => state.mandala.userInfo;

export const selectNumberOfItems = (state: RootState) => {
    const mandala = state.mandala.mandalaArr;
    const sum = mandala.reduce((a, b) => a + (b['items'] || 0), 0);
    return sum;
};

export default mandalaSlice.reducer;
