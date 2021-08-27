# alt.Player.local.name

Get the player's current name. It cannot be changed.
This is the name that the player defines.

**Syntax**

```js
readonly name: string;
```

**Example Usage**

```js
const currentName = alt.Player.local.name;
alt.log(`This player's name is ${currentName}`);
```

_alt.Player.local can also be a **player instance** from server_
