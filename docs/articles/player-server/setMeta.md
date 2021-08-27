# player.setMeta

**Description**

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be accessed with [getMeta](./getMeta.md)

_This type of meta is only accessible where it is created._

_If it is created on the client-side it is only accessible on the client-side._

_If it's created on the server-side it is only accessible on the server-side._

**Syntax**

```js
setMeta(key: string, value: any): void;
```

_You can store literally anything. Except functions._

**Example Usage**

```js
player.setMeta('myData', 'hello from meta');
```
