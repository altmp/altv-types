# beforePlayerConnect

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_beforePlayerConnect" target="_blank"> You can find information about the types here. (click to redirect) </a>

This event is where servers can kick users before the actual connection. For example, if the player is banned.

> [!WARNING]
> When you cancel the event you have to use the player.kick method. Otherwise, undefined behavior happens.

> [!WARNING]
> You can't compare passwordHash with anything yet. A function will come in the future to compare this.

## Example

```js
import alt from "alt-server";

alt.on('beforePlayerConnect', (player, passwordHash, cdnUrl) => {
  player.kick();
  return false; // if you want to cancel the connection process you have to return false.
});
```
