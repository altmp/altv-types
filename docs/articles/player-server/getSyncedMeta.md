# player.getSyncedMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be set with [setSyncedMeta](./setSyncedMeta.md). This can also be accessed on client-side.

_This type of meta is accessible anywhere but can only be set on server-side._

**Syntax**

```js
getSyncedMeta(key: string): void;
```

**Example Usage**

```js
const result = player.getSyncedMeta('myData');
if (!result) {
    // Data does not exist
    return;
}

console.log(result);
```
