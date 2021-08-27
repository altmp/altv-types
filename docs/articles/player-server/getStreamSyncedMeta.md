# player.getStreamSyncedMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be set with [setStreamSyncedMeta](./setStreamSyncedMeta.md). This can also be accessed on client-side.

The player on client-side is only updated if they are in streaming range of another player.

_This type of meta is accessible anywhere but can only be set on server-side._

**Syntax**

```js
getStreamSyncedMeta(key: string): void;
```

_You can store literally anything. Except functions._

**Example Usage**

```js
const data = player.getStreamSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```
