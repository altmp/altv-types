# alt.onceClient

Subscribes to an event coming from client and only handles it once.

**Example Usage**

```js
alt.onceClient('myEventName', (player, args) => {
    alt.log(args)
}
```
