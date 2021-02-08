# Player Server Functions

This page will act as a representation on using the various player functions.

These are meant to be used on server side.

## addWeaponComponent

Used to add a weapon component to a weapon based on its hash.

```js
// weaponHash, componentHash
player.addWeaponComponent(0xDFE37640, 0x5B3E7DB6)
```

## deleteMeta

Used to delete **server-side** meta that is cross-resource available.

```js
// Set the player's meta.
player.setMeta('cash', 500); // key, value

// Check if the meta exists.
if (player.hasMeta('cash')) { // key
    // Get the meta from the player.
	const currentCash = player.getMeta('cash'); // key

	// Delete the meta.
    player.deleteMeta('cash'); // <--- Usage
}
```

## deleteStreamSyncedMeta

Used to delete data stored on the player entity that is accessible on **server-side** and **client-side**.

This type of synced meta is only accessible by players in streaming range of this player.

```js
// Set the player's meta.
player.setStreamSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasStreamSyncedMeta('ping')) { // key
    // Get the meta from the player.
	const currentCash = player.getStreamSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteStreamSyncedMeta('ping'); // <--- Usage
}
```

## deleteSyncedMeta

Used to delete data stored on the player entity that is accessible on **server-side** and **client-side**.

This type of synced meta is accessible inside and **outside** streaming range.

```js
// Set the player's meta.
player.setSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasSyncedMeta('ping')) { // key
    // Get the meta from the player.
	const currentCash = player.getSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteSyncedMeta('ping'); // <--- Usage
}
```

## destroy

You should never use this. It won't do anything and may just crash your server. 

## getMeta

Used to get **server-side** meta that is cross-resource available.

```js
// Set the player's meta.
player.setMeta('cash', 500); // key, value

// Check if the meta exists.
if (player.hasMeta('cash')) { // key
    // Get the meta from the player.
	const currentCash = player.getMeta('cash'); // <--- Usage

	// Delete the meta.
    player.deleteMeta('cash'); // key
}
```

## getStreamSyncedMeta

Used to get data stored on the player entity that is accessible on **server-side** and **client-side**.

This type of synced meta is only accessible by players **inside** streaming range of this player.

```js
// Set the player's meta.
player.setStreamSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasStreamSyncedMeta('ping')) { // key
    // Get the meta from the player.
	const currentCash = player.getStreamSyncedMeta('ping'); // <--- Usage
    
	// Delete the meta.
    player.deleteStreamSyncedMeta('ping'); // key
}
```

## getSyncedMeta

Used to delete data stored on the player entity that is accessible on **server-side** and **client-side**.

This type of synced meta is accessible **inside** and outside streaming range.

```js
// Set the player's meta.
player.setSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasSyncedMeta('ping')) { // key
    // Get the meta from the player.
	const currentCash = player.getSyncedMeta('ping'); // <--- Usage
    
	// Delete the meta.
    player.deleteSyncedMeta('ping'); // key
}
```

## giveWeapon

Used to give the player a weapon based on hash or appropriate name.

```js
// weaponHash, ammoCount, equipThisWeaponNow?
player.giveWeapon(1141786504, 1, true); // Get a golf club.
```

## hasMeta

Used to check if **server-side** meta is available. This works cross-resource.

```js
// Set the player's meta.
player.setMeta('cash', 500); // key, value

// Check if the meta exists.
if (player.hasMeta('cash')) { // <---- Usage
    // Get the meta from the player.
	const currentCash = player.getMeta('cash'); // key

	// Delete the meta.
    player.deleteMeta('cash'); // key
}
```

## hasStreamSyncedMeta

Used to check if the data stored on the player entity is available. This is accessible on **server-side** and **client-side**.

This type of synced meta is only accessible by players in streaming range of this player.

```js
// Set the player's meta.
player.setStreamSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasStreamSyncedMeta('ping')) { // <--- Usage
    // Get the meta from the player.
	const currentCash = player.getStreamSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteStreamSyncedMeta('ping'); // key
}
```

## hasSyncedMeta

Used to check if the data stored on the player entity is available. This is accessible on **server-side** and **client-side**.

This type of synced meta is accessible **inside** and outside streaming range.

```js
// Set the player's meta.
player.setSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasSyncedMeta('ping')) {  // <--- Usage
    // Get the meta from the player.
	const currentCash = player.getSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteSyncedMeta('ping'); // key
}
```

## kick

Used to a kick a player from the server. The **reason** when supplied to a kick function does not currently show it to the player.

You may want to create a work-around that eventually disconnects the user after 5 seconds.

```js
alt.on('playerConnect', handleConnect);

// Listen for player connections.
function handleConnect(player) {
	player.kick('Bye'); // Kick them instantly.
    
	// Kick them eventually.
    alt.setTimeout(() => {
        console.log(`${player.name} will be kicked in 5 seconds.`);
    }, 5000); // 5 seconds.
}
```

## removeAllWeapons

Used to remove all weapons from the player.

```js
player.removeAllWeapons(); // Not much else to this.
```

## removeWeapon

Used to remove a weapon based on its weaponHash.

```js
player.removeWeapon(1141786504); // Remove a golf club.
```

## removeWeaponComponent

Used to remove a weapon component from a player's weapon.

```js
// weaponHash, componentHash
player.removeWeaponComponent(0xDFE37640, 0x5B3E7DB6)
```

## resetNetOwner

Restores default functionality of netOwner. Average developers will likely not be using this.

## setDateTime

Used to set the player's current time of day in-game. It is important to understand that time will still continue at whatever the player's current timescale is. 

It is recommended to freeze the time if you wish for it to stay a certain time.

This can be done with the native `native.pauseClock(true);` on **client-side**.

```js
const currentServerTime = new Date(Date.now());
// day, month, year, hour, minute, second
player.setDateTime(date.getDay(), date.getMonth(), date.getFullYear(), date.getHour(), date.getMinute(), date.getSecond())
```

## setMeta

Used to set **server-side** meta on the player. This works cross-resource.

```js
// Set the player's meta.
player.setMeta('cash', 500); // <--- Usage (key, value)

// Check if the meta exists.
if (player.hasMeta('cash')) { // key
    // Get the meta from the player.
	const currentCash = player.getMeta('cash'); // key

	// Delete the meta.
    player.deleteMeta('cash'); // key
}
```

## setNetOwner

Used to change this entities network owner. Average developers will likely not be using this.

## setStreamSyncedMeta

Used to set the data stored on the player entity. This is accessible on **server-side** and **client-side**.

This type of synced meta is only accessible by players in streaming range of this player.

```js
// Set the player's meta.
player.setStreamSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasStreamSyncedMeta('ping')) { // <--- Usage
    // Get the meta from the player.
	const currentCash = player.getStreamSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteStreamSyncedMeta('ping'); // key
}
```

## setSyncedMeta

Used to set data stored on the player entity that is accessible on **server-side** and **client-side**.

This type of synced meta is accessible **inside** and **outside** streaming range.

```js
// Set the player's meta.
player.setSyncedMeta('ping', player.ip); // key, value

// Check if the meta exists.
if (player.hasSyncedMeta('ping')) {  // <--- Usage
    // Get the meta from the player.
	const currentCash = player.getSyncedMeta('ping'); // key
    
	// Delete the meta.
    player.deleteSyncedMeta('ping'); // key
}
```

## setWeaponTintIndex

Used to set the weapon tint index of a weapon based on its hash.

```js
// weaponHash, componentHash
player.setWeaponTintIndex(0xDFE37640, 1)
```

## spawn

Used to respawn the player after they die based on a Vector3 position. The last parameter is used to delay the spawn.

```js
// x, y, z, delay
player.spawn(0, 0, 0, 0); // Spawn player under the map at 0,0,0
```


