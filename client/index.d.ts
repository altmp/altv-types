declare module "alt-client" {
  type StatName = "stamina" | "strength" | "lung_capacity" | "wheelie_ability" | "flying_ability" | "shooting_ability" | "stealth_ability";

  export interface DiscordOAuth2Token {
    readonly token: string
    readonly expires: number;
    readonly scopes: string;
  }

  export interface DiscordUser {
    readonly id: string;
    readonly name: string;
    readonly discriminator: string;
    readonly avatar: string;
  }

  export interface Vector2 {
    /** x component of Vector2 */
    readonly x: number;

    /** y component of Vector2 */
    readonly y: number;
  }

  export class Vector3 {
    /** x component of Vector3 */
    public readonly x: number;
    /** y component of Vector3 */
    public readonly y: number;
    /** z component of Vector3 */
    public readonly z: number;

    /**
     * @param x An x component.
     * @param y An y component.
     * @param z An z component.
     */
    constructor(x: number, y: number, z: number);
  }

  export class RGBA {
    /** r component of RGBA */
    public r: number;
    /** g component of RGBA */
    public g: number;
    /** b component of RGBA */
    public b: number;
    /** a component of RGBA */
    public a: number;

    /**
     * Creates a new RGBA (Red, Green, Blue, Alpha) color.
     * @param r Red value. (0-255)
     * @param g Green value. (0-255)
     * @param b Blue value. (0-255)
     * @param a Alpha value. (0-255)
     */
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
     * Object position
     */
    public pos: Vector3;
  }

  export class Entity extends WorldObject {
    /** Entity unique id */
    public readonly id: number;

    /** Internal game id that can be used in native calls */
    public readonly scriptID: number;

    /** Hash of entity model */
    public readonly model: number;

    /**
     * Object position
     */
    public readonly pos: Vector3;

    /** Entity rotation in radians */
    public readonly rot: Vector3;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Entity | null;

    /**
     * Retrieves the entity from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Entity | null;

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
  }

  export class Player extends Entity {
    /** Array with all players */
    public static readonly all: Array<Player>;

    /** Local player */
    public static readonly local: Player;

    /** Player talking state */
    public readonly isTalking: boolean;

    /** Player talking volume */
    public readonly micLevel: number;

    /** Player name */
    public readonly name: string;

    /** Player's vehicle, null if player is not in any vehicle */
    public readonly vehicle: Vehicle | null;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    /**
     * Retrieves the player from the pool.
     *
     * @param scriptID The script id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Player | null;
  }

  export class Vehicle extends Entity {
    /** Array with all vehicles */
    public static readonly all: Array<Vehicle>;

    /** Vehicle gear */
    public gear: number;

    /** Vehicle RPM [0, 1] */
    public readonly rpm: number;

    /** Vehicle wheel speed */
    public readonly speed: number;

    /** Vehicle wheel speed vector */
    public readonly speedVector: Vector3;

    /** Vehicle wheel count */
    public readonly wheelsCount: number;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Vehicle | null;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param scriptID The script id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Vehicle | null;
  }

  export class WebView extends BaseObject {
    /** View visibility state */
    public isVisible: boolean;
    /** View URL */
    public url: string;

    /**
     * Creates a fullscreen WebView.
     *
     * @param url URL.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage
     */
    constructor(url: string, isOverlay?: boolean);

    /**
     * Creates a WebView rendered on game object.
     *
     * @param url URL.
     * @param propHash Hash of object to render on.
     * @param targetTexture Name of object's texture to replace.
     */
    constructor(url: string, propHash: number, targetTexture: string);

    /**
     * Emits specified event across particular WebView.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    public emit(eventName: string, ...args: any[]): void;

    /**
     * Focuses the view so it can be interacted with.
     */
    public focus(): void;

    /**
     * Unsubscribes from WebView event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    public off(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: "load", listener: () => void): void;

    /**
     * Unfocuses the view so it can no longer be interacted with.
     */
    public unfocus(): void;
  }

  export class Blip extends WorldObject {
    /**
     * Alpha value of the blip. (transparency)
     * @remarks Accepted values are 0-255.
     */
    public alpha: number;
    public asMissionCreator: boolean;
    /**
     * Should the blip be bright.
     */
    public bright: boolean;
    /**
     * Category of the blip.
     */
    public category: number;
    /**
     * Color of the blip. 
     * @remarks The color is a GTA hud color. (See {@link https://wiki.altv.mp/Blips#Colors})
     */
    public color: number;
    public crewIndicatorVisible: boolean;
    public flashInterval: number;
    public flashTimer: number;
    public flashes: boolean;
    public flashesAlternate: boolean;
    public friendIndicatorVisible: boolean;
    public friendly: boolean;
    public gxtName: string;
    /**
     * Heading (Yaw rotation) of the blip.
     */
    public heading: number;
    /**
     * Should the heading indicator on the blip be visible.
     */
    public headingIndicatorVisible: boolean;
    public highDetail: boolean;
    /**
     * Name of the blip.
     * @remarks This will be the name displayed in the map legend.
     */
    public name: string;
    public number: number;
    /**
     * Should the outline indicator of the blip be visible.
     */
    public outlineIndicatorVisible: boolean;
    public priority: number;
    public pulse: boolean;
    /**
     * Should the route to the blip be displayed on the map.
     * @remarks The displayed route color can be set with {@link routeColor}.
     */
    public route: boolean;
    /**
     * The color of the route to the blip.
     * @remarks The color is a GTA hud color. (See {@link https://wiki.altv.mp/Blips#Colors})
     * This needs to be set after setting {@link route} to true.
     */
    public routeColor: number;
    /**
     * Scale of the blip.
     * @remarks >1 makes the blip bigger, <1 makes the blip smaller
     */
    public scale: number;
    /**
     * Secondary color of the blip.
     */
    public secondaryColor: number;
    /**
     * Should the blip be short range.
     * @remarks If true, the blip is not displayed on the edge of the minimap.
     */
    public shortRange: boolean;
    /**
     * Should the cone of the blip be shown.
     * @remarks This displays a little cone in front of the blip to show the direction its facing at.
     */
    public showCone: boolean;
    /**
     * Should the blip be shrinked.
     */
    public shrinked: boolean;
    /**
     * Sprite of the blip.
     * @remarks This resets all blip properties, so this should be set last.
     */
    public sprite: number;
    public tickVisible: boolean;

    /**
     * Fades the blip to the specified opacity for the specified amount of time.
     *
     * @param opacity Opacity value.
     * @param duration Fade duration in milliseconds.
     */
    public fade(opacity: number, duration: number): void;
  }

  export class AreaBlip extends Blip {
    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  export class RadiusBlip extends Blip {
    constructor(x: number, y: number, z: number, radius: number);
  }

  export class PointBlip extends Blip {
    constructor(x: number, y: number, z: number);
  }

  export class HandlingData {
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public breakForce: number;
    public camberStiffnesss: number;
    public centreOfMassOffset: Vector3;
    public clutchChangeRateScaleDownShift: number;
    public clutchChangeRateScaleUpShift: number;
    public collisionDamageMult: number;
    public damageFlags: number;
    public deformationDamageMult: number;
    public downforceModifier: number;
    public driveBiasFront: number;
    public driveInertia: number;
    public driveMaxFlatVel: number;
    public engineDamageMult: number;
    public handBrakeForce: number;
    public handlingFlags: number;
    public readonly handlingNameHash: number;
    public inertiaMultiplier: Vector3;
    public initialDragCoeff: number;
    public initialDriveForce: number;
    public initialDriveGears: number;
    public initialDriveMaxFlatVel: number;
    public lowSpeedTractionLossMult: number;
    public mass: number;
    public modelFlags: number;
    public monetaryValue: number;
    public oilVolume: number;
    public percentSubmerged: number;
    public percentSubmergedRatio: number;
    public petrolTankVolume: number;
    public rollCentreHeightFront: number;
    public rollCentreHeightRear: number;
    public seatOffsetDistX: number;
    public seatOffsetDistY: number;
    public seatOffsetDistZ: number;
    public steeringLock: number;
    public steeringLockRatio: number;
    public suspensionBiasFront: number;
    public suspensionBiasRear: number;
    public suspensionCompDamp: number;
    public suspensionForce: number;
    public suspensionLowerLimit: number;
    public suspensionRaise: number;
    public suspensionReboundDamp: number;
    public suspensionUpperLimit: number;
    public tractionBiasFront: number;
    public tractionBiasRear: number;
    public tractionCurveLateral: number;
    public tractionCurveLateralRatio: number;
    public tractionCurveMax: number;
    public tractionCurveMaxRatio: number;
    public tractionCurveMin: number;
    public tractionCurveMinRatio: number;
    public tractionLossMult: number;
    public tractionSpringDeltaMax: number;
    public tractionSpringDeltaMaxRatio: number;
    public unkFloat1: number;
    public unkFloat2: number;
    public unkFloat4: number;
    public unkFloat5: number;
    public weaponDamageMult: number;

    /**
     * Gets the handling data for the specified handling name.
     *
     * @param handlingHash Hash of the handling name.
     */
    public static getForModel(handlingHash: number): HandlingData;
  }

  export class MapZoomData {
    public fZoomScale: number;
    public fZoomSpeed: number;
    public fScrollSpeed: number;
    public vTilesX: number;
    public vTilesY: number;

    /**
     * Gets the map zoom data with the specified zoom data level.
     *
     * @param zoomData The zoom data level.
     * @returns The map zoom data.
     */
    public static get(zoomData: string): MapZoomData;

    /**
     * Resets all map zoom levels to their default state.
     */
    public static resetAll(): void;

    /**
     * Resets the map zoom data to the default state.
     */
    public reset(): void;
  }

  export class LocalStorage {
    /**
     * Retrieves an instance of the local storage to interact with.
     */
    public static get(): LocalStorage;

    /**
     * Deletes the specified key from the local storage.
     * 
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     * @param key Key in the local storage.
     */
    public delete(key: string): void;

    /**
     * Deletes all data from the local storage.
     * 
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     */
    public deleteAll(): void;

    /**
     * Gets the specified value associated with the key in the local storage.
     *
     * @returns The value stored in the local storage or undefined.
     */
    public get(key: string): any;

    /**
     * Saves the local storage to the disk.
     */
    public save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     *
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     */
    public set(key: string, value: any): void;
  }

  export class MemoryBuffer {
    constructor(size: number);

    /**
     * Gets the byte at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The byte at the memory offset.
     */
    public byte(offset: number): number;

    /**
     * Gets the double at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The double at the memory offset.
     */
    public double(offset: number): number;

    /**
     * Gets the float at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The float at the memory offset.
     */
    public float(offset: number): number;

    /**
     * Gets the int at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The int at the memory offset.
     */
    public int(offset: number): number;

    /**
     * Gets the long at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The long at the memory offset.
     */
    public long(offset: number): bigint;

    /**
     * Gets the short at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The short at the memory offset.
     */
    public short(offset: number): number;

    /**
     * Gets the string at the specified memory offset with the specified length.
     *
     * @param offset The memory offset.
     * @param length The string length.
     * @returns The string at the memory offset.
     */
    public string(offset: number, length: number): string;

    /**
     * Gets the unsigned byte at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned byte at the memory offset.
     */
    public ubyte(offset: number): number;

    /**
     * Gets the unisnged int at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned int at the memory offset.
     */
    public uint(offset: number): number;

    /**
     * Gets the unsigned long at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned long at the memory offset.
     */
    public ulong(offset: number): bigint;

    /**
     * Gets the unsigned short at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned short at the memory offset.
     */
    public ushort(offset: number): number;

    /**
     * Frees the memory buffer.
     */
    public free(): boolean;
  }

  export class Discord {
    public static readonly currentUser: DiscordUser | null;

    /**
     * @deprecated
     */
    public static requestOAuth2Token(): Promise<DiscordOAuth2Token>;
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
   * Creates a new GXT value (localized string).
   *
   * @remarks GXT values are used to localize strings into multiple languages. Can be get with {@link getGxtText}. Can be removed with {@link removeGxtText}.
   * @param key GXT name.
   * @param value GXT value.
   */
  export function addGxtText(key: string, value: string): void;

  /**
   * Executes a method on the minimap scaleform.
   *
   * @param methodName Name of the method.
   * @returns True if it was successful.
   */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

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
   * Emits specified event across client resources.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(name: string, ...args: any[]): void;

  /**
   * Emits specified event to server.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitServer(name: string, ...args: any[]): void;

  /**
   * Schedules execution of handler on every frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearEveryTick} function to cancel the timer.
   */
  export function everyTick(handler: () => void): number;

  /**
   * Returns whether the game controls are enabled.
   */
  export function gameControlsEnabled(): boolean;

  /**
   * Gets the current position of the cursor.
   */
  export function getCursorPos(): Vector2;

  /**
   * Gets a GXT value (localized string).
   *
   * @remarks Can be set with {@link addGxtText}. Can be removed with {@link removeGxtText}.
   * @param key GXT name.
   * @returns GXT value.
   */
  export function getGxtText(key: string): string;

  export function getLicenseHash(): string;

  /**
   * Gets the current game locale.
   *
   * @returns Current game locale.
   */
  export function getLocale(): string;

  /**
   * Gets the amount of milliseconds that have to pass every game minute.
   */
  export function getMsPerGameMinute(): number;

  /**
   * Gets a value of the specified statistic.
   *
   * @param statName Name of the statistic.
   */
  export function getStat(statName: StatName): number;

  /**
   * Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string from which hash will be created.
   */
  export function hash(str: string): number;

  /**
   * Returns state of console window.
   *
   * @returns True when console window is opened.
   */
  export function isConsoleOpen(): boolean;

  /**
   * Sandbox mode
   *
   * @returns True when alt:V client is launched in sandbox mode.
   */
  export function isInSandbox(): boolean;

  /**
   * Returns state of user interface and console window.
   *
   * @returns True when user interface or console window is opened.
   */
  export function isMenuOpen(): boolean;

  /**
   * Checks whether the specified model hash and name are loaded.
   *
   * @returns True if loaded.
   */
  export function isTextureExistInArchetype(modelHash: number, modelName: string): boolean;

  /**
   * @ignore Should not be used until fixed
   */
  export function loadModel(modelHash: number): void;

  /**
   * @ignore Should not be used until fixed
   */
  export function loadModelAsync(modelHash: number): void;

  /**
   * Prints the arguments to the ingame console. (F8)
   */
  export function log(...args: any[]): void;

  /**
   * Prints the arguments to the ingame console as an error. (F8)
   */
  export function logError(...args: any[]): void;

  /**
   * Prints the arguments to the ingame console as a warning. (F8)
   */
  export function logWarning(...args: any[]): void;

  /**
   * Schedules execution of handler on next frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: () => void): number;

  /**
   * Unsubscribes from client event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from server event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Gets fired when an error occurs on any resource.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceError", listener: (resourceName: string) => void): void;

  /**
   * Gets fired when any resource starts.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceStart", listener: (resourceName: string) => void): void;

  /**
   * Gets fired when any resource stops.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "anyResourceStop", listener: (resourceName: string) => void): void;

  /**
   * Gets fired when the player is fully connected to the server.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "connectionComplete", listener: () => void): void;

  /**
   * Gets fired when a command is entered into the client console. (F8)
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "consoleCommand", listener: (name: string, ...args: string[]) => void): void;

  /**
   * Gets fired when the local player disconnects from the server.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "disconnect", listener: () => void): void;

  /**
   * Gets fired when a game entity (e.g. a vehicle) gets created in the world.
   *
   * @remarks This event gets fired every time you enter the stream range of an entity.
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "gameEntityCreate", listener: (entity: Entity) => void): void;

  /**
   * Gets fired when a game entity (e.g. a vehicle) gets removed from the world.
   *
   * @remarks This event gets fired every time you leave the stream range of an entity.
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "gameEntityDestroy", listener: (entity: Entity) => void): void;

  /**
   * Gets fired when you press down on a button.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "keydown", listener: (key: number) => void): void;

  /**
   * Gets fired when you release a button.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "keyup", listener: (key: number) => void): void;

  /**
   * Gets fired when an entity gets completely removed.
   *
   * @remarks This is when the entity is completely removed, for a stream out event see gameEntityDestroy event
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "removeEntity", listener: (object: BaseObject) => void): void;

  /**
   * Gets fired when the resource starts.
   *
   * @remarks This only fires for the resource that this listener was created in.
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "resourceStart", listener: (errored: boolean) => void): void;

  /**
   * Gets fired when the resource stops.
   *
   * @remarks This only fires for the resource that this listener was created in.
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "resourceStop", listener: () => void): void;

  /**
   * Gets fired when the synced meta on any entity has changed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "syncedMetaChange", listener: (entity: Entity, key: string, value: any, oldValue: any) => void): void;

  /**
   * Gets fired when the stream synced meta on any entity has changed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "streamSyncedMetaChange", listener: (entity: Entity, key: string, value: any, oldValue: any) => void): void;

  /**
   * Gets fired when any global meta has changed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "globalMetaChange", listener: (key: string, value: any, oldValue: any) => void): void;

  /**
   * Gets fired when any global synced meta has changed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: "globalSyncedMetaChange", listener: (key: string, value: any, oldValue: any) => void): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Removes a GXT value (localized string).
   *
   * @remarks Can be set with {@link addGxtText}. Can be get with {@link getGxtText}.
   * @param key GXT name.
   */
  export function removeGxtText(key: string): void;

  /**
   * Removes the specified ipl from the world.
   * 
   * @remarks Can be requested with {@link requestIpl}.
   * An IPL is a missing 3D structure in the GTA:V world.
   * IPLs can be loaded to fill in missing structures and gaps to change the GTA:V world.
   * @param iplName Name of the ipl.
   */
  export function removeIpl(iplName: string): void;

  /**
   * Loads the specified ipl into the world.
   *
   * @remarks The ipl gets loaded synchronously. (Can be removed with {@link removeIpl})
   * An IPL is a missing 3D structure in the GTA:V world.
   * IPLs can be loaded to fill in missing structures and gaps to change the GTA:V world.
   * @param iplName Name of the ipl.
   */
  export function requestIpl(iplName: string): void;

  /**
   * Output is saved to screenshots folder in root directory.
   *
   * @remarks Only available in sandbox mode.
   * @param stem Filename without extension.
   * @return Return is dependent on the success of the operation.
   */
  export function saveScreenshot(stem: string): boolean;

  /**
   * Resets a statistic to its default value.
   *
   * @param statName Name of the statistic.
   */
  export function resetStat(statName: StatName): void;

  /**
   * Freezes the gameplay camera rotation and position.
   *
   * @param state Should the cam be frozen.
   */
  export function setCamFrozen(state: boolean): void;

  /**
   * Sets the position of the cursor.
   *
   * @param pos A 2 dimensional vector representing a point on the screen.
   */
  export function setCursorPos(pos: Vector2): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   */
  export function setInterval(handler: () => void, miliseconds: number): number;

  /**
   * Sets the model of the local player ped.
   *
   * @param modelName Name of the model.
   */
  export function setModel(modelName: string): void;

  /**
   * Sets the duration of one game minute in real time.
   *
   * @param miliseconds Amount of milliseconds that should pass every game minute.
   */
  export function setMsPerGameMinute(miliseconds: number): void;

  /**
   * Sets a statistic to desired value.
   *
   * @param statName Name of the statistic.
   * @param value Value of the statistic you want to set.
   */
  export function setStat(statName: StatName, value: number): void;

  /**
   * Schedules execution of handler once after the expiration of interval.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, before execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearTimeout} function to cancel the timer.
   */
  export function setTimeout(handler: () => void, miliseconds: number): number;

  /**
   * Sets the current weather cycle.
   *
   * @remarks Length of the weathers array has to be the same as the multipliers array.
   * @param weathers An array containing the available weathers ids.
   * @param multipliers An array containing the multipliers for every weather.
   */
  export function setWeatherCycle(weathers: Array<number>, multipliers: Array<number>): void;

  /**
   * Toggles the state of the weather sync.
   *
   * @remarks The weather can be set with {@link setWeatherCycle}.
   * @param isActive Should the weather sync be active.
   */
  export function setWeatherSyncActive(isActive: boolean): void;

  /**
   * Changes the visibility of cursor.
   *
   * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
   * @param state A boolean indicating whenever cursor should be visible or not.
   */
  export function showCursor(state: boolean): void;

  /**
   * Toggles the game controls.
   *
   * @param state A boolean indicating if the controls should be enabled.
   */
  export function toggleGameControls(state: boolean): void;

  /**
   * Toggles the voice controls.
   *
   * @param state A boolean indicating if the voice controls should be enabled.
   */
  export function toggleVoiceControls(state: boolean): void;
}
