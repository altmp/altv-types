# Markers

Markers are those slightly transparent objects in the 3D world that you can walk or drive through.

**Client Side**

```js
import * as alt from 'alt-client';

// Creates marker at local player pos with default options
const defaultMarker = new alt.Utils.Marker(alt.Player.local.pos);

// Creates default marker at 0, 0, 72 with red color
const redMarker = new alt.Utils.Marker(new alt.Vector3(0, 0, 72), { color: alt.RGBA.red });

// Later you can change the color, scale, etc.
redMarker.scale = new alt.Vector3(3.0); // Makes marker bigger
```
