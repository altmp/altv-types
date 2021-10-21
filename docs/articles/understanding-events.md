# Events

Events work in a very specific way and understanding their communication is very important.

The server can communicate with any client.
Clients may only communicate with WebViews and the server.

A client **CANNOT** communicate with another client.

| Function Name      | Description                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| alt.emit           | Emit an event on server or client side. Only received on the side it was emitted from.           |
| alt.on             | Receives an event. Server only receives server events. Client only receives client events.       |
| alt.off            | Stop listening to custom or built-in events.                                                     |
| alt.onServer       | Receives an event emitted from the server on client-side. Triggered with `alt.emitClient`.       |
| alt.offServer      | Stop listening to custom events from the server.                                                 |
| alt.emitClient     | Emit an event to a specific client or an array of clients that they receive with `alt.onServer`. |
| alt.emitAllClients | Emit an event to all clients that they receive with `alt.onServer`.                              |
| alt.onClient       | Receives an event emitted from the client on server-side. Triggered with `alt.emitServer`.       |
| alt.offClient      | Stop listening to custom events from the client.                                                 |
| alt.emitServer     | Emit an event to the server that is received with `alt.onClient`.                                |

## Server to client

The server may only emit data to the client-side with `emitClient`, which requires a Player.
However, a player can also be substituted for `null` which works the same way as `alt.emitAllClients` by emitting it to all clients.


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
***

## Client to server

The client may only emit data to the server-side with `emitServer`.
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
