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
   * Resource name of the executing entity
   */
  export const resourceName: string;
  /**
   * The root directory of the alt:V server
   */
  export const rootDir: string;
  /**
   * The default entity dimension
   * 
   * @remarks Can only see itself but can be seen by itself and the public dimension (-1 to -2147483647)
   */
  export const DefaultDimension: number;
  /**
   * The global dimension
   * 
   * @remarks Can only see itself but can be seen by itself, the public dimension (-1 to -2147483647) and the private dimension (1 to 2147483647)
   */
  export const GlobalDimension: number;
 
  /**
   * Vehicle neon.
   * 
   * @remarks All individual neon locations can be toggled seperately
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
     */
    public dimension: number;

    /**
     * Object position.
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
     */
    public model: number | string;

    /**
     * Entity rotation.
     *
     * @remarks Values are provided in radians .
     */
    public rot: Vector3;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Entity | null;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     */
    public deleteSyncedMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasSyncedMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     * @param key The key of the value to store.
     */
    public setSyncedMeta(key: string, value: any): void;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     */
    public deleteStreamSyncedMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getStreamSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasStreamSyncedMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     * @param key The key of the value to store.
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
    public static readonly all: Array<Vehicle>;
    public activeRadioStation: number;
    public bodyAdditionalHealth: number;
    public bodyHealth: number;
    public customPrimaryColor: RGBA;
    public customSecondaryColor: RGBA;
    public customTires: boolean;
    public darkness: number;
    public dashboardColor: number;
    public readonly daylightOn: boolean;
    public readonly destroyed: boolean;
    public dirtLevel: number;
    public readonly driver: Player | null;
    public engineHealth: number;
    public engineOn: boolean;
    public readonly flamethrowerActive: boolean;
    public readonly handbrakeActive: boolean;
    public readonly hasArmoredWindows: number;
    public headlightColor: number;
    public interiorColor: number;
    public lightsMultiplier: number;
    public livery: number;
    public lockState: number;
    public manualEngineControl: boolean;
    public modKit: number;
    public readonly modKitsCount: number;
    public neon: VehicleNeon;
    public neonColor: RGBA;
    public readonly nightlightOn: boolean;
    public numberPlateIndex: number;
    public numberPlateText: string;
    public pearlColor: number;
    public petrolTankHealth: number;
    public primaryColor: number;
    public readonly repairsCount: number;
    public roofLivery: number;
    public roofOpened: boolean;
    public secondaryColor: number;
    public sirenActive: boolean;
    public tireSmokeColor: RGBA;
    public wheelColor: number;
    public readonly wheelsCount: number;
    public readonly wheelType: number;
    public readonly frontWheels: number;
    public readonly rearWheels: number;
    public windowTint: number;

    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number);

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Vehicle if it was found, otherwise null.
     */
    public static getByID(id: number): Vehicle | null;

    public doesWheelHasTire(wheelId: number): boolean;

    public getAppearanceDataBase64(): string;

    public getArmoredWindowHealth(windowId: number): number;

    public getArmoredWindowShootCount(windowId: number): number;

    public getBumperDamageLevel(bumperId: number): number;

    public getDamageStatusBase64(): string;

    public getDoorState(doorId: number): number;

    public getExtra(category: number): boolean;

    public getGamestateDataBase64(): string;

    public getHealthDataBase64(): string;

    public getMod(category: number): number;

    public getModsCount(category: number): number;

    public getPartBulletHoles(partId: number): number;

    public getPartDamageLevel(partId: number): number;

    public getScriptDataBase64(): string;

    public getWheelHealth(wheelId: number): number;

    public isLightDamaged(lightId: number): boolean;

    public isSpecialLightDamaged(specialLightId: number): boolean;

    public isWheelBurst(wheelId: number): boolean;

    public isWheelDetached(wheelId: number): boolean;

    public isWheelOnFire(wheelId: number): boolean;

    public isWindowDamaged(windowId: number): boolean;

    public isWindowOpened(windowId: number): boolean;

    public setAppearanceDataBase64(data: string): void;

    public setArmoredWindowHealth(windowId: number, health: number): void;

    public setArmoredWindowShootCount(windowId: number, count: number): void;

    public setBumperDamageLevel(bumperId: number, level: number): void;

    public setDamageStatusBase64(data: string): void;

    public setDoorState(doorId: number, state: number): void;

    public setExtra(category: number, state: boolean): void;

    public setGamestateDataBase64(data: string): void;

    public setHealthDataBase64(data: string): void;

    public setLightDamaged(lightId: number, isDamaged: boolean): void;

    public setMod(category: number, id: number): void;

    public setPartBulletHoles(partId: number, count: number): void;

    public setPartDamageLevel(partId: number, level: number): void;

    public setRearWheels(variation: number): void;

    public setScriptDataBase64(data: string): void;

    public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;

    public setWheelBurst(wheelId: number, state: boolean): void;

    public setWheelDetached(wheelId: number, state: boolean): void;

    public setWheelHasTire(wheelId: number, state: boolean): void;

    public setWheelHealth(wheelId: number, health: number): void;

    public setWheelOnFire(wheelId: number, state: boolean): void;

    public setWheels(type: number, variation: number): void;

    public setWindowDamaged(windowId: number, isDamaged: boolean): void;

    public setWindowOpened(windowId: number, state: boolean): void;
  }

  export class Blip extends WorldObject {

  }

  export class PointBlip extends Blip {
    constructor(type: number, x: number, y: number, z: number);
  }

  export class Colshape extends WorldObject {
    public colshapeType: number;

    public isEntityIn(entity: Entity): boolean;

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
    constructor(isSpatial: boolean, maxDistance: number);

    public addPlayer(player: Player): void;

    public isPlayerInChannel(player: Player): boolean;

    public isPlayerMuted(player: Player): boolean;

    public mutePlayer(player: Player): void;

    public removePlayer(player: Player): void;

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

  export function getNetTime(): number;

  export function getResourceExports(name: string): any;

  export function getResourceMain(name: string): string;

  export function getResourcePath(name: string): string;

  export function hasResource(name: string): boolean;

  /**
   *  Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string, from which hash will be created.
   */
  export function hash(str: string): number;

  export function log(...args: any[]): void;

  export function logError(...args: any[]): void;

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

  export function startResource(name: string): void;

  export function stopResource(name: string): void;
}
