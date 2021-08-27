# alt.once

Subscribes to server event with specified listener, which only triggers once.

**Example Usage**

```js
alt.once('playerDamage', (victim, attacker, damage, weaponHash) => {
    alt.log(`${victim.name} was damaged`);
}
```
