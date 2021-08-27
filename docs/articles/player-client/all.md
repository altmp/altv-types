# alt.Player.all

Gets the players who are currently on the server.

The properties available on individual players varies based on server-side or client-side.

Which means `ping` is not available on client-side but it is available on server-side.

The position of the player on client-side may only be obtained when a player is within streaming range of your local player. This is an important concept to understand.

**Syntax**

```js
readonly all: Array<Player>;
```

**Example Usage**

```js
const playerList = alt.Player.all;
playerList.forEach((player) => {
    alt.log(player.name);
});
```
