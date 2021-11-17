# Workers

## What are the alt:V Workers

The alt:V workers implementation is very similar to the NodeJS one as it allows you to run javascript code in parallel in another thread.
Workers (threads) are useful for performing CPU-intensive operations, while they aren't any big help with I/O-intensive work.
The V8 asynchronous I/O operations are more efficient than Workers can be.

### Important notes

* Natives are not accessible in workers
* Only alt.File, alt.Vector2, alt.Vector3 & alt.RGBA are available in workers
* Creating a worker thread won't make your code perform better, it will just offload it in another thread

## Usage

[!CAUTION]
> In order to be able to use the worker alt API, you must import it via ``import * as alt from alt-worker``. You can find the worker typings [here](https://github.com/altmp/altv-types)

### Classes available in a worker

Only the following client-side alt API classes that are thread safe are available in a Worker:

* alt.File
* alt.RGBA
* alt.Vector2
* alt.Vector3

### Functions available in a worker

In the alt:V context, basics like ``setInterval`` or ``console.log`` don't exist. That's why we expose our own functions for it, but to make it easier if you do ``setInterval`` or ``console.log`` it will call the corresponding alt method.

| Function Name     | Description                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| alt.emit                 | Emit an event to the client side.                                                                        |
| alt.on                   | Receives an event emitted from the client side.                                                          |
| alt.once                 | Receives an event emitted from the client-side. Once triggered the handler is destroyed.                 |
| alt.log                  | Logs the specified arguments to the console using alt:V logger. (gets printed in the client logs files). |
| alt.logWarning           | Logs the specified arguments as a warning to the console using alt:V logger.                             |
| alt.logError             | Logs the specified arguments as an error to the console using alt:V logger.                              |
| alt.nextTick             | Schedules execution of handler on next tick/next frame.                                                  |
| alt.setInterval          | Schedules execution of handler in specified intervals.                                                   |
| alt.setTimeout           | Schedules execution of handler once after the expiration of interval.                                    |
| alt.clearNextTick        | Clears a timer set with the nextTick function.                                                           |
| alt.clearInterval        | Clears a timer set with the setInterval function.                                                        |
| alt.clearTimeout         | Clears a timer set with the setTimeout function.                                                         |
| alt.hash                 | Creates a hash using Jenkins one-at-a-time algorithm.                                                    |
| alt.getSharedArrayBuffer | Retrieves the shared array buffer instance with the given id.                                            |

### Properties available in a worker

| Property Name  | Description                               |
| -------------- | ----------------------------------------- |
| alt.version    | Represents the current version.           |
| alt.branch     | Represents the current branch.            |
| alt.sdkVersion | Represents the current SDK version.       |
| alt.debug      | Returns if the resource is in debug mode. |

### How to create a worker

# [relative path](#tab/tab1-0)
```js
import * as alt from 'alt-client';

const worker = new alt.Worker('./worker.js');
worker.start();
```
# [absolute path](#tab/tab1-1)
```js
import * as alt from 'alt-client';

// Path starting from the resource root directory
const worker = new alt.Worker('/client/worker.js');
worker.start();
```
***

## Built-in worker events

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

# [client](#tab/tab2-0)
```js
import * as alt from 'alt-client';

const worker = new alt.Worker('./worker.js');
worker.start();

worker.on('load', () => worker.emit('eventName', true, 0, [''], { p1: new Map() }));
```
# [worker](#tab/tab2-1)
```js
import * as alt from 'alt-worker';

alt.on('eventName', (...args) => {
    console.log(args);
});
```
***

### Communicating from the worker to the client

# [worker](#tab/tab3-0)
```js
import * as alt from 'alt-worker';

alt.emit('eventName', true, 0, [''], { p1: new Map() });
```
# [client](#tab/tab3-1)
```js
import * as alt from 'alt-client';

const worker = new alt.Worker('./worker.js');

worker.on('eventName', (...args) => {
    console.log(args);
});
```
***

### Using shared array buffers

An [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) is an object used to represent a generic, fixed-length raw binary data buffer.
It is an array of bytes, you cannot directly manipulate its content but create a [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) object / [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) to read and write the buffer content.

A [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) is very similar to an array buffer except it is built in a way that they can be used to create views on shared memory.

> [!WARNING]
> You should learn how to use SharedArrayBuffers outside of the alt:V context in order to use them properly. The following example is making use of the [Atomics](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics) API to make the SharedArrayBuffer usage [thread safe](https://en.wikipedia.org/wiki/Thread_safety)

**Example usage**

# [client](#tab/tab4-0)
```js
import * as alt from 'alt-client';

const worker = new alt.Worker('./worker.js');
worker.start();

const buffer = createBuffer();
const sharedArray = new Int32Array(buffer);

worker.on('changedValue', () => {
     for(let i = 0; i < 10; i++){
       // Output of the changed values on "main thread"
       const value = Atomics.load(sharedArray,i);
       console.log(`[Main thread]: Value of index ${i} is ${value}`);
    }
});

function createBuffer() {
    // Calculating the size of the buffer size depending on the array type
    const length = 10;
    const size = Int32Array.BYTES_PER_ELEMENT * length;
    const sharedBuffer = new SharedArrayBuffer(size);
    const sharedArray = new Int32Array(sharedBuffer);
      
    // applying values to the array
    for(let i = 0; i< 10; i++){
        sharedArray[i] = i*20;
    }
  
    const bufferIndex = alt.Worker.addSharedArrayBuffer(sharedBuffer);
    worker.emit("addedMyBuffer", bufferIndex);
    alt.log('emitted buffer to worker')

    return sharedBuffer;
}
```
# [worker](#tab/tab4-1)
```js
alt.on('addedMyBuffer', (index) => {
    //Getting the buffer by index and generate a Int32Array 
    const buffer = alt.getSharedArrayBuffer(index);
    const sharedArray = new Int32Array(buffer);

    for(let i = 0; i < 10; i++) {
        //Read the value
        const arrayValue = Atomics.load(sharedArray, i);
        console.log(`[Worker] Value from main thread for [${i}] is ${arrayValue}`);

        // Atomics.exchange returns the old value on i.
        const oldValue = Atomics.exchange(sharedArray, i, 5)
        console.log(`[Worker] Value change to 5 on [${i}]`);

        // reading the new value
        const changedValue = Atomics.load(sharedArray, i);
        console.log(`[Worker] New value on ${i} is ${changedValue} (old value: ${oldValue})`);

        alt.emit('changedValue');
    }
});
```