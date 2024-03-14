# playerDamage

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_playerDamage" target="_blank"> You can find information about the types here. (click to redirect) </a>

## Example

```js
import alt from "alt-server";

alt.on("playerDamage", (victim, attacker, healthDamage, armourDamage, weaponHash) => {
  let attackerName = attacker ? attacker.name : "Environment";
  
    console.log(`${victim.name} was damaged by ${attackerName} with weapon ${weaponHash}. Health damage: ${healthDamage}, Armour damage: ${armourDamage}`);
});
```
