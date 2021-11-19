# Vehicle server methods

The following article gives you an overview about the server methods of the vehicle class. Keep in mind, some server methods are related to the train API and are described in the [train API article](train-api.md). Therefore, they are not mentioned here.

## Methods

> [!WARNING]
> Keep in mind that base64 methods are deprecated!

| Method Name                                               | Return type           | Description                                                           |
| ----------------------------------------------------------|---------------------- |-----------------------------------------------------------------------|
| doesWheelHasTire(number)                                  | boolean               | Returns if a wheel has a tire.                                        |
| getAppearanceDataBase64()                                 | string                | Returns the appearance of a vehicle as a base64 string.               |
| getArmoredWindowHealth(number)                            | number                | Returns the health of a specific armored window.                      |
| getArmoredWindowShootCount(number)                        | number                | Returns the amount of shoots that a specific armoured weapon received.|
| getBumperDamageLevel(VehicleBumper)                       | VehicleBumperDamage   | Returns the bumper damage level of the vehicle.                       |
| getByID(number)                                           | Vehicle / null        | Returns a vehicle based on the given id.                              |
| getDamageStatusBase64()                                   | string                | Returns the damage status of a vehicle as a base64 string.            |
| getDoorState(VehicleDoor)                                 | VehicleDoorState      | Returns the state of a specific door.                                 |
| getExtra(number)                                          | boolean               | Returns the state of a specific extra.                                                                 |
| getGamestateDataBase64()                                  | string                | Returns the game state data of a vehicle as a base64 string.           |
| getHealthDataBase64()                                     | string                | Returns the health data of a vehicle as a base64 string.              |
| getMod(VehicleModType)                                    | number                | Returns the mod value for a specific mod type.                        |
| getModsCount(VehicleModType)                              | number                | Returns the amount of possible mod values for a specific mod type.    |
| getPartBulletHoles(VehiclePart)                           | number                | Returns the amount of bullet holes of a vehicle part.                 |
| getPartDamageLevel(VehiclePart)                           | VehiclePartDamage     | Returns the damage level of a vehicle part.                           |
| getScriptDataBase64()                                     | string                | Returns the script data of a vehicle as a base64 string.              |
| getWheelHealth(number)                                    | number                | Returns the health of a specific wheel.                               |
| isLightDamaged(number)                                    | boolean               | Returns if a specific light is damaged.                               |
| isSpecialLightDamaged(number)                             | boolean               | Returns if a specific special light is damaged.                       |
| isWheelBurst(number)                                      | boolean               | Returns if a specific wheel is burst.                                 |
| isWheelDetached(number)                                   | boolean               | Returns if a specific wheel is detached.                              |
| isWheelOnFire(number)                                     | boolean               | Returns if a specific wheel is on fire.                               |
| isWindowDamaged(number)                                   | boolean               | Returns if a specific window is damaged.                              |
| isWindowOpened(number)                                    | boolean               | Returns if a specific window is open.                                 |
| repair()                                                  | void                  | Repairs the vehicle.                                                  |
| setAppearanceDataBase64(string)                           | void                  | Sets the appearance of a vehicle with a base64 string.                |
| setArmoredWindowHealth(number, number)                    | void                  | Sets the health of a specific armoured window.                        |
| setArmoredWindowShootCount(number, number)                | void                  | Sets the shoot count of a specific armoured window.                   |
| setBumperDamageLevel(VehicleBumper, VehicleBumperDamage)  | void                  | Sets the damage level of a specific bumper.                           |
| setDamageStatusBase64(string)                             | void                  | Sets the damage status of a vehicle based on a base64 string.         |
| setDoorState(VehicleDoor, VehicleDoorState)               | void                  | Sets the state of a specific door.                                    |
| setExtra(number, boolean)                                 | void                  | Sets the state of an extra of a vehicle. Setting extras on vehicle does not work for every vehicle model. For example you can change the light bar of a police car with this method.                                                                 |
| setGamestateDataBase64(string)                            | void                  | Sets the game state data of a vehicle with a given base64 string.     |
| setHealthDataBase64(string)                               | void                  | Sets the health data of a vehicle with a given base64 string.         |
| setLightDamaged(number, boolean)                          | void                  | Sets a specific light of the vehicle is damaged.                      |
| setMod(VehicleModType, number)                            | void                  | Applies a specific mod of a given mod type.                           |
| setPartBulletHoles(VehiclePart, number)                   | void                  | Sets the bullet holes of a specific vehicle part.                     |
| setPartDamageLevel(VehiclePart, VehiclePartDamage)        | void                  | Sets the damage level of a vehicle part.                              |
| setRearWheels(number)                                     | void                  | Sets the rear wheels.                                                 |
| setScriptDataBase64(string)                               | void                  | Sets the script data of a vehicle based on a base64 string.           |
| setSearchLightTo(Entity, boolean)                         | void                  | Sets a search light either disabled or enabled.                       |
| setSpecialLightDamaged(number, boolean)                   | void                  | Sets if a special light is damaged.                                   |
| setWheelBurst(number, boolean)                            | void                  | Sets if a specific wheel ist burst.                                   |
| setWheelDetached(number, boolean)                         | void                  | Sets a wheel either detached or attached.                             |
| setWheelFixed(number)                                     | void                  | Repairs a specific wheel.                                             |
| setWheelHasTire(number, boolean)                          | void                  | Sets if a wheel has a specific tire.                                  |
| setWheelHealth(number, number)                            | void                  | Sets the health of a specific wheel.                                  |
| setWheelOnFire(number, boolean)                           | void                  | Sets a wheel either on fire or not                                    |
| setWheels(number, number)                                 | void                  | Applies a wheel style based on the type and variation.                |
| setWindowDamaged(number, boolean)                         | void                  | Sets if a specific window is damaged.                                 |
| setWindowOpened(number, boolean)                          | void                  | Sets if a specific window is open.                                    |
