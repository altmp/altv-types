# entityEnterColshape

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_entityEnterColshape" target="_blank"> You can find information about the types here. (click to redirect) </a>

Triggered when an entity enters a colshape.

## Example

```js
import alt from "alt-server";

let colshape = new alt.ColshapeSphere(new alt.Vector3(0, 0, 71), 5, 10);

alt.on("entityEnterColshape", (colshape, entity) => {
  if (entity.type instanceof alt.Player) {
    console.log(`Player ${entity.name} entered colshape ${colshape.id}`);
  }
});
```
