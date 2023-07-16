import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface MessageState {
    message: string
}

const initialState: MessageState = {
    message: '',
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<string>) => {
            if (action.payload.indexOf('Failed to fetch') !== -1)
                state.message = 'Failed to connect to server'
            else
                state.message = action.payload
        },
    },
})

export const { sendMessage } = messageSlice.actions

export const selectMessage = (state: RootState) => state.message.message

export default messageSlice.reducer
