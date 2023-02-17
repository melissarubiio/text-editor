// Import the openDB function from the 'idb' library
import { openDB } from 'idb';

// Define a function that initializes the database
const initDb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('The jate database already exists.');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('The jate database has been created.');
    },
  });

// Define a function that saves some content to the database
export const putDb = async (content) => {
  console.log('Saving data to the jate database.');

  // Connect to the database
  const jateDb = await openDB('jate', 1);

  // Start a transaction with write access to the 'jate' object store
  const tx = jateDb.transaction('jate', 'readwrite');

  // Get a reference to the 'jate' object store
  const store = tx.objectStore('jate');

  // Use the put method to add or update the content in the database
  const request = store.put({ id: 1, value: content });

  // Wait for the put operation to complete and log the result
  const result = await request;
  console.log('The data has been saved to the jate database.', result);
};

// Define a function that retrieves all the content from the database
export const getDb = async () => {
  console.log('Retrieving data from the jate database.');

  // Connect to the database
  const jateDb = await openDB('jate', 1);

  // Start a transaction with read access to the 'jate' object store
  const tx = jateDb.transaction('jate', 'readonly');

  // Get a reference to the 'jate' object store
  const store = tx.objectStore('jate');

  // Use the getAll method to retrieve all the content from the database
  const request = store.getAll();

  // Wait for the getAll operation to complete and return the result
  const result = await request;
  //console.log('result.value', result);
  return result?.value;
};

initDb();