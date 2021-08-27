# MongoDB

MongoDB is a NoSQL database that is incredibly simple to use. It is highly recommended for JavaScript based environments as working with MongoDB is a seamless experience in Typescript, and JavaScript. It's easy to get started with and there are a few good ORM's that will assist you with managing your database.

MongoDB can compete with the likes of MySQL, MariaDB, PostgreSQL, etc.

## EzMongoDB

This is a small repository that Stuyk has created that lets you utilize a very simple database handler that is more than enough for the average developer. It was solely created to help new developers who want to just store data without overthinking it.

 [Read More on EzMongoDB's NPM Package](https://www.npmjs.com/package/@stuyk/ezmongodb)

### Install by Command

```js
$ npm install @stuyk/ezmongodb
```

### How to Initialize your Database

You'll likely want to use this pattern in your `startup.js` file on your server-side.

**startup.js - server side**

This is the main entry point for a resource.

This is where you should define a new Database.

```js
import Database from '@stuyk/ezmongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const collections = ['accounts', 'characters', 'vehicles'];

async function connect() {
    const didConnect = await Database.init(url, dbName, collections);
    if (!didConnect) {
        throw new Error(`Did not connect to the database.`);
    }

    console.log('Connected!');
}

connect();
```

### How to Use the Database

General examples of how to use the Database. Keep in mind that this is with TypeScript. Simply remove the 'types' if you are using JavaScript and this will function all the same.

**JavaScript**
```ts
import Database from '@stuyk/ezmongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const collections = ['accounts', 'characters', 'vehicles'];

async function connect() {
    // Establish a connection to your database.
    const connected = await Database.init(url, dbName, collections);
    if (!connected) {
        throw new Error(`Did not connect to the database.`);
    }

    const newDocument = {
        username: 'somePerson'
    }

    // Create new data in a collection (table).
    // This is now a document with `_id` attached to it.
    const somePerson = await Database.insertData(newDocument, 'accounts', true);
    if (!somePerson) {
        throw new Error('Could not insert data');
    }

    // Update all data for document based on 
    // ID in a collection.
    somePerson.age = 5;
    const didUpdate = await Database.updatePartialData(somePerson._id, { ...somePerson }, 'accounts');

    if (!didUpdate) {
        throw new Error(`Document for ${somePerson._id.toString()} did not update.`);
    }

    // Use the same function as above to
    // add a single field to an existing document.
    await Database.updatePartialData(somePerson._id, { newData: 'testing' }, 'accounts');

    // Fetch the new data from the database after updating it.
    // Not necessary if you keep a cache. 
    // Just use the cache as reference.
    const doc = await Database.fetchData('username', 'somePerson', 'accounts');
    if (!doc) {
        throw new Error(`Did not find a document with that data`);
    }


    // Delete a document entirely from a collection (table).
    const didDelete = await Database.deleteById(somePerson._id, 'accounts');
    if (!didDelete) {
        throw new Error(`Document did not exist.`);
    }
}

connect();
```

**TypeScript**
```ts
import Database from '@stuyk/ezmongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const collections = ['accounts', 'characters', 'vehicles'];

interface IAccount {
    _id?: any;
    username?: string;
    age?: number;
    newData?: string;
}

async function connect() {
    // Establish a connection to your database.
    const connected = await Database.init(url, dbName, collections);
    if (!connected) {
        throw new Error(`Did not connect to the database.`);
    }

    const newDocument = {
        username: 'somePerson'
    }

    // Create new data in a collection (table).
    // This is now a document with `_id` attached to it.
    const somePerson = await Database.insertData<IAccount>(newDocument, 'accounts', true);
    if (!somePerson) {
        throw new Error('Could not insert data');
    }

    // Update all data for document based on 
    // ID in a collection.
    somePerson.age = 5;
    const didUpdate = await Database.updatePartialData(somePerson._id, { ...somePerson }, 'accounts');

    if (!didUpdate) {
        throw new Error(`Document for ${somePerson._id.toString()} did not update.`);
    }

    // Use the same function as above to
    // add a single field to an existing document.
    await Database.updatePartialData(somePerson._id, { newData: 'testing' }, 'accounts');

    // Fetch the new data from the database after updating it.
    // Not necessary if you keep a cache. 
    // Just use the cache as reference.
    const doc = await Database.fetchData<IAccount>('username', 'somePerson', 'accounts');
    if (!doc) {
        throw new Error(`Did not find a document with that data`);
    }


    // Delete a document entirely from a collection (table).
    const didDelete = await Database.deleteById(somePerson._id, 'accounts');
    if (!didDelete) {
        throw new Error(`Document did not exist.`);
    }
}

connect();
```