"use client";

import type { GenerationConfig, ReferenceAsset } from "../components/Home";

const DB_NAME = "lytai-create-drafts";
const STORE_NAME = "drafts";
const DB_VERSION = 1;

export type StoredReferenceAsset = Omit<ReferenceAsset, "previewUrl"> & {
  file: File;
};

export type CreateDraft = {
  prompt: string;
  config: GenerationConfig;
  references: StoredReferenceAsset[];
};

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Failed to open IndexedDB"));
  });
}

export async function saveCreateDraft(key: string, draft: CreateDraft) {
  const database = await openDatabase();

  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.put(draft, key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error("Failed to save draft"));
  });

  database.close();
}

export async function loadCreateDraft(key: string) {
  const database = await openDatabase();

  const draft = await new Promise<CreateDraft | null>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => resolve((request.result as CreateDraft | undefined) ?? null);
    request.onerror = () => reject(request.error ?? new Error("Failed to load draft"));
  });

  database.close();
  return draft;
}

export async function deleteCreateDraft(key: string) {
  const database = await openDatabase();

  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.delete(key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error("Failed to delete draft"));
  });

  database.close();
}
