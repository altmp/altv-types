# Introduction to the Player

The player is you. You are the player. Your friend is the player. Everyone is the player.

Player's also come with plenty of properties and functions. Player is most often accessed through events.

Meaning an event will give you access to a player instance depending on the behavior from the player.

## Player Properties

Here are some very commonly used properties.

This documentation may not reflect all properties available on the player.

### Server Side

| Property Name | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| armour        | Set player armour. 0 - 100                                                |
| currentWeapon | Get player's current armour.                                              |
| dimension     | Player's Virtual World. 0 By Default                                      |
| health        | Set player's health. 100-200                                              |
| hwidHash      | Unique Hardware Hash                                                      |
| hwidExHash    | Unique Ex Hardware Hash                                                   |
| id            | Their server-side id                                                      |
| ip            | Their IP Address                                                          |
| model         | Read or set the player's model.                                           |
| name          | Readonly Player Set Name                                                  |
| ping          | Current Ping                                                              |
| pos           | Current Player Position                                                   |
| vehicle       | If a vehicle is present this lets you get that vehicle. Null otherwise.   |
| socialId      | A non-unique spoofable social club id. Don't use this for identification. |
| valid         | A way to determine if the entity still exists.                            |

### Client Side

| Property Name | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| pos           | The player's position. If exiting stream range, position is frozen. |
| vehicle       | The player's vehicle if they're in one. Null if otherwise.          |
| scriptID      | The ped handle of the player. Used for working with natives.        |
