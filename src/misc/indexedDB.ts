export function openDB(dbName: string, dbVersion: number, dbStoreName: string): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(dbName, dbVersion);
        request.onerror = (event: any) => {
            reject(event.target?.error);
        };
        request.onsuccess = () => {
            resolve(request.result);
        };
        request.onupgradeneeded = () => {
            const db = request.result as IDBDatabase;
            if (!db.objectStoreNames.contains(dbStoreName)) {
                const store = db.createObjectStore(dbStoreName, { autoIncrement: true });
                store.createIndex('id', 'id', { unique: true });
            }
        };
    });
}

export function saveObject(db: IDBDatabase, object: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const transaction = db.transaction('mandala-store', 'readwrite');
        const store = transaction.objectStore('mandala-store');
        transaction.oncomplete = () => {
            resolve();
        };
        transaction.onerror = (event: any) => {
            reject(event.target?.error);
        };
        const request = store.add(object);
        request.onerror = (event: any) => {
            console.log('error', event.target?.error);
            reject(event.target?.error);
        };

    });
}