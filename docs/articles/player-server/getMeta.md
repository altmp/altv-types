# player.getMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be set with [setMeta](./setMeta.md)

_This type of meta is only accessible where it is created._

_If it is created on the client-side it is only accessible on the client-side._

_If it's created on the server-side it is only accessible on the server-side._

**Syntax**

```js
getMeta(key: string, value: any): void;
```

**Example Usage**

```js
const result = player.getMeta('myData');
if (!result) {
    // Data does not exist
    return;
}

console.log(result);
```
