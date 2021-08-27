# alt.Player.local.isInRagdoll

Get if the player is currently in Ragdoll Mode.

**Syntax**

```js
readonly isInRagdoll: boolean;
```

**Example Usage**

```js
// Are they aiming?
if (alt.Player.local.isInRagdoll) {
    alt.log('You are ragdolling!');
}
```

_alt.Player.local can also be a **player instance** from server_
