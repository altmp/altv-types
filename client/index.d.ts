declare module "alt-client" {
  export const enum Locale {
    Arabic = "ar",
    Belarusian = "by",
    Czech = "cz",
    German = "de",
    English = "en",
    Spanish = "es",
    Farsi = "fa",
    French = "fr",
    Hebrew = "he",
    Hungarian = "hu",
    Indonesian = "id",
    Hindi = "in_hd", // Wrong tag (hi_in)
    Malayalam = "in_ml", // Wrong tag (ml_in)
    Telugu = "in_tl", // Wrong tag (te_in)
    Tamil = "in_tm", // Wrong tag (ta_in)
    Italian = "it",
    Lithuanian = "lt",
    Latvian = "lv",
    NorwegianBokmal = "nb_no",
    NorwegianNynorsk = "nn_no",
    Polish = "pl",
    Portugese = "pt",
    BrazilianPortuguese = "pt_br",
    Romanian = "ro",
    Serbian = "rs", // Wrong tag (sr)
    Russian = "ru",
    Slovak = "sk",
    Thai = "th",
    Turkish = "tr",
    Ukrainian = "ua", // Wrong tag (uk)
    ChineseSimplified = "zh_cn",
    ChineseTraditional = "zh_tw"
  }

  export const enum Permission {
    None,
    ScreenCapture,
    WebRTC,
    All
  }

  export const enum PermissionState {
    Allowed,
    Denied,
    Unspecified,
    Failed
  }

  export const enum StatName {
    Stamina = "stamina",
    Strength = "strength",
    LungCapacity = "lung_capacity",
    Wheelie = "wheelie_ability",
    Flying = "flying_ability",
    Shooting = "shooting_ability",
    Stealth = "stealth_ability"
  }

  export const enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary"
  }

  export const enum BaseObjectType {
    Player,
    Vehicle,
    Blip,
    WebView,
    VoiceChannel,
    Colshape,
    Checkpoint
  }

  export const enum CheckpointType {
    CylinderSingleArrow,
    CylinderDoubleArrow,
    CylinderTripleArrow,
    CylinderCycleArrow,
    CylinderCheckerboard,
    CylinderWrench,
    CylinderSingleArrow2,
    CylinderDoubleArrow2,
    CylinderTripleArrow2,
    CylinderCycleArrow2,
    CylinderCheckerboard2,
    CylinderWrench2,
    RingSingleArrow,
    RingDoubleArrow,
    RingTripleArrow,
    RingCycleArrow,
    RingCheckerboard,
    SingleArrow,
    DoubleArrow,
    TripleArrow,
    CycleArrow,
    Checkerboard,
    CylinderSingleArrow3,
    CylinderDoubleArrow3,
    CylinderTripleArrow3,
    CylinderCycleArrow3,
    CylinderCheckerboard3,
    CylinderSingleArrow4,
    CylinderDoubleArrow4,
    CylinderTripleArrow4,
    CylinderCycleArrow4,
    CylinderCheckerboard4,
    CylinderSingleArrow5,
    CylinderDoubleArrow5,
    CylinderTripleArrow5,
    CylinderCycleArrow5,
    CylinderCheckerboard5,
    RingPlaneUp,
    RingPlaneLeft,
    RingPlaneRight,
    RingPlaneDown,
    Empty,
    Ring,
    Empty2,
    Cylinder,
    Cylinder1,
    Cylinder2,
    Cylinder3,
    Cylinder4,
    Cylinder5,
    Empty3,
    Empty4,
    Empty5,
    Empty6,
    RingDollar,
    RingWolf,
    RingQuestionMark,
    RingPlane,
    RingChopper,
    RingBoat,
    RingCar,
    RingBike,
    RingBicycle,
    RingTruck,
    RingParachute,
    RingJetpack,
    RingWhirl
  }

  export const enum WebSocketReadyState {
    Connecting,
    Open,
    Closing,
    Closed
  }

  export interface IClientEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    changedVehicleSeat: (vehicle: Vehicle, oldSeat: number, seat: number) => void;
    connectionComplete: () => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    disconnect: () => void;
    enteredVehicle: (vehicle: Vehicle, seat: number) => void;
    gameEntityCreate: (entity: Entity) => void;
    gameEntityDestroy: (entity: Entity) => void;
    keydown: (key: number) => void;
    keyup: (key: number) => void;
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: BaseObject) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    /**
     * No particular usage for now, stick to {@link everyTick} instead.
     *
     * @beta
     */
    render: () => void;
  }

  export interface IDiscordOAuth2Token {
    readonly token: string;
    readonly expires: number;
    readonly scopes: string;
  }

  export interface IDiscordUser {
    readonly id: string;
    readonly name: string;
    readonly discriminator: string;
    readonly avatar: string;
  }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to particular vehicle instance, as opposed to the {@link HandlingData}.
   *
   * @remarks Changes will be reflected only on a particular instance of the vehicle. On creation, model handling will be used as a base and changed properties will be added on top of it.
   */
  export interface IVehicleHandling {
    readonly handlingNameHash: number;
    acceleration: number;
    antiRollBarBiasFront: number;
    antiRollBarBiasRear: number;
    antiRollBarForce: number;
    brakeBiasFront: number;
    brakeBiasRear: number;
    brakeForce: number;
    camberStiffnesss: number;
    centreOfMassOffset: Vector3;
    clutchChangeRateScaleDownShift: number;
    clutchChangeRateScaleUpShift: number;
    collisionDamageMult: number;
    damageFlags: number;
    deformationDamageMult: number;
    downforceModifier: number;
    driveBiasFront: number;
    driveInertia: number;
    driveMaxFlatVel: number;
    engineDamageMult: number;
    handBrakeForce: number;
    handlingFlags: number;
    inertiaMultiplier: Vector3;
    initialDragCoeff: number;
    initialDriveForce: number;
    initialDriveGears: number;
    initialDriveMaxFlatVel: number;
    lowSpeedTractionLossMult: number;
    mass: number;
    modelFlags: number;
    monetaryValue: number;
    oilVolume: number;
    percentSubmerged: number;
    percentSubmergedRatio: number;
    petrolTankVolume: number;
    rollCentreHeightFront: number;
    rollCentreHeightRear: number;
    seatOffsetDistX: number;
    seatOffsetDistY: number;
    seatOffsetDistZ: number;
    steeringLock: number;
    steeringLockRatio: number;
    suspensionBiasFront: number;
    suspensionBiasRear: number;
    suspensionCompDamp: number;
    suspensionForce: number;
    suspensionLowerLimit: number;
    suspensionRaise: number;
    suspensionReboundDamp: number;
    suspensionUpperLimit: number;
    tractionBiasFront: number;
    tractionBiasRear: number;
    tractionCurveLateral: number;
    tractionCurveLateralRatio: number;
    tractionCurveMax: number;
    tractionCurveMaxRatio: number;
    tractionCurveMin: number;
    tractionCurveMinRatio: number;
    tractionLossMult: number;
    tractionSpringDeltaMax: number;
    tractionSpringDeltaMaxRatio: number;
    unkFloat1: number;
    unkFloat2: number;
    unkFloat4: number;
    unkFloat5: number;
    weaponDamageMult: number;

    /**
     * Indicates whether vehicle handling was modified.
     *
     * @returns `true` if vehicle handling was modified; otherwise, `false`.
     */
    isModified(): boolean;

    /**
     * Resets the vehicle handling back to a model handling.
     */
    reset(): void;
  }

  export interface IVehicleNeon {
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
  }

  export interface IVector2 {
    readonly x: number;

    readonly y: number;
  }

  export interface IVector3 {
    readonly x: number;

    readonly y: number;

    readonly z: number;
  }

  /**
   * Resource name of the executing resource.
   */
  export const resourceName: string;

  /**
   * Represents the current client version.
   *
   * @remarks It's a slighty modified semantic versioning specification, which can be matched using this regular expression pattern `^(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))$`.
   */
  export const version: string;

  /**
   * Represents the current client SDK version.
   *
   * @remarks It's the version of the SDK the current runtime was compiled with.
   */
  export const sdkVersion: number;

  /**
   * Represents the current client branch.
   */
  export const branch: string;

  export class Vector3 {
    public readonly x: number;

    public readonly y: number;

    public readonly z: number;

    constructor(x: number, y: number, z: number);

    constructor(arr: [number, number, number]);

    constructor(obj: IVector3);

    public get length(): number;

    public toArray(): [number, number, number];

    public add(x: number, y: number, z: number): Vector3;

    public add(value: number): Vector3;

    public add(array: [number, number, number]): Vector3;

    public add(vector: IVector3): Vector3;

    public sub(x: number, y: number, z: number): Vector3;

    public sub(value: number): Vector3;

    public sub(array: [number, number, number]): Vector3;

    public sub(vector: IVector3): Vector3;

    public div(x: number, y: number, z: number): Vector3;

    public div(value: number): Vector3;

    public div(array: [number, number, number]): Vector3;

    public div(vector: IVector3): Vector3;

    public mul(x: number, y: number, z: number): Vector3;

    public mul(value: number): Vector3;

    public mul(array: [number, number, number]): Vector3;

    public mul(vector: IVector3): Vector3;

    public negative(): Vector3;

    public normalize(): Vector3;

    public distanceTo(vector: IVector3): number;

    public angleTo(vector: IVector3): Vector3;

    public angleToDegrees(vector: IVector3): Vector3;

    public toRadians(): Vector3;

    public toDegrees(): Vector3;

    public isInRange(vector: IVector3, range: number): boolean;
  }

  export class Vector2 {
    public readonly x: number;

    public readonly y: number;

    constructor(x: number, y: number);

    constructor(arr: [number, number]);

    constructor(obj: IVector2);

    public get length(): number;

    public toArray(): [number, number];

    public add(x: number, y: number): Vector2;

    public add(value: number): Vector2;

    public add(array: [number, number]): Vector2;

    public add(vector: IVector2): Vector2;

    public sub(x: number, y: number): Vector2;

    public sub(value: number): Vector2;

    public sub(array: [number, number]): Vector2;

    public sub(vector: IVector2): Vector2;

    public div(x: number, y: number): Vector2;

    public div(value: number): Vector2;

    public div(array: [number, number]): Vector2;

    public div(vector: IVector2): Vector2;

    public mul(x: number, y: number): Vector2;

    public mul(value: number): Vector2;

    public mul(array: [number, number]): Vector2;

    public mul(vector: IVector2): Vector2;

    public negative(): Vector2;

    public normalize(): Vector2;

    public distanceTo(vector: IVector2): number;

    public angleTo(vector: IVector2): Vector2;

    public angleToDegrees(vector: IVector2): Vector2;

    public toRadians(): Vector2;

    public toDegrees(): Vector2;

    public isInRange(vector: IVector2, range: number): boolean;
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
     * @param r An r component.
     * @param g An g component.
     * @param b An b component.
     * @param a An a component.
     */
    constructor(r: number, g: number, b: number, a: number);
  }

  export class BaseObject {
    /**
     * Type of the object.
     */
    public readonly type: BaseObjectType;

    /**
     * Object usability.
     * 
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

  export class Checkpoint extends WorldObject {
    public checkpointType: CheckpointType;
    public nextPos: Vector3;
    public radius: number;
    public height: number;
    public color: RGBA;

    constructor(type: CheckpointType, pos: Vector3, nextPos: Vector3, radius: number, height: number, rgbcolor: RGBA);

    public isEntityIn(entity: Entity): boolean;
    public isPointIn(pos: Vector3): boolean;
  }

  export class Entity extends WorldObject {
    public static readonly all: Array<Entity>;

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

    public readonly visible: boolean;

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
     * Current weapon components.
     */
    public readonly currentWeaponComponents: Array<number>;

    /**
     * Tint index for currently equipped weapon.
     *
     * @alpha
     */
    //public readonly currentWeaponTintIndex: number;

    /**
     * Currently equipped weapon.
     */
    public readonly currentWeapon: number;

    /**
     * Is the player currently jumping.
     *
     * @alpha
     */
    //public readonly isJumping: boolean;

    /**
     * Is the player currently in ragdoll.
     */
    public readonly isInRagdoll: boolean;

    /**
     * Is the player currently aiming.
     */
    public readonly isAiming: boolean;

    /**
     * Is the player currently shooting with a weapon.
     */
    //public readonly isShooting: boolean;

    /**
     * Is the player currently reloading their weapon.
     */
    //public readonly isReloading: boolean;

    /**
     * Current armour.
     */
    public readonly armour: number;

    /**
     * Max available armour value.
     */
    public readonly maxArmour: number;

    /**
     * Current player movement speed.
     */
    public readonly moveSpeed: number;

    /**
     * Position the player is currently aiming at.
     */
    public readonly aimPos: Vector3;

    /**
     * Rotation of the head of the player.
     */
    public readonly headRot: Vector3;

    /**
     * Curent seat the player is sitting in.
     */
    public readonly seat: number;

    /**
     * The entity the player is aiming at.
     */
    public readonly entityAimingAt: Entity | null;

    /**
     * The current aim offset of the player.
     */
    public readonly entityAimOffset: Vector3 | null;

    /**
     * Is the flashlight of the player activated.
     */
    public readonly flashlightActive: boolean;

    /**
     * Current health of the player.
     */
    public readonly health: number;

    /**
     * Current max health of the player.
     */
    public readonly maxHealth: number;

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
    public readonly gear: number;

    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     */
    public handling: IVehicleHandling;

    /**
      * Vehicle RPM.
      *
      * @returns Normalised value on a scale of [0, 1].
      */
    public readonly rpm: number;

    /**
     * Vehicle wheels speed.
     */
    public readonly speed: number;

    /**
     * Vehicle speed vector.
     */
    public readonly speedVector: Vector3;

    /**
      * Vehicle wheels count.
      */
    public readonly wheelsCount: number;

    /**
     * Is the vehicle destroyed.
     *
     * @alpha
     */
    //public readonly isDestroyed: boolean;

    /**
     * Available modkits for the vehicle.
     *
     * @alpha
     */
    //public readonly modKitsCount: number;

    /**
     * Current vehicle modkit.
     *
     * @alpha
     */
    //public readonly modKit: number;

    /**
     * Vehicle primary color.
     *
     * @alpha
     */
    //public readonly primaryColor: number;

    /**
     * Custom (RGB) vehicle primary color.
     *
     * @alpha
     */
    //public readonly customPrimaryColor: RGBA;

    /**
     * Vehicle secondary color.
     *
     * @alpha
     */
    //public readonly secondaryColor: number;

    /**
     * Custom (RGB) vehicle secondary color.
     *
     * @alpha
     */
    //public readonly customSecondaryColor: RGBA;

    /**
     * Vehicle pearl color.
     *
     * @alpha
     */
    //public readonly pearlColor: number;

    /**
     * Vehicle wheel color.
     *
     * @alpha
     */
    //public readonly wheelColor: number;

    /**
     * Vehicle interior color.
     *
     * @alpha
     */
    //public readonly interiorColor: number;

    /**
     * Vehicle dashboard color.
     *
     * @alpha
     */
    //public readonly dashboardColor: number;

    /**
     * Vehicle tire smoke color.
     *
     * @alpha
     */
    //public readonly tireSmokeColor: number;

    /**
     * Vehicle wheel type.
     *
     * @alpha
     */
    //public readonly wheelType: number;

    /**
     * Vehicle front wheels variation.
     *
     * @alpha
     */
    //public readonly frontWheels: number;

    /**
     * Vehicle rear wheels variation.
     *
     * @alpha
     */
    //public readonly rearWheels: number;

    /**
     * Are custom tires active.
     *
     * @alpha
     */
    //public readonly customTires: boolean;

    /**
     * Vehicle darkness.
     *
     * @alpha
     */
    //public readonly darkness: number;

    /**
     * Vehicle number plate type index.
     *
     * @alpha
     */
    //public readonly numberPlateIndex: number;

    /**
     * Vehicle number plate text.
     *
     * @alpha
     */
    //public readonly numberPlateText: string;

    /**
     * Vehicle window tint.
     *
     * @alpha
     */
    //public readonly windowTint: number;

    /**
     * Vehicle dirt level.
     *
     * @alpha
     */
    //public readonly dirtLevel: number;

    /**
     * Vehicle neon.
     *
     * @alpha
     */
    //public readonly neon: IVehicleNeon;

    /**
     * Vehicle neon color.
     *
     * @alpha
     */
    //public readonly neonColor: RGBA;

    /**
     * Vehicle livery.
     *
     * @alpha
     */
    //public readonly livery: number;

    /**
     * Vehicle roof livery.
     *
     * @alpha
     */
    //public readonly roofLivery: number;

    /**
     * Vehicle engine state.
     *
     * @alpha
     */
    //public readonly engineOn: boolean;

    /**
     * Vehicle handbrake state.
     *
     * @alpha
     */
    //public readonly handbrakeActive: boolean;

    /**
     * Vehicle headlight color.
     *
     * @alpha
     */
    //public readonly headlightColor: number;

    /**
     * Vehicle active radio station.
     *
     * @alpha
     */
    //public readonly activeRadioStation: number;

    /**
     * Vehicle siren state.
     *
     * @alpha
     */
    //public readonly sirenActive: boolean;

    /**
     * Vehicle lock state.
     *
     * @alpha
     */
    //public readonly lockState: number;

    /**
     * Vehicle daylight state.
     *
     * @alpha
     */
    //public readonly daylightOn: boolean;

    /**
     * Vehicle nightlight state.
     *
     * @alpha
     */
    //public readonly nightlightOn: boolean;

    /**
     * Vehicle roof state.
     *
     * @alpha
     */
    //public readonly roofState: number;

    /**
     * Vehicle flamethrower state.
     *
     * @alpha
     */
    //public readonly flamethrowerActive: boolean;

    /**
     * Vehicle lights multiplier.
     *
     * @alpha
     */
    //public readonly lightsMultiplier: number;

    /**
     * The vehicle's engine health.
     *
     * @alpha
     */
    //public readonly engineHealth: number;

    /**
     * The vehicle's petrol tank health.
     *
     * @alpha
     */
    //public readonly petrolTankHealth: number;

    /**
     * Vehicle repairs count.
     *
     * @alpha
     */
    //public readonly repairsCount: number;

    /**
     * The vehicle's body health.
     *
     * @alpha
     */
    //public readonly bodyHealth: number;

    /**
     * The vehicle's additional body health.
     *
     * @alpha
     */
    //public readonly bodyAdditionalHealth: number;

    /**
     * Does the vehicle currently have the bulletproof windows?
     *
     * @alpha
     */
    //public readonly hasArmoredWindows: boolean;

    /**
     * Determines whether the vehicle's engine should be turned on/off automatically.
     *
     * @alpha
     */
    //public readonly manualEngineControl: boolean;

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
     * @param url URL of the html file.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage.
     */
    constructor(url: string, isOverlay?: boolean);

    /**
     * Creates a WebView.
     *
     * @param url URL of the html file.
     * @param pos x, y coordinates of the position.
     */
    constructor(url: string, pos: IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     */
    constructor(url: string, pos: IVector2, size: IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     */
    constructor(url: string, isOverlay: boolean, pos: IVector2, size: IVector2);

    /**
     * Creates a WebView rendered on game object.
     *
     * @param url URL of the html file.
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
     * Focuses the webview so it can be interacted with.
     */
    public focus(): void;

    /**
     * Unfocuses the webview so it ignores user input.
     */
    public unfocus(): void;
  }

  export class Blip extends WorldObject {
    public static routeColor: RGBA;

    public alpha: number;

    public asMissionCreator: boolean;

    public bright: boolean;

    public category: number;

    public color: number;

    public crewIndicatorVisible: boolean;

    public display: number;

    public flashes: boolean;

    public flashesAlternate: boolean;

    public flashInterval: number;

    public flashTimer: number;

    public friendIndicatorVisible: boolean;

    public gxtName: string;

    public heading: number;

    public headingIndicatorVisible: boolean;

    public highDetail: boolean;

    public name: string;

    public number: number;

    public outlineIndicatorVisible: boolean;

    public priority: number;

    public pulse: boolean;

    public route: boolean;

    public scale: number;

    public secondaryColor: number | RGBA;

    public shortRange: boolean;

    public showCone: boolean;

    public shrinked: boolean;

    public size: Vector2;

    public sprite: number;

    public tickVisible: boolean;

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

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to all vehicle instances, as opposed to the {@link Vehicle.handling}.
   *
   * @remarks Changes will be reflected on every vehicle using this particular handling, but might require vehicle recreating for changes to apply properly.
   */
  export class HandlingData {
    public readonly handlingNameHash: number;
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public brakeForce: number;
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
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     */
    public static getForHandlingName(handlingHash: number): HandlingData;

    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @deprecated See {@link getForHandlingName}.
     */
    public static getForModelName(handlingHash: number): HandlingData;
  }

  export class MapZoomData {
    public fZoomScale: number;
    public fZoomSpeed: number;
    public fScrollSpeed: number;
    public vTilesX: number;
    public vTilesY: number;
    
    constructor(zoomDataId: number);
    
    public static get(zoomData: string): MapZoomData;

    public static resetAll(): void;

    public reset(): void;
  }

  export class LocalStorage {
    /**
     * Gets the local storage instance.
     */
    public static get(): LocalStorage;

    /**
     * Deletes the specified key from the local storage.
     */
    public delete(key: string): void;

    /**
     * Deletes all keys from the local storage.
     */
    public deleteAll(): void;

    /**
     * @remarks Alias for deleteAll.
     */
    public clear(): void;

    /**
     * Gets the value from the specified key in the local storage.
     */
    public get(key: string): any;

    /**
     * Saves the changes to the disk.
     */
    public save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     */
    public set(key: string, value: any): void;
  }

  export class MemoryBuffer {
    constructor(size: number);

    public byte(offset: number): number;

    public double(offset: number): number;

    public float(offset: number): number;

    public int(offset: number): number;

    public long(offset: number): bigint;

    public short(offset: number): number;

    public string(offset: number, length: number): string;

    public ubyte(offset: number): number;

    public uint(offset: number): number;

    public ulong(offset: number): bigint;

    public ushort(offset: number): number;

    public address(offset: number): bigint;

    public free(): boolean;
  }

  export class Discord {
    public static readonly currentUser: IDiscordUser | null;
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
    public static read(filename: string, encoding?: FileEncoding.Utf8 | FileEncoding.Utf16): string;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */
    public static read(filename: string, encoding: FileEncoding.Binary): ArrayBuffer;
  }

  export class Voice {
    /**
     * Determines whether the microphone input is currently disabled.
     */
    static muteInput: boolean;
    
    /**
     * Determines if the voice activation is enabled.
     * 
     * @alpha
     */
    static activityInputEnabled: boolean;

    /**
     * Returns the keycode of the voice activation key.
     * 
     * @alpha
     */
    static activationKey: number;
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
   * Adds a new gxt text with the specified value.
   * 
   * @param key Gxt text name.
   * @param value Gxt text value.
   */
  export function addGxtText(key: string, value: string): void;

  /**
   * Executes the specified scaleform method on the minimap.
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
   * Returns whether the game controls are currently enabled.
   */
  export function gameControlsEnabled(): boolean;

  /**
   * Gets the current position of the cursor.
   */
  export function getCursorPos(): Vector2;

  /**
   * Gets the value of the specified gxt text.
   * 
   * @param key Gxt text name.
   */
  export function getGxtText(key: string): string;

  export function getLicenseHash(): string;

  /**
   * Gets the current alt:V locale.
   */
  export function getLocale(): string;

  /**
   * Gets the current milliseconds per game minute.
   * 
   * @remarks This is set with the {@link setMsPerGameMinute} function.
   */
  export function getMsPerGameMinute(): number;

  /**
   * Gets the state of the specified permission.
   * 
   * @param permId Permission id.
   * @returns Permission state.
   */
  export function getPermissionState(permId: Permission): PermissionState;

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
   * Returns state of game window.
   *
   * @returns True when game window is focused.
   */
  export function isGameFocused(): boolean;

  /**
   * Returns if alt:V is in streamer mode.
   *
   * @returns True when alt:V client is launched in streamer mode.
   *
   */
  export function isInStreamerMode(): boolean;

  /**
   * Returns if alt:V is in debug mode.
   * 
   * @returns True when alt:V client is launched with debug mode enabled.
   */
  export function isInDebug(): boolean;

  /**
   * Returns whether voice activity input is enabled in alt:V settings.
   * 
   * @returns True when voice activity input is enabled in alt:V settings.
   * 
   * @deprecated Use alt.Voice.activityInputEnabled instead.
   */
  export function isVoiceActivityInputEnabled(): boolean;

  /**
   * Returns whether the specified key is toggled.
   * 
   * @param key Keycode.
   */
  export function isKeyToggled(key: number): boolean;
  
  /**
   * Determines whether the specified key is pressed.
   *
   * @param Keycode of the key.
   */
  export function isKeyDown(key: number): boolean;

  /**
   * Returns state of user interface and console window.
   *
   * @returns True when user interface or console window is opened.
   */
  export function isMenuOpen(): boolean;

  export function isTextureExistInArchetype(modelHash: number, modelName: string): boolean;

  /**
   * Loads a model into memory synchronously.
   * 
   * @param modelHash Hash of the model.
   */
  export function loadModel(modelHash: number): void;

  /**
   * Loads a model into memory asynchronously.
   * 
   * @param modelHash Hash of the model.
   */
  export function loadModelAsync(modelHash: number): void;

  /**
   * Logs the specified arguments to the console.
   */
  export function log(...args: any[]): void;

  /**
   * Logs the specified arguments as an error to the console.
   */
  export function logError(...args: any[]): void;

  /**
   * Logs the specified arguments as a warning to the console.
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
   * Unsubscribes from client event with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from server event with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to client event with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to client event with specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to client event with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<S extends string>(event: Exclude<S, keyof IClientEvent>, listener: (...args: any[]) => void | Promise<void>): void;

  /**
   * Subscribes to client event with specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<S extends string>(event: Exclude<S, keyof IClientEvent>, listener: (...args: any[]) => void | Promise<void>): void;

  /**
   * Subscribes to server event with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to server event with specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onceServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Removes the specified gxt text.
   * 
   * @param key Gxt text name.
   */
  export function removeGxtText(key: string): void;

  /**
   * Unloads the specified ipl.
   * 
   * @param iplName Name of the ipl.
   */
  export function removeIpl(iplName: string): void;

  /**
   * Loads the specified ipl.
   * 
   * @param iplName Name of the ipl.
   */
  export function requestIpl(iplName: string): void;

  /**
   * The output is returned as a base64 string.
   *
   * @return Return is dependent on the success of the operation.
   *
   */
  export function takeScreenshot(): Promise<string>;

  /**
   * The output is returned as a base64 string.
   *
   * @return Return is dependent on the success of the operation.
   * @remarks This only takes a screenshot of the raw GTA:V window. WebViews, game overlays etc. won't be captured.
   *
   */
  export function takeScreenshotGameOnly(): Promise<string>;

  /**
   * Resets a statistic to its default value.
   *
   * @param statName Name of the statistic.
   */
  export function resetStat(statName: StatName): void;

  /**
   * Freezes the camera in place so it doesn't change position or rotation.
   * 
   * @remarks You can still move your character even if your camera is frozen.
   * @param state True to freeze the camera, false to unfreeze the camera.
   */
  export function setCamFrozen(state: boolean): void;

  /**
   * Sets the specified config flag to the specified state.
   * 
   * @param flag Config flag name.
   * @param state Config flag state.
   */
  export function setConfigFlag(flag: string, state: boolean): void;

  /**
   * Returns the state of the specified config flag.
   * 
   * @param flag Config flag name.
   * @returns State of the specified config flag.
   */
  export function getConfigFlag(flag: string): boolean;

  /**
   * Returns whether the specified config flag exists.
   * 
   * @param flag Config flag name.
   * @returns True when the config flag exists.
   */
  export function doesConfigFlagExist(flag: string): boolean;

  /**
   * Sets the current position of the cursor.
   * 
   * @remarks The cursor has to be visible for this to take effect.
   */
  export function setCursorPos(pos: IVector2): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   */
  export function setInterval(handler: () => void, miliseconds: number): number;

  /**
   * Sets the amount of real milliseconds that have to pass every game minute.
   */
  export function setMsPerGameMinute(milliseconds: number): void;

  /**
   * Sets the rotation velocity for the specified entity.
   *
   * @param scriptID The script id of the entity.
   * @param x The rotation velocity on the X axis.
   * @param y The rotation velocity on the Y axis.
   * @param z The rotation velocity on the Z axis.
   */
  export function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void;

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
   * @remarks This has to be activated after using it by using the {@link setWeatherSyncActive} function.
   * The weathers and multipliers array has to be of the same length.
   * @param weathers An array containing the weather ids for the weather cycle.
   * @param multipliers An array containing the multipliers for the weather cycle.
   */
  export function setWeatherCycle(weathers: Array<number>, multipliers: Array<number>): void;

  /**
   * Sets whether the weather sync is active.
   * 
   * @remarks The weather sync has to be set by using the {@link setWeatherCycle} function.
   * @param isActive Whether the weather sync should be active.
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
   * @remarks When this is set to false, all controls are disabled, so you can't move your character or the camera.
   * @param state True to enable controls, false to disable controls.
   */
  export function toggleGameControls(state: boolean): void;

  export function toggleVoiceControls(state: boolean): void;

  /** @alpha */
  export class WebSocketClient extends BaseObject {
    public autoReconnect: boolean;

    public perMessageDeflate: boolean;

    public pingInterval: number;

    public url: string;

    public readonly readyState: WebSocketReadyState;

    constructor(url: string);

    public on(eventName: "open", listener: () => void): void;

    public on(eventName: "close", listener: (code: number, reason: string) => void): void;

    public on(eventName: "message", listener: (message: string) => void): void;

    public on(eventName: "error", listener: (error: string) => void): void;

    public off(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Starts the websocket connection.
     */
    public start(): void;

    /**
     * Stops the websocket connection.
     */
    public stop(): void;

    /**
     * Sends the specified message to the websocket server.
     * 
     * @param message The message to send.
     * @returns Whether sending the message was successful.
     */
    public send(message: string | ArrayBuffer | ArrayBufferView): boolean;

    /**
     * Adds a sub protocol to the websocket.
     * 
     * @param protocol Name of the protocol.
     */
    public addSubProtocol(protocol: string): void;
    
    /**
     * Gets all added sub protocols.
     */
    public getSubProtocols(): string[];
    
    /**
     * Sets the specified header to the specified value.
     * 
     * @param header Header name.
     * @param value Header value.
     */
    public setExtraHeader(header: string, value: string): void;
  }

  /**
   * Load a specific ytyp file.
   *
   * @param path Relative path to the game folder.
   * @example
   * ```js
   * alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @alpha
   */
  export function loadYtyp(path: string): boolean;

  /**
   * Unload a specific ytyp file.
   *
   * @param path Relative path to the game folder.
   * @example
   * ```js
   * alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @alpha
   */
   export function unloadYtyp(path: string): boolean;
}
