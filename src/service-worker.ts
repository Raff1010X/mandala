/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { openDB, saveObject, getAll, deleteObject } from './misc/indexedDB';
import { API } from './api/API';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate' || url.pathname.startsWith('/_') || url.pathname.match(fileExtensionRegexp)) return false;
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// save to indexedDB for '/api/mandala'
async function saveMandalaToIndexedDB(data: any) {
  if ('SyncManager' in self) {
    const object = await data.json()
    const db = await openDB('mandala', 1, 'mandala-store')
    const write = await saveObject(db, object)
    if (write !== undefined && write !== null) {
      self.registration.showNotification('Mandala Saved', {
        body: 'Your mandala has been saved to your device and will be uploaded when you are online again.',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      })
    }
  }
}

// network first then save to indexedDB for '/api/mandala'
self.addEventListener('fetch', (event: any) => {
  if (event.request.method === 'POST') {
    if (event.request.url.includes('/api/mandala')) {
      event.respondWith(
        fetch(event.request.clone())
          .then((response: any) => {
            if (response.status !== 201) {
              saveMandalaToIndexedDB(event.request)
            }
            return response
          })
          .catch((err: any) => {
            saveMandalaToIndexedDB(event.request)
          })

      );
    }
  }

});

// background sync for '/api/mandala'
async function syncMandala() {
  const db: IDBDatabase | any = await openDB('mandala', 1, 'mandala-store');
  const mandala = await getAll(db, 'mandala-store');
  mandala.forEach(async (item: any) => {
    const response = await API.makePost('/api/mandala', item.value);
    if (response.status === 'ok') {
      console.log('Mandala sync success: ', item.key)
      await deleteObject(db, 'mandala-store', item.key)
    } else {
      console.log('Mandala sync failed: ', item.key)
    }

  });
}

self.addEventListener('sync', async (event: any) => (event.tag === 'mandala-sync') && await syncMandala());