# Events

Events work in a very specific way and understanding their communication is very important.

The server can communicate with any client.
Clients may only communicate with WebViews and the server.

A client **CANNOT** communicate with another client.

| Function Name      | Description                                                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| alt.emit              | Emit an event on server or client side. Only received on the side it was emitted from.                                                         |
| alt.on                | Receives an event. Server only receives server events. Client only receives client events.                                                     |
| alt.off               | Stop listening to custom or built-in events.                                                                                                   |
| alt.onServer          | Receives an event emitted from the server on client-side. Triggered with `alt.emitClient`.                                                     |
| alt.offServer         | Stop listening to custom events from the server.                                                                                               |
| alt.emitClient        | Emit an event to a specific client or an array of clients that they receive with `alt.onServer`.                                               |
| alt.emitClientRaw     | Emit an event to a specific client or an array of clients. It works faster than `emitAllClients` that they receive with `alt.onServer`.        |
| alt.emitAllClients    | Emit an event to all clients that they receive with `alt.onServer`.                                                                            |
| alt.emitAllClientsRaw | Emit an event to all clients. It works faster than `emitAllClients` that they receive with `alt.onServer`.                                     |
| alt.onClient          | Receives an event emitted from the client on server-side. Triggered with `alt.emitServer`.                                                     |
| alt.offClient         | Stop listening to custom events from the client.                                                                                               |
| alt.emitServer        | Emit an event to the server that is received with `alt.onClient`.                                                                              |
| alt.emitServerRaw     | (only works, server is using javascript)  Emit an event to the server. It works faster than `emitServer` that they receive with `alt.onClient` |

## Server to client

The server may only emit data to the client-side with `emitClient` or `emitClientRaw`, which requires a Player.
However, a player can also be substituted for `null` which works the same way as `alt.emitAllClients` by emitting it to all clients.

`emitClientRaw` and `emitAllClientsRaw` are used for big data and are faster than `emitClient` or `emitAllClients`.


# [Client-side](#tab/tab1-0)
```js
alt.onServer('sayHello', () => {
    alt.log('Hello from server.');
});
```
# [Server-side](#tab/tab1-1)
```js
alt.on('playerConnect', player => {
    alt.emitClient(player, 'sayHello'); // Send an event to a specific player

    // Send an event to all players
    alt.emitClient(null, 'sayHello');
    alt.emitAllClients('sayHello');
});
```

## Client to server

The client may only emit data to the server-side with `emitServer` or `emitServerRaw`.
`emitServerRaw` is used for big data and is faster than `emitServer` and `emitServerRaw` only works, if the server is using javascript.

The server-side `onServer` event handlers will automatically receive the player that sent the event as the first argument.

# [Client-side](#tab/tab2-0)
```js
alt.on('connectionComplete', () => {
    alt.emitServer('sayHello');
});
```
# [Server-side](#tab/tab2-1)
```js
alt.onClient('sayHello', player => {
    alt.log(`${player.name} is saying hello`);
});
```
***

## Server resource to server resource

The server & client may only communicate with itself with the `on` and `emit` functions.
They are sent and received across resources as well.

# [Server-side](#tab/tab3-0)
```js
alt.emit('hello', 'this is a message');

alt.on('hello', msg => {
    alt.log(msg);
});
```
***

## Client resource to client resource


# [Client-side](#tab/tab4-0)
```js
alt.emit('hello', 'this is a message');

alt.on('hello', msg => {
    alt.log(msg);
});
```
***

## Client to WebView and back

**Note:** `resource` in the URL of the WebView refers to the resource that you are currently writing code for.

# [Client-side code](#tab/tab5-0)
```js
const webview = new alt.WebView('http://resource/client/html/index.html');
webview.on('test2', handleFromWebview);

function handleFromWebview(msg) {
    alt.log(msg);
}

alt.setTimeout(() => {
    webview.emit('test', 'Hello from Client');
}, 500);
```
# [Client-side HTML](#tab/tab5-1)
```html
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <p>Words</p>
        <script type="text/javascript">
            if ('alt' in window) {
                alt.on('test', msg => {
                    console.log(msg);
                    alt.emit('test2', 'hello from webview');
                });
            }
        </script>
    </body>
</html>
```
***

## Unsubscribes from events

# [alt.off(Server-side/Client-side)](#tab/tab6-0)
```js
alt.on('customEventName', customEventFunction);
function customEventFunction() {
    alt.off('customEventName', customEventFunction);
}
```
# [alt.offClient(Server-side)](#tab/tab6-1)
```js
alt.onClient('customEventName', customEventFunction);
function customEventFunction() {
    alt.offClient('customEventName', customEventFunction);
}
```
# [alt.offServer(Client-side)](#tab/tab6-2)
```js
alt.onServer('customEventName', customEventFunction);
function customEventFunction() {
    alt.offServer('customEventName', customEventFunction);
}
```
***

## Raw Events

Raw events serialize the values to their raw byte buffer representation instead of converting them to an intermediate value, because of this the raw events can serialize and send big objects / arrays a lot faster than the normal events, BUT the downside is that this only works when both sides are using JavaScript

> [!CAUTION]
> `alt.emitServerRaw` only works if the server is using javascript.

# [Server-side(emitClientRaw or emitAllClientsRaw)](#tab/tab7-0)
```js
alt.on('playerConnect', player => {
    const array = [
        { id: 0, name: "test1" },
        { id: 1, name: "test2" }
    ]
    alt.emitClientRaw(player, 'sayHello', array); // Send an event to a specific player

    // Send an event to all players
    alt.emitAllClientsRaw('sayHello', array);
});
```

# [Client-side(emitClientRaw or emitAllClientsRaw listener)](#tab/tab7-1)
```js
alt.onServer('sayHello', (array) => {
    alt.log(array);
});
```

# [Client-side(emitServerRaw)](#tab/tab7-2)
```js
alt.on('connectionComplete', () => {
    const array = [
        { id: 0, name: "test1" },
        { id: 1, name: "test2" }
    ]
    alt.emitServerRaw(player, 'sayHello', array);
});
```

# [Server-side(emitServerRaw listener)](#tab/tab7-3)
```js
alt.onClient('sayHello', (player, array) => {
    alt.log(`${player.name} is sended ${array}`);
});
```
