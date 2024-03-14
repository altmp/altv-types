# entityLeaveColshape

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_entityLeaveColshape" target="_blank"> You can find information about the types here. (click to redirect) </a>

Triggered when an entity enters a colshape.

## Example

```js
import alt from "alt-server";

let colshape = new alt.ColshapeSphere(new alt.Vector3(0, 0, 71), 5, 10);

alt.on("entityLeaveColshape", (colshape, entity) => {
  if (entity instanceof alt.Player) {
    console.log(`Player ${entity.name} left colshape ${colshape.id}`);
  }
});
```
