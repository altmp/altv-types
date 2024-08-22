# Math & Distance Utility Functions

```js
/**
 * Get the forward vector from rotation.
 * @param  {} rot
 * @returns {{x,y,z}}
 */
export function getForwardVector(rot) {
    const z = -rot.z;
    const x = rot.x;
    const num = Math.abs(Math.cos(x));
    return {
        x: -Math.sin(z) * num,
        y: Math.cos(z) * num,
        z: Math.sin(x)
    };
}

/**
 * Check if a position is between two vectors (2D).
 * @param  {} pos
 * @param  {} vector1
 * @param  {} vector2
 * @returns {boolean}
 */
export function isBetween(pos, vector1, vector2) {
    const validX = pos.x > vector1.x && pos.x < vector2.x;
    const validY = pos.y > vector1.y && pos.y < vector2.y;
    return validX && validY ? true : false;
}

/**
 * Get a random position around a position.
 * @param  {} position
 * @param  {} range
 * @returns {{x,y,z}}
 */
export function randomPositionAround(position, range) {
    return {
        x: position.x + Math.random() * (range * 2) - range,
        y: position.y + Math.random() * (range * 2) - range,
        z: position.z
    };
}

/**
 * Get the closest vector from a group of vectors.
 * @param  {alt.Vector3} pos
 * @param  {Array<{x,y,z}> | Array<{pos:alt.Vector3}} arrayOfPositions
 * @returns {Array<any>}
 */
export function getClosestVectorFromGroup(pos, arrayOfPositions) {
    arrayOfPositions.sort((a, b) => {
        if (a.pos && b.pos) {
            return distance(pos, a.pos) - distance(pos, b.pos);
        }

        return distance(pos, a) - distance(pos, b);
    });

    return arrayOfPositions[0];
}
```

## Example Usage

```js
import alt from "alt-server";

const pos1 = new alt.Vector3(5, 2, 0);
const pos2 = new alt.Vector3(1, 1, 0);

const dist = pos1.distanceTo(pos2);

// Closest pos to 0, 0, 0
const closest = getClosestVectorFromGroup(alt.Vector3.zero, [pos1, pos2]);
```
