/// <reference types="@altv/types-shared"/>
/// <reference lib="es2017.sharedmemory"/>
/**
 * @module alt-client
 */
declare module "alt-client" {
  import * as shared from "alt-shared";

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
    ChineseTraditional = "zh_tw",
  }

  export const enum PermissionState {
    Allowed,
    Denied,
    Unspecified,
    Failed,
  }

  export const enum StatName {
    Stamina = "stamina",
    Strength = "strength",
    LungCapacity = "lung_capacity",
    Wheelie = "wheelie_ability",
    Flying = "flying_ability",
    Shooting = "shooting_ability",
    Stealth = "stealth_ability",
  }

  export const enum VehicleIndicatorLights {
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkPermBoth = 4,
    StaticBoth = 8,
    Interior = 64,
  }

  export const enum WebSocketReadyState {
    Connecting,
    Open,
    Closing,
    Closed,
  }

  export const enum ConfigFlag {
    DisableAutoWeaponSwap = "DISABLE_AUTO_WEAPON_SWAP",
    DisablePedPropKnockOff = "DISABLE_PED_PROP_KNOCK_OFF",
    DisableIdleCamera = "DISABLE_IDLE_CAMERA",
  }

  export const enum WatermarkPosition {
    BottomRight = 0,
    TopRight = 1,
    TopLeft = 2,
    TopCenter = 3,
    BottomCenter = 4,
  }

  export const enum ProfileSourceType {
    Script = "script",
    Builtin = "builtins",
    Native = "native-callback",
    Internal = "internal",
    Unknown = "unknown",
  }

  export const enum GameFont {
    ChaletLondon,
    HouseScript,
    Monospace,
    CharletComprimeColonge = 4,
    Pricedown = 7,
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
    keydown: (key: shared.KeyCode) => void;
    keyup: (key: shared.KeyCode) => void;
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number, stackTrace: string) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    /**
     * @remarks See https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt for task ids.
     */
    taskChange: (oldTask: number, newTask: number) => void;
    spawned: () => void;
    localMetaChange: (key: string, newValue: any, oldValue: any) => void;

    /**
     * @remarks Triggers only if the old or new owner is the local player.
     */
    netOwnerChange: (entity: Entity, owner: Player, oldOwner: Player) => void;

    windowFocusChange: (isFocused: boolean) => void;

    windowResolutionChange: (oldResolution: shared.IVector2, newResolution: shared.IVector2) => void;

    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;

    /** @alpha */
    playerWeaponShoot: (weaponHash: number, totalAmmo: number, ammoInClip: number) => void;

    /** @alpha */
    playerWeaponChange: (oldWeapon: number, newWeapon: number) => void;
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
    camberStiffness: number;
    centreOfMassOffset: shared.Vector3;
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
    inertiaMultiplier: shared.Vector3;
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

  export interface IHttpResponse {
    readonly statusCode: number;
    readonly body: string;
    readonly headers: Record<string, string>;
  }

  export interface IHeapStats {
    readonly heapSizeLimit: number;
    readonly totalHeapSize: number;
    readonly usedHeapSize: number;
    readonly mallocedMemory: number;
    readonly peakMallocedMemory: number;
  }

  export interface IProfile {
    readonly id: number;
    readonly type: string;
    readonly start: number;
    readonly end: number;
    readonly samples: number;
    readonly root: IProfileNode;
  }

  export interface IProfileNode {
    readonly id: number;
    readonly function: string;
    readonly source: string;
    readonly sourceType: ProfileSourceType | `${ProfileSourceType}`;
    readonly line: number;
    readonly bailoutReason: string | null;
    readonly hitCount: number;
    readonly timestamp: number;
    readonly children: ReadonlyArray<IProfileNode> | null;
    readonly lineTicks: ReadonlyArray<ILineTick> | null;
  }

  export interface ILineTick {
    readonly line: number;
    readonly hitCount: number;
  }

  /**
   * Extend it by interface merging for use in baseobject meta {@link "alt-client".BaseObject getMeta method}, {@link "alt-client".BaseObject setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomBaseObjectMeta extends shared.ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in blip meta {@link "alt-client".Blip getMeta method}, {@link "alt-client".Blip setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomBlipMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by merging interfaces for use in checkpoint meta {@link "alt-client".Checkpoint getMeta method}, {@link "alt-client".Checkpoint setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomCheckpointMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by merging interfaces for use in webview meta {@link "alt-client".WebView getMeta method}, {@link "alt-client".WebView setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomWebViewMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by merging interfaces for use in audio meta {@link "alt-client".Audio getMeta method}, {@link "alt-client".Audio setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomAudioMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in entity meta {@link "alt-client".Entity getMeta method}, {@link "alt-client".Entity setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomEntityMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by merging interfaces for use in player meta {@link "alt-client".Player getMeta method}, {@link "alt-client".Player setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomPlayerMeta extends ICustomEntityMeta {}

  /**
   * Extend it by merging interfaces for use in local player meta {@link "alt-client".LocalPlayer getMeta method}, {@link "alt-client".LocalPlayer setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomLocalPlayerMeta extends ICustomPlayerMeta {}

  /**
   * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Vehicle getMeta method}, {@link "alt-client".Vehicle setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomVehicleMeta extends ICustomEntityMeta {}

  export class BaseObject extends shared.BaseObject {
    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomBaseObjectMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K] | undefined;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, V>): void;
  }

  /** @beta */
  export class Audio extends BaseObject {
    /**
     * Creates a new Audio instance.
     *
     * @param source The source url of the audio.
     * @param volume The volume of the audio. Ranges from 0 to 1.
     * @param category The category of the audio. Defaults to 'radio'.
     * @param play2D If the sound will be played in 2D, if false it will be 3D.
     */
    public constructor(source: string, volume: number, category?: shared.AudioCategory | `${shared.AudioCategory}`, play2D?: boolean);

    public source: string;

    public looped: boolean;

    public volume: number;

    public category: shared.AudioCategory | `${shared.AudioCategory}`;

    public readonly frontendPlay: boolean;

    public readonly currentTime: number;

    public readonly maxTime: number;

    public readonly playing: boolean;

    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    public addOutput(entity: Entity | number): void;

    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    public removeOutput(entity: Entity | number): void;

    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    public getOutputs(): ReadonlyArray<Entity | number>;

    public play(): void;
    public pause(): void;
    public reset(): void;

    public seek(time: number): void;

    public on(event: "streamEnded", callback: () => void): void;
    public on(event: "error", callback: (code: number, message: string) => void): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomAudioMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K): ICustomAudioMeta[K] | undefined;
    /** @deprecated See {@link ICustomAudioMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K, value: ICustomAudioMeta[K]): void;
    /** @deprecated See {@link ICustomAudioMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K, V>): void;
  }

  export class WorldObject extends BaseObject {
    /**
     * Object position
     */
    public pos: shared.Vector3;
  }

  export class Checkpoint extends WorldObject {
    public checkpointType: shared.CheckpointType;
    public nextPos: shared.Vector3;
    public radius: number;
    public height: number;
    public color: shared.RGBA;

    constructor(type: shared.CheckpointType, pos: shared.IVector3, nextPos: shared.IVector3, radius: number, height: number, rgbcolor: shared.RGBA);

    public isEntityIn(entity: Entity): boolean;
    public isPointIn(pos: shared.IVector3): boolean;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomCheckpointMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): ICustomCheckpointMeta[K] | undefined;
    /** @deprecated See {@link ICustomCheckpointMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;
    /** @deprecated See {@link ICustomCheckpointMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, V>): void;
  }

  export class Entity extends WorldObject {
    /**
     * Array with all entities.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const entities = alt.Entity.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < entities.length; i++)
     * {
     *   alt.log(`${entities[i].id}`); // Logs the id of every entity
     * }
     * ```
     */
    public static readonly all: ReadonlyArray<Entity>;

    /** Entity unique id */
    public readonly id: number;

    /** Internal game id that can be used in native calls */
    public readonly scriptID: number;

    /**
     * Network owner of the entity.
     *
     * @remarks Network owner is responsible for syncing entity with the server.
     * It changes when actual network owner passes the migration range,
     * then the new one is determined based on distance from the entity
     * (if entity is a vehicle, then the driver will take priority for becoming network owner).
     * Disabling migration range will stop this process from happening until turned on again.
     */
    public readonly netOwner: Player | null;

    /**
     * Returns whether the entity is spawned in the game world.
     *
     * @remarks This does the same thing as checking if the {@link scriptID} is 0.
     */
    public readonly isSpawned: boolean;

    /** Hash of entity model */
    public readonly model: number;

    /**
     * Object position
     */
    public readonly pos: shared.Vector3;

    /** Entity rotation in radians */
    public readonly rot: shared.Vector3;

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

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K, value: ICustomEntityMeta[K]): void;
    /** @deprecated See {@link ICustomEntityMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, V>): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): void;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomEntityMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K] | undefined;
    /** @deprecated See {@link ICustomEntityMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): boolean;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomEntitySyncedMeta>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K): shared.ICustomEntitySyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */
    public getSyncedMeta<V extends any>(key: string): V | undefined;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasSyncedMeta(key: string): boolean;
    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K): boolean;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomEntityStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K): shared.ICustomEntityStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K): boolean;
  }

  export class Player extends Entity {
    /**
     * Array with all players.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const players = alt.Player.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < players.length; i++)
     * {
     *   alt.log(`${players[i].name}`); // Logs the name of every player
     * }
     * ```
     */
    public static readonly all: ReadonlyArray<Player>;

    /**
     * Array with all streamed in players.
     */
    public static readonly streamedIn: ReadonlyArray<Player>;

    /**
     * The local player instance.
     */
    public static readonly local: LocalPlayer;

    /** Player talking state */
    public readonly isTalking: boolean;

    /** Player talking volume */
    public readonly micLevel: number;

    /** Player name */
    public readonly name: string;

    /** Player's vehicle, null if player is not in any vehicle */
    public readonly vehicle: Vehicle | null;

    public readonly isDead: boolean;

    /**
     * Current weapon components.
     */
    public readonly currentWeaponComponents: ReadonlyArray<number>;

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
     *
     * @remarks
     * Returns ``true`` _ONLY_ if:
     *  - you are in first person with a gun equipped and you are not sprinting
     *  - you are in third person and aiming/shooting
     */
    public readonly isAiming: boolean;

    /**
     * Is the player currently shooting with a weapon.
     */
    //public readonly isShooting: boolean;

    /**
     * Is the player currently reloading their weapon.
     */
    public readonly isReloading: boolean;

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
    public readonly aimPos: shared.Vector3;

    /**
     * Rotation of the head of the player.
     */
    public readonly headRot: shared.Vector3;

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
    public readonly entityAimOffset: shared.Vector3;

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

    /**
     * Set & get the volume for 3D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public spatialVolume: number;

    /**
     * Set & get the volume for 2D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public nonSpatialVolume: number;

    /**
     * Has the player superjump enabled.
     *
     * @alpha
     */
    //public readonly isSuperJumpEnabled: boolean;

    /**
     * Is the player currently crouching.
     *
     * @alpha
     */
    //public readonly isCrouching: boolean;

    /**
     * Is the player currently stealthy.
     *
     * @alpha
     */
    //public readonly isStealthy: boolean;

    /**
     * Forward speed of the player.
     */
    public readonly forwardSpeed: number;

    /**
     * Strafe speed of the player.
     */
    public readonly strafeSpeed: number;

    // normal meta

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K, value: ICustomPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomPlayerMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, V>): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): void;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomPlayerMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): ICustomPlayerMeta[K] | undefined;
    /** @deprecated See {@link ICustomPlayerMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): boolean;

    // synced meta

    public getSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerSyncedMeta>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): shared.ICustomPlayerSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
    public getSyncedMeta<V extends any>(key: string): V | undefined;

    public hasSyncedMeta(key: string): boolean;
    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): boolean;

    // stream synced meta

    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): boolean;
  }

  export class LocalPlayer extends Player {
    /**
     * Ammo of the currently held weapon.
     *
     * @returns Total ammo of the currently held weapon. 0 if no weapon is equipped.
     */
    public readonly currentAmmo: number;

    /** @alpha */
    public readonly weapons: Array<number>;

    /** @alpha */
    public getWeaponAmmo(hash: number): number;
    /** @alpha */
    public getWeaponAmmo(weaponName: string): number;

    /** @alpha */
    public getWeaponComponents(hash: number): Array<number>;
    /** @alpha */
    public getWeaponComponents(weaponName: string): Array<number>;

    /** @alpha */
    public hasWeapon(hash: number): boolean;
    /** @alpha */
    public hasWeapon(weaponName: string): boolean;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomLocalPlayerMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K): ICustomLocalPlayerMeta[K] | undefined;
    /** @deprecated See {@link ICustomLocalPlayerMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K, value: ICustomLocalPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomLocalPlayerMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, V>): void;
  }

  export class Vehicle extends Entity {
    /**
     * Array with all vehicles.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const vehicles = alt.Vehicle.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < vehicles.length; i++)
     * {
     *   alt.log(`${vehicles[i].model}`); // Logs the model of every vehicle
     * }
     * ```
     */
    public static readonly all: ReadonlyArray<Vehicle>;

    /**
     * Array with all streamed in vehicles.
     */
    public static readonly streamedIn: ReadonlyArray<Vehicle>;

    /**
     * Vehicle gear.
     *
     * @returns A number indicating actual gear.
     */
    public gear: number;

    /**
     * Vehicle max gear.
     */
    public readonly maxGear: number;

    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     */
    public handling: IVehicleHandling;

    /**
     * Vehicle indicator lights.
     */
    public indicatorLights: VehicleIndicatorLights;

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
    public readonly speedVector: shared.Vector3;

    /**
     * Vehicle seat count.
     */
    public readonly seatCount: number;

    /**
     * Vehicle velocity vector.
     *
     * @alpha
     */
    //public readonly velocity: shared.Vector3;

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
    //public readonly customPrimaryColor: shared.RGBA;

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
    //public readonly customSecondaryColor: shared.RGBA;

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
    //public readonly neonColor: shared.RGBA;

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
    public readonly engineOn: boolean;

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
     */
    public readonly lockState: shared.VehicleLockState;

    /**
     * Gets the camber angle of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelCamber(wheelIndex: number): number;

    /**
     * Sets the camber angle of the specified wheel.
     *
     * @remarks A positive camber angle means that the top of the wheel is farther out than the bottom. A negative camber angle means that the bottom of the wheel is farther out than the top.
     *
     * @param wheelIndex The index of the wheel.
     * @param camber The value the of camber angle.
     */
    public setWheelCamber(wheelIndex: number, camber: number): void;

    /**
     * Gets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelTrackWidth(wheelIndex: number): number;

    /**
     * Sets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the track width.
     */
    public setWheelTrackWidth(wheelIndex: number, width: number): void;

    /**
     * Gets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelHeight(wheelIndex: number): number;

    /**
     * Sets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param height The value of the wheel height.
     */
    public setWheelHeight(wheelIndex: number, height: number): void;

    /**
     * Gets the tyre radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelTyreRadius(wheelIndex: number): number;

    /**
     * @remarks Applies only physical effects to the wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The value of the tyre radius.
     */
    public setWheelTyreRadius(wheelIndex: number, radius: number): void;

    /**
     * Gets the rim radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelRimRadius(wheelIndex: number): number;

    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The index of the rim radius.
     */
    public setWheelRimRadius(wheelIndex: number, radius: number): void;

    /**
     * Gets the tyre width the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    public getWheelTyreWidth(wheelIndex: number): number;

    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the tyre width.
     */
    public setWheelTyreWidth(wheelIndex: number, width: number): void;

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
     */
    public readonly petrolTankHealth: number;

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
     * The vehicle's engine temperature.
     */
    public engineTemperature: number;

    /**
     * The vehicle's fuel level.
     */
    public fuelLevel: number;

    /**
     * The vehicle's oil level.
     */
    public oilLevel: number;

    // normal meta

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K, value: ICustomVehicleMeta[K]): void;
    /** @deprecated See {@link ICustomVehicleMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, V>): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): void;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomVehicleMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): ICustomVehicleMeta[K] | undefined;
    /** @deprecated See {@link ICustomVehicleMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): boolean;

    // synced meta

    public getSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomVehicleSyncedMeta>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): shared.ICustomVehicleSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
    public getSyncedMeta<V extends any>(key: string): V | undefined;

    public hasSyncedMeta(key: string): boolean;
    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): boolean;

    // stream synced meta

    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomVehicleStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): shared.ICustomVehicleStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): boolean;

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
     * Is the webview a overlay.
     */
    public readonly isOverlay: boolean;

    /**
     * Is the webview ready.
     */
    public readonly isReady: boolean;

    /**
     * Is the webview focused.
     */
    public focused: boolean;

    /**
     * Set and get the webview size.
     */
    public size: shared.Vector2;

    /**
     * Set and get the webview position.
     */
    public readonly pos: shared.Vector2;

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
     *
     * @hidden
     */
    constructor(url: string, pos: shared.IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     *
     * @hidden
     */
    constructor(url: string, pos: shared.IVector2, size: shared.IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     *
     * @hidden
     */
    constructor(url: string, isOverlay: boolean, pos: shared.IVector2, size: shared.IVector2);

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
     *
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
     * Subscribes to WebView event with specified listener, which only triggers once.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public once(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Focuses the webview so it can be interacted with.
     */
    public focus(): void;

    /**
     * Unfocuses the webview so it ignores user input.
     */
    public unfocus(): void;

    /**
     * Gets all the listeners for the specified webview event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */
    public getEventListeners(eventName: string | null): ((...args: any[]) => void)[];

    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */
    public setExtraHeader(header: string, value: string): void;

    /**
     * Sets the zoom level for webview.
     *
     * @param value Zoom level value.
     */
    public setZoomLevel(value: number): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomWebViewMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K): ICustomWebViewMeta[K] | undefined;
    /** @deprecated See {@link ICustomWebViewMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K, value: ICustomWebViewMeta[K]): void;
    /** @deprecated See {@link ICustomWebViewMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K, V>): void;
  }

  export class Worker {
    /**
     * Maximum available workers per resource.
     */
    public static readonly maxWorkers: number;

    /**
     * Adds a shared array buffer to the workers array buffer pool.
     *
     * @remarks Make sure to remove the array buffer once you are done with it by calling {@link removeSharedArrayBuffer},
     * otherwise you are creating a memory leak.
     *
     * @param buffer The shared array buffer to make available in workers.
     * @returns The id of the shared array buffer that can be used in workers to retrieve it.
     */
    public static addSharedArrayBuffer(buffer: SharedArrayBuffer): number;

    /**
     * Removes the shared array buffer from the workers array buffer pool.
     *
     * @param id The id of the shared array buffer to remove.
     */
    public static removeSharedArrayBuffer(id: number): void;

    /**
     * Creates a new worker.
     *
     * @remarks This will throw an error if the resource has reached its maximum amount of workers. See {@link maxWorkers}.
     *
     * @param filePath The path to the worker script file, can be relative or absolute path.
     */
    constructor(filePath: string);

    /**
     * Whether this worker is still valid. See {@link destroy}.
     */
    public readonly valid: boolean;

    /**
     * The file path that was used to create this worker.
     */
    public readonly filePath: string;

    /**
     * Whether the worker is currently paused. See {@link pause} and {@link resume}.
     */
    public readonly isPaused: boolean;

    /**
     * Starts the worker script.
     */
    public start(): void;

    /**
     * Destroys the worker and stops it.
     *
     * @remarks This permanently sets {@link valid} to false.
     */
    public destroy(): void;

    /**
     * Emits the specified event to the worker.
     *
     * @remarks This can be called before the worker is started.
     */
    public emit(eventName: string, ...args: any[]): void;

    /**
     * Listens to an event emitted by the worker.
     *
     * @remarks The event handlers should be registered before starting the worker.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */
    public on(eventName: string, callback: (...args: any[]) => void): void;

    /**
     * Listens to an event emitted by the worker once.
     *
     * @remarks See {@link on}.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */
    public once(eventName: string, callback: (...args: any[]) => void): void;

    /**
     * Pauses execution of the worker.
     *
     * @remarks This completely stops the JavaScript event loop of the worker
     * but events can still be received (and will be handled once the worker is resumed).
     */
    public pause(): void;

    /**
     * Resumes execution of the worker.
     *
     * @remarks See {@link pause}.
     */
    public resume(): void;

    /**
     * Unsubscribes from Worker event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    public off(eventName: string, listener: (...args: any[]) => void): void;
  }

  export class Blip extends WorldObject {
    /**
     * Array with all blips.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const blips = alt.Blip.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < blips.length; i++)
     * {
     *   alt.log(`${blips[i].scriptID}`); // Logs the scriptID of every blip
     * }
     * ```
     */
    public static readonly all: ReadonlyArray<Blip>;

    public readonly scriptID: number;

    public routeColor: shared.RGBA;

    public alpha: number;

    public asMissionCreator: boolean;

    public bright: boolean;

    public category: number;

    public color: shared.BlipColor;

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

    public secondaryColor: number | shared.RGBA;

    public shortRange: boolean;

    public showCone: boolean;

    public shrinked: boolean;

    public size: shared.Vector2;

    public sprite: shared.BlipSprite;

    public tickVisible: boolean;

    /**
     * Returns whether the blip was created on serverside (false for clientside blips)
     */
    public readonly isRemote: boolean;

    public fade(opacity: number, duration: number): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomBlipMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K): ICustomBlipMeta[K] | undefined;
    /** @deprecated See {@link ICustomBlipMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K, value: ICustomBlipMeta[K]): void;
    /** @deprecated See {@link ICustomBlipMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K, V>): void;
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

  // /**
  //  * Create a attached blip to a ped.
  //  *
  //  * @param ped Index of the player in alt.Player.all.
  //  */
  // export class PedBlip extends Blip {
  //   constructor(ped: number);
  // }

  // /**
  //  * Create a attached blip to a vehicle.
  //  *
  //  * @param vehicle Index of the vehicle in alt.Vehicle.all.
  //  */
  // export class VehicleBlip extends Blip {
  //   constructor(vehicle: number);
  // }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to all vehicle instances, as opposed to the {@link Vehicle.handling}.
   *
   * @remarks Changes will be reflected on every vehicle using this particular handling, but might require vehicle recreating for changes to apply properly.
   */
  export class HandlingData {
    protected constructor();

    public readonly handlingNameHash: number;
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public brakeForce: number;
    public camberStiffnesss: number;
    public centreOfMassOffset: shared.Vector3;
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
    public inertiaMultiplier: shared.Vector3;
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
     * @remarks The `handlingHash` parameter is vehicle **handling name hash**, not a model hash.
     * Can be retrieved from any vehicle instance: `vehicle.handling.handlingNameHash` {@link IVehicleHandling#handlingNameHash}
     *
     * @param handlingHash hash of the vehicle **handling name**
     */
    public static getForHandlingName(handlingHash: number): HandlingData;
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
    protected constructor();

    /**
     * Gets the value from the specified key in the local storage.
     */
    public static get(key: string): any;

    /**
     * Deletes the specified key from the local storage.
     */
    public static delete(key: string): void;

    /**
     * Deletes all keys from the local storage.
     */
    public static deleteAll(): void;

    /**
     * Alias for {@link deleteAll}.
     */
    public static clear(): void;

    /**
     * Saves the changes to the disk.
     */
    public static save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     */
    public static set(key: string, value: any): void;
  }

  export class MemoryBuffer {
    constructor(size: number);

    public readonly size: number;

    public readonly address: bigint;

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

    public free(): boolean;
  }

  export class Discord {
    protected constructor();

    public static readonly currentUser: IDiscordUser | null;
    public static requestOAuth2Token(appId: string): Promise<string>;
  }

  export class Voice {
    protected constructor();

    /**
     * Determines whether the microphone input is currently disabled.
     */
    public static muteInput: boolean;

    /**
     * Determines if the voice activation is enabled.
     */
    public static readonly activityInputEnabled: boolean;

    /**
     * Returns the keycode of the voice activation key.
     */
    public static readonly activationKey: shared.KeyCode;

    public static readonly voiceControlsEnabled: boolean;
  }

  /**
   * Adds a new GXT entry with the specified value.
   *
   * @remarks The GXT entry FE_THDR_GTAO is locked and cannot be changed.
   *
   * @param key GXT entry name or hash.
   * @param value GXT entry value.
   */
  export function addGxtText(key: string | number, value: string): void;

  /**
   * Executes the specified scaleform method on the minimap.
   */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

  /**
   * Emits specified event across resources.
   *
   * @remarks See {@link "alt-shared".emit} for more information about sending destroyed entities.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  // Do not allow to emit alt:V event name
  export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;

  /**
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Works only from JS resource to JS resource
   */
  // Do not allow to emit alt:V event name
  export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;

  /**
   * Emits specified event to server.
   *
   * @remarks See {@link "alt-shared".emit} for more information about sending destroyed entities.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitServer(eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to server.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Works only from JS (Client) to JS (Server)
   */
  export function emitServerRaw(eventName: string, ...args: any[]): void;

  /**
   * Returns whether the game controls are currently enabled.
   */
  export function gameControlsEnabled(): boolean;

  /**
   * Gets the current position of the cursor.
   */
  export function getCursorPos(normalized?: boolean): shared.Vector2;

  /**
   * Gets the value of the specified GXT entry.
   *
   * @param key GXT entry name.
   */
  export function getGxtText(key: string): string;

  export function getLicenseHash(): string;

  /**
   * Gets the current alt:V locale.
   */
  export function getLocale(): Locale;
  export function getLocale(): `${Locale}`;

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
  export function getPermissionState(permId: shared.Permission): PermissionState;
  export function getPermissionState<T extends number, V extends number = PermissionState>(permId: T): V;

  /**
   * Gets a value of the specified statistic.
   *
   * @param statName Name of the statistic.
   */
  export function getStat(statName: StatName): number;
  export function getStat(statName: `${StatName}`): number;

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
   */
  export function isInStreamerMode(): boolean;

  /**
   * Returns whether the specified key is toggled.
   *
   * @param key Keycode.
   */
  export function isKeyToggled(key: shared.KeyCode): boolean;

  /**
   * Determines whether the specified key is pressed.
   *
   * @param Keycode of the key.
   */
  export function isKeyDown(key: shared.KeyCode): boolean;

  /**
   * Returns state of user interface and console window.
   *
   * @returns True when user interface or console window is opened.
   */
  export function isMenuOpen(): boolean;

  export function isTextureExistInArchetype(modelHash: number, targetTextureName: string): boolean;

  /**
   * Loads a model into memory synchronously.
   *
   * @remarks Use this method only if you *really* need it, because this method is unsafe and can lead to game crashes.
   * For normal model loading it is recommended to use {@link "alt-client".Utils.requestModel alt.Utils.requestModel} instead.
   *
   * @param modelHash Hash of the model.
   */
  export function loadModel(modelHash: number): void;

  /**
   * Loads a model into memory asynchronously.
   *
   * @remarks Use this method only if you *really* need it, because this method is unsafe and can lead to game crashes.
   * For normal model loading it is recommended to use {@link "alt-client".Utils.requestModel alt.Utils.requestModel} instead.
   *
   * @remarks If you want to know when a model is loaded use {@link https://natives.altv.mp/#/0x98A4EB5D89A0C952 hasModelLoaded}
   * in pair with {@link "alt-client".Utils.waitFor alt.Utils.waitFor}.
   *
   * @param modelHash Hash of the model.
   */
  export function loadModelAsync(modelHash: number): void;

  /**
   * Unsubscribes from a server event with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to a client event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to a custom client event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  // Do not allow any function to subscribe to the alt:V event
  export function on<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;

  /**
   * Subscribes to a client event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to a custom client event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  // Do not allow any function to subscribe to the alt:V event
  export function once<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;

  /**
   * Subscribes to a server event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to all server events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to a server event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onceServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to all server events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onceServer(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Removes the specified GXT entry.
   *
   * @param key GXT entry name.
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
   * @remarks This function requires [Screen Capture](https://docs.altv.mp/articles/permissions.html) permission from the user.
   *
   * @returns Return is dependent on the success of the operation.
   */
  export function takeScreenshot(): Promise<string>;

  /**
   * The output is returned as a base64 string.
   *
   * @remarks This only takes a screenshot of the raw GTA:V window. WebViews, game overlays etc. won't be captured.
   * This function requires [Screen Capture](https://docs.altv.mp/articles/permissions.html) permission from the user.
   *
   * @returns Return is dependent on the success of the operation.
   */
  export function takeScreenshotGameOnly(): Promise<string>;

  /**
   * Resets a statistic to its default value.
   *
   * @param statName Name of the statistic.
   */
  export function resetStat(statName: StatName): void;
  export function resetStat(statName: `${StatName}`): void;

  /**
   * Freezes the camera in place so it doesn't change position or rotation.
   *
   * @remarks You can still move your character even if your camera is frozen.
   *
   * @param state True to freeze the camera, false to unfreeze the camera.
   */
  export function setCamFrozen(state: boolean): void;

  export function isCamFrozen(): boolean;

  /**
   * Sets the specified ped config flag of the local player to the specified state.
   *
   * @param flag Config flag name.
   * @param state Config flag state.
   */
  export function setConfigFlag(flag: ConfigFlag, state: boolean): void;
  export function setConfigFlag(flag: `${ConfigFlag}`, state: boolean): void;

  /**
   * Returns the state of the specified ped config flag of the local player.
   *
   * @param flag Config flag name.
   * @returns State of the specified config flag.
   */
  export function getConfigFlag(flag: ConfigFlag): boolean;
  export function getConfigFlag(flag: `${ConfigFlag}`): boolean;

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
  export function setCursorPos(pos: shared.IVector2, normalized?: boolean): void;

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
  export function setStat(statName: `${StatName}`, value: number): void;

  /**
   * Sets the current weather cycle.
   *
   * @remarks This has to be activated after using it by using the {@link setWeatherSyncActive} function.
   * The weathers and multipliers array has to be of the same length.
   *
   * @param weathers An array containing the weather ids for the weather cycle.
   * @param multipliers An array containing the multipliers for the weather cycle.
   */
  export function setWeatherCycle(weathers: Array<number>, multipliers: Array<number>): void;

  /**
   * Sets whether the weather sync is active.
   *
   * @remarks The weather sync has to be set by using the {@link setWeatherCycle} function.
   *
   * @param isActive Whether the weather sync should be active.
   */
  export function setWeatherSyncActive(isActive: boolean): void;

  /**
   * Changes the visibility of cursor.
   *
   * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
   *
   * @param state A boolean indicating whenever cursor should be visible or not.
   */
  export function showCursor(state: boolean): void;

  export function isCursorVisible(): boolean;

  /**
   * Toggles the game controls.
   *
   * @remarks When this is set to false, all controls are disabled, so you can't move your character or the camera.
   *
   * @param state True to enable controls, false to disable controls.
   */
  export function toggleGameControls(state: boolean): void;

  export function toggleVoiceControls(state: boolean): void;

  export class WebSocketClient extends BaseObject {
    public autoReconnect: boolean;

    public perMessageDeflate: boolean;

    /**
     * Optional heartbeat, sent every x seconds when there isn't any traffic.
     *
     * @Remarks This makes sure, that load balancers do not kill an idle connection.
     */
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

    /**
     * Gets all the listeners for the specified websocket event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */
    public getEventListeners(eventName: string | null): ((...args: any[]) => void)[];
  }

  /**
   * Load a specific ytyp file.
   *
   * @example
   * ```js
   * alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @param path Relative path to the game folder.
   */
  export function loadYtyp(path: string): boolean;

  /**
   * Unload a specific ytyp file.
   *
   * @example
   * ```js
   * alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @param path Relative path to the game folder.
   */
  export function unloadYtyp(path: string): boolean;

  /**
   * Evaluates and executes the given JavaScript code.
   *
   * @remarks The code is evaluated in its own context, so it cannot access variables, functions etc. from the calling file.
   *
   * @param code The JavaScript code.
   * @returns The exports of the evaluated module.
   */
  export function evalModule(code: string): Record<string, any>;

  /**
   * Gets all the listeners that have been subscribed using {@link onServer} for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
  export function getRemoteEventListeners(eventName: string | null): ((...args: any[]) => void)[];

  export class HttpClient extends BaseObject {
    public constructor();

    public setExtraHeader(header: string, value: string): void;

    public getExtraHeaders(): Record<string, string>;

    public get(url: string): Promise<IHttpResponse>;

    public head(url: string): Promise<IHttpResponse>;

    public post(url: string, body: string): Promise<IHttpResponse>;

    public put(url: string, body: string): Promise<IHttpResponse>;

    public delete(url: string, body: string): Promise<IHttpResponse>;

    public connect(url: string, body: string): Promise<IHttpResponse>;

    public options(url: string, body: string): Promise<IHttpResponse>;

    public trace(url: string, body: string): Promise<IHttpResponse>;

    public patch(url: string, body: string): Promise<IHttpResponse>;
  }

  /**
   * Gets the Base64 encoded string of the headshot with the specified ID.
   *
   * @remarks The headshot ID is returned by the `registerPedheadshot3`, `registerPedheadshotTransparent` or `registerPedheadshot` native.
   *
   * @param id ID of the headshot.
   * @returns The Base64 string of the headshot image.
   */
  export function getHeadshotBase64(id: number): string;

  /**
   * Sets the specified dlc clothing component to a ped.
   *
   * @param scriptID ScriptID of the Ped.
   * @param dlc Dlc hash of the clothing.
   * @param component Component id of the clothing.
   * @param drawable Drawable id of the clothing.
   * @param texture Texture id of the clothing.
   * @param palette Palette of the clothing.
   */
  export function setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette?: number): void;

  /**
   * Sets the specified dlc prop component to a ped.
   *
   * @param scriptID ScriptID of the Ped.
   * @param dlc Dlc hash of the prop.
   * @param component Component id of the prop.
   * @param drawable Drawable id of the prop.
   * @param texture Texture id of the prop.
   */
  export function setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void;

  /**
   * Removes a specified prop component from a ped.
   *
   * @param scriptID ScriptID of the Ped.
   * @param component Component id of the prop.
   */
  export function clearPedProp(scriptID: number, component: number): void;

  export class Profiler {
    protected constructor();

    public static readonly heapStats: IHeapStats;
    /** Sampling interval in microseconds. Defaults to 100. */
    public static samplingInterval: number;
    public static readonly profilesRunning: number;

    /**
     * Starts a new profile with the specified name.
     *
     * @remarks This can throw an error if starting the profile fails.
     *
     * @param profileName Name to be used in {@link stopProfiling}. Defaults to empty string.
     */
    public static startProfiling(profileName?: string): void;

    /**
     * Stops the profile with the specified name.
     *
     * @param profileName Name of the profile specified in {@link startProfiling}. Defaults to empty string.
     */
    public static stopProfiling(profileName?: string): IProfile;

    public static getMemoryProfile(): void;
  }

  /**
   * Change the position of the alt:V watermark.
   *
   * @param position Watermarkposition.
   */
  export function setWatermarkPosition(position: WatermarkPosition): void;
  export function setWatermarkPosition<T extends number>(position: T): void;

  /**
   * Represents the current client ping.
   */
  export function getPing(): number;

  /**
   * Represents the current client fps.
   */
  export function getFps(): number;

  export function getTotalPacketsSent(): bigint;

  export function getTotalPacketsLost(): bigint;

  /**
   * Gets the ip adress of the server where you are connected to.
   *
   * @returns The server ip.
   */
  export function getServerIp(): string;

  /**
   * Gets the port of the server where you are connected to.
   *
   * @returns The server port.
   */
  export function getServerPort(): number;

  /**
   * Copy content into users clipboard.
   *
   * @remarks This function requires [Clipboard Access](https://docs.altv.mp/articles/permissions.html) permission from the user.
   */
  export function copyToClipboard(val: string): void;

  export function toggleRmlControls(state: boolean): void;

  export function rmlControlsEnabled(): boolean;

  export function loadRmlFont(path: string, name: string, italic?: boolean, bold?: boolean): void;

  /**
   * Converts the world position into screen coordinates
   *
   * @returns Screen coordinates as x, y and z as depth
   */
  export function worldToScreen(x: number, y: number, z: number): shared.Vector3;
  export function worldToScreen(value: shared.IVector3): shared.Vector3;

  /**
   * Converts screen coordinates to world position
   */
  export function screenToWorld(x: number, y: number): shared.Vector3;
  export function screenToWorld(value: shared.IVector2): shared.Vector3;

  export function getCamPos(): shared.Vector3;

  export function getScreenResolution(): shared.Vector2;

  export class RmlDocument extends RmlElement {
    constructor(url: string);

    public title: string;

    public readonly sourceUrl: string;

    public readonly isVisible: boolean;

    public readonly isModal: boolean;

    public readonly body: RmlElement;

    public show(isModal?: boolean, focused?: boolean): void;

    public hide(): void;

    public update(): void;

    public createElement(tag: string): RmlElement;

    public createTextNode(text: string): RmlElement;
  }

  export class RmlElement extends BaseObject {
    public on(eventName: string, func: (senderElement: RmlElement, ...args: any[]) => void): void;

    public off(eventName: string, func: (...args: any[]) => void): void;

    public getEventListeners(eventName: string): ((senderElement: RmlElement, ...args: any[]) => void)[];

    public readonly relativeOffset: shared.Vector2;

    public readonly absoluteOffset: shared.Vector2;

    public readonly baseline: number;

    public readonly zIndex: number;

    public readonly containingBlock: shared.Vector2;

    public readonly focusedElement: RmlElement | null;

    public readonly tagName: string;

    public id: string;

    public readonly isOwned: boolean;

    public readonly absoluteLeft: number;

    public readonly absoluteTop: number;

    public readonly clientLeft: number;

    public readonly clientTop: number;

    public readonly clientWidth: number;

    public readonly clientHeight: number;

    public readonly offsetLeft: number;

    public readonly offsetTop: number;

    public readonly offsetWidth: number;

    public readonly offsetHeight: number;

    public scrollLeft: number;

    public scrollTop: number;

    public readonly scrollWidth: number;

    public readonly scrollHeight: number;

    public readonly isVisible: boolean;

    public readonly parent: RmlElement | null;

    public readonly nextSibling: RmlElement | null;

    public readonly previousSibling: RmlElement | null;

    public readonly firstChild: RmlElement | null;

    public readonly lastChild: RmlElement | null;

    public readonly childCount: number;

    public readonly hasChildren: boolean;

    public innerRML: string;

    public readonly ownerDocument: RmlDocument;

    public readonly childNodes: ReadonlyArray<RmlElement>;

    public appendChild(child: RmlElement): void;

    public insertBefore(child: RmlElement, adjacent: RmlElement): void;

    public replaceChild(newElem: RmlElement, oldElem: RmlElement): void;

    public removeChild(child: RmlElement): void;

    public addClass(name: string): boolean;

    public removeClass(name: string): boolean;

    public hasClass(name: string): boolean;

    public getClassList(): ReadonlyArray<string>;

    public addPseudoClass(name: string): boolean;

    public removePseudoClass(name: string): boolean;

    public hasPseudoClass(name: string): boolean;

    public getPseudoClassList(): ReadonlyArray<string>;

    public setOffset(element: RmlElement, offset: shared.IVector2, fixed?: boolean): void;

    public isPointWithinElement(point: shared.IVector2): boolean;

    public setProperty(name: string, value: string): boolean;

    public removeProperty(name: string): boolean;

    public hasProperty(name: string): boolean;

    public hasLocalProperty(name: string): boolean;

    public getProperty(name: string): string;

    public getLocalProperty(name: string): string;

    public getPropertyAbsoluteValue(name: string): number;

    public setAttribute(name: string, value: string): void;

    public removeAttribute(name: string): boolean;

    public hasAttribute(name: string): boolean;

    public getAttribute(name: string): string;

    public getAttributes(): Record<string, string>;

    public closest(selectors: string): RmlElement | null;

    public getElementByID(id: string): RmlElement | null;

    public getElementsByTagName(tag: string): ReadonlyArray<RmlElement>;

    public getElementsByClassName(className: string): ReadonlyArray<RmlElement>;

    public querySelector(selector: string): RmlElement | null;

    public querySelectorAll(selector: string): ReadonlyArray<RmlElement>;

    public focus(): boolean;

    public blur(): void;

    public click(): void;

    public scrollIntoView(alignToTop?: boolean): void;

    public style: Record<string, string>;
  }

  export class Utils extends shared.Utils {
    /**
     * Loads a model into memory asynchronously, like {@link loadModelAsync} but more safely.
     *
     * @remarks If you can't load a specific model with this method, use {@link loadModelAsync} instead.
     */
    public static requestModel(model: string | number, timeout?: number): Promise<void>;

    public static requestAnimDict(animDict: string, timeout?: number): Promise<void>;

    public static requestAnimSet(animSet: string, timeout?: number): Promise<void>;

    public static requestClipSet(clipSet: string, timeout?: number): Promise<void>;

    public static requestCutscene(cutsceneName: string, flags: string | number, timeout?: number): Promise<void>;

    /** @alpha */
    public static drawText2dThisFrame(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean): void;

    /** @alpha */
    public static drawText2d(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean): shared.Utils.EveryTick;

    /** @alpha */
    public static drawText3dThisFrame(text: string, pos3d?: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean): void;

    /** @alpha */
    public static drawText3d(text: string, pos3d?: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean): shared.Utils.EveryTick;

    /**
     * Loads the map area at a certain position
     * and waits asynchronously until all parts in view area have been loaded.
     *
     * @remarks Uses {@link FocusData} and {@link https://natives.altv.mp/#/0xACCFB4ACF53551B0 newLoadSceneStartSphere}.
     *
     * @param pos Coords of the map area.
     * @param radius Radius of sphere to load. Defaults to 50.0.
     * @param timeout The maximum milliseconds to wait, otherwise promise will be rejected. Defaults to 5000.
     *
     * @alpha
     */
    public static loadMapArea(pos: shared.IVector3, radius?: number, timeout?: number): Promise<void>;
  }

  export namespace Utils {
    export class Keybind {
      /**
       * Binds a callback to a specific key or multiple keys.
       *
       * @param keyCode Single or multiple keys to bind.
       * @param callback Function to call.
       * @param eventType On which event callback should be called. Defaults to "keyup".
       *
       * @example
       * ```js
       * // two keycodes (similar to two separate keybinds with the same handler)
       * const bind = new alt.Utils.Keybind([KeyCode.G, KeyCode.H], () => {
       *   alt.log('pressed G or H')
       * })
       * ```
       *
       * @alpha
       */
      constructor(keyCode: shared.KeyCode | Array<shared.KeyCode>, callback: () => void, eventType?: "keyup" | "keydown");
      public destroy(): void;
    }
  }

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key or undefined if no data is present.
   */
  export function getLocalMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerLocalMeta>): unknown;
  export function getLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): shared.ICustomPlayerLocalMeta[K] | undefined;
  /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
  export function getLocalMeta<V extends any>(key: string): V | undefined;

  export function hasLocalMeta(key: string): boolean;
  export function hasLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): boolean;

  /**
   * Modify minimap component position.
   *
   * @param name Name of the minimap component.
   * @param alignX Same as alignX field in fontend.xml.
   * @param alignY Same as alignY field in fontend.xml.
   * @param pos Same as posX and posY field in fontend.xml.
   * @param size Same as sizeX and sizeY field in fontend.xml.
   */
  export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, pos: shared.IVector2, size: shared.IVector2): void;

  /**
   * Modify minimap component position.
   *
   * @param name Name of the minimap component.
   * @param alignX Same as alignX field in fontend.xml.
   * @param alignY Same as alignY field in fontend.xml.
   * @param posX Same as posX field in fontend.xml.
   * @param posY Same as posY field in fontend.xml.
   * @param sizeX Same as sizeX field in fontend.xml.
   * @param sizeY Same as sizeY field in fontend.xml.
   */
  export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;

  /**
   * Defines if the minimap is a rectangle to change the blip clipping.
   *
   * @param state False will clip the blips rounded to the minimap.
   */
  export function setMinimapIsRectangle(state: boolean): void;

  /**
   * The FocusData class is used to override the focus of the camera.
   */
  export class FocusData {
    protected constructor();

    public static readonly isFocusOverriden: boolean;
    public static readonly focusOverridePos: shared.Vector3;
    public static readonly focusOverrideOffset: shared.Vector3;
    public static readonly focusOverrideEntity: Entity;

    public static overrideFocus(pos: shared.Vector3, offset?: shared.Vector3): void;
    public static overrideFocus(pos: Entity, offset?: shared.Vector3): void;
    public static clearFocus(): void;
  }

  /**
   * With the WeaponData class you can get specific weapon values and also set some of them.
   */
  export class WeaponData {
    protected constructor();

    public readonly modelHash: number;
    public readonly nameHash: number;
    public recoilShakeAmplitude: number;
    public recoilAccuracyMax: number;
    public recoilAccuracyToAllowHeadshotPlayer: number;
    public recoilRecoveryRate: number;
    public animReloadRate: number;
    public vehicleReloadTime: number;
    public lockOnRange: number;
    public accuracySpread: number;
    public range: number;
    public damage: number;
    public readonly clipSize: number;
    public readonly timeBetweenShots: number;
    public headshotDamageModifier: number;

    /** @alpha */
    public playerDamageModifier: number;

    /**
     * Initializes a new instance of the {@link WeaponData}.
     */
    public static getForHash(weaponHash: number): WeaponData;
  }

  export function loadDefaultIpls(): void;

  /** @alpha */
  export function isPointOnScreen(x: number, y: number, z: number): boolean;
  /** @alpha */
  export function isPointOnScreen(value: shared.IVector3): boolean;

  /** @alpha */
  export class Object extends Entity {
    /**
     * Creates a new object.
     *
     * @remarks The model for the object is automatically loaded, but because this
     * happens asynchronously, the scriptID property might not be immediately available
     * after creating the object. Setters will always work regardless of whether the model
     * is already loaded or not.
     *
     * @param model Model name or model hash for the object.
     * @param pos Position of the object.
     * @param rot Rotation of the object.
     * @param noOffset If true, object position will not be adjusted to not collide with anything.
     * @param dynamic If true, object reacts to actions in the world. (E.g. force by vehicle)
     */
    constructor(model: string | number, pos: shared.Vector3, rot: shared.Vector3, noOffset?: boolean, dynamic?: boolean);

    public static readonly all: ReadonlyArray<Object>;

    public static readonly allWorld: ReadonlyArray<Object>;

    public pos: shared.Vector3;

    public rot: shared.Vector3;

    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
    public alpha: number;
    public resetAlpha(): void;

    public readonly dynamic: boolean;

    /** The distance at which the LOD model of the object starts being applied. */
    public lodDistance: number;

    /** Whether the object is affected by gravity. */
    public hasGravity: boolean;

    /** Whether this object was created clientside or serverside. (Clientside = false, Serverside = true) */
    public readonly isRemote: boolean;

    /**
     * Attaches the object to another entity.
     *
     * @param entity Entity the object should be attached to.
     * @param bone Bone index of the entity to attach to. (-1 for entity center)
     * @param pos Position offset of the object.
     * @param rot Rotation of the object.
     * @param useSoftPinning Whether the object should be able to detach when not fixed.
     * @param collision Whether the object and the entity should collide with each other.
     * @param fixedRot Whether the rotation of the object is fixed or follows that of the entity.
     */
    public attachToEntity(entity: Entity, bone: number, pos: shared.Vector3, rot: shared.Vector3, useSoftPinning?: boolean, collision?: boolean, fixedRot?: boolean): void;
    public attachToEntity(scriptID: number, bone: number, pos: shared.Vector3, rot: shared.Vector3, useSoftPinning?: boolean, collision?: boolean, fixedRot?: boolean): void;

    /**
     * Detaches the object from the current attached entity.
     *
     * @param dynamic Set to true to keep velocity after dettaching. Default value is false.
     */
    public detach(dynamic?: boolean): void;

    public readonly isCollisionEnabled: boolean;

    public toggleCollision(toggle: boolean, keepPhysics: boolean): void;

    /** Places the object properly on the ground. */
    public placeOnGroundProperly(): void;

    /** Freeze the object on the position */
    public setPositionFrozen(toggle: boolean): void;

    public activatePhysics(): void;

    public textureVariation: number;

    public readonly isWorldObject: boolean;

    /** Waits asynchronously until the object spawns. */
    public waitForSpawn(): Promise<void>;
  }

  export * from "alt-shared";
}
