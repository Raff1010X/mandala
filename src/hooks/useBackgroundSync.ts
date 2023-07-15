// register navigator sync event listener react hook
import { useEffect } from 'react'

const useBackgroundSync = () => {
    useEffect(() => {
        if (window.indexedDB && 'serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then((sw: ServiceWorkerRegistration | any) => {
                if (sw.sync) {
                    sw.sync.register('mandala-sync')
                }
            })
        }
    }, [])
}

export default useBackgroundSync