# alt.Player.local

This is your local player instance. You must use **scriptID** with a native for it to function when it asks for a `ped` or `entity`.

**Syntax**

```js
readonly local: Player;
```

**Example Usage**

```js
if (!alt.Player.local.vehicle) {
    // Local player is not in a vehicle.
}

// Freeze the local player.
native.freezeEntityPosition(alt.Player.local.scriptID, true);
```
