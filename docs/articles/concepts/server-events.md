# Server Events

This contains all of the server events that are available through the `alt.on` function.

- [Server Events](#server-events)
  - [**anyResourceError**](#anyresourceerror)
  - [**anyResourceStart**](#anyresourcestart)
  - [**anyResourceStop**](#anyresourcestop)
  - [**consoleCommand**](#consolecommand)
  - [**entityEnterColshape**](#entityentercolshape)
  - [**entityLeaveColshape**](#entityleavecolshape)
  - [**explosion**](#explosion)
  - [**netOwnerChange**](#netownerchange)
  - [**playerChangedVehicleSeat**](#playerchangedvehicleseat)
  - [**playerConnect**](#playerconnect)
  - [**playerDamage**](#playerdamage)
  - [**playerDeath**](#playerdeath)
  - [**playerDisconnect**](#playerdisconnect)
  - [**playerEnteredVehicle**](#playerenteredvehicle)
  - [**playerEnteringVehicle**](#playerenteringvehicle)
  - [**playerLeftVehicle**](#playerleftvehicle)
  - [**removeEntity**](#removeentity)
  - [**resourceStart**](#resourcestart)
  - [**resourceStop**](#resourcestop)
  - [**syncedMetaChange**](#syncedmetachange)
  - [**streamSyncedMetaChange**](#streamsyncedmetachange)
  - [**globalMetaChange**](#globalmetachange)
  - [**globalSyncedMetaChange**](#globalsyncedmetachange)
  - [**vehicleAttach**](#vehicleattach)
  - [**vehicleDestroy**](#vehicledestroy)
  - [**vehicleDetach**](#vehicledetach)
  - [**weaponDamage**](#weapondamage)
  - [**startFire**](#startfire)
  - [**startProjectile**](#startprojectile)
  - [**playerWeaponChange**](#playerweaponchange)

## **anyResourceError**

Fires when a resource fails to start on server-side.

**Syntax**

```js
anyResourceError: (resourceName: string) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('anyResourceError', (resourceName) => {
    console.error(`Failed to start ${resourceName}`);
});
```

## **anyResourceStart**

Fires when any resource has started.

**Syntax**

```js
anyResourceStart: (resourceName: string) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('anyResourceStart', (resourceName) => {
    console.log(`Started ${resourceName}`);
});
```

## **anyResourceStop**

Fires when any resource has stopped.

**Syntax**

```js
anyResourceStop: (resourceName: string) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('anyResourceStop', (resourceName) => {
    console.log(`Stopped ${resourceName}`);
});
```

## **consoleCommand**

Fires when a command is typed into a running server's console. A command can be any type of text.

**Syntax**

```js
consoleCommand: (...args: string[]) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('consoleCommand', handleConsoleMessage);

const commands = {
    '/kick': doKickCommand,
};

function handleConsoleCommand(...args) {
    const cmdName = rgs[0].toLowerCase();

    if (!commands[cmdName]) {
        console.error(`${cmdName} is not a valid command.`);
        return;
    }

    commands[cmdName](...args);
}

function doKickCommand(cmdName: string, id: string) {
    if (!id) {
        return;
    }

    const target = alt.Player.all.find((player) => player.id.toString() === id);
    if (!target) {
        console.error(`Could not find ID: ${id}`);
        return;
    }

    target.kick('Bye');
}
```

## **entityEnterColshape**

Fires when an entity enters a ColShape. A ColShape being an invisible barrier or checkpoint.

**Syntax**

```js
entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
```

**Example**

```js
import * as alt from 'alt-server';

const shape = new alt.ColshapeCylinder(0, 0, 0, 3, 9999); /// 9999 is height.
shape.playersOnly = true;

// Entity can be a player or a vehicle.
// However, you can get a vehicle from a player.
alt.on('entityEnterColshape', (colshape, player) => {
    console.log(`A player has entered a colshape`);
});
```

## **entityLeaveColshape**

Fires when an entity leaves a ColShape. A ColShape being an invisible barrier or checkpoint.

**Syntax**

```js
entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
```

**Example**

```js
import * as alt from 'alt-server';

const shape = new alt.ColshapeCylinder(0, 0, 0, 3, 9999); /// 9999 is height.
shape.playersOnly = true;

// Entity can be a player or a vehicle.
// However, you can get a vehicle from a player.
alt.on('entityLeaveColshape', (colshape, player) => {
    console.log(`A player has left a colshape`);
});
```

## **explosion**

Fires when an explosion is created by a player on the server. You can prevent explosions by `returning false` in the event handler. Explosion types can be determined by using `ExplosionType` to get the enum. First element starts at `0` and increases.

**Syntax**

```js
explosion: (source: Player, type: ExplosionType, pos: Vector3, fx: number, target: Entity) => boolean | void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('explosion', (source, type, pos, fx, target) => {
    // Prevents Grenades
    if (source === 0) {
        return false;
    }
});
```

## **netOwnerChange**

Fires when the network ownership of an entity has been changed. This is useful for things like pushing vehicles or attaching a vehicle to another vehicle.

**Syntax**

```js
netOwnerChange: (entity: Entity, owner: Player, oldOwner: player) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('netOwnerChange', (entity, owner, oldOwner) => {
    if (!(entity instanceof alt.Vehicle)) {
        return;
    }

    console.log('A vehicle had ownership changed');
});
```

## **playerChangedVehicleSeat**

Triggers when a player changes vehicle seats. Driver seat is `1`. Passenger is `2` and so on and so forth.

**Syntax**

```js
playerChangedVehicleSeat: (player: Player, vehicle: Vehicle, oldSeat: number, newSeat: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerChangedVehicleSeat', (player, vehicle, oldSeat, newSeat) => {
    if (newSeat === 1) {
        console.log(`${player.name} is the driver now.`);
    }
});
```

## **playerConnect**

Triggers when a player connects to the server.

**Syntax**

```js
playerConnect: (player: Player) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    if (player.ping >= 200) {
        player.kick('Ping too high');
        return;
    }

    // x, y, z, delay in ms
    player.spawn(0, 0, 0, 2500);
    player.model = 'mp_m_freemode_01';
});
```

## **playerDamage**

Triggers when a player takes damage or gives damage.

**Syntax**

```js
playerDamage: (victim: Player, attacker: Entity, damage: number, weaponHash: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerDamage', (victim, attacker, damage, weaponHash) => {
    // Battle Axe Weapon
    // Prevents damage from a battle axe.
    if (weaponHash === 0xcd274149) {
        console.log(`${attacker.name} hit ${victim.name}`);
        victim.health += damage;
        return;
    }
});
```

## **playerDeath**

Triggers when a player's health drops below `100`. Healthy state is from `100 - 199`. Death is at `99`.

**Syntax**

```js
playerDeath: (victim: Player, killer: Entity, weaponHash: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerDeath', (victim, killer, weaponHash) => {
    // Battle Axe Weapon
    // Respawn when killed by battle axe.
    if (weaponHash === 0xcd274149) {
        victim.spawn(victim.pos.x, victim.pos.y, victim.pos.z, 0);
        return;
    }
});
```

## **playerDisconnect**

Triggers when a player leaves the server. It is important to note that passing a player to another function from this function willl lose all data that is prototyped onto that player. Best to handle your saving inside this individual function if possible.

**Syntax**

```js
playerDisconnect: (player: Player, reason: string) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerDisconnect', (player) => {
    console.log(`${player.name} has disconnected`);

    if (player.ping >= 200) {
        console.log('Probably kicked because high ping');
    }
});
```

## **playerEnteredVehicle**

Triggers when a player has sat down in a vehicle.

**Syntax**

```js
playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerEnteredVehicle', (player, vehicle, seat) => {
    if (seat !== 1) {
        console.log('A player was prevented from entering any passenger seats.');
        player.pos = player.pos;
        return;
    }
});
```

## **playerEnteringVehicle**

Triggers when a player is entering a vehicle.

**Syntax**

```js
playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerEnteringVehicle', (player, vehicle, seat) => {
    if (seat !== 1) {
        console.log('A player was prevented from entering any passenger seats.');
        player.pos = player.pos;
        return;
    }
});
```

## **playerLeftVehicle**

Triggers when a player leaves a vehicle.

**Syntax**

```js
playerLeftVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerLeftVehicle', (player, vehicle, seat) => {
    if (seat === 1) {
        console.log(`${player.name} is no longer driving.`);
    }
});
```

## **removeEntity**

Triggers when... needs more info.

**Syntax**

```js
removeEntity: (object: BaseObject) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('removeEntity', (object) => {});
```

## **resourceStart**

Triggers when your current resource starts and throws an error when it fails to load.

**Syntax**

```js
resourceStart: (error: boolean) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('resourceStart', (error) => {
    if (error) {
        console.log('Failed to start this resource.');
        return;
    }

    console.log('Loaded this resource');
});
```

## **resourceStop**

Triggers when your current resource stops.

**Syntax**

```js
resourceStop: () => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('resourceStop', () => {
    console.log('Resource has stopped.');
});
```

## **syncedMetaChange**

Triggers when an entity such as a `Vehicle` or `Player` has `setSyncedMeta` applied to them.

**Syntax**

```js
syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
```

**Example**

```js
import * as alt from 'alt-server';

// Waits for a player to connect.
alt.on('playerConnect', (player) => {
    // Sets their food to 0 after 5 seconds.
    alt.setTimeout(() => {
        player.setSyncedMeta('food', 0);
    }, 5000);
});

alt.on('syncedMetaChange', (entity: Entity, key: string, value: any, oldValue: any) => {
    // Checks if the key for the synced meta is called 'food'.
    // This event is only looking for the 'food' key.
    if (key !== 'food') {
        return;
    }

    // Kills the player if their food value is 0.
    if (value <= 0) {
        player.health = 99;
        console.log(`${player.name} has starved to death.`);
    }
});
```

## **streamSyncedMetaChange**

This works similarly to the code base above. However, on client-side it will only be triggered for people who are within streaming distance. On server-side this works exactly the same as syncedMetaChange.

## **globalMetaChange**

Not currently implemented.

## **globalSyncedMetaChange**

Not currently implemented.

## **vehicleAttach**

Triggers when a vehicle is attached to another vehicle. Commonly seen with trailers and tow trucks.

**Syntax**

```js
vehicleAttach: (vehicle: Vehicle, attachedVehicle: Vehicle) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('vehicleAttach', (vehicle, attachedVehicle) => {
    // Do something with the vehicles.
    // Can't think of an example.
    // Feel free to contribute and add an example.
});
```

## **vehicleDestroy**

Triggers when a vehicle has died. Not to be confused with a vehicle being deleted.

**Syntax**

```js
vehicleDestroy: (vehicle: Vehicle) => void;
```

**Example**

```js
import * as alt from 'alt-server';

// Respawns a vehicle after 5 seconds.
alt.on('vehicleDestroy', (vehicle) => {
    const model = vehicle.model;
    const pos = vehicle.pos;
    const rot = vehicle.rot;

    alt.setTimeout(() => {
        vehicle.destroy();

        new alt.Vehicle(model, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
    }, 5000);
});
```

## **vehicleDetach**

Triggers when a vehicle is detached from another vehicle. Such as a trailer.

**Syntax**

```js
vehicleDetach: (vehicle: Vehicle, attachedVehicle: Vehicle) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('vehicleDetach', (vehicle, attachedVehicle) => {
    // Do something with the vehicles.
    // Can't think of an example.
    // Feel free to contribute and add an example.
});
```

## **weaponDamage**

Triggers when a player hurts themselves or another player with a weapon. This event can be cancelled to prevent damage.

**Syntax**

```js
weaponDamage: (source: Player, target: Entity, weaponHash: number, damage: number, offset: Vector3, bodyPart: BodyPart) => boolean | void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('weaponDamage', (attacker, victim, weaponHash, damage, offset, bodyPart) => {
    // Prevent battle axe damage.
    if (weaponHash === 0xcd274149) {
        return false;
    }

    // Anything that is not a battle axe does damage.
});
```

## **startFire**

Triggers when a player causes fires. This is usually done through weapons. These fires can be cancelled.

**Syntax**

```js
startFire: (player: Player, fires: Array<IFireInfo>) => boolean | void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('startFire', (player, fires) => {
    // Cancels all fires if number of started fires exceeds 5.
    if (fires.length >= 5) {
        return false;
    }
});
```

## **startProjectile**

Triggers when a player creates a projectile. This is used to prevent unwanted projectiles when a weapon is not currently equipped by a player. Projectiles can be cancelled.

**Syntax**

```js
startProjectile: (player: Player, pos: Vector3, dir: Vector3, ammoHash: number, weaponHash: number) => boolean | void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('startProjectile', (player, pos, dir, ammoHash, weaponHash) => {
    // Prevent RPG Projectiles
    if (weaponHash === 0xb1ca77b1) {
        return false;
    }
});
```

## **playerWeaponChange**

Triggers when a player swaps weapons.

**Syntax**

```js
playerWeaponChange: (player: Player, oldWeapon: number, weapon: number) => void;
```

**Example**

```js
import * as alt from 'alt-server';

alt.on('playerWeaponChange', (player, oldWeapon, weapon) => {
    // Remove and RPG Weapon from a player when they swap to it.
    if (weapon === 0xb1ca77b1) {
        player.removeWeapon(0xb1ca77b1);
        return;
    }
});
```
