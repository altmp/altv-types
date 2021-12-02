# beforePlayerConnect

## A General Overview

<a href="https://docs.altv.mp/js/api/alt-server.IServerEvent.html#_altmp_altv_types_alt_server_IServerEvent_beforePlayerConnect" target="_blank"> You can find information about the types here. (click to redirect) </a>

This event is where servers can kick users before the actual connection. For example, if the player is banned.

## Example

```js
import alt from "alt-server";

alt.on('beforePlayerConnect', (connectionInfo) => {
  alt.log(connectionInfo.branch); // prints out the branch
  alt.log(connectionInfo.authToken); // prints out the authToken
  alt.log(connectionInfo.build); // prints out the build number
  alt.log(connectionInfo.cdnUrl); // prints out the URL of the CDN
  alt.log(connectionInfo.hwidExHash); // prints out the ExHash of the client's HWID
  alt.log(connectionInfo.hwidHash); // prints out the Hash of the client's HWID
  alt.log(connectionInfo.isDebug); // prints out whether the client is in debug mode
  alt.log(connectionInfo.passwordHash); // prints out a hash of the password that was used to connect to the server
  alt.log(connectionInfo.socialID); // prints out the social ID of the client
  
  if(connectionInfo.passwordHash !== alt.hashServerPassword('myPassword')) {
    // kicks the player and shows the message "Incorrect password!" if the given password does not match 'myPassword'
    return "Incorrect password!"; 
  }
  
});
```
