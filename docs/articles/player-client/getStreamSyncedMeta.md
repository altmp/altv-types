# player.getStreamSyncedMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can only be set on server-side with `setStreamSyncedMeta`.

The player on client-side is only updated if they are in streaming range of another player.

_This type of meta is accessible anywhere but can only be set on server-side._

**Syntax**

```js
getStreamSyncedMeta(key: string): void;
```

_You can store literally anything. Except functions._

**Example Usage**

```js
const data = alt.Player.local.getStreamSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```

_alt.Player.local can also be a **player instance** from server_
