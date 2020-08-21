declare module "alt-server" {
  type DateTimeHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 |
      22 | 23;
  type DateTimeMinute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 |
      22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 |
      45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
  type DateTimeSecond = DateTimeMinute;
  type DateTimeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 |
      22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  type DateTimeMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  /**
   * Resource name of the executing entity.
   */
  export const resourceName: string;

  /**
   * The root directory of the alt:V server.
   */
  export const rootDir: string;

  /**
   * The default entity dimension.
   * 
   * @remarks Informations about dimensions can be found at {@link WorldObject.dimension}.
   */
  export const DefaultDimension: number;

  /**
   * The global dimension.
   * 
   * @remarks Informations about dimensions can be found at {@link WorldObject.dimension}.
   */
  export const GlobalDimension: number;
 
  /**
   * Vehicle neon.
   * 
   * @remarks All individual neon locations can be toggled seperately.
   */
  export interface VehicleNeon {
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
  }

  /**
   * 3 dimensional Vector.
   */ 
  export class Vector3 {
    readonly x: number;
    readonly y: number;
    readonly z: number;

    constructor(x: number, y: number, z: number);
  }

  /**
   * RGBA Color.
   */
  export class RGBA {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(r: number, g: number, b: number, a: number);
  }

  export class BaseObject {
    /**
     * Type of the object.
     */
    public readonly type: number;

    /**
     * Object usability.
     * @returns False if object is no longer usable.
     */
    public readonly valid: boolean;

    /**
     * Removes the object from the world.
     */
    public destroy(): void;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     */
    public deleteMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    public hasMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     * @param key The key of the value to store.
     */
    public setMeta(key: string, value: any): void;
  }

  export class WorldObject extends BaseObject {
    /**
     * Object dimension.
     * @remarks
     * alt:V includes a dimension system which allows you to have two entities at the same place, that can't see or interact with each other.
     * (-2147483648) Global Dimension: Can only see itself, but can be seen by itself, the public dimension and the private dimension.
     * (-2147483647 to -1) Public Dimension: Can see itself, the general dimension and the global dimension, but can only be seen by itself. 
     * (0) General/Default Dimension: Can only see itself, but can be seen by itself and the public dimension.
     * (1 to 2147483647) Private dimension: Can see itself and the global dimension, but can only be seen by itself.
     * @example
     * ```
     * object.dimension = 0; // The object is now in the default dimension
     * ```
     */
    public dimension: number;

    /**
     * Object position.
     * @example
     * ```
     * entity.pos = new alt.Vector3(0, 0, 72); // Sets the position of the 'entity' to 0, 0, 72
     * ```
     */
    public pos: Vector3;
  }

  export class Entity extends WorldObject {
    /**
     * Internal identificator of the entity which is identical on both sides.
     */
    public readonly id: number;

    /**
     * Network owner of the entity.
     * @remarks Network owner is responsible for syncing entity with the server.
     * It changes when actual network owner passes the migration range,
     * then the new one is determined based on distance from the entity
     * (if entity is a vehicle, then the driver will take priority for becoming network owner).
     * Disabling migration range will stop this process from happening until turned on again.
     */
    public readonly netOwner: Player | null;

    /**
     * Entity model hash.
     *
     * @remarks Only setter accepts string or number as input, getter returns value as number.
     * @example
     * ```
     * entity.model = "mp_m_freemode_01"; // Sets the entity model to 'mp_m_freemode_01'
     * entity.model = 0x705E61F2; // You can also set the hash of the model
     * ```
     */
    public model: number | string;

    /**
     * Entity rotation.
     *
     * @remarks Values are provided in radians.
     * @example
     * ```
     * entity.rot = new alt.Vector3(0, 0, 2); // The entity is now rotated by about 115 degrees
     * ```
     */
    public rot: Vector3;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     * @example
     * ```
     * let entity = alt.Entity.getByID(1);
     * alt.log(entity.id); // Prints '1'
     * ```
     */
    public static getByID(id: number): Entity | null;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     * @example
     * ```
     * entity.setSyncedMeta("test", 123);
     * alt.log(entity.getSyncedMeta("test")); // Prints '123'
     * entity.deleteSyncedMeta("test");
     * alt.log(entity.getSyncedMeta("test")); // Prints 'undefined'
     * ```
     */
    public deleteSyncedMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     * @example
     * ```
     * entity.setSyncedMeta("test", 123);
     * alt.log(entity.getSyncedMeta("test")); // Prints '123'
     * ```
     */
    public getSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     * @example
     * ```
     * alt.log(entity.hasSyncedMeta("test")); // Prints 'false'
     * entity.setSyncedMeta("test", 123);
     * alt.log(entity.hasSyncedMeta("test")); // Prints 'true'
     * ```
     */
    public hasSyncedMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     * @param key The key of the value to store.
     * @example
     * ```
     * entity.setSyncedMeta("test", 123);
     * alt.log(entity.getSyncedMeta("test")); // Prints '123'
     * ```
     */
    public setSyncedMeta(key: string, value: any): void;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     * @example
     * ```
     * entity.setStreamSyncedMeta("test", 123);
     * alt.log(entity.getStreamSyncedMeta("test")); // Prints '123'
     * entity.deleteStreamSyncedMeta("test");
     * alt.log(entity.getStreamSyncedMeta("test")); // Prints 'undefined'
     * ```
     */
    public deleteStreamSyncedMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     * @example
     * ```
     * entity.setStreamSyncedMeta("test", 123);
     * alt.log(entity.getStreamSyncedMeta("test")); // Prints '123'
     * ```
     */
    public getStreamSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     * @example
     * ```
     * alt.log(entity.hasStreamSyncedMeta("test")); // Prints 'false'
     * entity.setStreamSyncedMeta("test", 123);
     * alt.log(entity.hasStreamSyncedMeta("test")); // Prints 'true'
     * ```
     */
    public hasStreamSyncedMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     * @param key The key of the value to store.
     * @example
     * ```
     * entity.setSyncedMeta("test", 123);
     * alt.log(entity.getSyncedMeta("test")); // Prints '123'
     * ```
     */
    public setStreamSyncedMeta(key: string, value: any): void;

    /**
     * Changes network owner to the specified player.
     *
     * @remarks See {@link netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param player The given player that will be set as new network owner.
     * @param disableMigration Pass true to disable migration, false to keep it enabled.
     * If not specified, it defaults to "false".
     * @example
     * ```
     * entity.setNetOwner(player, true); // 'player' is now the net owner of 'entity'
     * ```
     */
    public setNetOwner(player: Player, disableMigration?: boolean): void;

    /**
     * Resets overwritten network owner.
     *
     * @remarks See {@link netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param disableMigration Pass true to disable migration, false to keep it enabled.
     * If not specified, it defaults to "false".
     * @example
     * ```
     * entity.resetNetOwner(); // The entity now calculates a net owner by itself
     * ```
     */
    public resetNetOwner(disableMigration?: boolean): void;
  }

  export class Player extends Entity {
    /**
     * Array containing all connected players.
     */
    public static all: Array<Player>;

    /**
     * Current armour value of the player.
     * 
     * @remarks The max armour is not the same for every model, check the max armour with {@link maxArmour}.
     */
    public armour: number;

    /**
     * Hash of the current held weapon by the player.
     */
    public currentWeapon: number;

    /**
     * Array containing all weapon components added to the player.
     */
    public readonly currentWeaponComponents: Array<number>;

    /**
     * The current weapon tint of the held weapon.
     */
    public readonly currentWeaponTintIndex: number;

    /**
     * Current aim offset.
     */
    public readonly entityAimOffset: Vector3;

    /**
     * The entity the player is currently aiming at.
     */

    public readonly entityAimingAt: Entity | null;
    /**
     * Is the flashlight activated.
     */
    public readonly flashlightActive: boolean;

    /**
     * Current player health.
     * 
     * @remarks The max health is not the same for every model, check the max health with {@link maxHealth}.
     */
    public health: number;

    /**
     * The IP address of the player in IPv6 format.
     */
    public readonly ip: string;

    /**
     * The max armour value for the player.
     *
     * @remarks This value is determined by the current model.
     */
    public maxArmour: number;

    /**
     * The max health value for the player.
     *
     * @remarks This value is determined by the current model.
     */
    public maxHealth: number;

    /**
     * The player name chosen in the main menu.
     */
    public readonly name: string;

    /**
     * Current ping of the player.
     *
     * @remarks A high ping is most often caused by a bad internet connection.
     */
    public readonly ping: number;

    /**
     * The vehicle seat the player is sitting in.
     */
    public readonly seat: number;
    /**
     * The vehicle the player is sitting in.
     */
    public readonly vehicle: Vehicle | null;
    /**
     * The social club id of the player.
     *
     * @remarks This id is spoofable, do not use it for identification.
     */
    public readonly socialId: string;
    /**
     * The hardware id hash of the player.
     *
     * @remarks This hash can have collisions, do not use it for identification.
     */
    public readonly hwidHash: string;
    /**
     * The extra hardware id hash of the player.
     *
     * @remarks This hash can have collisions, do not use it for identification.
     */
    public readonly hwidExHash: string;
    /**
     * The auth token of the player retrieved from Early Auth.
     *
     * @remarks This is only used for Early Auth.
     */
    public readonly authToken: string;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Player if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    /**
     * Adds the specified weapon component to the specified weapon of the player.
     *
     * @param weaponHash Weapon hash.
     * @param component Component id.
     */
    public addWeaponComponent(weaponHash: number, component: number): void;

    /**
     * Gives the player the specified weapon.
     *
     * @param weaponHash Weapon hash.
     * @param ammo Weapon ammo to give.
     * @param equipNow Should the weapon be equipped immediately.
     */
    public giveWeapon(weaponHash: number, ammo: number, equipNow: boolean): void;

    /**
     * Forcefully disconnects the player with a reason message.
     *
     * @param reason The reason that will display to the player on the disconnect screen.
     */
    public kick(reason: string): void;

    /**
     * Removes all weapons from the player.
     */
    public removeAllWeapons(): void;

    /**
     * Removes the specified weapon from the player.
     *
     * @param weaponHash Weapon hash.
     */
    public removeWeapon(weaponHash: number): void;

    /**
     * Removes the specified weapon component from the specified weapon of the player.
     *
     * @param weaponHash Weapon hash.
     * @param component Component id.
     */
    public removeWeaponComponent(weaponHash: number, component: number): void;

    /**
     * Sets the date and time for the player.
     *
     * @param day The current day of the year.
     * @param month The current month.
     * @param year The current year.
     * @param hour The current hour.
     * @param minute The current minute.
     * @param second The current second.
     */
    public setDateTime(day: DateTimeDay, month: DateTimeMonth, year: number, hour: DateTimeHour, minute: DateTimeMinute, second: DateTimeSecond): void;

    /**
     * Sets the specified tint index for the specified weapon of the player.
     *
     * @param weaponHash Weapon hash.
     * @param tintIndex Weapon tint index.
     */
    public setWeaponTintIndex(weaponHash: number, tintIndex: number): void;

    /**
     * Sets the weather for the player.
     *
     * @param weatherHash Hash of the weather name.
     */
    public setWeather(weatherHash: number): void;

    /**
     * Spawns the player at the specified position after the specified delay.
     *
     * @param x X coordinate to spawn at
     * @param y Y coordinate to spawn at
     * @param z Z coordinate to spawn at
     * @param delay Delay until the player is spawned in milliseconds
     * @remarks This also sets the player health to max health
     */
    public spawn(x: number, y: number, z: number, delay: number): void;
  }

  export class Vehicle extends Entity {
    /**
     * Array containing all existing vehicles.
     */
    public static readonly all: Array<Vehicle>;
    /**
     * The current active radio station.
     */
    public activeRadioStation: number;
    /**
     * Additional body health of the vehicle.
     */
    public bodyAdditionalHealth: number;
    /**
     * Body health of the vehicle.
     * @remarks A body health of 0 does not mean the vehicle is destroyed.
     */
    public bodyHealth: number;
    /**
     * RGBA Primary color of the vehicle.
     */
    public customPrimaryColor: RGBA;
    /**
     * RGBA Secondary color of the vehicle.
     */
    public customSecondaryColor: RGBA;
    /**
     * Are custom tires enabled.
     */
    public customTires: boolean;
    public darkness: number;
    /**
     * Color of the vehicle interior dashboard.
     * @remarks The color is a GTA V hud color.
     */
    public dashboardColor: number;
    /**
     * Is the vehicle daylight activated.
     */
    public readonly daylightOn: boolean;
    /**
     * Is the vehicle destroyed.
     */
    public readonly destroyed: boolean;
    /**
     * Dirt level on the vehicle.
     * @remarks A dirt level of 0 means the vehicle is completely clean.
     */
    public dirtLevel: number;
    /**
     * The current driver of the vehicle.
     */
    public readonly driver: Player | null;
    /**
     * Engine Health of the vehicle.
     * @remarks Engine health of 0 does not mean the vehicle is detroyed.
     */
    public engineHealth: number;
    /**
     * Is the vehicle engine on.
     */
    public engineOn: boolean;
    /**
     * Is the flamethrower active.
     * @remarks This is a special vehicle weapon.
     */
    public readonly flamethrowerActive: boolean;
    /**
     * Is the handbrake active.
     */
    public readonly handbrakeActive: boolean;
    /**
     * Does the vehicle have armored windows.
     */
    public readonly hasArmoredWindows: number;
    /**
     * Headlight color of the vehicle.
     * @remarks The color is a GTA V hud color.
     */
    public headlightColor: number;
    /**
     * Interior color of the vehicle.
     * @remarks The color is a GTA V hud color.
     */
    public interiorColor: number;
    /**
     * The vehicle lights multiplier.
     */
    public lightsMultiplier: number;
    /**
     * The current vehicle livery.
     * @remarks Vehicle liveries are special paints.
     */
    public livery: number;
    /**
     * The current vehicle lock state.
     */
    public lockState: number;
    /**
     * Is manual engine control enabled for the vehicle.
     * @remarks Manual engine control activates full engine control from the serverside.
     */
    public manualEngineControl: boolean;
    /**
     * The current vehicle modkit.
     * @remarks Not every vehicle has modkits, see {@link modKitsCount}
     */
    public modKit: number;
    /**
     * The amount of modkits available for the vehicle.
     */
    public readonly modKitsCount: number;
    /**
     * The vehicle neon layout.
     */
    public neon: VehicleNeon;
    /**
     * The vehicle neon color.
     */
    public neonColor: RGBA;
    /**
     * Are the nightlights activated.
     */
    public readonly nightlightOn: boolean;
    /**
     * The current numberplate type.
     */
    public numberPlateIndex: number;
    /**
     * The current number plate text.
     * @remarks Only a maximum of 8 characters can be displayed.
     */
    public numberPlateText: string;
    /**
     * The vehicle pearl color. 
     */
    public pearlColor: number;
    /**
     * The vehicle petrol tank health.
     */
    public petrolTankHealth: number;
    /**
     * The primary color of the vehicle.
     * @remarks The color is a GTA hud color.
     */
    public primaryColor: number;
    /**
     * The amount of times the vehicle has been repaired.
     */
    public readonly repairsCount: number;
    /**
     * The livery of the roof of the vehicle.
     * @remarks Liveries are a custom paint.
     */
    public roofLivery: number;
    /**
     * Is the roof of the vehicle open.
     */
    public roofOpened: boolean;
    /**
     * The secondary color of the vehicle.
     * @remarks The color is a GTA hud color.
     */
    public secondaryColor: number;
    /**
     * Is the siren active.
     * @remarks This only works for vehicles that have a siren.
     */
    public sirenActive: boolean;
    /**
     * The tire smoke color of the vehicle.
     */
    public tireSmokeColor: RGBA;
    /**
     * The wheel color of the vehicle.
     */
    public wheelColor: number;
    /**
     * The amount of wheels the vehicle has.
     */
    public readonly wheelsCount: number;
    /**
     * The type of wheels the vehicle has.
     */
    public readonly wheelType: number;
    /**
     * The amount of front wheels the vehicle has.
     */
    public readonly frontWheels: number;
    /**
     * The amount of rear wheels the vehicle has.
     */
    public readonly rearWheels: number;
    /**
     * The window tint color of the vehicle.
     */
    public windowTint: number;

    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number);

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Vehicle if it was found, otherwise null.
     */
    public static getByID(id: number): Vehicle | null;

    /**
     * Checks if the specified wheel has a tire.
     *
     * @param wheelId The index of the wheel.
     * @returns True if the wheel has a tire.
     */
    public doesWheelHasTire(wheelId: number): boolean;

    /**
     * Gets the appearance of the vehicle as a Base64 string.
     * @deprecated Base64 methods are deprecated.
     */
    public getAppearanceDataBase64(): string;

    /**
     * Gets the health of the specified armored window.
     *
     * @param windowId Window index.
     * @returns Window health value.
     */
    public getArmoredWindowHealth(windowId: number): number;

    /**
     * Gets the amount of shots in the specified armored window.
     *
     * @param windowId Window index.
     * @returns Amount of shots in the window.
     */
    public getArmoredWindowShootCount(windowId: number): number;

    /**
     * Gets the damage level of the specified bumper.
     *
     * @param bumperId Bumper index.
     * @returns Damage level value of the bumper.
     */
    public getBumperDamageLevel(bumperId: number): number;

    /**
     * Gets the damage status of the vehicle as a Base64 string.
     * @deprecated Base64 methods are deprecated.
     */
    public getDamageStatusBase64(): string;

    /**
     * Gets the state of the specified door.
     *
     * @param doorId Door index.
     * @returns State of the door.
     */
    public getDoorState(doorId: number): number;

    /**
     * Gets the extra in the specified category.
     *
     * @param category Extra category.
     * @returns True if the extra is activated.
     */
    public getExtra(category: number): boolean;

    /**
     * Gets the game state data of the vehicle as a Base64 string.
     * @deprecated Base64 methods are deprecated.
     */
    public getGamestateDataBase64(): string;

    /**
     * Gets the health data of the vehicle as a Base64 string.
     * @deprecated Base64 methods are deprecated.
     */
    public getHealthDataBase64(): string;

    /**
     * Gets the mod in the specified category.
     *
     * @param category Mod category.
     * @returns Activated mod in the category.
     */
    public getMod(category: number): number;

    /**
     * Gets the amount of mods the specified category has available.
     *
     * @param category Mod category.
     * @returns Amount of mods available in that category.
     */
    public getModsCount(category: number): number;

    /**
     * Gets the amount of bullet holes in the specified vehicle part.
     *
     * @param partId Vehicle part index.
     * @returns Amount of bullet holes in the vehicle part.
     */
    public getPartBulletHoles(partId: number): number;

    /**
     * Gets the damage level of the specified vehicle part.
     *
     * @param partId Vehicle part index.
     * @returns Damage level of the vehicle part.
     */
    public getPartDamageLevel(partId: number): number;

    /**
     * Gets the vehicle script data as a Base64 string.
     * @deprecated Base64 methods are deprecated.
     */
    public getScriptDataBase64(): string;

    /**
     * Gets the health of the specified wheel.
     *
     * @param wheelId Wheel index.
     * @returns Health value of the wheel.
     */
    public getWheelHealth(wheelId: number): number;

    /**
     * Gets whether the specified light is damaged.
     *
     * @param lightId Light index.
     * @returns True if the light is damaged.
     */
    public isLightDamaged(lightId: number): boolean;

    /**
     * Gets whether the specified special light is damaged.
     *
     * @param specialLightId Special light index.
     * @returns True if the special light is damaged.
     */
    public isSpecialLightDamaged(specialLightId: number): boolean;

    /**
     * Gets whether the specified wheel is burst.
     *
     * @param wheelId Wheel index.
     * @returns True if the wheel is burst.
     */
    public isWheelBurst(wheelId: number): boolean;

    /**
     * Gets whether the specified wheel is detached.
     *
     * @param wheelId Wheel index.
     * @returns True if the wheel is detached.
     */
    public isWheelDetached(wheelId: number): boolean;

    /**
     * Gets whether the specified wheel is on fire.
     *
     * @param wheelId Wheel index.
     * @returns True if the wheel is on fire.
     */
    public isWheelOnFire(wheelId: number): boolean;

    /**
     * Gets whether the specified window is damaged.
     *
     * @param windowId Window index.
     * @returns True if the window is damaged.
     */
    public isWindowDamaged(windowId: number): boolean;

    /**
     * Gets whether the specified window is open.
     *
     * @param windowId Window index.
     * @returns True if the window is open.
     */
    public isWindowOpened(windowId: number): boolean;

    /**
     * Sets the vehicle appearance data from a Base64 string.
     *
     * @param data Base64 vehicle appearance string. (See {@link getAppearanceDataBase64})
     * @deprecated Base64 methods are deprecated.
     */
    public setAppearanceDataBase64(data: string): void;

    /**
     * Sets the health of the specified armored window.
     *
     * @param windowId Window index.
     * @param health Health value.
     */
    public setArmoredWindowHealth(windowId: number, health: number): void;

    /**
     * Sets the amount of shots in the specified armored window.
     *
     * @param windowId Window index.
     * @param count Amount of shots.
     */
    public setArmoredWindowShootCount(windowId: number, count: number): void;

    /**
     * Sets the damage level of the specified bumper.
     *
     * @param bumperId Bumper index.
     * @param level Damage level.
     */
    public setBumperDamageLevel(bumperId: number, level: number): void;

    /**
     * Sets the vehicle damage status from a Base64 string.
     *
     * @param data Base64 vehicle damage status string. (See {@link getDamageStatusBase64})
     * @deprecated Base64 methods are deprecated.
     */
    public setDamageStatusBase64(data: string): void;

    /**
     * Sets the state of the specified door.
     *
     * @param doorId Door index.
     * @param state Door state.
     */
    public setDoorState(doorId: number, state: number): void;

    /**
     * Enables or disables the specified vehicle extra.
     *
     * @param category Extra category.
     * @param state Extra state.
     */
    public setExtra(category: number, state: boolean): void;

    /**
     * Sets the vehicle game state from a Base64 string.
     *
     * @param data Base64 vehicle game state string. (See {@link getGamestateDataBase64})
     * @deprecated Base64 methods are deprecated.
     */
    public setGamestateDataBase64(data: string): void;

    /**
     * Sets the vehicle health data from a Base64 string.
     *
     * @param data Base64 vehicle health data string. (See {@link getHealthDataBase64})
     * @deprecated Base64 methods are deprecated.
     */
    public setHealthDataBase64(data: string): void;

    /**
     * Sets the specified light as damaged.
     *
     * @param lightId Light index.
     * @param isDamaged Is the light damaged.
     */
    public setLightDamaged(lightId: number, isDamaged: boolean): void;

    /**
     * Sets the mod in the specified category.
     *
     * @param category Mod category.
     * @param id Mod index.
     */
    public setMod(category: number, id: number): void;

    /**
     * Sets the amount of bullet holes in the specified vehicle part.
     *
     * @param partId Vehicle part index.
     * @param count Amount of bullet holes.
     */
    public setPartBulletHoles(partId: number, count: number): void;

    /**
     * Sets the damage level of the specified vehicle part.
     *
     * @param partId Vehicle part index.
     * @param level Damage level value.
     */
    public setPartDamageLevel(partId: number, level: number): void;

    /**
     * Sets the variation of the rear wheels.
     *
     * @param variation Variation index.
     */
    public setRearWheels(variation: number): void;

    /**
     * Sets the vehicle script data from a Base64 string.
     *
     * @param data Base64 vehicle script data string. (See {@link getScriptDataBase64})
     * @deprecated Base64 methods are deprecated.
     */
    public setScriptDataBase64(data: string): void;

    /**
     * Sets the specified special light as damaged.
     *
     * @param specialLightId Special light index.
     * @param isDamaged Is the special light damaged.
     */
    public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;

    /**
     * Sets the burst state of the specified wheel.
     *
     * @param wheelId Wheel index.
     * @param state Is the wheel burst.
     */
    public setWheelBurst(wheelId: number, state: boolean): void;

    /**
     * Sets the detached state of the specified wheel.
     *
     * @param wheelId Wheel index.
     * @param state Is the wheel detached.
     */
    public setWheelDetached(wheelId: number, state: boolean): void;

    /**
     * Sets if the specified wheel has a tire.
     *
     * @param wheelId Wheel index.
     * @param state Does the wheel have a tire.
     */
    public setWheelHasTire(wheelId: number, state: boolean): void;

    /**
     * Sets the health of the specified wheel.
     *
     * @param wheelId Wheel index.
     * @param health Health value.
     */
    public setWheelHealth(wheelId: number, health: number): void;

    /**
     * Sets if the specified wheel is on fire.
     *
     * @param wheelId Wheel index.
     * @param state Is the wheel on fire.
     */
    public setWheelOnFire(wheelId: number, state: boolean): void;

    /**
     * Sets the wheels type and variation.
     *
     * @param type Wheel type.
     * @param variation Wheel variation.
     */
    public setWheels(type: number, variation: number): void;

    /**
     * Sets if the specified window is damaged.
     *
     * @param windowId Window index.
     * @param isDamaged Is the window damaged.
     */
    public setWindowDamaged(windowId: number, isDamaged: boolean): void;

    /**
     * Sets if the specified window is open.
     *
     * @param windowId Window index.
     * @param state Is the window open.
     */
    public setWindowOpened(windowId: number, state: boolean): void;
  }

  export class Blip extends WorldObject {

  }

  export class PointBlip extends Blip {
    constructor(type: number, x: number, y: number, z: number);
  }

  export class Colshape extends WorldObject {
    public colshapeType: number;

    /**
     * Checks if the specified entity is inside the colshape.
     *
     * @returns True if the entity is inside the colshape.
     */
    public isEntityIn(entity: Entity): boolean;

    /**
     * Checks if the specified point is inside the colshape.
     *
     * @param position A vector3 representing a point in the world.
     * @returns True if the point is inside the colshape.
     */
    public isPointIn(position: Vector3): boolean;
  }

  export class ColshapeCylinder extends Colshape {
    constructor(x: number, y: number, z: number, radius: number, height: number);
  }

  export class ColshapeSphere extends Colshape {
    constructor(x: number, y: number, z: number, radius: number);
  }

  export class ColshapeCircle extends Colshape {
    constructor(x: number, y: number, radius: number);
  }

  export class ColshapeCuboid extends Colshape {
    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
  }

  export class ColshapeRectangle extends Colshape {
    constructor(x1: number, y1: number, x2: number, y2: number);
  }

  export class Checkpoint extends Colshape {
    constructor(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number);
  }

  export class VoiceChannel extends BaseObject {
    /**
     * @param isSpatial Should the sound in the voice channel be spatial. (3D)
     * @param maxDistance The max distance to hear other players in this voice channel from.
     */
    constructor(isSpatial: boolean, maxDistance: number);

    /**
     * Adds the specified player to the voice channel.
     */
    public addPlayer(player: Player): void;

    /**
     * Checks if the specified player is in the voice channel.
     * 
     * @returns True if the player is in the voice channel.
     */
    public isPlayerInChannel(player: Player): boolean;

    /**
     * Checks if the player is muted inside the voice channel.
     *
     * @returns True if the player is muted.
     */
    public isPlayerMuted(player: Player): boolean;

    /**
     * Mutes the specified player in the voice channel.
     */
    public mutePlayer(player: Player): void;

    /**
     * Removes the specified channel from the voice channel.
     */
    public removePlayer(player: Player): void;

    /**
     * Unmutes the specified player in the voice channel.
     */
    public unmutePlayer(player: Player): void;
  }

  export class File {
    /**
     * Determines whether file exists with the specified filename.
     *
     * @param filename The name of the file.
     * @returns Return is dependent on whether file with the specified filename exists.
     */
    public static exists(filename: string): boolean;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file. If not specified, it defaults to "utf-8".
     */
    public static read(filename: string, encoding?: "utf-8" | "utf-16"): string;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */
    public static read(filename: string, encoding: "binary"): ArrayBuffer;
  }

  /**
   * Removes the specified key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteMeta(key: string): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns True when element associated with the specified key is stored.
   */
  export function hasMeta(key: string): boolean;

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared locally to all resources.
   * @param key The key of the value to store.
   */
  export function setMeta(key: string, value: any): void;

  /**
   * Removes the specified key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteSyncedMeta(key: string): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getSyncedMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns Return is dependent on whether element associated with the specified key is stored.
   */
  export function hasSyncedMeta(key: string): boolean;

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared with all client resources.
   * @param key The key of the value to store.
   */
  export function setSyncedMeta(key: string, value: any): void;

  /**
   * Clears a timer set with the {@link everyTick} function.
   *
   * @param id The id of a timer.
   */
  export function clearEveryTick(id: number): void;

  /**
   * Clears a timer set with the {@link setInterval} function.
   *
   * @param id The id of a timer.
   */
  export function clearInterval(id: number): void;

  /**
   * Clears a timer set with the {@link nextTick} function.
   *
   * @param id The id of a timer.
   */
  export function clearNextTick(id: number): void;

  /**
   * Clears a timer set with the {@link setTimeout} function.
   *
   * @param id The id of a timer.
   */
  export function clearTimeout(id: number): void;

  /**
   * @hidden
   */
  export function clearTimer(id: number): void;

  /**
   * Emits specified event across server resources.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific client.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClient(player: Player, eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific client.
   *
   * @param player Event is sent to every player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClient(player: null, eventName: string, ...args: any[]): void;

  /**
   * Schedules execution of handler on every tick.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearEveryTick} function to cancel the timer.
   */
  export function everyTick(handler: () => void): number;

  /**
   * Gets the current net time in milliseconds.
   *
   * @remarks The net time is the amount of time the current resource is started.
   * @returns Current net time in milliseconds.
   */
  export function getNetTime(): number;

  /**
   * Gets the exports of the specified resource.
   *
   * @param name Name of the resource.
   * @returns Exports of that resource.
   */
  export function getResourceExports(name: string): any;

  /**
   * Gets the main file of the specified resource.
   *
   * @param name Name of the resource.
   * @returns The main file of the specified resource.
   */
  export function getResourceMain(name: string): string;

  /**
   * Gets the path of the specified resource.
   *
   * @param name Name of the resource.
   * @returns The path of the resource.
   */
  export function getResourcePath(name: string): string;

  /**
   * Checks whether the specified resource exists.
   *
   * @param name Name of the resource.
   * @returns True if the resource exists.
   */
  export function hasResource(name: string): boolean;

  /**
   *  Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string, from which hash will be created.
   */
  export function hash(str: string): number;

  /**
   * Prints the specified arguments to the server console.
   */
  export function log(...args: any[]): void;

  /**
   * Prints the specified arguments to the server console as an error.
   */
  export function logError(...args: any[]): void;

  /**
   * Prints the specified arguments to the server console as a warning.
   */
  export function logWarning(...args: any[]): void;

  /**
   * Schedules execution of handler on next tick.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: () => void): number;

  /**
   * Unsubscribes from server event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from client event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offClient(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceError", listener: (resourceName: string) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceStart", listener: (resourceName: string) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceStop", listener: (resourceName: string) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "consoleCommand", listener: (...args: string[]) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "entityEnterColshape", listener: (colshape: Colshape, entity: Entity) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "entityLeaveColshape", listener: (colshape: Colshape, entity: Entity) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "explosion", listener: (source: Entity, type: number, pos: Vector3, fx: number) => boolean | void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerChangedVehicleSeat", listener: (player: Player, vehicle: Vehicle, oldSeat: number, newSeat: number) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerConnect", listener: (player: Player) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerDamage", listener: (victim: Player, attacker: Entity, weaponHash: number, damage: number) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerDeath", listener: (victim: Player, killer: Entity, weaponHash: number) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerDisconnect", listener: (player: Player, reason: string) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerEnteredVehicle", listener: (player: Player, vehicle: Vehicle, seat: number) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "playerLeftVehicle", listener: (player: Player, vehicle: Vehicle, seat: number) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "removeEntity", listener: (object: BaseObject) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "resourceStart", listener: (errored: boolean) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "resourceStop", listener: () => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "syncedMetaChange", listener: (entity: Entity, key: string, value: any, oldValue: any) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "streamSyncedMetaChange", listener: (entity: Entity, key: string, value: any, oldValue: any) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "globalMetaChange", listener: (key: string, value: any, oldValue: any) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "globalSyncedMetaChange", listener: (key: string, value: any, oldValue: any) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "vehicleDestroy", listener: (vehicle: Vehicle) => void): void;

  /**
   * Subscribes to server event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "weaponDamage", listener: (source: Entity, target: Entity, weaponHash: number, damage: number, offset: Vector3, bodyPart: number) => boolean | void): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onClient(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Restarts the specified resource.
   *
   * @param name Name of the resource.
   */
  export function restartResource(name: string): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   */
  export function setInterval(handler: () => void, miliseconds: number): number;

  /**
   * Schedules execution of handler once after the expiration of interval.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, before execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearTimeout} function to cancel the timer.
   */
  export function setTimeout(handler: () => void, miliseconds: number): number;

  /**
   * Starts the specified resource.
   *
   * @param name Name of the resource.
   */
  export function startResource(name: string): void;

  /**
   * Stops the specified resource.
   *
   * @param name Name of the resource.
   */
  export function stopResource(name: string): void;
}
