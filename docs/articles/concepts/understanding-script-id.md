# Understanding ScriptID

## A General Overview

-   A scriptID is unique to only the client side
-   scriptID will provide us a way to modify the native behavior of a player
-   They are most often used in tandem with natives
-   They are unique per client per player
-   Do not try to share scriptID with another player, it will not work

## How to obtain it

Your scriptID for your player can be retrieved in this way:

```js
import * as alt from 'alt-client';
const local = alt.Player.local.scriptID;
```

This is the equivalent of `local playerPed = PlayerPedId()` from FiveM.

## Example Usage

### Serverside

```js
alt.on('playerConnect', (player) => {
    // This emits to all player
    alt.emitClient(null, 'joined', player);
});
```

### Clientside

```js
alt.onServer('joined', (otherPlayer) => {
    // Check if self. Ignore self.
    if (otherPlayer === alt.Player.local) {
        // Let's freeze ourself.
        // Don't actually do this. This is just how most natives work with scriptID.
        alt.log(`You have frozen.`);
        native.freezeEntityPosition(alt.Player.local.scriptID, true);

        // We'll unfreeze ourself in 5 seconds.
        alt.setTimeout(() => {
            alt.log(`You are unfrozen.`);
            native.freezeEntityPosition(alt.Player.local.scriptID, false);
        }, 5000);
        return;
    }

    // Log their scriptID to the 'F8' console.
    alt.log(`Their scriptID is: ${otherPlayer.scriptID}`);
});
```
