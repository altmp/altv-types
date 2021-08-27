# alt.Player.local.pos

Get the player's position.

**Syntax**

```js
readonly pos: { x: number, y: number, z: number };
```

**Example Usage**

```js
const localPlayerPos = alt.Player.local.pos;
alt.log(JSON.stringify(localPlayerPos));
```

_alt.Player.local can also be a **player instance** from server_
