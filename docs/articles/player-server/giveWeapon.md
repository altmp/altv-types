# player.giveWeapon

**Description**

Used to give a player a weapon based on a hash.

[Check out the Weapon Table](../articles/tables/weapons.md)

**Syntax**

```js
giveWeapon(weaponHash: number, ammo: number, equipNow: boolean): void;
```

**Example Usage**

```js
// Combat shotgun.
// 9999 Ammo
// Equip immediately
player.giveWeapon(0x5a96ba4, 9999, true);
```
