# Radians and Degrees

## Description

Grand Theft Auto V works with 2 different types of angles, radians and degrees. alt:V uses radians because it writes directly into the RAGE game engine. Whereas natives will **only** work with degrees.

## Converting Angles

```js
// Convert Degrees to Radians
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

// Convert Radians to Degrees
function radToDeg(radians) {
    return (radians * 180) / Math.PI;
}
```

## Example

```js
import * as alt from 'alt-client';
import * as native from 'natives';

// We are using a native here, so we use degrees
native.setEntityRotation(alt.Player.local.scriptID, 0, 0, 90, 1, true);
```
