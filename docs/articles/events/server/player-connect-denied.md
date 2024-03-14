# playerConnectDenied

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_playerConnectDenied" target="_blank"> You can find information about the types here. (click to redirect) </a>

## Example

```js
import alt from "alt-server";

alt.on("playerConnectDenied", (reason, name, ip, passwordHash, isDebug, branch, version, cdnURL, discordId) => {
  console.log(`Player ${name} with IP ${ip} was denied to connect. Reason: ${reason}`);
});
```
