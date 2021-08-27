# player.seat

**Description**

Get the player's seat if they are in a vehicle.
_Note: Driver seat starts at -1 on client-side._

**Syntax**

```js
readonly seat: number;
```

**Example Usage**

```js
const seat = player.seat;
if (seat === 1) {
    console.log('They are the driver');
    return;
}
```
