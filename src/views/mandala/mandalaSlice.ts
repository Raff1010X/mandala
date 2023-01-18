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

const initialState: MandalaState = {
    mandalaArr,
    layer: 0,
    hoveredLayer: -1,
    transform: mandalaTransform,
    fileName: 0,
    userInfo: {name: '', origin:'', message: ''},
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
                state.hoveredLayer = current + 1;
                return;
            }
            if (
                action.payload === 100 &&
                current === state.mandalaArr.length - 1
            ) {
                state.layer = 0;
                state.hoveredLayer = 0;
                return;
            }
            if (action.payload === -100 && current > 0) {
                state.layer = current - 1;
                state.hoveredLayer = current - 1;
                return;
            }
            if (action.payload === -100 && current === 0) {
                state.layer = state.mandalaArr.length - 1;
                state.hoveredLayer = state.mandalaArr.length - 1;
                return;
            }
            state.layer = action.payload;
        },
        setHoveredLayer: (state, action: PayloadAction<number>) => {
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
            .addCase(postNewMandala.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.status === 'error') {
                    // action.asyncDispatch(sendMessage('Server error...'))
                }
                if (action.payload.status === 'ok') {

                    // action.asyncDispatch(sendMessage('Success'))
                }
            })
            .addCase(postNewMandala.rejected, (state, action) => {
                state.status = 'failed';
                // action.asyncDispatch(sendMessage('Server error...'))
            })

            .addCase(getMandala.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMandala.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.status === 'error') {
                    // action.asyncDispatch(sendMessage('Server error...'))
                }
                if (action.payload.status === 'ok') {
                    const file = JSON.parse(action.payload.file);
                    const {fileName, body} = file;
                    const {mandalaArr, transform, userInfo} = body;
                    state.fileName = fileName;
                    state.mandalaArr = mandalaArr;
                    state.transform = transform;
                    state.userInfo = userInfo;
                }
            })
            .addCase(getMandala.rejected, (state, action) => {
                state.status = 'failed';
                // action.asyncDispatch(sendMessage('Server error...'))
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
} = mandalaSlice.actions;

export const selectStatus = (state: RootState) => state.mandala.status;
export const selectMandalaArr = (state: RootState) => state.mandala.mandalaArr;
export const selectLayer = (state: RootState) => state.mandala.layer;
export const selectHoveredLayer = (state: RootState) =>
    state.mandala.hoveredLayer;
export const selectTransform = (state: RootState) => state.mandala.transform;
export const selectFileName = (state: RootState) => state.mandala.fileName;
export const selectUserInfo = (state: RootState) => state.mandala.userInfo;

export default mandalaSlice.reducer;
