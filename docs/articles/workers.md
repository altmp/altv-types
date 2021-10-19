# Workers

## What are alt:V Workers

The alt:V workers implementation is very similar to the NodeJS one as it allows you to run javascript code in parallel in another thread clientside.
Workers (threads) are useful for performing CPU-intensive operations but it's important to mention that they do not help much with I/O-intensive work.
The V8 asynchronous I/O operations are more efficient than Workers can be.

### important notes

> [!CAUTION]
> The imports and the shared array buffer in the workers are not yet implemented

* The alt API / natives are not accessible in a worker
* Creating a worker thread won't make your code perform better, it will just offload it in another thread

## Usage

### How to create a worker

Using relative path.
```js
const worker = new alt.Worker('./worker.js');
worker.start();
```

Using absolute path (starting from the resource root directory).
```js
const worker = new alt.Worker('/client/worker.js');
worker.start();
```

### Knowing when the worker is loaded

```js
worker.on('load', () => {
    console.log('Worker loaded');
});
```

### Error handling

```js
worker.on('error', (error) => {
    console.log(error);
});
```

### Communicating from the client to the Worker

client.js
```js
worker.emit('eventName', true, 0, [''], { p1: new Map() });
```

worker.js
```js
alt.on('eventName', (...args) => {
    console.log(args);
});
```

### Communicating from the worker to the client

worker.js
```js
alt.emit('eventName', true, 0, [''], { p1: new Map() });
```

client.js
```js
worker.on('eventName', (...args) => {
    console.log(args);
});
```