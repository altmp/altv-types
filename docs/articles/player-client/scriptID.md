# alt.Player.local.scriptID

Used to get the script identifier of a player.

This is used to talk to natives and apply natives to a player or vehicle.

**Syntax**

```js
readonly scriptID: number;
```

**Example Usage**

```js
// Freeze the local player.
native.freezeEntityPosition(alt.Player.local.scriptID, true);
```

_alt.Player.local can also be a **player instance** from server_
