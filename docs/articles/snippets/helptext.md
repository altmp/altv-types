# Help Text

Help text is the little box that appears in the upper left corner of your game.

You cannot change the position of this text.

**Client Side**

```js
alt.onServer('showHelpText', showHelpText);

export function showHelpText(text, milliseconds) {
    native.beginTextCommandDisplayHelp('STRING');
    native.addTextComponentScaleform(text);
    native.endTextCommandDisplayHelp(0, 0, 0, milliseconds);
}
```

## Example Usage

**Server Side**

```js
alt.on('playerConnect', player => {
    alt.emitClient(player, 'showHelpText', 'Press ~INPUT_MOVE_UP_ONLY~ to move forward.', 5000);
});
```

**Client Side**

```js
showHelpText('Press ~INPUT_MOVE_UP_ONLY~ to move forward.', 5000);
```