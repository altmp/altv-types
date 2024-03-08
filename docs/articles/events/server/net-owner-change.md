# netOwnerChange

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_netOwnerChange" target="_blank"> You can find information about the types here. (click to redirect) </a>

Triggered when netOwner of the entity changes.

## Example

```js
import alt from "alt-server";

alt.on("netOwnerChange", (entity, owner, oldOwner) => {
  if (entity.type === alt.BaseObjectType.Ped) {
    alt.log(`Ped ${entity.id} has a new owner: ${owner ? owner.id : "null"}, old owner: ${oldOwner ? oldOwner.id : "null"}`);
  }
});
```
