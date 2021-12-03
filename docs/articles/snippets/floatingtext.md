# Floating text

This function shows a floating notification with a message. 
This function allows you displaying button inputs, see this [list](https://pastebin.com/HPg8pYwi)

**Client Side**

```js
alt.onServer('showFloatingText', floatingText);

export const floatingText = ({ text = "undefined", position = [0, 0, 0] }) => {
  native.beginTextCommandDisplayHelp("STRING");
  native.addTextComponentSubstringPlayerName(text);
  native.endTextCommandDisplayHelp(2, false, false, -1);
  native.setFloatingHelpTextWorldPosition(
    1,
    position[0],
    position[1],
    position[2]
  );
  native.setFloatingHelpTextStyle(1, 1, 2, -1, 3, 0);
};

```

## Example Usage

**Server Side**

```js
alt.on('playerConnect', player => {
    alt.emitClient(player, 'showFloatingText', {
    text: `Press ~INPUT_MOVE_UP_ONLY~ to show {Floating text}`,
    position: [0, 0, 0],
  });
});
```

**Client Side**

```js
alt.everyTick(() => {
  const { x, y, z } = player.pos;
  floatingText({
    text: `Press ~INPUT_MOVE_UP_ONLY~ to show {Floating text}`,
    position: [x, y, z + 1],
  });
});
```
