# player.vehicle

**Description**

Get the player's current vehicle.

**Syntax**

```js
readonly vehicle: Vehicle | null;
```

**Example Usage**

```js
const vehicle = player.vehicle;

if (!vehicle) {
    console.log('THEY ARE NOT IN A VEHICLE');
    return;
}
```
