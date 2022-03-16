# Your first resource

This article will explain how to create your first resource.

## General server structure

We'll go on by explaining the general server structure and how to add a resource. 
```
server/
├── cache/
├── data/
├── modules/
├── resources/
    ├── chat/
    ├── freeroam/
    ├── voice-chat/
    ├── example/
├── altv-server.exe
├── libnode.dll
├── server.cfg
```

Let's create an example resource.

```
This is the name of your resource:
example/

Here go the Client-side Files:
example/client/

Here go the Server-side Files:
example/server/

Here go the configuration & information:
example/resource.cfg
```

## Configuring the `resource.cfg`

When you create a resource.cfg, it should look like something similar to this:
```yaml
type: js,
main: server/server.js,
client-main: client/client.js,
client-files: [
    client/*
],
deps: [ 
    chat
]
```

**deps** Allows you to require other resources, if they aren't found your resource will fail to load!

You can access exported functions & more by adding the following in your code: 
```js
import * as chat from 'chat';
```

**main** is the main server file.

**client-main** is the first file loaded on Client-side for a player.

**client-files** can usually just contain client/* which will load **ALL** files.

## Creating serverside code - `server.js`

Creating Server-side Code - server.js
We're going to add **chat** as a dependency to our resource.
Then we're going to import 'alt' and 'chat'. 

```js
import * as alt from 'alt-server';
import * as chat from 'chat';

console.log('==> Your Resource Has Loaded! Horray!');

// Called on Server-side
alt.on('playerConnect', (player) => {
    // Logs to the console.
    alt.log(`==> ${player.name} has connected.`);

    // Displays message to all players.
    chat.broadcast(`==> ${player.name} has joined.`);

    // Sets the player's model.
    player.model = 'mp_m_freemode_01';

    // Spawns the player at coordinates x, y, z, with a delay of 1000 Milliseconds.
    player.spawn(813, -279, 66, 1000);

    // Emit to the player passed, the event name, the argument to send.
    alt.emitClient(player, 'Server:Log', 'hello', 'world');
});
```
**Congrats you've written your first serverside code!**<br>
That logs to the console<br>
Broadcasts to the chat on player join<br>
Forces the player to have the freeroam model and spawns them<br>
Emits an event to clientside

See the clientside section down below to see how to intercept the event on clientside.

## Creating clientside code - `client.js`

We're going to import two essential alt:V dependencies: **natives** and **alt**
```js
import * as alt from 'alt-client';
import * as native from 'natives';

alt.log('Client-side has loaded!');

alt.onServer('Server:Log', (msg1, msg2) => {
    alt.log(`Message From Server: ${msg1}`);
    alt.log(`Message From Server: ${msg2}`);
});
```

## Final Words

First of all - Congrats you've written your first clientside code that logs to the 'F8' console => Open the console to see it.
Followed by setting up a whole server with basic fundamentals!

## Word of advice

Keep in mind that...
- alt:V uses ES6 modules
- the server does not automatically update
