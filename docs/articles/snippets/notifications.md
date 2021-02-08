# Notifications

Notifications are the black boxes that appear above your map on bottom left-hand side.

They are only accessible from client-side but you can call them from server-side.

See the example below on how to utilize this in two different ways.

**Client Side**

```js
alt.onServer('drawNotification', drawNotification);

export function drawNotification(imageName, headerMsg, detailsMsg, message) {
    native.beginTextCommandThefeedPost('STRING');
    native.addTextComponentSubstringPlayerName(message);
    native.endTextCommandThefeedPostMessagetextTu(
        imageName.toUpperCase(),
        imageName.toUpperCase(),
        false,
        4,
        headerMsg,
        detailsMsg,
        1.0,
        ''
    );
    native.endTextCommandThefeedPostTicker(false, false);
}
```

## Example Usage

**Server Side**

```js
alt.emitClient(player, 'drawNotification', 'CHAR_AMMUNATION', 'Header', 'Small Details', 'The rest of the owl.');
```

**Client Side**

```js
drawNotification('CHAR_AMMUNATION', 'Header', 'Small Details', 'The rest of the owl.');
```