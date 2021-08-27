# Create Spotlight

## Description

Points a light at the player to give more light on the player in darker areas when necessary for things like customization. This is for client-side.

## Snippet

```js
function renderLighting() {
    const pos = { ...alt.Player.local.pos };
    const forward = native.getEntityForwardVector(alt.Player.local.scriptID);
    const forwardVector = {
        x: pos.x + forward.x * 5,
        y: pos.y + forward.y * 5,
        z: pos.z
    };

    native.drawSpotLight(
        forwardVector.x,
        forwardVector.y,
        forwardVector.z,
        forward.x * -1,
        forward.y * -1,
        forward.z,
        255,
        255,
        255,
        25,
        8,
        2,
        15,
        0
    );
}
```

## Example

```js
alt.everyTick(renderLighting);
```