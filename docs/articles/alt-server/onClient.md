# alt.onClient

Subscribes to an event from the client and handles it as many times as necessary.

**Example Usage**

```js
alt.onClient('myEventName', (player, someArg) => {
    console.log(`${player.name} has triggered this event`);
});
```
