import { API } from '../../api/API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchMandala } from './mandalaType'
import { openDB, saveObject } from '../../misc/indexedDB'

export const getMandala = createAsyncThunk('mandala/getMandala', async (data: number) => {
    const response = await API.makeGet(`/api/mandala/${data}`)
    return response
})

export const postNewMandala = createAsyncThunk('mandala/postNewMandala', async (data: FetchMandala) => {

    const response = await API.makePost('/api/mandala', data)
    if (response.status !== 200) {
        if (window.indexedDB && 'serviceWorker' in navigator && 'SyncManager' in window) {
            const db = await openDB('mandala', 1, 'mandala-store')
            const write = await saveObject(db, data)
        }
    }

    return response
})