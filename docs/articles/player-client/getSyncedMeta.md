# player.getSyncedMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can only be set on server-side with `setSyncedMeta`.

_This type of meta is accessible anywhere but can only be set on server-side._

**Syntax**

```js
getSyncedMeta(key: string): void;
```

**Example Usage**

```js
const result = alt.Player.local.getSyncedMeta('myData');
if (!result) {
    // Data does not exist
    return;
}

console.log(result);
```

_alt.Player.local can also be a **player instance** from server_
