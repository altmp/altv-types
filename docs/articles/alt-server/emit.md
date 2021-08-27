# alt.emit

**Example Usage**

```js
alt.on('playerConnect', (player) => {
    alt.emit('customEventName', player);
});

alt.on('customEventName', (player) => {
    console.log(`${player.name} has joined the server.`);
});
```
