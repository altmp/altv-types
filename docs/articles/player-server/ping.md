# player.ping

**Description**

Get the player's current ping.

**Syntax**

```js
readonly ping: number;
```

**Example Usage**

```js
const ping = player.ping;
if (player.ping >= 200) {
    player.kick('Ping too high');
    return;
}
```
