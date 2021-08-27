# player.netOwner

**Description**

Network owner is responsible for syncing entity with the server. It changes when actual network owner passes the migration range, then the new one is determined based on distance from the entity (if entity is a vehicle, then the driver will take priority for becoming network owner). Disabling migration range will stop this process from happening until turned on again.

**Syntax**

```js
readonly netOwner: Player | null;
```

**Example Usage**

```js
const somePlayerOrNull = player.netOwner;
```
