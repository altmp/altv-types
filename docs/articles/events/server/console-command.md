# consoleCommand

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_consoleCommand" target="_blank"> You can find information about the types here. (click to redirect) </a>

## Example

```js
import alt from "alt-server";

alt.on("consoleCommand", (name, ...args) => {
  console.log(`Console command ${name} was executed with the following arguments: ${args.join(", ")}`);

  // example console command handle
  if (name === "hello") {
    console.log("Hello from consoleCommand event!");
    return;
  }

  console.error(`Unknown console command ${name}`);
});
```
