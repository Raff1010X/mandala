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
            console.log('Mandala saved to indexedDB')
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

export async function getAll(db: IDBDatabase, storeName: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {

        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.openCursor();
        const results: any[] = [];
        request.onsuccess = (event: any) => {
            const cursor = event.target.result;
            if (cursor) {
                results.push({value: cursor.value, key: cursor.key});
                cursor.continue();
            } else {
                resolve(results);
            }
        };
        request.onerror = (event: any) => {
            reject(event.target?.error);
        };
    });
}

export async function deleteObject(db: IDBDatabase, storeName: string, key: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(key);
        request.onsuccess = () => {
            resolve();
        };
        request.onerror = (event: any) => {
            reject(event.target?.error);
        };
    });
}