# alt.emitServer

**Example Usage**##### Client

```js
const number = 56;
alt.emitServer('yourEventName', number);
```##### Server

```js
alt.onClient('yourEventName', (player, number) => {
    alt.log(number); // This will be 56
});
```
