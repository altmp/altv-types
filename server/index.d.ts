/// <reference types="@altv/types-shared"/>
/**
 * @module alt-server
 */
declare module "alt-server" {
  import * as shared from "alt-shared";

  export type DateTimeHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
  export type DateTimeMinute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
  export type DateTimeSecond = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
  export type DateTimeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  export type DateTimeMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  export const enum ExplosionType {
    Grenade,
    GrenadeLauncher,
    StickyBomb,
    Molotov,
    Rocket,
    TankShell,
    HiOctane,
    Car,
    Plane,
    PetrolPump,
    Bike,
    DirSteam,
    DirFlame,
    DirWaterHydrant,
    DirGasCanister,
    Boat,
    ShipDestroy,
    Truck,
    Bullet,
    SmokeGrenadeLauncher,
    SmokeGrenade,
    BzGas,
    Flare,
    GasCanister,
    Extinguisher,
    ProgrammableAr,
    Train,
    Barrel,
    Propane,
    Blimp,
    DirFlameExplode,
    Tanker,
    PlaneRocket,
    VehicleBullet,
    GasTank,
    Firework,
    Snowball,
    ProxMine,
    ValkyrieCannon,
    Unknown = -1,
  }

  export const enum BlipType {
    Vehicle = 1,
    Ped,
    Object,
    Destination,
    Cont,
    PickupUnk,
    Radius,
    Pickup,
    Cop,
    Area,
    Gallery,
    PickupObject,
  }

  export const enum RadioStation {
    LosSantosRockRadio,
    NonStopPopFm,
    RadioLosSantos,
    ChannelX,
    WestCoastTalkRadio,
    RebelRadio,
    SoulwaxFm,
    EastLosFm,
    WestCoastClassics,
    BlaineCountyRadio,
    TheBlueArk,
    WorldWideFm,
    FlyloFm,
    TheLowdown,
    RadioMirrorPark,
    Space,
    VinewoodBoulevardRadio,
    SelfRadio,
    TheLab,
    RadioOff = 255,
  }

  export const enum NumberPlateStyle {
    BlueWhite,
    YellowBlack,
    YellowBlue,
    BlueWhite2,
    BlueWhite3,
    Yankton,
  }

  export const enum VehicleBumper {
    Front,
    Rear,
  }

  export const enum VehicleBumperDamage {
    NotDamaged,
    Damaged,
    None,
  }

  export const enum VehicleDoor {
    DriverFront,
    PassengerFront,
    DriverRear,
    PassengerRear,
    Hood,
    Trunk,
  }

  export const enum VehicleDoorState {
    Closed,
    OpenedLevel1,
    OpenedLevel2,
    OpenedLevel3,
    OpenedLevel4,
    OpenedLevel5,
    OpenedLevel6,
    OpenedLevel7,
    Unknown = 255,
  }

  export const enum VehicleModType {
    Spoiler,
    FrontBumper,
    RearBumper,
    SideSkirt,
    Exhaust,
    Frame,
    Grille,
    Hood,
    Fender,
    RightFender,
    Roof,
    Engine,
    Brakes,
    Transmission,
    Horn,
    Suspension,
    Armor,
    Unk1,
    Turbo,
    Unk2,
    TireSmoke,
    Unk3,
    XenonLights,
    FrontWheels,
    BackWheels,
    Plateholder,
    VanityPlates,
    TrimDesign,
    Ornaments,
    Dashboard,
    Dial,
    DoorSpeaker,
    Seats,
    SteeringWheel,
    ColumnShifterLeavers,
    Plaques,
    Speakers,
    Trunk,
    Hydraulics,
    EngineBlock,
    AirFilter,
    Struts,
    ArchCover,
    Aerials,
    Trim,
    Tank,
    Windows,
    Unk4,
    Livery,
  }

  export const enum VehiclePart {
    FrontLeft,
    FrontRight,
    MiddleLeft,
    MiddleRight,
    RearLeft,
    RearRight,
  }

  export const enum VehiclePartDamage {
    NotDamaged,
    DamagedLevel1,
    DamagedLevel2,
    DamagedLevel3,
  }

  export const enum WeatherType {
    ExtraSunny,
    Clear,
    Clouds,
    Smog,
    Foggy,
    Overcast,
    Rain,
    Thunder,
    Clearing,
    Neutral,
    Snow,
    Blizzard,
    Snowlight,
    Xmas,
    Halloween,
  }

  export const enum WindowTint {
    None,
    PureBlack,
    DarkSmoke,
    LightSmoke,
    Stock,
    Limo,
    Green,
  }

  export interface IWeapon {
    readonly hash: number;
    readonly tintIndex: number;
    readonly components: ReadonlyArray<number>;
  }

  export interface IConnectionInfo {
    readonly name: string;
    readonly socialID: string;
    readonly hwidHash: string;
    readonly hwidExHash: string;
    readonly authToken: string;
    readonly isDebug: boolean;
    readonly branch: string;
    readonly build: number;
    readonly cdnUrl: string;
    readonly passwordHash: string;
    readonly ip: string;
    readonly discordUserID: string;
    /** @alpha */
    readonly socialClubName: string;
    /** @alpha */
    readonly id: number;
    /** @alpha */
    readonly cloudAuthHash: string;
  }

  export interface IConnectionQueueInfo extends IConnectionInfo {
    /**
     * Accepts client connection.
     *
     * @param sendNames Send names of all players on server to this client. Defaults to `true`.
     */
    accept: (sendNames?: boolean) => void;
    decline: (reason: string) => void;
    readonly isAccepted: boolean;
  }

  export const enum ConnectDeniedReason {
    WRONG_VERSION,
    WRONG_BRANCH,
    DEBUG_NOT_ALLOWED,
    WRONG_PASSWORD,
    WRONG_CDN_URL,
  }

  export interface IServerEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
    entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
    explosion: (source: Player, type: ExplosionType, pos: shared.Vector3, fx: number, target: Entity | null) => boolean | void;
    netOwnerChange: (entity: Entity, owner: Player | null, oldOwner: Player | null) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerChangedVehicleSeat: (player: Player, vehicle: Vehicle, oldSeat: number, seat: number) => void;
    playerConnect: (player: Player) => void;
    playerConnectDenied: (reason: ConnectDeniedReason, name: string, ip: string, passwordHash: number, isDebug: boolean, branch: string, version: number, cdnURL: string, discordId: number) => void;
    playerDamage: (victim: Player, attacker: Entity | null, healthDamage: number, armourDamage: number, weaponHash: number) => void;
    playerDeath: (victim: Player, killer: Entity | null, weaponHash: number) => void;
    playerDisconnect: (player: Player, reason: string) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerLeftVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number, stackTrace: string) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    vehicleAttach: (vehicle: Vehicle, attachedVehicle: Vehicle) => void;
    vehicleDestroy: (vehicle: Vehicle) => void;
    vehicleDetach: (vehicle: Vehicle, detachedVehicle: Vehicle) => void;
    weaponDamage: (source: Player, target: Entity, weaponHash: number, damage: number, offset: shared.Vector3, bodyPart: shared.BodyPart) => number | boolean | void;
    startFire: (player: Player, fires: Array<IFireInfo>) => boolean | void;
    startProjectile: (player: Player, pos: shared.Vector3, dir: shared.Vector3, ammoHash: number, weaponHash: number) => boolean | void;
    playerWeaponChange: (player: Player, oldWeapon: number, weapon: number) => boolean | void;
    vehicleDamage: (vehicle: Vehicle, attacker: Entity | null, bodyHealthDamage: number, additionalBodyHealthDamage: number, engineHealthDamage: number, petrolTankDamage: number, weapon: number) => void;
    localMetaChange: (player: Player, key: string, newValue: any, oldValue: any) => void;
    connectionQueueAdd: (connectionInfo: IConnectionQueueInfo) => void;
    connectionQueueRemove: (connectionInfo: IConnectionQueueInfo) => void;
    serverStarted: () => void;
    playerRequestControl: (player: Player, target: Entity) => boolean | void;
    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;
    playerInteriorChange: (player: Player, oldInterior: number, newInterior: number) => void;
    playerDimensionChange: (player: Player, oldDimension: number, newDimension: number) => void;
    /** @alpha */
    vehicleHorn: (vehicle: Vehicle, player: Player, state: boolean) => boolean | void;
    /** @alpha */
    vehicleSiren: (vehicle: Vehicle, state: boolean) => void;
    /** @alpha */
    playerSpawn: (player: Player) => void;
    /** @alpha */
    baseObjectCreate: (baseObject: BaseObject) => void;
    /** @alpha */
    baseObjectRemove: (baseObject: BaseObject) => void;
    /** @alpha */
    metaChange: (target: BaseObject, key: string, value: any, oldValue: any) => void;
  }

  export interface IFireInfo {
    readonly pos: shared.Vector3;
    readonly weapon: number;
  }

  export interface IVehicleNeon {
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
  }

  export interface ICloth {
    readonly drawable: number;
    readonly texture: number;
    readonly palette: number;
  }

  export interface IDlcCloth {
    readonly drawable: number;
    readonly texture: number;
    readonly palette: number;
    readonly dlc: number;
  }

  export interface IProp {
    readonly drawable: number;
    readonly texture: number;
  }

  export interface IDlcProp {
    readonly drawable: number;
    readonly texture: number;
    readonly dlc: number;
  }

  export interface IHeadOverlay {
    readonly index: number;
    readonly opacity: number;
    readonly colorType: number;
    readonly colorIndex: number;
    readonly secondColorIndex: number;
  }

  export interface IHeadBlendData {
    readonly shapeFirstID: number;
    readonly shapeSecondID: number;
    readonly shapeThirdID: number;
    readonly skinFirstID: number;
    readonly skinSecondID: number;
    readonly skinThirdID: number;
    readonly shapeMix: number;
    readonly skinMix: number;
    readonly thirdMix: number;
  }

  export interface IBoneInfo {
    readonly id: number;
    readonly index: number;
    readonly name: string;
  }

  export interface IVehicleModel {
    readonly title: string;
    readonly type: shared.ModelType;
    readonly wheelsCount: number;
    readonly hasArmoredWindows: boolean;
    readonly primaryColor: number;
    readonly secondaryColor: number;
    readonly pearlColor: number;
    readonly wheelsColor: number;
    readonly interiorColor: number;
    readonly dashboardColor: number;
    readonly hasAutoAttachTrailer: boolean;
    readonly availableModkits: ReadonlyArray<boolean>;
    hasExtra(extraId: number): boolean;
    hasDefaultExtra(extraId: number): boolean;
    readonly bones: ReadonlyArray<IBoneInfo>;
  }

  export interface IPedModel {
    readonly hash: number;
    readonly name: string;
    readonly type: string;
    readonly dlcName: string;
    readonly defaultUnarmedWeapon: string;
    readonly movementClipSet: string;
    readonly bones: ReadonlyArray<IBoneInfo>;
  }

  /**
   * Extend it by interface merging for use in baseobject meta {@link "alt-server".BaseObject getMeta method}, {@link "alt-server".BaseObject setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomBaseObjectMeta extends shared.ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in blip meta {@link "alt-server".Blip getMeta method}, {@link "alt-server".Blip setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomBlipMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in colshape meta {@link "alt-server".Colshape getMeta method}, {@link "alt-server".Colshape setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomColshapeMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in checkpoint meta {@link "alt-server".Checkpoint getMeta method}, {@link "alt-server".Checkpoint setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomCheckpointMeta extends ICustomColshapeMeta {}

  /**
   * Extend it by interface merging for use in voice channel meta {@link "alt-server".VoiceChannel getMeta method}, {@link "alt-server".VoiceChannel setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomVoiceChannelMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in entity meta {@link "alt-server".Entity getMeta method}, {@link "alt-server".Entity setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomEntityMeta extends ICustomBaseObjectMeta {}

  /**
   * Extend it by merging interfaces for use in player meta {@link "alt-server".Player getMeta method}, {@link "alt-server".Player setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomPlayerMeta extends ICustomEntityMeta {}

  /**
   * Extend it by merging interfaces for use in vehicle meta {@link "alt-server".Vehicle getMeta method}, {@link "alt-server".Vehicle setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomVehicleMeta extends ICustomEntityMeta {}

  /**
   * Documentation: https://docs.altv.mp/articles/configs/server.html
   */
  export interface IServerConfig {
    readonly resources: ReadonlyArray<string>;
    readonly modules: ReadonlyArray<string>;
    readonly name?: string;
    readonly host?: string;
    readonly port?: number;
    readonly players?: number;
    readonly password?: string;
    readonly announce?: boolean;
    readonly token?: string;
    readonly gamemode?: string;
    readonly website?: string;
    readonly language?: string;
    readonly description?: string;
    readonly debug?: boolean;
    readonly streamingDistance?: number;
    readonly migrationDistance?: number;
    readonly timeout?: number;
    readonly announceRetryErrorDelay?: number;
    readonly announceRetryErrorAttempts?: number;
    readonly duplicatePlayers?: number;
    readonly tags?: ReadonlyArray<string>;
    readonly useEarlyAuth?: boolean;
    readonly earlyAuthUrl?: string;
    readonly useCdn?: boolean;
    readonly cdnUrl?: string;
    readonly sendNames?: boolean;
    readonly mapBoundsMinX?: number;
    readonly mapBoundsMinY?: number;
    readonly mapBoundsMaxX?: number;
    readonly mapBoundsMaxY?: number;
    readonly mapCellAreaSize?: number;
    readonly colShapeTickRate?: number;
    readonly logStream?: ReadonlyArray<string>;
    readonly entityWorkerCount?: number;
    readonly connectionQueue?: boolean;

    readonly voice?: {
      readonly bitrate?: number;
      readonly externalSecret?: string;
      readonly externalHost?: string;
      readonly externalPort?: number;
      readonly externalPublicHost?: string;
      readonly externalPublicPort?: number;
    };

    readonly worldProfiler?: {
      readonly port?: number;
      readonly host?: string;
    };

    readonly "js-module"?: {
      readonly inspector?: {
        readonly host?: string;
        readonly port?: number;
      };
      readonly "source-maps"?: boolean;
      readonly "heap-profiler"?: boolean;
      readonly profiler?: boolean;
      readonly "global-fetch"?: boolean;
      readonly "global-webcrypto"?: boolean;
      readonly "network-imports"?: boolean;
      readonly "extra-cli-args"?: ReadonlyArray<string>;
    };

    readonly "csharp-module"?: {
      readonly disableDependencyDownload?: true;
    };

    readonly [key: string]: unknown;
  }

  /**
   * The root directory of the server.
   */
  export const rootDir: string;

  export const defaultDimension: number;

  export const globalDimension: number;

  export class BaseObject extends shared.BaseObject {
    /**
     * Gets the base object with the given type and id
     * @alpha
     */
    public getByID(type: shared.BaseObjectType, id: number): BaseObject;

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

    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteSyncedMeta(key: string): void;
    public deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomBaseObjectSyncedMeta>>(key: K): void;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomBaseObjectSyncedMeta, K>): void;
    public setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomBaseObjectSyncedMeta>>(key: K, value: shared.ICustomBaseObjectSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomBaseObjectSyncedMeta} */
    public setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomBaseObjectSyncedMeta, K, V>): void;
  }

  export class WorldObject extends BaseObject {
    /**
     * Object dimension.
     *
     * @remarks Check https://docs.altv.mp/articles/dimensions.html to understand how it works.
     */
    public dimension: number;

    /**
     * Object position.
     */
    public pos: shared.Vector3;
  }

  /** @alpha */
  export class VirtualEntityGroup extends BaseObject {
    /** Creates a new Virtual Entity Group */
    public constructor(maxStreamedEntityCount: number);

    /** Returns all Virtual Entity Group instances */
    public static readonly all: ReadonlyArray<VirtualEntityGroup>;

    /** Unique id */
    public readonly id: number;

    /** Maximum streaming range inside the Virtual Entity Group */
    public readonly streamingRangeLimit: number;
  }

  /** @alpha */
  export class VirtualEntity extends WorldObject {
    /** Creates a new Virtual Entity */
    public constructor(group: VirtualEntityGroup, position: shared.Vector3, streamingDistance: number, data?: Record<string, any>);

    /** Returns all Virtual Entity instances */
    public static readonly all: ReadonlyArray<VirtualEntity>;

    /** Unique id */
    public readonly id: number;

    /** Virtual Entity Group this entity belongs to */
    public readonly group: VirtualEntityGroup;

    /** Streaming range for the virtual entity */
    public readonly streamingDistance: number;

    public visible: boolean;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomVirtualEntityStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): shared.ICustomVirtualEntityStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): boolean;

    public getStreamSyncedMetaKeys(): ReadonlyArray<string>;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVirtualEntityStreamSyncedMeta, K>): void;
    public setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K, value: shared.ICustomVirtualEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */
    public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVirtualEntityStreamSyncedMeta, K, V>): void;

    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteStreamSyncedMeta(key: string): void;
    public deleteStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): void;
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

    /**
     * Internal identificator of the entity which is identical on both sides.
     */
    public readonly id: number;

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
     * Entity model hash.
     */
    public get model(): number;
    public set model(model: number | string);

    /**
     * Entity rotation.
     *
     * @remarks Values are provided in radians.
     */
    public rot: shared.Vector3;

    /**
     * Whether the entity is visible.
     */
    public visible: boolean;

    /**
     * Whether the entity should be streamed for other entities.
     */
    public streamed: boolean;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Entity | null;

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
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteSyncedMeta(key: string): void;
    public deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K): void;

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

    public getSyncedMetaKeys(): ReadonlyArray<string>;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntitySyncedMeta, K>): void;
    public setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K, value: shared.ICustomEntitySyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */
    public setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntitySyncedMeta, K, V>): void;

    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteStreamSyncedMeta(key: string): void;
    public deleteStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K): void;

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

    public getStreamSyncedMetaKeys(): ReadonlyArray<string>;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntityStreamSyncedMeta, K>): void;
    public setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K, value: shared.ICustomEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */
    public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntityStreamSyncedMeta, K, V>): void;

    /**
     * Changes network owner to the specified player.
     *
     * @remarks See {@link Entity~netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param player The given player that will be set as new network owner.
     * @param disableMigration Pass true to disable migration, false to keep it enabled. If not specified, it defaults to "false".
     */
    public setNetOwner(player: Player, disableMigration?: boolean): void;

    /**
     * Resets overwritten network owner.
     *
     * @remarks See {@link Entity~netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param disableMigration Pass true to disable migration, false to keep it enabled. If not specified, it defaults to "false".
     */
    public resetNetOwner(disableMigration?: boolean): void;

    /**
     * Attaches this entity to another entity.
     *
     * @param entity Target entity.
     * @param entityBone Target bone id or name.
     * @param ownBone Origin bone id or name.
     * @param pos Position offset.
     * @param rot Rotation - needs to be in radians.
     * @param enableCollisions If true the attached entity has a collision.
     * @param noFixedRotation If false the entity is attached with a fixed rotation (no bouncing). That means if the value in native was true, you have to use false in the serverside method
     */
    public attachTo(entity: Entity, entityBone: number | string, ownBone: number | string, pos: shared.IVector3, rot: shared.IVector3, enableCollisions: boolean, noFixedRotation: boolean): void;

    /**
     * Detaches this entity if attached to another entity.
     */
    public detach(): void;

    public frozen: boolean;

    public collision: boolean;
  }

  export class Player extends Entity {
    /**
     * Array with all players connected to the server.
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
    /** @alpha */
    public readonly count: number;
    public armour: number;
    public currentWeapon: number;
    public readonly weapons: ReadonlyArray<IWeapon>;
    public readonly currentWeaponComponents: ReadonlyArray<number>;
    public readonly currentWeaponTintIndex: number;
    public readonly entityAimOffset: shared.Vector3;
    public readonly entityAimingAt: Entity | null;
    public readonly flashlightActive: boolean;
    public readonly moveSpeed: number;
    public readonly isInRagdoll: boolean;
    public readonly isAiming: boolean;
    public readonly isDead: boolean;

    /** @alpha */
    //public readonly isShooting: boolean;
    /** @alpha */
    //public readonly isJumping: boolean;

    /**
     * The player's state of weapon reloading.
     */
    public readonly isReloading: boolean;

    /** @alpha */
    public readonly isEnteringVehicle: boolean;

    /** @alpha */
    public readonly isLeavingVehicle: boolean;

    /** @alpha */
    public readonly isOnLadder: boolean;

    /** @alpha */
    public readonly isInMelee: boolean;

    /** @alpha */
    public readonly isInCover: boolean;

    /**
     * Position the player is currently aiming at.
     *
     * @remarks Will return {@link Vector3.zero} if the player is aiming against a entity.
     */
    public readonly aimPos: shared.Vector3;
    public readonly headRot: shared.Vector3;
    public health: number;
    public readonly ip: string;
    public maxArmour: number;
    public maxHealth: number;
    public readonly name: string;
    public readonly ping: number;
    /**
     * Curent seat the player is sitting in.
     * If player is not in any vehicle it is equal to `0`.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
    public readonly seat: number;
    public readonly vehicle: Vehicle | null;
    public invincible: boolean;
    public readonly isSuperJumpEnabled: boolean;
    public readonly isCrouching: boolean;
    public readonly isStealthy: boolean;
    public readonly isSpawned: boolean;
    public readonly socialID: string;
    /** @alpha */
    public readonly socialClubName: string;
    public readonly hwidHash: string;
    public readonly hwidExHash: string;
    public readonly authToken: string;
    public readonly discordID: string;
    /** @alpha */
    public readonly cloudAuthHash: string;
    public readonly currentAnimationDict: number;
    public readonly currentAnimationName: number;
    public readonly forwardSpeed: number;
    public readonly strafeSpeed: number;
    public readonly currentInterior: number;
    public lastDamagedBodyPart: number;

    /**
     * Send names of all players on server to this player if they are not already sent (value is not set to `true`).
     */
    public sendNames: boolean;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Player if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    /**
     * Emits specified event to client.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    public emit(eventName: string, ...args: any[]): void;

    /**
     * Emits specified event to client, but faster as {@link Player.emit}.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    public emitRaw(eventName: string, ...args: any[]): void;

    public addWeaponComponent(weaponHash: number, component: number): void;

    /**
     * Removes the visible blood on the player body.
     */
    public clearBloodDamage(): void;

    /**
     * Gives the specified weapon to the player.
     *
     * @remarks Amount of given ammo is shared between all weapons
     * with the same [ammo type](https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1).
     * For example pistols: `weapon_pistol` and `weapon_combatpistol` have same ammo pool.
     *
     * See https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1 for a list of ammo types.
     *
     * Some more notes about weapon ammo:
     * - Zero ammo value doesnt remove ammo of that weapon.
     * - Negative ammo value enables infinite ammo for this ammo type.
     * - Amount of ammo will be added if player already have weapon with same ammo type.
     *
     * @example
     * ```js
     * player.giveWeapon(alt.hash('weapon_pistol'), 10, true); // sets amount ammo of type "AMMO_PISTOL" to 10
     * player.giveWeapon(alt.hash('weapon_combatpistol'), 0, true); // also 10 amount of ammo, as this has the same type of ammo
     * player.giveWeapon(alt.hash('weapon_pistol'), 10, true); // adds amount ammo of type "AMMO_PISTOL", so 20 pistol ammo in result
     * ```
     *
     * @param weaponModel The model of the weapon.
     * @param ammo Amount of ammo to spawn the weapon with. See remarks for more information.
     * @param equipNow Should the weapon be equipped immediately.
     */
    public giveWeapon(weaponModel: string | number, ammo: number, equipNow: boolean): void;

    /**
     * Forcefully disconnects the player with a reason message.
     *
     * @param reason The reason that will display to the player on the disconnect screen. If not specified, it defaults to "KICKED_OUT".
     */
    public kick(reason?: string): void;

    /**
     * Removes every weapon from the player.
     */
    public removeAllWeapons(): void;

    /**
     * Removes the specified weapon from the player.
     *
     * @param weaponHash Hash of the weapon.
     */
    public removeWeapon(weaponHash: number): void;

    /**
     * Removes the specified weapon component from the specified weapon.
     *
     * @param weaponHash Hash of the weapon.
     * @param component Hash of the weapon component.
     */
    public removeWeaponComponent(weaponHash: number, component: number): void;

    public setDateTime(day: DateTimeDay, month: DateTimeMonth, year: number, hour: DateTimeHour, minute: DateTimeMinute, second: DateTimeSecond): void;

    public setWeaponTintIndex(weaponHash: number, tintIndex: number): void;

    public setWeather(weatherType: WeatherType): void;
    public setWeather<T extends number>(weatherType: T): void;

    /**
     * Spawns the player in the world.
     *
     * @remarks The player has to have a model set before being spawned.
     *
     * @param x The x position where the player gets spawned.
     * @param y The y position where the player gets spawned.
     * @param z The z position where the player gets spawned.
     * @param delay The delay at which the player gets spawned after calling this function. Defaults to 0.
     */
    public spawn(x: number, y: number, z: number, delay?: number): void;

    /**
     * Spawns the player in the world.
     *
     * @remarks The player has to have a model set before being spawned.
     *
     * @param pos The position where the player gets spawned.
     * @param delay The delay at which the player gets spawned after calling this function. Defaults to 0.
     */
    public spawn(pos: shared.IVector3, delay?: number): void;

    /**
     * Sets the model and spawns the player in the world.
     *
     * @param model The model to be set to the player before spawning.
     * @param pos The position where the player gets spawned.
     */
    public spawn(model: string | number, pos: shared.IVector3): void;

    public despawn(): void;

    /**
     * Gets the specified clothing component.
     *
     * @example
     * ```js
     * let cloth = player.getClothes(1); // Gets the currently equipped mask
     * alt.log(cloth.drawable); // Logs the drawable of the currently equipped mask
     * ```
     *
     * @param component Component id of the clothing.
     */
    public getClothes(component: number): ICloth;

    /**
     * Gets the specified dlc clothing component.
     *
     * @example
     * ```js
     * let cloth = player.getDlcClothes(1); // Gets the currently equipped mask
     * alt.log(cloth.drawable); // Logs the drawable of the currently equipped mask
     * ```
     *
     * @param component Component id of the clothing.
     */
    public getDlcClothes(component: number): IDlcCloth;

    /**
     * Sets the specified clothing component.
     *
     * @remarks The dlc hash is only required when setting dlc clothing.
     * @example
     * ```js
     * player.setClothes(1, 14, 0); // Sets the players mask to a blue hockey mask
     * ```
     *
     * @param component Component id of the clothing.
     * @param drawable Drawable id of the clothing.
     * @param texture Texture id of the clothing.
     * @param palette Palette of the clothing.
     */
    public setClothes(component: number, drawable: number, texture: number, palette?: number): boolean;

    /**
     * Sets the specified dlc clothing component.
     *
     * @remarks The dlc hash is only required when setting dlc clothing.
     * @example
     * ```js
     * player.setDlcClothes(alt.hash('dlcname'), 1, 14, 0);
     * ```
     *
     * @param dlc Dlc hash of the clothing.
     * @param component Component id of the clothing.
     * @param drawable Drawable id of the clothing.
     * @param texture Texture id of the clothing.
     * @param palette Palette of the clothing.
     */
    public setDlcClothes(dlc: number, component: number, drawable: number, texture: number, palette?: number): boolean;

    /**
     * Gets the specified prop component.
     *
     * @example
     * ```js
     * let prop = player.getProp(0); // Gets the hat prop of the player
     * alt.log(prop.drawable); // Logs the drawable id of the current hat prop of the player
     * ```
     *
     * @param component Component id of the prop.
     */
    public getProp(component: number): IProp;

    /**
     * Gets the specified dlc prop component.
     *
     * @example
     * ```js
     * let prop = player.getDlcProp(0); // Gets the hat prop of the player
     * alt.log(prop.drawable); // Logs the drawable id of the current hat prop of the player
     * ```
     *
     * @param component Component id of the prop.
     */
    public getDlcProp(component: number): IDlcProp;

    /**
     * Sets the specified prop component.
     *
     * @example
     * ```js
     * player.setProp(0, 13, 0); // sets the players hat prop to a blue cowboy hat
     * ```
     *
     * @param component Component id of the prop.
     * @param drawable Drawable id of the prop.
     * @param texture Texture id of the prop.
     */
    public setProp(component: number, drawable: number, texture: number): boolean;

    /**
     * Sets the specified dlc prop component.
     *
     * @example
     * ```js
     * player.setDlcProp(alt.hash('dlcname'), 0, 13, 0);
     * ```
     *
     * @param dlc Dlc hash of the prop.
     * @param component Component id of the prop.
     * @param drawable Drawable id of the prop.
     * @param texture Texture id of the prop.
     */
    public setDlcProp(dlc: number, component: number, drawable: number, texture: number): boolean;

    /**
     * Removes a specified prop component.
     *
     * @example
     * ```js
     * player.clearProp(0); // removes the player hat prop
     * ```
     *
     * @param component Component id of the prop.
     */
    public clearProp(component: number): void;

    /**
     * Checks whether the given entity is in the stream range of the player.
     *
     * @example
     * ```js
     * if(player.vehicle) alt.log(player.isEntityInStreamRange(player.vehicle)); // This always logs true, because their own vehicle is always in stream range of the player
     * ```
     */
    public isEntityInStreamRange(entity: Entity): boolean;

    public isEntityInStreamRange(entityID: number): boolean;

    /**
     * Set the player into a vehicle on specific seat.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
    public setIntoVehicle(vehicle: Vehicle, seat: number): void;

    /**
     * Plays ambient speech.
     *
     * @Remarks See https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json for a full list of speeches.
     *
     * @param speechName Name of the speach.
     * @param speechParam Param of the speach.
     * @param speechDictHash Hash of the speach dict.
     */
    public playAmbientSpeech(speechName: string, speechParam: string, speechDictHash: number): void;

    public setHeadOverlay(overlayID: number, index: number, opacity: number): boolean;

    public removeHeadOverlay(overlayID: number): boolean;

    public setHeadOverlayColor(overlayID: number, colorType: number, colorIndex: number, secondColorIndex: number): boolean;

    public getHeadOverlay(overlayID: number): IHeadOverlay;

    public setFaceFeature(index: number, scale: number): boolean;

    public getFaceFeatureScale(index: number): number;

    public removeFaceFeature(index: number): boolean;

    public setHeadBlendPaletteColor(id: number, red: number, green: number, blue: number): boolean;

    public getHeadBlendPaletteColor(id: number): shared.RGBA;

    public setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number): void;

    public getHeadBlendData(): IHeadBlendData;

    public setEyeColor(eyeColor: number): boolean;

    public getEyeColor(): number;

    public setHairColor(hairColor: number): void;

    public getHairColor(): number;

    public setHairHighlightColor(hairHighlightColor: number): void;

    public getHairHighlightColor(): number;

    /** @alpha */
    public playAnimation(animDict: string, animName: string, blendInSpeed?: number, blendOutSpeed?: number, duration?: number, flags?: number, playbackRate?: number, lockX?: boolean, lockY?: boolean, lockZ?: boolean): void;

    /** @alpha */
    public clearTasks(): void;

    // local meta

    /**
     * Stores the given value with the specified key.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setLocalMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerLocalMeta, K>): void;
    public setLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K, value: shared.ICustomPlayerLocalMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
    public setLocalMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerLocalMeta, K, V>): void;

    public deleteLocalMeta(key: string): void;
    public deleteLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getLocalMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerLocalMeta>): unknown;
    public getLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): shared.ICustomPlayerLocalMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
    public getLocalMeta<V extends any>(key: string): V | undefined;

    public hasLocalMeta(key: string): boolean;
    public hasLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): boolean;

    public getLocalMetaKeys(): ReadonlyArray<string>;

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

    public setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerSyncedMeta, K>): void;
    public setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K, value: shared.ICustomPlayerSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
    public setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerSyncedMeta, K, V>): void;

    public deleteSyncedMeta(key: string): void;
    public deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): void;

    public getSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerSyncedMeta>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): shared.ICustomPlayerSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
    public getSyncedMeta<V extends any>(key: string): V | undefined;

    public hasSyncedMeta(key: string): boolean;
    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): boolean;

    // stream synced meta

    public setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerStreamSyncedMeta, K>): void;
    public setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K, value: shared.ICustomPlayerStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
    public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerStreamSyncedMeta, K, V>): void;

    public deleteStreamSyncedMeta(key: string): void;
    public deleteStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): void;

    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): boolean;
  }

  /**
   * A vehicle is an extension of the Entity class.
   *
   * @example
   * ```js
   * // Get the vehicle a player is driving.
   * const vehicle = alt.Vehicle.all.find(veh => veh.driver && veh.driver.name === 'Stuyk');
   * if (!vehicle) {
   *     console.log('Stuyk is not driving a vehicle');
   * } else {
   *     console.log('Stuyk is driving a vehicle.')
   *     const player = vehicle.driver;
   * }
   * ```
   *
   * @export
   * @class Vehicle
   * @extends {Entity}
   */
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

    /** @alpha */
    public readonly count: number;

    /**
     * Get the entity model hash.
     *
     * @example
     * ```js
     * const comparisonHash = alt.hash('infernus');
     * if (comparisonHash === someVehicle.model) {
     *     console.log('This vehicle is an infernus.');
     * } else {
     *     console.log('This vehicle is not an infernus.');
     * }
     * ```
     * @remarks Vehicle doesn't provide a setter.
     */
    public get model(): number;

    /**
     * Gets or sets the active radio station.
     *
     * @example
     * ```js
     * const someVehicle = alt.Vehicle.all[0];
     * const stationNumber = someVehicle.activeRadioStation;
     * console.log(`Current Station: ${stationNumber}`);
     *
     * someVehicle.activeRadioStation = 255;
     * console.log(`Vehicle radio station was turned off.`);
     * ```
     */
    public activeRadioStation: RadioStation;

    /**
     * Gets or sets the additional body health.
     */
    public bodyAdditionalHealth: number;
    /**
     * Gets or sets the body health.
     */
    public bodyHealth: number;

    /**
     * Gets or sets the custom primary color as a RGBA type.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.customPrimaryColor = new alt.RGBA(255, 0, 0);
     * console.log(`Vehicle custom primary color was set to red`);
     * ```
     */
    public customPrimaryColor: shared.RGBA;

    /**
     * Gets or sets the custom secondary color as a RGBA type.
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.customSecondaryColor = new alt.RGBA(255, 0, 0);
     * console.log(`Vehicle custom secondary color was set to red`);
     * ```
     */
    public customSecondaryColor: shared.RGBA;

    /**
     * Gets or sets if the vehicle instance has custom tires.
     */
    public customTires: boolean;

    /**
     * Applies some decoration effects to the vehicle (e.g.: It makes the hydra looking rusty or applies snow to the front bumper of `policeold1`). Does not work on every vehicle model.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.darkness = 500;
     * ```
     */
    public darkness: number;

    /**
     * Gets or sets the dashboard color of the vehicle.
     *
     * Dash board colors range from 0 to 159.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.dashboardColor = 139;
     * ```
     */
    public dashboardColor: number;

    /**
     * Gets the current state of the daylights.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * if (someVehicle.daylightOn) {
     *     console.log('Vehicle daylights are on');
     * } else {
     *     console.log('Vehicle daylights are off');
     * }
     * ```
     */
    public readonly daylightOn: boolean;

    /**
     * Gets if a vehicle is destroyed.
     *
     * Destroyed is set to true when specific game activities cause the engine to stop.
     * Explosions, being underwater, crashing too much, etc.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     *
     * if (someVehicle.destroyed) {
     *    console.log(`The elegy has been destroyed.`);
     * }
     * ```
     *
     */
    public readonly destroyed: boolean;

    /**
     * Gets or sets the dirt level of the vehicle.
     */
    public dirtLevel: number;

    /**
     * Gets the current driver of the vehicle. It returns null, if there is no driver.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * const driver = someVehicle.driver;
     *
     * if (driver) {
     *     console.log(`There is currently a player driving this car. ${driver.name}`);
     * }
     * ```
     *
     */
    public readonly driver: Player | null;

    /**
     * Gets or sets the current engine health.
     *
     * Default maximum engine health is 1000.
     * The `vehicle.repair()` function should be used to repair a vehicle if the engine health is less than or equal to zero.
     *
     * This example demonstrates that when you drive through a ColShape it will repair the vehicle.
     *
     * @example
     * ```js
     * const someColShape = new alt.ColshapeCircle(-1295.9208984375, 86.0835189819336, 2);
     * someColShape.repairVehicles = true;
     *
     * alt.on('entityEnterColshape', (colshape, entity) => {
     *       // Check if the entity is a vehicle or not.
     *     if (!(entity instanceof alt.Vehicle)) {
     *        return;
     *     }
     *
     *     // Check if it's the right colshape to do this.
     *     if (!colshape.repairVehicles) {
     *        return;
     *     }
     *
     *     if (entity.destroyed) {
     *         entity.repair();
     *         console.log('Repaired Destroyed Vehicle');
     *         return;
     *     }
     *
     *     entity.engineHealth = 1000;
     *     console.log('Repaired Vehicle')
     * });
     * ```
     *
     */
    public engineHealth: number;

    /**
     * Gets or sets the engine state of the vehicle.
     *
     * The functionality of the vehicle engine can be triggered on either client-side or server-side. If you want to trigger the engine on client-side use native.setVehicleEngineOn.
     *
     * @example
     * ```js
     * const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * vehicle.engineOn = true;
     * ```
     */
    public engineOn: boolean;

    /**
     * Gets if a flamethrower of a vehicle is active on vehicle models like `cerberus`.
     */
    public readonly flamethrowerActive: boolean;
    /**
     * Gets if the handbrake of a car is active.
     */
    public readonly handbrakeActive: boolean;
    /**
     * Gets if the car has armored windows.
     */
    public readonly hasArmoredWindows: boolean;
    /**
     * Gets or sets the headlight color of a vehicle.
     */
    public headlightColor: number;
    /**
     * Gets or sets the interior color of a vehicle.
     */
    public interiorColor: number;
    /**
     * Gets or sets the lights intensity and distance of a vehicle.
     */
    public lightsMultiplier: number;
    /**
     * Gets or sets the livery of a vehicle.
     */
    public livery: number;
    /**
     * Gets or sets the lock state of a vehicle.
     */
    public lockState: shared.VehicleLockState;
    /**
     * Enables or disables the manual engine control.
     */
    public manualEngineControl: boolean;
    /**
     * Gets or sets the current mod kit of a vehicle.
     */
    public modKit: number;
    /**
     * Gets the maximum amount of vehicle mod kits available.
     */
    public readonly modKitsCount: number;
    /**
     * Enables or disables a neon light on a specific position.
     */
    public neon: IVehicleNeon;
    /**
     * Gets or sets the color of the neon lights.
     */
    public neonColor: shared.RGBA;
    /**
     * Gets the current state of the nightlights.
     */
    public readonly nightlightOn: boolean;
    /**
     * Gets or sets the current number plate style.
     */
    public numberPlateIndex: NumberPlateStyle;
    /**
     * Gets or sets the current text displayed on the number plate.
     */
    public numberPlateText: string;
    /**
     * Gets or sets the pearl color of a vehicle.
     */
    public pearlColor: number;
    /**
     * Gets or sets the current health amount of the petrol tank.
     */
    public petrolTankHealth: number;
    /**
     * Gets or sets the current primary color of a vehicle.
     */
    public primaryColor: number;
    /**
     * Gets how often a vehicle got repaired.
     */
    public readonly repairsCount: number;
    /**
     * Gets or sets the roof livery of a vehicle.
     */
    public roofLivery: number;
    /**
     * Gets or sets the roof state of a vehicle (closed or open).
     *
     * @deprecated Use {@link roofClosed} instead.
     */
    public roofState: boolean;
    /**
     * Opens or closes the vehicle roof (if vehicle has this feature, otherwise it is always `true`).
     *
     * @example
     * ```js
     * const surano = new alt.Vehicle('surano', 0, 0, 72, 0, 0, 0);
     * surano.roofClosed = false; // Hides the roof of the car
     * ```
     */
    public roofClosed: boolean;
    /**
     * Gets or sets the current secondary color.
     */
    public secondaryColor: number;
    /**
     * Gets or sets the siren state of a vehicle.
     */
    public sirenActive: boolean;
    /**
     * Gets or sets the color of the tire smoke.
     */
    public tireSmokeColor: shared.RGBA;
    /**
     * Gets or sets the wheel color.
     */
    public wheelColor: number;
    /**
     * Gets the amount of wheels of a vehicle.
     */
    public readonly wheelsCount: number;
    /**
     * Gets the wheel type.
     */
    public readonly wheelType: number;
    /**
     * Gets the type of the front wheels.
     */
    public readonly frontWheels: number;
    /**
     * Gets the type of the rear wheels.
     */
    public readonly rearWheels: number;
    /**
     * Gets or sets the window tint of a vehicle.
     */
    public windowTint: WindowTint;
    /**
     * Gets a vehicle that is attached to the vehicle instance.
     */
    public readonly attached: Vehicle | null;
    /**
     * Gets a vehicle where the vehicle is attached to.
     */
    public readonly attachedTo: Vehicle | null;
    /**
     * Gets the velocity vector of a vehicle.
     */
    public readonly velocity: shared.Vector3;
    /**
     * Gets or sets the drift mode state of the vehicle.
     */
    public driftModeEnabled: boolean;

    /**
     * Gets or sets the vehicles rotation with a quaternion.
     * @alpha
     */
    public quaternion: shared.Quaternion;

    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number);
    constructor(model: string | number, pos: shared.IVector3, rot: shared.IVector3);
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Vehicle if it was found, otherwise null.
     */
    public static getByID(id: number): Vehicle | null;
    /**
     * Returns if a specific wheel has a tire.
     *
     * @param wheelId The specific wheel based on the id
     * @returns True when the wheel has a tire, otherwise false.
     */
    public doesWheelHasTire(wheelId: number): boolean;
    /**
     * Returns the appearance of a vehicle as a base64 string.
     *
     * @returns A base64 string.
     */
    public getAppearanceDataBase64(): string;
    /**
     * Returns the health of a specific armored window.
     *
     * @param windowId The window id.
     * @returns The amount of health.
     */
    public getArmoredWindowHealth(windowId: number): number;
    /**
     * Returns the amount of shoots that a specific armoured window received.
     *
     * @param windowId The window id.
     * @returns The amount of shoots that a window received.
     */
    public getArmoredWindowShootCount(windowId: number): number;
    /**
     * Returns the damage level of a specific bumper.
     *
     * @param bumperId The id of a bumper.
     * @returns The damage level of a bumper.
     */
    public getBumperDamageLevel(bumperId: VehicleBumper): VehicleBumperDamage;
    public getBumperDamageLevel<T extends number, V extends number = VehicleBumperDamage>(bumperId: T): V;
    /**
     * Returns the damage status of a vehicle as a base64 string.
     *
     * @returns A base64 string of the damage status.
     */
    public getDamageStatusBase64(): string;
    /**
     * Returns the state of a specific door.
     *
     * @param doorId The id of the door.
     * @returns The state of the door.
     */
    public getDoorState(doorId: VehicleDoor): VehicleDoorState;
    public getDoorState<T extends number, V extends number = VehicleDoorState>(doorId: T): V;
    /**
     * Returns the state of a specific extra of a vehicle.
     *
     * @remarks Extras are not available on every vehicle model.
     *
     * @param extraId The id of the extra.
     * @returns True when the extra is enabled, otherwise false.
     */
    public getExtra(extraId: number): boolean;
    /**
     * Returns the game state data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the game state data.
     */
    public getGamestateDataBase64(): string;
    /**
     * Returns the health data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the health data.
     */
    public getHealthDataBase64(): string;
    /**
     * Returns the mod value for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The value of the mod type.
     */
    public getMod(modType: VehicleModType): number;
    public getMod<T extends number>(modType: T): number;
    /**
     * Returns the amount of possible mod values for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The amount of possible mod values of a mod type.
     */
    public getModsCount(modType: VehicleModType): number;
    public getModsCount<T extends number>(modType: T): number;
    /**
     * Returns the amount of bullet holes of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The amount of bullet holes of a vehicle part.
     */
    public getPartBulletHoles(partId: VehiclePart): number;
    public getPartBulletHoles<T extends number>(partId: T): number;
    /**
     * Returns the damage level of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The damage level of a vehicle part.
     */
    public getPartDamageLevel(partId: VehiclePart): VehiclePartDamage;
    public getPartDamageLevel<T extends number, V extends number = VehiclePartDamage>(partId: T): V;
    /**
     * Returns the script data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the script data.
     */
    public getScriptDataBase64(): string;
    /**
     * Returns the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @returns The amount of health of a specific wheel.
     */
    public getWheelHealth(wheelId: number): number;
    /**
     * Returns if a specific light is damaged.
     *
     * @param lightId The id of the light.
     * @returns True if the light is damaged, otherwise false.
     */
    public isLightDamaged(lightId: number): boolean;
    /**
     * Returns if a specific special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @returns True if the special light is damaged, otherwise false.
     */
    public isSpecialLightDamaged(specialLightId: number): boolean;
    /**
     * Returns if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is burst, otherwise false.
     */
    public isWheelBurst(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is detached.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is detached, otherwise false.
     */
    public isWheelDetached(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is on fire.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is on fire, otherwise false.
     */
    public isWheelOnFire(wheelId: number): boolean;
    /**
     * Returns if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @returns True if the window is damaged, otherwise false.
     */
    public isWindowDamaged(windowId: number): boolean;
    /**
     * Returns if a specific window is open.
     *
     * @param windowId The id of the window.
     * @returns True if the window is open, otherwise false.
     */
    public isWindowOpened(windowId: number): boolean;
    /**
     * Repairs the vehicle.
     *
     * @remarks At present this function is **unstable**,
     * consider recreating the vehicle instead.
     * * https://github.com/altmp/altv-issues/issues/1748
     * * https://github.com/altmp/altv-issues/issues/1184
     * * https://github.com/altmp/altv-issues/issues/1445
     * * https://github.com/altmp/altv-issues/issues/1426
     */
    public repair(): void;

    /**
     * Sets the appearance of a vehicle with a base64 string.
     *
     * @param data The base64 string of the appearance data.
     */
    public setAppearanceDataBase64(data: string): void;
    /**
     * Sets the health of a specific armored window.
     *
     * @param windowId The id of the window.
     * @param health The amount of health.
     */
    public setArmoredWindowHealth(windowId: number, health: number): void;
    /**
     * Sets the shoot count of a specific armoured window.
     *
     * @param windowId The id of the window.
     * @param count The amount of shoots.
     */
    public setArmoredWindowShootCount(windowId: number, count: number): void;
    /**
     * Sets the damage level of a specific bumper.
     *
     * @param bumperId The id of the bumper.
     * @param level The damage level.
     */
    public setBumperDamageLevel(bumperId: VehicleBumper, level: VehicleBumperDamage): void;
    public setBumperDamageLevel<T extends number, V extends number = VehicleBumperDamage>(bumperId: T, level: V): void;
    /**
     * Sets the damage status of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the damage status.
     */
    public setDamageStatusBase64(data: string): void;
    /**
     * Sets the state of a specific door
     *
     * @param doorId The id of the door.
     * @param state The state of the door.
     */
    public setDoorState(doorId: VehicleDoor, state: VehicleDoorState): void;
    public setDoorState<T extends number, V extends number = VehicleDoorState>(doorId: T, state: V): void;
    /**
     * Sets the state of an extra of a vehicle.
     *
     * @remarks Setting extras on vehicle does not work for every vehicle model. For example you can change the light bar of a police car with this method.
     *
     * @param extraId The id of the extra.
     * @param state The state of the extra.
     */
    public setExtra(extraId: number, state: boolean): void;
    /**
     * Sets the game state data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the game state data.
     */
    public setGamestateDataBase64(data: string): void;
    /**
     * Sets the health data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the health data.
     */
    public setHealthDataBase64(data: string): void;
    /**
     * Sets a specific light of the vehicle either damaged or not.
     *
     * @param lightId The id of the light.
     * @param isDamaged True to damage the specific light, otherwise false.
     */
    public setLightDamaged(lightId: number, isDamaged: boolean): void;
    /**
     * Applies a specific mod of a given mod type.
     *
     * @param modType The type of the mod.
     * @param modId The id of the mod.
     */
    public setMod(modType: VehicleModType, modId: number): void;
    public setMod<T extends number>(modType: T, modId: number): void;
    /**
     * Applies bullet holes to a specific vehicle part.
     *
     * @param partId The id of the part.
     * @param count The amount of bullet holes.
     */
    public setPartBulletHoles(partId: VehiclePart, count: number): void;
    public setPartBulletHoles<T extends number>(partId: T, count: number): void;
    /**
     * Sets the damage level of a vehicle part.
     *
     * @param partId The id of the part.
     * @param level The damage level.
     */
    public setPartDamageLevel(partId: VehiclePart, level: VehiclePartDamage): void;
    public setPartDamageLevel<T extends number, V extends number = VehiclePartDamage>(partId: T, level: V): void;
    /**
     * Sets type of the rear wheels.
     *
     * @param wheelId The id of the rear wheel type.
     */
    public setRearWheels(wheelId: number): void;
    /**
     * Sets the script data of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the script data.
     */
    public setScriptDataBase64(data: string): void;
    /**
     * Sets if a special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @param isDamaged True to damage the specific special light, otherwise false.
     */
    public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @param state True to burst the wheel, otherwise false.
     */
    public setWheelBurst(wheelId: number, state: boolean): void;
    /**
     * Sets a wheel either detached or attached.
     *
     * @param wheelId The id of the wheel.
     * @param state True to detach the wheel, otherwise false.
     */
    public setWheelDetached(wheelId: number, state: boolean): void;
    /**
     * Sets if a specific wheel has a tire.
     *
     * @param wheelId The id of the wheel.
     * @param state True to apply a tire to a wheel, otherwise false.
     */
    public setWheelHasTire(wheelId: number, state: boolean): void;
    /**
     * Sets the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @param health The health of the wheel.
     */
    public setWheelHealth(wheelId: number, health: number): void;
    /**
     * Sets a wheel either on fire or not
     *
     * @param wheelId The id of the wheel.
     * @param state True to set the wheel on fire, otherwise false.
     */
    public setWheelOnFire(wheelId: number, state: boolean): void;
    /**
     * Applies a wheel style based on the type and variation.
     *
     * @param wheelType The type of the wheel.
     * @param wheelId The variation id of the wheel.
     */
    public setWheels(wheelType: number, wheelId: number): void;
    /**
     * Sets if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @param isDamaged True to damage the specific window, otherwise false.
     */
    public setWindowDamaged(windowId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific window is open.
     *
     * @param windowId The id of the window.
     * @param state True to open the window, otherwise false.
     */
    public setWindowOpened(windowId: number, state: boolean): void;
    /**
     * Repairs a specific wheel.
     *
     * @param wheelId The id of the wheel.
     */
    public setWheelFixed(wheelId: number): void;

    /**
     * Gets or sets if the created train is a mission train.
     */
    public isMissionTrain: boolean;

    /**
     * Gets or sets the track id of the train.
     *
     * @remarks Valid track ids are between 0 and 11.
     */
    public trainTrackId: number;

    /**
     * Gets the engine of the train.
     */
    public readonly trainEngineId: Vehicle | null;

    /**
     * Set a train as an engine of a train.
     *
     * @param vehicle The vehicle to set as an engine.
     */
    public setTrainEngineId(vehicle: Vehicle | null): void;

    /**
     * Gets or sets the trains config index.
     *
     * @remarks You can find a list of all possible config indices in the trains.xml. Valid indices are between 1 and 25.
     */
    public trainConfigIndex: number;

    /**
     * Gets or sets the distance of the trains to the engine.
     */
    public trainDistanceFromEngine: number;

    /**
     * Gets or sets if the train is the engine of the train.
     */
    public isTrainEngine: boolean;

    /**
     * Gets or sets if the train is a caboose.
     */
    public isTrainCaboose: boolean;

    /**
     * Gets or sets if the train is a passenger carriage.
     */
    public trainPassengerCarriages: boolean;

    /**
     * Gets or sets the direction of the train.
     */
    public trainDirection: boolean;

    /**
     * Gets or sets if the trains is rendered derailed.
     */
    public trainRenderDerailed: boolean;

    /**
     * Gets or sets if the doors of the trains should be forced open.
     */
    public trainForceDoorsOpen: boolean;

    /**
     * Gets or sets the cruise speed of the train.
     */
    public trainCruiseSpeed: number;

    /**
     * Gets or sets the config index of the train's carriage.
     */
    public trainCarriageConfigIndex: number;

    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train.
     */
    public readonly trainLinkedToBackwardId: Vehicle | null;

    /**
     * Links another train to the back of the train.
     *
     * @param vehicle The vehicle to set as linked to the back of the train.
     */
    public setTrainLinkedToBackwardId(vehicle: Vehicle | null): void;

    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train in front.
     */
    public readonly trainLinkedToForwardId: Vehicle | null;

    /**
     * Links another train to the front of the train.
     *
     * @param vehicle The vehicle to set as linked to the front of the train.
     */
    public setTrainLinkedToForwardId(vehicle: Vehicle | null): void;

    public trainUnk1: boolean;

    public trainUnk2: boolean;

    public trainUnk3: boolean;

    /**
     * Activates the searchlight and follows the target.
     *
     * @remarks Entity parameter isn't working for now and this can only be used for helicopter searchlights.
     */
    public setSearchLightTo(entity: Entity, state: boolean): void;

    /**
     * Gets or sets the status of the boat anchor.
     *
     * @alpha
     */
    public boatAnchorActive: boolean;

    public lightState: number;

    public setTimedExplosion(state: boolean, culprit: Player, time: number): void;

    public readonly timedExplosionTime: number;

    public readonly timedExplosionCulprit: Player;

    public readonly hasTimedExplosion: boolean;

    public rocketRefuelSpeed: number;

    public counterMeasureCount: number;

    /**
     * @remarks Value is in meters per second.
     */
    public scriptMaxSpeed: number;

    public getWeaponCapacity(weaponIndex: number): number;

    public setWeaponCapacity(weaponIndex: number, capacity: number): void;

    public hybridExtraActive: boolean;

    public hybridExtraState: number;

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

    public setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleSyncedMeta, K>): void;
    public setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K, value: shared.ICustomVehicleSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
    public setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleSyncedMeta, K, V>): void;

    public deleteSyncedMeta(key: string): void;
    public deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): void;

    public getSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomVehicleSyncedMeta>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): shared.ICustomVehicleSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
    public getSyncedMeta<V extends any>(key: string): V | undefined;

    public hasSyncedMeta(key: string): boolean;
    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): boolean;

    // stream synced meta

    public setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleStreamSyncedMeta, K>): void;
    public setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K, value: shared.ICustomVehicleStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
    public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleStreamSyncedMeta, K, V>): void;

    public deleteStreamSyncedMeta(key: string): void;
    public deleteStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): void;

    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomVehicleStreamSyncedMeta>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): shared.ICustomVehicleStreamSyncedMeta[K] | undefined;
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
    public getStreamSyncedMeta<V extends any>(key: string): V | undefined;

    public hasStreamSyncedMeta(key: string): boolean;
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): boolean;
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

    /** @alpha */
    public readonly count: number;

    /**
     * Retrieves the blip from the pool.
     *
     * @param id The id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     * @alpha
     */
    public static getByID(id: number): Blip | null;

    public routeColor: shared.RGBA;

    public sprite: shared.BlipSprite;

    /** @alpha */
    public readonly id: number;

    /**
     * @remarks Does't properly work for areablips currently.
     */
    public size: shared.Vector2;

    public scale: number;

    public color: shared.BlipColor;

    public secondaryColor: number | shared.RGBA;

    public alpha: number;

    public flashTimer: number;

    public flashInterval: number;

    public route: boolean;

    public bright: boolean;

    public number: number;

    public display: number;

    public showCone: boolean;

    public flashes: boolean;

    public flashesAlternate: boolean;

    public shortRange: boolean;

    public priority: number;

    public heading: number;

    public gxtName: string;

    public name: string;

    public pulse: boolean;

    public asMissionCreator: boolean;

    public tickVisible: boolean;

    public headingIndicatorVisible: boolean;

    public outlineIndicatorVisible: boolean;

    public friendIndicatorVisible: boolean;

    public crewIndicatorVisible: boolean;

    public category: number;

    public highDetail: boolean;

    public shrinked: boolean;

    public attachedTo: Entity | null;

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

    constructor(pos: shared.IVector3);

    constructor(entity: Entity);
  }

  export class Colshape extends WorldObject {
    /** @alpha */
    public static readonly all: ReadonlyArray<Colshape>;

    public readonly colshapeType: shared.ColShapeType;

    /**
     * Whether this colshape should only trigger its enter/leave events for players or all entities.
     */
    public playersOnly: boolean;

    /** @alpha */
    public readonly id: number;

    /**
     * Retrieves the colshape from the pool.
     *
     * @param id The id of the colshape.
     * @returns Entity if it was found, otherwise null.
     *
     * @alpha
     */
    public static getByID(id: number): Colshape | null;

    public isEntityIn(entity: Entity): boolean;
    public isEntityIn(entityID: number): boolean;

    public isPointIn(position: shared.IVector3): boolean;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomColshapeMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K): ICustomColshapeMeta[K] | undefined;
    /** @deprecated See {@link ICustomColshapeMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K, value: ICustomColshapeMeta[K]): void;
    /** @deprecated See {@link ICustomColshapeMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K, V>): void;
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

  export class ColshapePolygon extends Colshape {
    constructor(minZ: number, maxZ: number, points: Array<shared.IVector2>);
  }

  export class Checkpoint extends Colshape {
    constructor(type: shared.CheckpointType, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number, streamingDistance: number);
    constructor(type: shared.CheckpointType, pos: shared.IVector3, radius: number, height: number, color: shared.RGBA, streamingDistance: number);

    /**
     * Streaming range for the checkpoint
     *
     * @alpha
     */
    public readonly streamingDistance: number;

    /** @alpha */
    public static readonly all: ReadonlyArray<Checkpoint>;

    /** @alpha */
    public readonly count: number;

    /** @alpha */
    public visible: boolean;

    /**
     * Retrieves the checkpoint from the pool.
     *
     * @param id The id of the checkpoint.
     * @returns Entity if it was found, otherwise null.
     *
     * @alpha
     */
    public static getByID(id: number): Checkpoint | null;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomCheckpointMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): ICustomCheckpointMeta[K] | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;

    /** @alpha */
    public setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerStreamSyncedMeta, K>): void;
    /** @alpha */
    public setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K, value: shared.ICustomPlayerStreamSyncedMeta[K]): void;

    /** @alpha */
    public deleteStreamSyncedMeta(key: string): void;
    /** @alpha */
    public deleteStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): void;

    /** @alpha */
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerStreamSyncedMeta>): unknown;
    /** @alpha */
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K] | undefined;

    /** @alpha */
    public hasStreamSyncedMeta(key: string): boolean;
    /** @alpha */
    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): boolean;

    /** @alpha */
    public getStreamSyncedMetaKeys(): ReadonlyArray<string>;
  }

  export class VoiceChannel extends BaseObject {
    /**
     * Creates a new voice channel.
     *
     * @remarks This throws an error when the voice chat is not activated on serverside.
     *
     * @param isSpatial Whether the voice channel should be 3D (e.g. talking in person) or 1D (e.g. talking over a telephone).
     * @param maxDistance The max distance at which you can hear each other.
     */
    constructor(isSpatial: boolean, maxDistance: number);

    /** @alpha */
    public readonly id: number;

    /** @alpha */
    public readonly maxDistance: number;

    /** @alpha */
    public readonly isSpatial: boolean;

    /** @alpha */
    public priority: number;

    /** @alpha */
    public filter: number;

    public addPlayer(player: Player): void;

    public isPlayerInChannel(player: Player): boolean;

    public isPlayerMuted(player: Player): boolean;

    public mutePlayer(player: Player): void;

    public removePlayer(player: Player): void;

    public unmutePlayer(player: Player): void;

    public deleteMeta(key: string): void;
    public deleteMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K): void;

    public hasMeta(key: string): boolean;
    public hasMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K): boolean;

    public getMeta<K extends string>(key: Exclude<K, keyof ICustomVoiceChannelMeta>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K): ICustomVoiceChannelMeta[K] | undefined;
    /** @deprecated See {@link ICustomVoiceChannelMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVoiceChannelMeta, K>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K, value: ICustomVoiceChannelMeta[K]): void;
    /** @deprecated See {@link ICustomVoiceChannelMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVoiceChannelMeta, K, V>): void;

    public readonly players: ReadonlyArray<Player>;

    public readonly playerCount: number;
  }

  export class Resource extends shared.Resource {
    public readonly path: string;

    public static getByName(name: string): Resource | null;
    public static readonly all: ReadonlyArray<Resource>;
    public static readonly current: Resource;
  }

  // Do not add anything here, add to the Utils namespace instead!
  // (this class is here only for extending shared Utils class & namespace)
  export class Utils extends shared.Utils {
    protected constructor();
  }

  export namespace Utils {
    /**
     * Finds the closest player (if any) from {@link Player.all alt.Player.all}.
     *
     * `pos` - From which position to look for the nearest player.
     *
     * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
     */
    export function getClosestPlayer(options: { pos: shared.IVector3; range?: number }): Player | null;

    /**
     * Finds the closest vehicle (if any) from {@link Vehicle.all alt.Vehicle.all}.
     *
     * `pos` - From which position to look for the nearest vehicle.
     *
     * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
     */
    export function getClosestVehicle(options: { pos: shared.IVector3; range?: number }): Vehicle | null;
  }

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared with all client resources.
   *
   * @param key The key of the value to store.
   * @param value The value to store.
   */
  export function setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomGlobalSyncedMeta, K>): void;
  export function setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomGlobalSyncedMeta>>(key: K, value: shared.ICustomGlobalSyncedMeta[K]): void;
  /** @deprecated See {@link "alt-shared".ICustomGlobalSyncedMeta} */
  export function setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomGlobalSyncedMeta, K, V>): void;

  /**
   * Removes the specified key and the data connected to that specific key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteSyncedMeta(key: string): void;
  export function deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomGlobalSyncedMeta>>(key: K): void;

  /**
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  // Do not allow to emit alt:V event name
  export function emit<K extends string>(eventName: Exclude<K, keyof IServerEvent>, ...args: any[]): void;

  /**
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Works only from JS resource to JS resource
   */
  // Do not allow to emit alt:V event name
  export function emitRaw<K extends string>(eventName: Exclude<K, keyof IServerEvent>, ...args: any[]): void;

  /**
   * Emits specified event to specific client.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClient(player: Player, eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific clients.
   *
   * @param player Event is sent to every player in array.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClient(player: Player[], eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific clients.
   *
   * @param player Event is sent to every player in array.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClientRaw(player: Player[], eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific client.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitClientRaw(player: Player, eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific client.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Unreliable event should be used when you don't need to be sure that event will be received by client.
   *
   * @alpha
   */
  export function emitClientUnreliable(player: Player, eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to specific clients.
   *
   * @param player Event is sent to every player in array.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Unreliable event should be used when you don't need to be sure that event will be received by client.
   *
   * @alpha
   */
  export function emitClientUnreliable(player: Player[], eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to all clients.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitAllClients(eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to all clients.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitAllClientsRaw(eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to all clients.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Unreliable event should be used when you don't need to be sure that event will be received by client.
   *
   * @alpha
   */
  export function emitAllClientsUnreliable(eventName: string, ...args: any[]): void;

  /**
   * Change the server password at runtime.
   *
   * @param password The new server password.
   */
  export function setPassword(password: string): void;

  /**
   * Hash a string with alt:V algorithm.
   *
   * @param password The string you want to hash.
   */
  export function hashServerPassword(password: string): bigint;

  export function stopServer(): void;

  /**
   * Gets the amount of milliseconds since the server was started.
   */
  export function getNetTime(): number;

  /**
   * Unsubscribes from a client event with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offClient(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from all user-created client events with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param listener Listener that should be removed.
   */
  export function offClient(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to a server event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<K extends keyof IServerEvent>(eventName: K, listener: IServerEvent[K]): void;

  /**
   * Subscribes to a custom server event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  // Do not allow any function to subscribe to the alt:V event
  export function on<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IServerEvent, K, (...args: any[]) => void, never>): void;

  /**
   * Subscribes to a server event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<K extends keyof IServerEvent>(eventName: K, listener: IServerEvent[K]): void;

  /**
   * Subscribes to a custom server event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  // Do not allow any function to subscribe to the alt:V event
  export function once<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IServerEvent, K, (...args: any[]) => void, never>): void;

  /**
   * Subscribes to all events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
  export function on(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Unsubscribes from a event with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from all user-created events with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param listener Listener that should be removed.
   */
  export function off(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to a client event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void;

  /**
   * Subscribes to all client events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
  export function onClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;

  /**
   * Subscribes to a client event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onceClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void;

  /**
   * Subscribes to all client events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
  export function onceClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;

  /**
   * Starts the specified resource.
   *
   * @param name Name of the resource.
   */
  export function startResource(name: string): void;

  /**
   * Restarts the specified resource.
   *
   * @param name Name of the resource.
   */
  export function restartResource(name: string): void;

  /**
   * Stops the specified resource.
   *
   * @param name Name of the resource.
   */
  export function stopResource(name: string): void;

  /**
   * Gets all the listeners that have been subscribed using {@link onClient} for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
  export function getRemoteEventListeners(eventName: string | null): ((...args: any[]) => void)[];

  export function getVehicleModelInfoByHash(vehicleHash: number): IVehicleModel;

  export function getPedModelInfoByHash(pedModelHash: number): IPedModel;

  export function getServerConfig(): IServerConfig;

  export function toggleWorldProfiler(state: boolean): void;

  /** @alpha */
  export function getEntitiesInDimension(dimension: number, allowedTypes: shared.BaseObjectType): Entity[];

  /** @alpha */
  export function getEntitiesInRange(position: shared.IVector3, range: number, dimension: number, allowedTypes: shared.BaseObjectType): Entity[];

  /** @alpha */
  export function getClosestEntities(position: shared.IVector3, range: number, dimension: number, limit: number, allowedTypes: shared.BaseObjectType): Entity[];

  /** @alpha */
  export class Ped extends Entity {
    constructor(model: string | number, position: shared.IVector3, rotation: shared.IVector3);

    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Ped | null;

    public static readonly all: ReadonlyArray<Ped>;
    public readonly count: number;
    public currentWeapon: number;
    public health: number;
    public maxArmour: number;
    public amour: number;
  }

  /** @alpha */
  export class NetworkObject extends Entity {
    constructor(model: string | number, position: shared.IVector3, rotation: shared.IVector3, alpha?: number, textureVariation?: number, lodDistance?: number);

    public static readonly all: ReadonlyArray<NetworkObject>;

    public readonly count: number;

    public activatePhysics(): void;

    /** Places the object properly on the ground. */
    public placeOnGroundProperly(): void;

    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
    public alpha: number;

    public textureVariation: number;

    /** The distance at which the LOD model of the object starts being applied. */
    public lodDistance: number;
  }

  /** @alpha */
  export class Marker extends WorldObject {
    public constructor(type: shared.MarkerType, position: shared.Vector3, color: shared.RGBA);

    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Marker | null;

    public static readonly all: ReadonlyArray<Marker>;

    /** Unique id */
    public readonly id: number;

    public visible: boolean;

    public markerType: shared.MarkerType;

    public color: shared.RGBA;

    public scale: shared.Vector3;

    public rot: shared.Vector3;

    public dir: shared.Vector3;

    public readonly isGlobal: boolean;

    public readonly target: Player;

    public faceCamera: boolean;
  }

  export * from "alt-shared";
}
