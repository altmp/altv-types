# Help Text

Help text is the little box that appears in the upper left corner of your game.

You cannot change the position of this text.

**Client Side**

```js
alt.onServer('showHelpText', showHelpText);

export function showHelpText(text, sound, milliseconds) {
  native.beginTextCommandDisplayHelp("STRING");
  native.addTextComponentSubstringPlayerName(text);
  native.endTextCommandDisplayHelp(0, false, sound, milliseconds);
}
```

## Example Usage

**Server Side**

```js
alt.on('playerConnect', player => {
    alt.emitClient(player, 'showHelpText', 'Press ~INPUT_MOVE_UP_ONLY~ to move forward.', true, 5000);
});
```

**Client Side**

```js
showHelpText('Press ~INPUT_MOVE_UP_ONLY~ to move forward.', true, 5000);
```
