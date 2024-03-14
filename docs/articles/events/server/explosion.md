# explosion

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_explosion" target="_blank"> You can find information about the types here. (click to redirect) </a>

Triggered when an explosion occurs by players. Behavior can be cancelled by returning `false`.

## Example

```js
import alt from "alt-server";

function canPlayerCreateExplosion(player) {
  // Your logic here
  
  return true;
}

alt.on("explosion", (source, type, pos, fx, target) => {
  return canPlayerCreateExplosion(source, type, pos, fx, target);
});
```
