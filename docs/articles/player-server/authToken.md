# player.authToken

**Description**

Used in tandem with [earlyAuth](https://wiki.altv.mp/wiki/Tutorial:Setup_EarlyAuth)

**Syntax**

```js
readonly authToken: string;
```

**Example Usage**

```js
const uniqueToken = player.authToken;
if (uniqueToken !== 'blahBlahBlah') {
    player.kick('bad token');
    return;
}
```
