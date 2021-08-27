# Create Markers

Markers are those slightly transparent objects that you see in a lot of GTA:V Gamemodes. They must be drawn on the `client-side` and they must use a `alt.setInterval` or an `alt.everyTick`.

![](https://i.imgur.com/fiMWPhp.png)

## Example

```js
/*
    Example Interface for markers
    {
        type, 
        pos, 
        dir,
        rot, 
        scale, 
        r, 
        g, 
        b, 
        alpha
    }
*/

export function drawMarker(markerData) {
    native.drawMarker(
        markerData.type,
        markerData.pos.x,
        markerData.pos.y,
        markerData.pos.z,
        markerData.dir.x,
        markerData.dir.y,
        markerData.dir.z,
        markerData.rot.x,
        markerData.rot.y,
        markerData.rot.z,
        markerData.scale.x,
        markerData.scale.y,
        markerData.scale.z,
        markerData.r,
        markerData.g,
        markerData.b,
        markerData.alpha,
        false,
        true,
        2,
        false,
        undefined,
        undefined,
        false
    );
}
```

## Example Usage

Remember this must be done on `client-side`. It is important that you use a distance formula to limit the drawing range of a marker. That can be done by checking the distance between the player and the marker itself and then deciding whether to draw it or not.

```js
import * as alt from 'alt-client';
import * as native from 'natives';

alt.setInterval(() => {
    drawMarker({
        type: 1,
        pos: new alt.Vector3(25, 2, 1),
        dir: new alt.Vector3(0, 0, 0),
        rot: new alt.Vector3(0, 0, 0),
        scale: new alt.Vector3(1, 1, 1),
        r: 255,
        g: 0,
        b: 0,
        alpha: 100,
    });
}, 0);
```
