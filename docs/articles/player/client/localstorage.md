# Introduction to the LocalStorage

A General Overview

- The LocalStorage is as the name says **local/client-side only**.
- The LocalStorage is a persistent client cached storage.
- If the player deletes his cache folder the LocalStorage data will get lost!

| Function Name          | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| alt.LocalStorage.get   | Gets the local storage instance.                                    |
| LocalStorage.get       | Gets the value from the specified key in the local storage..        |
| LocalStorage.set       | Sets the specified key to the specified value in the local storage. |
| LocalStorage.delete    | Deletes the specified key from the local storage.                   |
| LocalStorage.deleteAll | Deletes all keys from the local storage.                            |
| LocalStorage.save      | Saves the changes to the disk.                                      |

## Set a key `.set(key: string, value: any)`

```js
import alt from "alt-client";

const storage = alt.LocalStorage.get(); // Gets the local storage instance.
storage.set("testKey", "test"); // Sets the specified key to the specified value in the local storage.
storage.save(); // Saves the changes to the disk.
```

## Get a key `.get(key: string)`

```js
import alt from 'alt-client';

const storage = alt.LocalStorage.get(); // Gets the local storage instance.
cosnt testKey = storage.get('testKey'); // Gets the value from the specified key in the local storage.
alt.log('testKey:', testKey)
```

## Delete a key `.delete(key: string)`

```js
import alt from "alt-client";

const storage = alt.LocalStorage.get(); // Gets the local storage instance.
storage.delete("testKey"); // Deletes the specified key from the local storage.
storage.save(); // Saves the changes to the disk.
```

## Delete all keys `.deleteAll()`

```js
import alt from "alt-client";

const storage = alt.LocalStorage.get(); // Gets the local storage instance.
storage.deleteAll(); // Deletes all keys from the local storage.
storage.save(); // Saves the changes to the disk.
```

Example use cases:

- Store dark / light mode preference
- Store player custom keybindings
- Store other small player configurations
- Store last walkingStyle
