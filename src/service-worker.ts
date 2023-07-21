/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { openDB, saveObject, getAll, deleteObject } from './misc/indexedDB';
import { API } from './api/API';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST
  .concat(
      // Add custom service worker caching here
      { url: './fonts/Roboto/Roboto-Light.ttf', revision: null },
      { url: './fonts/Anton/Anton-Regular.ttf', revision: null },
  )
);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate' || url.pathname.startsWith('/_') || url.pathname.match(fileExtensionRegexp)) return false;
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// save to indexedDB for '/api/mandala'
async function saveMandalaToIndexedDB(databaseName: string, data: any, storeName = 'mandala-store', json = true) {
  if ('SyncManager' in self) {
    const object = json ? await data.json() : data;
    const db = await openDB(databaseName, 1, storeName)
    saveObject(db, object, storeName)
      .then(() => {
        console.log('Mandala saved to indexedDB')
      })
      .catch((err: any) => {
        console.log('Mandala save to indexedDB failed: ', err)
      })
  }
}


self.addEventListener('fetch', (event: any) => {

  // network first then save to indexedDB for '/api/mandala'
  if (event.request.method === 'POST') {
    if (event.request.url.includes('/api/mandala')) {
      event.respondWith(
        fetch(event.request.clone())
          .then((response: any) => {
            if (response.status !== 201) {
              saveMandalaToIndexedDB('background-sync', event.request);
              return new Response(JSON.stringify({ status: 'saved' }));
            } else {
              return response;
            }
          })
          .catch((err: any) => {
            saveMandalaToIndexedDB('background-sync', event.request);
            return new Response(JSON.stringify({ status: 'saved' }));
          })
      );
    }
  }

  // cache first (form indexedDB ) then network (and save to indexedDB) for '/api/mandala' get request
  if (event.request.method === 'GET') {
    if (event.request.url.includes('/api/mandala')) {
      event.respondWith(
        (async () => {
          const db: IDBDatabase | any = await openDB('gallery', 1, 'mandala-store');
          const mandala = await getAll(db, 'mandala-store');

          let id = Number(event.request.url.split('/').pop());
          if (id > mandala.length) id = 1;
          if (id < 1) id = mandala.length;
          const item = mandala.filter((item: any) => item.value.id === id);

          if (item.length > 0) {
            return new Response(JSON.stringify(item[0].value));
          } else {
            return fetch(event.request.clone())
              .then((response: any) => {
                if (response.status !== 200) {
                  return new Response(JSON.stringify({ status: 'failed' }));
                }
                saveMandalaToIndexedDB('gallery', response.clone(), 'mandala-store');
                return response;
              })
              .catch((err: any) => {
                return new Response(JSON.stringify({ status: 'failed' }));
              });
          }
        })()
      );
    }
  }
})

// background sync for '/api/mandala'
async function syncMandala() {
  // post mandala from indexedDB to api/mandala
  const db: IDBDatabase | any = await openDB('background-sync', 1, 'mandala-store');
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

  // get mandala for gallery from api/mandala/:id and save to indexedDB
  const db2: IDBDatabase | any = await openDB('gallery', 1, 'mandala-store');
  const mandala2 = await getAll(db2, 'mandala-store');
  const response = await API.makeGet('/api/mandala/-1');
  if (response.status === 'ok') {
    const id = response.id;
    const length = mandala2.length;
    if (id > length) {
      for (let i = id; i > 0; i--) {
        const item = mandala2.filter((item: any) => item.value.id === i);
        if (item.length === 0) {
          const response = await API.makeGet('/api/mandala/' + i);
          if (response.status === 'ok') {
            saveMandalaToIndexedDB('gallery', response, 'mandala-store', false);
          }
        }
      }
    }
  }
}

self.addEventListener('sync', async (event: any) => (event.tag === 'mandala-sync') && await syncMandala());
