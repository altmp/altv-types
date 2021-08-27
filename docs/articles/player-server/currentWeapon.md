# player.currentWeapon

**Description**

Get the current weapon in the player's hand as a hash.

**Syntax**

```js
readonly currentWeapon: number;
```

**Example Usage**

```js
const currentWeapon = player.currentWeapon;

if (currentWeapon !== 0x958a4a8f) {
    // is not using a baseball bat
    return;
}

// is using a baseball bat
```
