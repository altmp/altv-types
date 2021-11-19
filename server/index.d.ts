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

  export const enum BodyPart {
    Pelvis,
    LeftHip,
    LeftLeg,
    LeftFoot,
    RightHip,
    RightLeg,
    RightFoot,
    LowerTorso,
    UpperTorso,
    Chest,
    UnderNeck,
    LeftShoulder,
    LeftUpperArm,
    LeftElbrow,
    LeftWrist,
    RightShoulder,
    RightUpperArm,
    RightElbrow,
    RightWrist,
    Neck,
    Head,
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

  export const enum ColShapeType {
    Sphere,
    Cylinder,
    Circle,
    Cuboid,
    Rectangle,
    CheckpointCylinder,
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
    RingWhirl,
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

  export const enum VehicleLockState {
    None,
    Unlocked,
    Locked,
    LockoutPlayerOnly,
    LockPlayerInside,
    InitiallyLocked,
    ForceDoorsShut,
    LockedCanBeDamaged,
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

  /** @beta */
  export interface Weapon {
    readonly hash: number;
    readonly tintIndex: number;
    readonly components: Array<number>;
  }

  export interface IServerEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    consoleCommand: (...args: string[]) => void;
    entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
    entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
    explosion: (source: Player, type: ExplosionType, pos: shared.Vector3, fx: number, target: Entity) => boolean | void;
    netOwnerChange: (entity: Entity, owner: Player, oldOwner: Player) => void;
    playerChangedVehicleSeat: (player: Player, vehicle: Vehicle, oldSeat: number, seat: number) => void;
    playerConnect: (player: Player) => void;
    /** @beta */
    beforePlayerConnect: (player: Player, passwordHash: string, cdnUrl: string) => boolean | void;
    /**
     * @param armourDamage This parameter is only available on dev branch.
     */
    playerDamage: (victim: Player, attacker: Entity, healthDamage: number, armourDamage: number, weaponHash: number) => void;
    playerDeath: (victim: Player, killer: Entity, weaponHash: number) => void;
    playerDisconnect: (player: Player, reason: string) => void;
    playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    playerLeftVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    vehicleAttach: (vehicle: Vehicle, attachedVehicle: Vehicle) => void;
    vehicleDestroy: (vehicle: Vehicle) => void;
    vehicleDetach: (vehicle: Vehicle, detachedVehicle: Vehicle) => void;
    weaponDamage: (source: Player, target: Entity, weaponHash: number, damage: number, offset: shared.Vector3, bodyPart: BodyPart) => boolean | void;
    startFire: (player: Player, fires: Array<IFireInfo>) => boolean | void;
    startProjectile: (player: Player, pos: shared.Vector3, dir: shared.Vector3, ammoHash: number, weaponHash: number) => boolean | void;
    playerWeaponChange: (player: Player, oldWeapon: number, weapon: number) => boolean | void;
    vehicleDamage: (vehicle: Vehicle, attacker: Entity, bodyHealthDamage: number, additionalBodyHealthDamage: number, engineHealthDamage: number, petrolTankDamage: number, weapon: number) => void;
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

  /**
   * The root directory of the server.
   */
  export const rootDir: string;

  export const defaultDimension: number;

  export const globalDimension: number;

  export class WorldObject extends shared.BaseObject {
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
    public static readonly all: Array<Entity>;

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
     *
     * @remarks Only setter accepts string or number as input, getter returns value as number.
     */
    public model: number | string;

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
     *
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
     *
     * @param key The key of the value to store.
     */
    public setStreamSyncedMeta(key: string, value: any): void;

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
     * @param entityBoneId Target bone id.
     * @param ownBoneId Origin bone id.
     * @param pos Position offset.
     * @param rot Rotation.
     * @param enableCollisions If true the attached entity has a collision.
     * @param fixedRotation If true the entity is attached with a fixed rotation (no bouncing).
     */
    public attachTo(entity: Entity, entityBoneId: number, ownBoneId: number, pos: shared.Vector3, rot: shared.Vector3, enableCollisions: boolean, fixedRotation: boolean): void;

    /**
     * Detaches this entity if attached to another entity.
     */
    public detach(): void;
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
    public static all: Array<Player>;
    public armour: number;
    public currentWeapon: number;
    /** @beta */
    public readonly weapons: Array<Weapon>;
    public readonly currentWeaponComponents: Array<number>;
    /** @beta */
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
    /** @beta */
    public readonly isReloading: boolean;
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
    public readonly seat: number;
    public readonly vehicle: Vehicle | null;
    public invincible: boolean;
    /** @beta */
    public readonly isSuperJumpEnabled: boolean;
    /** @beta */
    public readonly isCrouching: boolean;
    /** @beta */
    public readonly isStealthy: boolean;
    public readonly socialId: string;
    public readonly socialID: string;
    public readonly hwidHash: string;
    public readonly hwidExHash: string;
    public readonly authToken: string;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Player if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    public addWeaponComponent(weaponHash: number, component: number): void;

    /**
     * Removes the visible blood on the player body.
     */
    public clearBloodDamage(): void;

    /**
     * Gives the specified weapon to the player.
     *
     * @param weaponHash Hash of the weapon.
     * @param ammo Amount of ammo to spawn the weapon with.
     * @param equipNow Should the weapon be equipped immediately.
     */
    public giveWeapon(weaponHash: number, ammo: number, equipNow: boolean): void;

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
    public spawn(pos: shared.Vector3, delay?: number): void;

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
    public setClothes(component: number, drawable: number, texture: number, palette?: number): void;

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
    public setDlcClothes(dlc: number, component: number, drawable: number, texture: number, palette?: number): void;

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
    public setProp(component: number, drawable: number, texture: number): void;

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
    public setDlcProp(dlc: number, component: number, drawable: number, texture: number): void;

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

    /**
     * Set the player into a vehicle on specific seat.
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
     *
     * @alpha
     */
    public playAmbientSpeech(speechName: string, speechParam: string, speechDictHash: number): void;

    /** @beta */
    public setHeadOverlay(overlayID: number, index: number, opacity: number): boolean;

    /** @beta */
    public removeHeadOverlay(overlayID: number): boolean;

    /** @beta */
    public setHeadOverlayColor(overlayID: number, colorType: number, colorIndex: number, secondColorIndex: number): boolean;

    /** @beta */
    public getHeadOverlay(overlayID: number): IHeadOverlay;

    /** @beta */
    public setFaceFeature(index: number, scale: number): boolean;

    /** @beta */
    public getFaceFeatureScale(index: number): number;

    /** @beta */
    public removeFaceFeature(index: number): boolean;

    /** @beta */
    public setHeadBlendPaletteColor(id: number, red: number, green: number, blue: number): boolean;

    /** @beta */
    public getHeadBlendPaletteColor(id: number): shared.RGBA;

    /** @beta */
    public setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number): void;

    /** @beta */
    public getHeadBlendData(): IHeadBlendData;

    /** @beta */
    public setEyeColor(eyeColor: number): boolean;

    /** @beta */
    public getEyeColor(): number;

    /** @beta */
    public setHairColor(hairColor: number): void;

    /** @beta */
    public getHairColor(): number;

    /** @beta */
    public setHairHighlightColor(hairHighlightColor: number): void;

    /** @beta */
    public getHairHighlightColor(): number;
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
    public static readonly all: Array<Vehicle>;
    /**
     * Entity model hash.
     *
     * @remarks Only setter accepts string or number as input, getter returns value as number.
     */
    public readonly model: number | string;
    /**
     * Gets or sets the active radio station.
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
     */
    public customPrimaryColor: shared.RGBA;
    /**
     * Gets or sets the custom secondary color as a RGBA type.
     */
    public customSecondaryColor: shared.RGBA;
    /**
     * Gets or sets if the vehicle instance has custom tires.
     */
    public customTires: boolean;
    /**
     * Applies some decoration effects to the vehicle (e.g.: It makes the hydra looking rusty or applies snow to the front bumper of `policeold1`). Does not work on every vehicle model.
     */
    public darkness: number;
    /**
     * Gets or sets the dashboard color of the vehicle.
     */
    public dashboardColor: number;
    /**
     * Gets the current state of the daylights.
     */
    public readonly daylightOn: boolean;
    /**
     * Gets if a vehicle is destroyed.
     */
    public readonly destroyed: boolean;
    /**
     * Gets or sets the dirt level of the vehicle.
     */
    public dirtLevel: number;
    /**
     * Gets the current driver of the vehicle. It returns null, if there is no driver.
     */
    public readonly driver: Player | null;
    /**
     * Gets or sets the current engine health.
     */
    public engineHealth: number;
    /**
     * Gets or sets the engine state of the vehicle.
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
     * Gets if the car has armoredWindows.
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
    public lockState: VehicleLockState;
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
     */
    public roofState: boolean;
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
    public readonly attached: Vehicle;
    /**
     * Gets a vehicle where the vehicle is attached to.
     */
    public readonly attachedTo: Vehicle;
    /**
     * Gets the velocity vector of a vehicle.
     *
     * @beta
     */
    public readonly velocity: shared.Vector3;
    /**
     * Gets or sets the drift mode state of the vehicle.
     *
     * @beta
     */
    public driftModeEnabled: boolean;

    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number);
    constructor(model: string | number, pos: shared.Vector3, rot: shared.Vector3);
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
     * @param {number} wheelId
     * @returns {boolean}
     */
    public doesWheelHasTire(wheelId: number): boolean;
    /**
     * Returns the appearance of a vehicle as a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     * @returns {string}
     */
    public getAppearanceDataBase64(): string;
    /**
     * Returns the health of a specific armored window.
     *
     * @param {number} windowId
     * @returns {number}
     */
    public getArmoredWindowHealth(windowId: number): number;
    /**
     * Returns the amount of shoots that a specific armoured weapon received.
     *
     * @param {number} windowId
     * @returns {number}
     */
    public getArmoredWindowShootCount(windowId: number): number;
    /**
     * Returns the damage level of a specific bumper.
     *
     * @param {VehicleBumper} bumperId
     * @returns {VehicleBumperDamage}
     */
    public getBumperDamageLevel(bumperId: VehicleBumper): VehicleBumperDamage;
    /**
     * Returns the damage status of a vehicle as a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @returns {string}
     */
    public getDamageStatusBase64(): string;
    /**
     * Returns the state of a specific door.
     *
     * @param {VehicleDoor} doorId
     * @returns {VehicleDoorState}
     */
    public getDoorState(doorId: VehicleDoor): VehicleDoorState;
    /**
     * Returns the state of a specific extra of a vehicle.
     *
     * @remarks Extras are not available on every vehicle model.
     *
     * @param {number} extraId
     * @returns {boolean}
     */
    public getExtra(extraId: number): boolean;
    /**
     * Returns the game state data of a vehicle as a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @returns {string}
     */
    public getGamestateDataBase64(): string;
    /**
     * Returns the health data of a vehicle as a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @returns {string}
     */
    public getHealthDataBase64(): string;
    /**
     * Returns the mod value for a specific mod type.
     *
     * @param {VehicleModType} modType
     * @returns {number}
     */
    public getMod(modType: VehicleModType): number;
    /**
     * Returns the amount of possible mod values for a specific mod type.
     *
     * @param {VehicleModType} modType
     * @returns {number}
     */
    public getModsCount(modType: VehicleModType): number;
    /**
     * Returns the amount of bullet holes of a vehicle part.
     *
     * @param {VehiclePart} partId
     * @returns {number}
     */
    public getPartBulletHoles(partId: VehiclePart): number;
    /**
     * Returns the damage level of a vehicle part.
     *
     * @param {VehiclePart} partId
     * @returns {VehiclePartDamage}
     */
    public getPartDamageLevel(partId: VehiclePart): VehiclePartDamage;
    /**
     * Returns the script data of a vehicle as a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @returns {string}
     */
    public getScriptDataBase64(): string;
    /**
     * Returns the health of a specific wheel.
     *
     * @param {number} wheelId
     * @returns {number}
     */
    public getWheelHealth(wheelId: number): number;
    /**
     * Returns if a specific light is damaged.
     *
     * @param {number} lightId
     * @returns {boolean}
     */
    public isLightDamaged(lightId: number): boolean;
    /**
     * Returns if a specific special light is damaged.
     *
     * @param {number} specialLightId
     * @returns {boolean}
     */
    public isSpecialLightDamaged(specialLightId: number): boolean;
    /**
     * Returns if a specific wheel is burst.
     *
     * @param {number} wheelId
     * @returns {boolean}
     */
    public isWheelBurst(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is detached.
     *
     * @param {number} wheelId
     * @returns {boolean}
     */
    public isWheelDetached(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is on fire.
     *
     * @param {number} wheelId
     * @returns {boolean}
     */
    public isWheelOnFire(wheelId: number): boolean;
    /**
     * Returns if a specific window is damaged.
     *
     * @param {number} windowId
     * @returns {boolean}
     */
    public isWindowDamaged(windowId: number): boolean;
    /**
     * Returns if a specific window is open.
     *
     * @param {number} windowId
     * @returns {boolean}
     */
    public isWindowOpened(windowId: number): boolean;
    /**
     * Repairs the vehicle.
     */
    public repair(): void;

    /**
     * Sets the appearance of a vehicle with a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @param {string} data
     */
    public setAppearanceDataBase64(data: string): void;
    /**
     * Sets the health of a specific armored window.
     *
     * @param {number} windowId
     * @param {number} health
     */
    public setArmoredWindowHealth(windowId: number, health: number): void;
    /**
     * Sets the shoot count of a specific armoured window.
     *
     * @param {number} windowId
     * @param {number} count
     */
    public setArmoredWindowShootCount(windowId: number, count: number): void;
    /**
     * Sets the damage level of a specific bumper.
     *
     * @param {VehicleBumper} bumperId
     * @param {VehicleBumperDamage} level
     */
    public setBumperDamageLevel(bumperId: VehicleBumper, level: VehicleBumperDamage): void;
    /**
     * Sets the damage status of a vehicle based on a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @param {string} data
     */
    public setDamageStatusBase64(data: string): void;
    /**
     * Sets the state of a specific door
     *
     * @param {VehicleDoor} doorId
     * @param {VehicleDoorState} state
     */
    public setDoorState(doorId: VehicleDoor, state: VehicleDoorState): void;
    /**
     * Sets the state of an extra of a vehicle.
     *
     * @remarks Setting extras on vehicle does not work for every vehicle model. For example you can change the light bar of a police car with this method.
     *
     * @param {number} extraId
     * @param {boolean} state
     */
    public setExtra(extraId: number, state: boolean): void;
    /**
     * Sets the game state data of a vehicle with a given base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @param {string} data
     */
    public setGamestateDataBase64(data: string): void;
    /**
     * Sets the health data of a vehicle with a given base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @param {string} data
     */
    public setHealthDataBase64(data: string): void;
    /**
     * Sets a specific light of the vehicle either damaged or not.
     *
     * @param {number} lightId
     * @param {boolean} isDamaged
     */
    public setLightDamaged(lightId: number, isDamaged: boolean): void;
    /**
     * Applies a specific mod of a given mod type.
     *
     * @param {VehicleModType} modType
     * @param {number} modId
     */
    public setMod(modType: VehicleModType, modId: number): void;
    /**
     * Applies bullet holes to a specific vehicle part.
     *
     * @param {VehiclePart} partId
     * @param {number} count
     */
    public setPartBulletHoles(partId: VehiclePart, count: number): void;
    /**
     * Sets the damage level of a vehicle part.
     *
     * @param {VehiclePart} partId
     * @param {VehiclePartDamage} level
     */
    public setPartDamageLevel(partId: VehiclePart, level: VehiclePartDamage): void;
    /**
     * Sets type of the rear wheels.
     *
     * @param {number} wheelId
     */
    public setRearWheels(wheelId: number): void;
    /**
     * Sets the script data of a vehicle based on a base64 string.
     *
     * @remarks Base64 methods are deprecated.
     *
     * @param {string} data
     */
    public setScriptDataBase64(data: string): void;
    /**
     * Sets if a special light is damaged.
     *
     * @param {number} specialLightId
     * @param {boolean} isDamaged
     */
    public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific wheel is burst.
     *
     * @param {number} wheelId
     * @param {boolean} state
     */
    public setWheelBurst(wheelId: number, state: boolean): void;
    /**
     * Sets a wheel either detached or attached.
     *
     * @param {number} wheelId
     * @param {boolean} state
     */
    public setWheelDetached(wheelId: number, state: boolean): void;
    /**
     * Sets if a specific wheel has a tire.
     *
     * @param {number} wheelId
     * @param {boolean} state
     */
    public setWheelHasTire(wheelId: number, state: boolean): void;
    /**
     * Sets the health of a specific wheel.
     *
     * @param {number} wheelId
     * @param {number} health
     */
    public setWheelHealth(wheelId: number, health: number): void;
    /**
     * Sets a wheel either on fire or not
     *
     * @param {number} wheelId
     * @param {boolean} state
     */
    public setWheelOnFire(wheelId: number, state: boolean): void;
    /**
     * Applies a wheel style based on the type and variation.
     *
     * @param {number} wheelType
     * @param {number} wheelId
     */
    public setWheels(wheelType: number, wheelId: number): void;
    /**
     * Sets if a specific window is damaged.
     *
     * @param {number} windowId
     * @param {boolean} isDamaged
     */
    public setWindowDamaged(windowId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific window is open.
     *
     * @param {number} windowId
     * @param {boolean} state
     */
    public setWindowOpened(windowId: number, state: boolean): void;
    /**
     * Repairs a specific wheel.
     *
     * @param {number} wheelId
     */
    public setWheelFixed(wheelId: number): void;

    /**
     * Gets or sets if the created train is a mission train.
     *
     * @beta
     */
    public isMissionTrain: boolean;

    /**
     * Gets or sets the track id of the train.
     *
     * @remarks Valid track ids are between 0 and 11.
     *
     * @type{number}
     *
     * @beta
     */
    public trainTrackId: number;

    /**
     * Gets the engine of the train.
     *
     * @type{Vehicle | null}
     *
     * @beta
     */
    public readonly trainEngineId: Vehicle | null;

    /**
     * Set a train as an engine of a train.
     *
     * @param vehicle The vehicle to set as an engine.
     *
     * @beta
     */
    public setTrainEngineId(vehicle: Vehicle | null): void;

    /**
     * Gets or sets the trains config index.
     *
     * @remarks You can find a list of all possible config indices in the trains.xml. Valid indices are between 1 and 25.
     *
     * @beta
     */
    public trainConfigIndex: number;

    /**
     * Gets or sets the distance of the trains to the engine.
     *
     * @beta
     */
    public trainDistanceFromEngine: number;

    /**
     * Gets or sets if the train is the engine of the train.
     *
     * @beta
     */
    public isTrainEngine: boolean;

    /**
     * Gets or sets if the train is a caboose.
     *
     * @beta
     */
    public isTrainCaboose: boolean;

    /**
     * Gets or sets if the train is a passenger carriage.
     *
     * @beta
     */
    public trainPassengerCarriages: boolean;

    /**
     * Gets or sets the direction of the train.
     *
     * @beta
     */
    public trainDirection: boolean;

    /**
     * Gets or sets if the trains is rendered derailed.
     *
     * @beta
     */
    public trainRenderDerailed: boolean;

    /**
     * Gets or sets if the doors of the trains should be forced open.
     *
     * @beta
     */
    public trainForceDoorsOpen: boolean;

    /**
     * Gets or sets the cruise speed of the train.
     *
     * @beta
     */
    public trainCruiseSpeed: number;

    /**
     * Gets or sets the config index of the train's carriage.
     *
     * @beta
     */
    public trainCarriageConfigIndex: number;

    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train.
     *
     * @beta
     */
    public readonly trainLinkedToBackwardId: Vehicle | null;

    /**
     * Links another train to the back of the train.
     *
     * @param vehicle The vehicle to set as linked to the back of the train.
     *
     * @beta
     */
    public setTrainLinkedToBackwardId(vehicle: Vehicle | null): void;

    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train in front.
     *
     * @beta
     */
    public readonly trainLinkedToForwardId: Vehicle | null;

    /**
     * Links another train to the front of the train.
     *
     * @param vehicle The vehicle to set as linked to the front of the train.
     *
     * @beta
     */
    public setTrainLinkedToForwardId(vehicle: Vehicle | null): void;

    /**
     * Activates the searchlight and follows the target.
     *
     * @remarks Entity parameter isn't working for now and this can only be used for helicopter searchlights.
     *
     * @beta
     */
    public setSearchLightTo(entity: Entity, state: boolean): void;
  }

  /** @beta */
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
    public static readonly all: Array<Blip>;

    public static routeColor: shared.RGBA;

    public sprite: shared.BlipSprite;

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

    public attachedTo: Entity;

    public fade(opacity: number, duration: number): void;
  }

  /** @beta */
  export class AreaBlip extends Blip {
    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  /** @beta */
  export class RadiusBlip extends Blip {
    constructor(x: number, y: number, z: number, radius: number);
  }

  /** @beta */
  export class PointBlip extends Blip {
    constructor(x: number, y: number, z: number);

    constructor(entity: Entity);
  }

  export class Colshape extends WorldObject {
    public readonly colshapeType: ColShapeType;

    /**
     * Whether this colshape should only trigger its enter/leave events for players or all entities.
     */
    public playersOnly: boolean;

    public isEntityIn(entity: Entity): boolean;

    public isPointIn(position: shared.Vector3): boolean;
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
    constructor(type: number, pos: shared.Vector3, radius: number, height: number, color: shared.RGBA);
  }

  export class VoiceChannel extends shared.BaseObject {
    /**
     * Creates a new voice channel.
     *
     * @remarks This throws an error when the voice chat is not activated on serverside.
     *
     * @param isSpatial Whether the voice channel should be 3D (e.g. talking in person) or 1D (e.g. talking over a telephone).
     * @param maxDistance The max distance at which you can hear each other.
     */
    constructor(isSpatial: boolean, maxDistance: number);

    public addPlayer(player: Player): void;

    public isPlayerInChannel(player: Player): boolean;

    public isPlayerMuted(player: Player): boolean;

    public mutePlayer(player: Player): void;

    public removePlayer(player: Player): void;

    public unmutePlayer(player: Player): void;
  }

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared with all client resources.
   *
   * @param key The key of the value to store.
   */
  export function setSyncedMeta(key: string, value: any): void;

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
   *
   * @beta
   */
  export function emitClientRaw(player: Player[], eventName: string, ...args: any[]): void;

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
   *
   * @beta
   */
  export function emitAllClientsRaw(eventName: string, ...args: any[]): void;

  /**
   * Change the server password at runtime
   *
   * @param password The new server password
   */
  export function setPassword(password: string): void;

  /**
   * Gets the amount of milliseconds since the server was started.
   */
  export function getNetTime(): number;

  /**
   * Gets the exports of the specified resource.
   *
   * @param name Name of the resource.
   */
  export function getResourceExports(name: string): any;

  /**
   * Gets the main file of the specified resource.
   *
   * @param name Name of the resource.
   */
  export function getResourceMain(name: string): string;

  /**
   * Gets the path to the specified resource.
   *
   * @param name Name of the resource.
   */
  export function getResourcePath(name: string): string;

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
  export function on(eventName: string, listener: (...args: any[]) => void): void;

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
  export function once(eventName: string, listener: (...args: any[]) => void): void;

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
   * Gets all the listeners for the specified local event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
  export function getEventListeners(eventName: string | null): Function[];

  /**
   * Gets all the listeners for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
  export function getRemoteEventListeners(eventName: string | null): Function[];

  export * from "alt-shared";
}
