# player.setStreamSyncedMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be accessed with [getStreamSyncedMeta](./getStreamSyncedMeta.md). This can also be accessed on client-side.

The player on client-side is only updated if they are in streaming range of another player.

_This type of meta is accessible anywhere but can only be set on server-side._

**Syntax**

```js
setStreamSyncedMeta(key: string, value: any): void;
```

_You can store literally anything. Except functions._

**Example Usage**

```js
player.setStreamSyncedMeta('myData', 'hello from meta');
```
