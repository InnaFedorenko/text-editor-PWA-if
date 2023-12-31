import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  console.error('putDb implemented');
  // Create a connection to the database and verify that it was created
  const jadeDb = await openDB('jate', 1);
  // Create a transaction and store to add the content to the database
  const tx = jadeDb.transaction('jate', 'readwrite');
  // Add the content to the database
  const store = tx.objectStore('jate');
  // Wait for the request to complete
  const request = store.put({id:1,  content: content});
  // Log the result of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb implemented');
  //Create a connection to the database and verify that it was created
  const jadeDb = await openDB('jate', 1);
  // Create a transaction and store to add the content to the database
  const tx = jadeDb.transaction('jate', 'readonly');
  // Add the content to the database
  const store = tx.objectStore('jate');
  // Wait for the request to complete
  const request = store.get(1).content;
  //const request = store.getAll();
  // Log the result of the request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
