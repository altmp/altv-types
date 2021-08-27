# alt.Player.local.flashlightActive

Check if flashlight is active for this player.

**Syntax**

```js
readonly flashlightActive: boolean;
```

**Example Usage**

```js
const isActive = alt.Player.local.flashlightActive;

if (!isActive) {
    // I can't see anything captain!
    return;
}

// I can see everything captain!
```

_alt.Player.local can also be a **player instance** from server_
