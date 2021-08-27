# alt.Player.local.valid

Get the validity of the player entity. Checks if they are still a valid entity.
Useful when you use timeouts and then the player logs out.

**Syntax**

```js
readonly valid: boolean;
```

**Example Usage**

```js
alt.setTimeout(() => {
    // No longer valid. Discarding timeout.
    if (!player.valid) {
        return;
    }

    if (!alt.Player.local.valid) {
        return;
    }

    // Do some stuff later.
}, 5000);
```

_alt.Player.local can also be a **player instance** from server_
