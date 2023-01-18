import { API } from '../../api/API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchMandala } from './mandalaType'

export const getMandala = createAsyncThunk('mandala/getMandala', async (data: number) => {
    const response = await API.makeGet(`/api/mandala/${data}`)
    return response
})

export const postNewMandala = createAsyncThunk('mandala/postNewMandala', async (data: FetchMandala) => {
    const response = await API.makePost('/api/mandala', data)
    return response
})