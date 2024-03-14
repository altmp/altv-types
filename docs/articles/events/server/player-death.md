# playerDamage

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_playerDeath" target="_blank"> You can find information about the types here. (click to redirect) </a>

## Example

```js
import alt from "alt-server";

alt.on("playerDeath", (victim: Player, killer, weaponHash) => {
  let killerName = killer ? killer.name : "Environment";

  console.log(`${victim.name} was killed by ${killerName} with weapon ${weaponHash}`);
});
```
