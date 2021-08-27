# alt.Player.local.entityAimingAt

Get the vehicle, player, etc. that the player is aiming at.

**Syntax**

```js
readonly entityAimingAt: Entity | null;
```

**Example Usage**

```js
const target = player.entityAimingAt;

if (target !== someOtherPlayer || target !== someOtherVehicle) {
    // not aiming at the entity we are looking for
    return;
}

// is aiming at the entity we are looking for
```

_alt.Player.local can also be a **player instance** from server_
