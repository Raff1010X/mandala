/// <reference path="../../node_modules/@types/serviceworker/index.d.ts" />
// register navigator sync event listener react hook
import { useEffect } from 'react'
import { openDB, saveObject } from '../misc/indexedDB'
import { FetchMandala } from '../views/mandala/mandalaType'
import { postNewMandala } from '../views/mandala/mandalaAPI'

export const useBackgroundSync = () => {
    useEffect(() => {
        if (window.indexedDB && 'serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then((sw:any) => {
                if (sw.sync) {
                    sw.sync.register('mandala-sync')
                }
            })
        }
    }, [])

    useEffect(() => {
        if (window.indexedDB && 'serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.addEventListener('message', async event => {
                if (event.data.type === 'mandala-sync') {
                    const db = await openDB('mandala', 1, 'mandala-store') as any
                    const mandala = await db.getAll('mandala')
                    mandala.forEach(async (item: FetchMandala) => {
                        await postNewMandala(item)
                    })
                }
            })
        }
    }, [])
}
