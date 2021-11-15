# beforePlayerConnect

## A General Overview

https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_beforePlayerConnect

This event where servers can kick users before the actual connection. for example if the player is banned.

[!WARNING]
When you cancel event you have to use player.kick method. Otherwise undefined behavior happens.

## Example

```js
import alt from "alt-server";

alt.on('beforePlayerConnect', (player, passwordHash, cdnUrl) => {
  player.kick();
  return false; // if you want to cancel connection proccess you have to return false.
});
```
