import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {newLayer, mandalaTransform, transformType, mandalaType, MandalaState, mandalaArr} from './mandalaType'

const initialState: MandalaState = {
    mandalaArr,
    layer: 0,
    transform: mandalaTransform,
    status: 'idle',
};

export const mandalaSlice = createSlice({
    name: 'mandala',
    initialState,
    reducers: {
        setLayer: (state, action: PayloadAction<number>) => {
            state.layer = action.payload;
        },
        changeLayerArr: (state, action: PayloadAction<{name: string, value: any}>) => {
            state.mandalaArr[state.layer][action.payload['name'] as mandalaType ] = action.payload['value']
        },
        deleteLayer: (state, action: PayloadAction<number>) => {
            if (action.payload > -1 && state.mandalaArr.length > 1) {
                state.layer = 0
                state.mandalaArr = state.mandalaArr.filter((el, index) => index !== Number(action.payload) )
            }
        },
        addLayer: (state) => {
            state.mandalaArr = [...state.mandalaArr, newLayer]
        },
        changeTransform: (state, action: PayloadAction<{name: string, value: number}>) => {
            state.transform[action.payload['name'] as transformType ] = action.payload['value']
        }
    },
});

export const { setLayer, changeLayerArr, deleteLayer, addLayer, changeTransform } = mandalaSlice.actions;

export const selectMandalaArr = (state: RootState) => state.mandala.mandalaArr;
export const selectLayer = (state: RootState) => state.mandala.layer;
export const selectTransform = (state: RootState) => state.mandala.transform;

export default mandalaSlice.reducer;
