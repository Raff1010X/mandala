import { API } from '../../api/API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchMandala } from './mandalaType'

export const getMandalas = createAsyncThunk('mandala/getMandalas', async () => {
    const response = await API.makeGet('/api/mandala')
    return response
})

export const getMandala = createAsyncThunk('mandala/getMandala', async (data: number) => {
    console.log(data)
    return data
    // const response = await API.makeGet(`/api/mandala/${data}`)
    // return response
})

export const postNewMandala = createAsyncThunk('mandala/postNewMandala', async (data: FetchMandala) => {
    console.log(data)
    return data
    // const response = await API.makePost('/api/mandala', data)
    // return response
})