# Forward Vector for Server Side

## Description

Used to get a position in front of the player based on the direction they are facing. Can also be done with a vehicle.

## Snippet

```js
export function getForwardVectorServer(rot) {
    const z = -rot.z;
    const x = rot.x;
    const num = Math.abs(Math.cos(x));
    return {
        x: -Math.sin(z) * num,
        y: Math.cos(z) * num,
        z: Math.sin(x)
    };
}
```

## Example

```js
const fwd = getForwardVectorServer(player.rot);
const pos = {
        x: player.pos.x + fwd.x * 3,
        y: player.pos.y + fwd.y * 3,
        z: player.pos.z
    };
```