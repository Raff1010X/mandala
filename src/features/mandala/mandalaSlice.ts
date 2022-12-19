import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import mandalaArr from './mandalaArr'

interface MandalaArrProps {
    items: number;
    rotate: number;
    diameter: number;
    svgItem: number;
    stroke: string;
    fill: string;
    svgRotate: number;
    scale: number;
}

export interface MandalaState {
    mandalaArr: MandalaArrProps[];
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: MandalaState = {
    mandalaArr: mandalaArr,
    value: 0,
    status: 'idle',
};

export const mandalaSlice = createSlice({
    name: 'mandala',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = mandalaSlice.actions;

export const selectMandalaArr = (state: RootState) => state.mandala.mandalaArr;

export default mandalaSlice.reducer;
