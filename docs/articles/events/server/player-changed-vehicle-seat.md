# playerChangedVehicleSeat

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_playerChangedVehicleSeat" target="_blank"> You can find information about the types here. (click to redirect) </a>

## Example

```js
import alt from "alt-server";

alt.on("playerChangedVehicleSeat", (player, vehicle, oldSeat, seat) => {
  console.log(`${player.name} changed seat from ${oldSeat} to ${seat} in vehicle ${vehicle.id}`);
});
```
