# Introduction to the LocalStorage

## A General Overview

- The LocalStorage is as the name says **local/client-side only**.
- The LocalStorage is a persistent client cached storage.
- If the player deletes his cache folder the LocalStorage data will get lost!

**Never use the LocalStorage for sensitive data. Someone could always inject code that reads LocalStorage values!**

| Function Name          | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| alt.LocalStorage.get       | Gets the value from the specified key in the local storage..        |
| alt.LocalStorage.set       | Sets the specified key to the specified value in the local storage. |
| alt.LocalStorage.delete    | Deletes the specified key from the local storage.                   |
| alt.LocalStorage.deleteAll | Deletes all keys from the local storage.                            |
| alt.LocalStorage.save      | Saves the changes to the disk.                                      |

## Set a key `.set(key: string, value: any)`

```js
import * as alt from "alt-client";

alt.LocalStorage.set("testKey", "test"); // Sets the specified key to the specified value in the local storage.
alt.LocalStorage.save(); // Saves the changes to the disk.
```

## Get a key `.get(key: string)`

```js
import * as alt from "alt-client";

const testKey = alt.LocalStorage.get('testKey'); // Gets the value from the specified key in the local storage.
alt.log('testKey:', testKey)
```

## Delete a key `.delete(key: string)`

```js
import * as alt from "alt-client";

alt.LocalStorage.delete("testKey"); // Deletes the specified key from the local storage.
alt.LocalStorage.save(); // Saves the changes to the disk.
```

## Delete all keys `.deleteAll()`

```js
import * as alt from "alt-client";

alt.LocalStorage.deleteAll(); // Deletes all keys from the local storage.
alt.LocalStorage.save(); // Saves the changes to the disk.
```

## Example use cases:

- Store dark / light mode preference
- Store player custom keybindings
- Store other small player configurations
- Store last walkingStyle
