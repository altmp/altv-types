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
├── server.toml
```

Before creating an example resource we need to create package.json in the root with the following content so we can use ES6 modules on serverside.
```json
{
    "type": "module"
}
```

So in the end our server folder structure should look like this:
```
server/
...
├── altv-server.exe
├── libnode.dll
├── server.toml
├── package.json // <--------- here
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
example/resource.toml
```

## Configuring the `resource.toml`

When you create a resource.toml, it should look like something similar to this:
```toml
type = "js"
main = "server/server.js"
client-main = "client/client.js"
client-files = [
    "client/*"
]
deps = [ 
    "chat"
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
// alt:V built-in module that provides server-side API.
import * as alt from 'alt-server';
// Your chat resource module.
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

    // Spawns the player at coordinates x, y, z.
    player.spawn(813, -279, 66);

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
// alt:V built-in module that provides client-side API.
import * as alt from 'alt-client';
// alt:V built-in module that provides natives API (functions from GTA V).
import * as native from 'natives';

alt.log('Client-side has loaded!');

alt.onServer('Server:Log', (msg1, msg2) => {
    alt.log(`Message From Server: ${msg1}`);
    alt.log(`Message From Server: ${msg2}`);
});
```

## Usage with typescript

To utilize all the advantages of typescript 2 steps are necessary:
1) Setup `package.json`
2) Installing the types
3) Create a tsconfig file

### Setup package.json

If your resource does not already have a `package.json`, open a terminal in your resources folder and execute the following commands, depending on your preferred package manager:
```
# For usage with npm
npm init
# For usage with yarn
yarn init
```

After following the next wizard, open the package.json with a text editor and add the following entry:

```not_json
{
    # Here are the values you provided in the assistent
    "name": "altv-client",
    ...
    # Add this line on the bottom
    "type": module
}
```

### Installing the types

| Type                 | Required for    |
|----------------------|-----------------|
| @altv/types-shared   | Client & Server |
| @altv/types-client   | Client          |
| @altv/types-natives  | Client          |
| @altv/types-webview  | Client          |
| @altv/types-server   | Server          |

Depending on the required types, these must now be installed. If the project contains scripts for server & client, all types can be installed as well:

```yaml
# Client only
# For usage with npm
npm i -D @altv/types-shared @altv/types-client @altv/types-natives @altv/types-webview
# For usage with yarn
yarn add -D @altv/types-shared @altv/types-client @altv/types-natives @altv/types-webview

# Server only
# For usage with npm
npm i -D @altv/types-shared @altv/types-server
# For usage with yarn
yarn add -D @altv/types-shared @altv/types-server

# Combined
# For usage with npm
npm i -D @altv/types-shared @altv/types-client @altv/types-natives @altv/types-webview @altv/types-shared @altv/types-server
# For usage with yarn
yarn add -D @altv/types-shared @altv/types-client @altv/types-natives @altv/types-webview @altv/types-shared @altv/types-server
```

### Create a tsconfig file

Now create a new file in your resource folder and name it `tsconfig.json` and open it with your favorite text editor.

Insert the following content and adjust it if necessary.
Some options are not discussed here, because they are not directly related to alt:V and are already described in detail
in the [typescript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```yaml
{
  "compilerOptions": {
    "lib": [ "es5", "es6", "esnext" ],
    "module": "esnext",
    "moduleResolution": "node",
    "target": "esnext",

    "resolveJsonModule": true,
    "esModuleInterop": true,
    "removeComments": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "preserveConstEnums": true,

    "noImplicitAny": true,
    "sourceMap": false,

    // If you have subfolder where all your ts files are located you can add the following line to specify the root folder 
    "rootDir": "./Source/",
    // Here you can set the output folder where the javascript files will be generated
    "outDir": "./Dist/",

    // Here you specify the TypeScript (IDE) where the alt:V types are located
    "typeRoots": ["./node_modules/@altv"]
  },
  "compileOnSave": true,
  "include": [
    "./**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## Final Words

First of all - Congrats you've written your first clientside code that logs to the 'F8' console => Open the console to see it.
Followed by setting up a whole server with basic fundamentals!

## Word of advice

Keep in mind that...
- alt:V uses ES6 modules
- the server does not automatically update, you can use something like [altv-pkg](https://github.com/altmp/altv-pkg) to easily update server files
