# Player Properties

This page will act as a representation on using the various player properties.

These are meant to be used on server side.

## player.armour

Used to **set or get** the player's current armour level.

```js
const currentArmour = player.armour;
player.armour = 5;
player.armour += 10;
player.armour -= 10;
```

## player.authToken

Used to **get** an authToken provided during early auth implementations. Most users will not be utilizing this.

```js
alt.on('playerConnect', handleConnect);

function handleConnect(player) {
    if (!player.authToken) {
        player.kick(`No Auth Token Found`);
        return;
    }

    alt.log(`${player.name}'s authToken is ${authToken}`);
}
```

## player.currentWeapon

Used to **set or get** the player's current weapon hash.

```js
player.currentWeapon = alt.hash('weapon_pistol'); // 0x1B06D571

if (player.currentWeapon === 0x1b06d571) {
    console.log(`Player has a pistol equipped.`);
}
```

If you want to handle all weapon checking server-side in plain English rather than hashes. You should try using a prototype to set and give a player a weapon.

```js
alt.Player.prototype.setWeapon = function(weaponName) {
    this.currentWeapon = alt.hash(weaponName);
    this.currentWeaponName = weaponName;
};
```

## player.currentWeaponComponents

Used to **get** all weapon components that are currently on a player's currently equipped weapon. All weapon components are hashed.

```js
const currentWeaponComponents = player.currentWeaponComponents;

for (let i = 0; i < currentWeaponComponents.length; i++) {
    const weaponComponentHash = currentWeaponComponents[i];
}
```

## player.currentWeaponTintIndex

Used to **get** the currently equipped weapon's tint index.

```js
const currentTint = player.currentWeaponTintIndex;
```

## player.dimension

Used to **get** or **set** the player's current dimension. Dimensions are based on INT32. Which means there is a minimum and maximum value for a dimension. From `-2147483648` to `2147483648`.

A description for dimensions written by Heron is as follows.

```
X can see only X
-X can see 0 and -X
0 can't see -X and X
```

The default dimension is **0**.

```js
const currentDimension = player.dimension;
player.dimension = 1;

// If you need a unique instance per player join. This is a decent way to handle it.
// Just remember to set it back to zero after you do whatever you need to do in a unique dimension.
player.dimension = player.id;
```

## player.entityAimOffset

Used to **get** the player's current aim offset. There is currently not existing use case for this specific function.

At the time of writing this document we're not even sure if it's functioning.

## player.entityAimingAt

Used to **get** the player's current entity they are aiming at. The current sentiment is that this specific property does not work.

At the time of writing this document we're not even sure if it's functioning.

## player.flashlightActive

Used to **get** the player's flashlight activity?

At the time of writing this document we're not even sure if it's functioning.

## player.health

Used to **get or set** the player's current health.

Health in GTA:V is based on the values `100 - 200`.

200 is the player's maximum health.

< 100 means the player is dead.

```js
const currentHealth = player.health;
player.health += 10;

if (player.health > 200) {
    player.health = 200;
}

// Kill the player.
player.health = 0;
```

## player.hwidExHash

This is one of two ways to get a unique hardware hash that belongs to the player.

This is a great way to ban a player; especially when they'll need a whole new set of hardware to get past your ban.

Nobody currently knows the way this hardware information is determined.

```js
const currentHwidEx = player.hwidExHash;
```

## player.hwidHash

This is one of two ways to get a unique hardware hash that belongs to the player.

This is a great way to ban a player; especially when they'll need a whole new set of hardware to get past your ban.

Nobody currently knows the way this hardware information is determined.

```js
const currentHwid = player.hwidHash;
```

## player.id

Used to **get** the player's current id. These are strictly unique to the join order of a player.

ID's may be used up to the value `65535`. After reaching 65,535 the id is recycled to a new joiner.

```js
alt.on('playerConnect', handleConnect);

function handleConnect(player) {
    alt.log(`${player.name} has joined with the ID of ${player.id}`);
}
```

## player.ip

In most cases this is an IP that is converted from IPv4 to IPv6.

An example of what a local host IP looks like: `::ffff:127.0.0.1`

```js
alt.on('playerConnect', handleConnect);

function handleConnect(player) {
    if (player.ip === `::ffff:127.0.0.1`) {
        alt.log(`${player.name} has joined from local host.`);
    }
}
```

## player.maxArmour

Used to **set or get** the player's current maximum armour. The maximum value this can be set to is `65535`.

After setting this you can set the player's current armour to the maximum armour value.

```js
const currentMaxArmour = player.maxArmour;
if (currentMaxArmour <= 100) {
    player.maxArmour = 65535;
    player.armour = 65535;
}

alt.log(`${player.name} is a chunker.`);
```

## player.maxHealth

Used to **set or get** the player's current maximum health. The maximum value this can be set to is 65535.

After setting this you can set the player's current health to the maximum health value.

```js
const currentMaxHealth = player.maxHealth;
if (currentMaxHealth <= 100) {
    player.maxHealth = 65535;
    player.health = 65535;
}

alt.log(`${player.name} is a healthy chunker.`);
```

## player.model

Used to set **set or get** the player's current model.

You may pass a string value here.

No model is set automatically and should be set when the player is connected or authenticated.

```js
alt.on('playerConnect', handleConnect);

function handleConnect(player) {
    player.model = 'mp_m_freemode_01';
}
```

## player.name

Used to **get** the player's current name. This is set by the player in their options.

```js
alt.on('playerConnect', handleConnect);

function handleConnect(player) {
    if (player.name.toLowerCase() === 'stuyk') {
        player.kick(`Stupid name.`);
    }
}
```

## player.netOwner

Used to **get** the current network owner responsible for syncing an entity with the server. Inherited from entity.

This is not necessarily a useful property for the average developer.

```js
const currentOwner = player.netOwner;

if (!currentOwner) {
    console.log(`Looks like nobody owns this entity.`);
}
```

## player.ping

Used to **get** the player's current ping.

Below is a snippet to make player ping accessible by all players.

```js
alt.setInterval(handlePingUpdate, 5000);

function handlePingUpdate() {
    const currentPlayers = [...alt.Player.all];

    for (let i = 0; i < currentPlayers.length; i++) {
        const player = currentPlayers[i];
        if (!player || !player.valid) {
            continue;
        }

        player.setSyncedMeta('ping', player.ping);
    }
}
```

## player.pos

Used to **get** or **set** the player's current position.

When getting the player's current position you should use a spread operator to make it modifiable.

```js
const currentPos = { ...player.pos };
currentPos.x += 1;

// Teleport them under the map.
player.pos = {
    x: 0,
    y: 0,
    z: 0
};

// Create a Vector3 with the alt function.
player.pos = new alt.Vector3(0, 0, 0);
```

## player.rot

Used to **get or set** the player's current rotation. However, **setting rotation is broken on server-side**.

```js
const currentRot = { ...player.rot };
```

## player.seat

Used to **get** the current seat that the player is in.

```js
if (player.vehicle && player.seat === -1) {
    alt.log(`Player is in the driver's seat.`); // Front Left
}

if (player.vehicle && player.seat === 0) {
    alt.log(`Player is riding shotgun.`); // Passenger. Right side.
}

if (player.vehicle && player.seat === 1) {
    alt.log(`Player is behind the driver's seat.`); // Back Left
}

if (player.vehicle && player.seat === 2) {
    alt.log(`Player is behind the player riding shotgun.`); // Back Right
}
```

## player.socialId

Used to **get** a non-safe version of a player's current social club identification that is linked to their Rockstar account.

Keep in mind that this value **IS NOT SAFE** do not use it for authentication. **IT CAN BE SPOOFED**.

```js
const social = player.socialId;
```

## player.valid

Used to **get** if a player entity is still valid. This is useful when using timeouts, intervals, and handling disconnect events.

A player that invalid means that it can longer receive data from the server.

```js
alt.on('playerDisconnect', handleDisconnect);

function handleDisconnect(player, reason) {
    if (!player || !player.valid) {
        console.log(`Looks like this player is already invalid. Can't save anything.`);
        return;
    }

    console.log(`${player.name} has disconnected.`);
}
```

## player.vehicle

Used to **get** the current vehicle that the player is inside. Returns **null** or **undefined** if the player is **NOT** in a vehicle.

```js
if (player.vehicle) {
    console.log(`Player is in a vehicle. Let's change its color!`);
    player.vehicle.setPrimaryColor = {
        r: 255,
        g: 0,
        b: 0,
        a: 255
    };
}

if (!player.vehicle) {
    console.log(`Player is not in a vehicle.`);
}
```