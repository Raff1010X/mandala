import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import mandalaArr from './mandalaArr'

type mandalaType = 'items' | 'rotate' | 'diameter' | 'svgItem' | 'stroke' | 'fill' | 'svgRotate' | 'scale' ;
interface MandalaArrProps {
    items: number;
    rotate: number;
    diameter: number;
    svgItem: number;
    stroke: any;
    fill: any;
    svgRotate: number;
    scale: number;
}

export interface MandalaState {
    mandalaArr: MandalaArrProps[];
    layer: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: MandalaState = {
    mandalaArr,
    layer: 0,
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
        }
    },
});

export const { setLayer, changeLayerArr } = mandalaSlice.actions;

export const selectMandalaArr = (state: RootState) => state.mandala.mandalaArr;
export const selectLayer = (state: RootState) => state.mandala.layer;

export default mandalaSlice.reducer;
