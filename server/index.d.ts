/// <reference types="@altv/types-shared"/>
/**
 * @module alt-server
 */
declare module "alt-server" {
  import * as shared from "alt-shared";

  type DateTimeHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
  type DateTimeMinute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
  type DateTimeSecond = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
  type DateTimeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  type DateTimeMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

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
    playerDamage: (victim: Player, attacker: Entity, damage: number, weaponHash: number) => void;
    playerDeath: (victim: Player, killer: Entity, weaponHash: number) => void;
    playerDisconnect: (player: Player, reason: string) => void;
    playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    playerLeftVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: shared.BaseObject) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
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
    playerWeaponChange: (player: Player, oldWeapon: number, weapon: number) => void;
    [name: string]: (...args: any[]) => void;
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

    /**
     * Dlc hash of the cloth.
     *
     * @remarks This is only set when it is a dlc cloth.
     */
    readonly dlc?: number;
  }

  export interface IProp {
    readonly drawable: number;
    readonly texture: number;

    /**
     * Dlc hash of the prop.
     *
     * @remarks This is only set when it is a dlc prop.
     */
    readonly dlc?: number;
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
     */
    public dimension: number;

    /**
     * Object position.
     */
    public pos: shared.Vector3;
  }

  export class Entity extends WorldObject {
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
     *
     * @beta
     */
    public attachTo(entity: Entity, entityBoneId: number, ownBoneId: number, pos: shared.Vector3, rot: shared.Vector3, enableCollisions: boolean, fixedRotation: boolean): void;

    /**
     * Detaches this entity if attached to another entity.
     *
     * @beta
     */
    public detach(): void;
  }

  export class Player extends Entity {
    /**
     * An array containing all players connected to the server.
     */
    public static all: Array<Player>;
    public armour: number;
    public currentWeapon: number;
    public readonly currentWeaponComponents: Array<number>;
    public readonly currentWeaponTintIndex: number;
    public readonly entityAimOffset: shared.Vector3;
    public readonly entityAimingAt: Entity | null;
    public readonly flashlightActive: boolean;
    public health: number;
    public readonly ip: string;
    public maxArmour: number;
    public maxHealth: number;
    public readonly name: string;
    public readonly ping: number;
    public readonly seat: number;
    public readonly vehicle: Vehicle | null;
    /**
     * @deprecated See {@link socialID}.
     */
    public readonly socialId: string;
    /** @beta */
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
     * @param delay The delay at which the player gets spawned after calling this function.
     */
    public spawn(x: number, y: number, z: number, delay: number): void;

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
     * @param dlc True to get the dlc clothing, false to get the normal clothing.
     *
     * @beta
     */
    public getClothes(component: number, dlc?: boolean): ICloth;

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
     * @param dlc Dlc hash of the clothing.
     *
     * @beta
     */
    public setClothes(component: number, drawable: number, texture: number, palette?: number, dlc?: number): void;

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
     * @param dlc True to get the dlc prop, false to get the normal prop.
     *
     * @beta
     */
    public getProp(component: number, dlc?: boolean): IProp;

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
     * @param dlc Dlc hash of the prop.
     *
     * @beta
     */
    public setProp(component: number, drawable: number, texture: number, dlc?: number): void;

    /**
     * Removes a specified prop component.
     *
     * @example
     * ```js
     * player.clearProp(0); // removes the player hat prop
     * ```
     *
     * @param component Component id of the prop.
     *
     * @beta
     */
    public clearProp(component: number): void;

    /**
     * Checks whether the given entity is in the stream range of the player.
     *
     * @example
     * ```js
     * if(player.vehicle) alt.log(player.isEntityInStreamRange(player.vehicle)); // This always logs true, because their own vehicle is always in stream range of the player
     * ```
     *
     * @beta
     */
    public isEntityInStreamRange(entity: Entity): boolean;

    /**
     * Emits specified event to the player.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     *
     * @beta
     */
    public emit(eventName: string, ...args: any[]): void;
  }

  export class Vehicle extends Entity {
    public static readonly all: Array<Vehicle>;
    /**
     * Entity model hash.
     *
     * @remarks Only setter accepts string or number as input, getter returns value as number.
     */
    public readonly model: number | string;
    public activeRadioStation: RadioStation;
    public bodyAdditionalHealth: number;
    public bodyHealth: number;
    public customPrimaryColor: shared.RGBA;
    public customSecondaryColor: shared.RGBA;
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
    public lockState: VehicleLockState;
    public manualEngineControl: boolean;
    public modKit: number;
    public readonly modKitsCount: number;
    public neon: IVehicleNeon;
    public neonColor: shared.RGBA;
    public readonly nightlightOn: boolean;
    public numberPlateIndex: NumberPlateStyle;
    public numberPlateText: string;
    public pearlColor: number;
    public petrolTankHealth: number;
    public primaryColor: number;
    public readonly repairsCount: number;
    public roofLivery: number;
    public roofState: boolean;
    public secondaryColor: number;
    public sirenActive: boolean;
    public tireSmokeColor: shared.RGBA;
    public wheelColor: number;
    public readonly wheelsCount: number;
    public readonly wheelType: number;
    public readonly frontWheels: number;
    public readonly rearWheels: number;
    public windowTint: WindowTint;

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

    public getAttached(): Vehicle;

    public getAttachedTo(): Vehicle;

    public getArmoredWindowHealth(windowId: number): number;

    public getArmoredWindowShootCount(windowId: number): number;

    public getBumperDamageLevel(bumperId: VehicleBumper): VehicleBumperDamage;

    public getDamageStatusBase64(): string;

    public getDoorState(doorId: VehicleDoor): VehicleDoorState;

    public getExtra(extraId: number): boolean;

    public getGamestateDataBase64(): string;

    public getHealthDataBase64(): string;

    public getMod(modType: VehicleModType): number;

    public getModsCount(modType: VehicleModType): number;

    public getPartBulletHoles(partId: VehiclePart): number;

    public getPartDamageLevel(partId: VehiclePart): VehiclePartDamage;

    public getScriptDataBase64(): string;

    public getWheelHealth(wheelId: number): number;

    public isLightDamaged(lightId: number): boolean;

    public isSpecialLightDamaged(specialLightId: number): boolean;

    public isWheelBurst(wheelId: number): boolean;

    public isWheelDetached(wheelId: number): boolean;

    public isWheelOnFire(wheelId: number): boolean;

    public isWindowDamaged(windowId: number): boolean;

    public isWindowOpened(windowId: number): boolean;

    public repair(): void;

    public setAppearanceDataBase64(data: string): void;

    public setArmoredWindowHealth(windowId: number, health: number): void;

    public setArmoredWindowShootCount(windowId: number, count: number): void;

    public setBumperDamageLevel(bumperId: VehicleBumper, level: VehicleBumperDamage): void;

    public setDamageStatusBase64(data: string): void;

    public setDoorState(doorId: VehicleDoor, state: VehicleDoorState): void;

    public setExtra(extraId: number, state: boolean): void;

    public setGamestateDataBase64(data: string): void;

    public setHealthDataBase64(data: string): void;

    public setLightDamaged(lightId: number, isDamaged: boolean): void;

    public setMod(modType: VehicleModType, modId: number): void;

    public setPartBulletHoles(partId: VehiclePart, count: number): void;

    public setPartDamageLevel(partId: VehiclePart, level: VehiclePartDamage): void;

    public setRearWheels(wheelId: number): void;

    public setScriptDataBase64(data: string): void;

    public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;

    public setWheelBurst(wheelId: number, state: boolean): void;

    public setWheelDetached(wheelId: number, state: boolean): void;

    public setWheelHasTire(wheelId: number, state: boolean): void;

    public setWheelHealth(wheelId: number, health: number): void;

    public setWheelOnFire(wheelId: number, state: boolean): void;

    public setWheels(wheelType: number, wheelId: number): void;

    public setWindowDamaged(windowId: number, isDamaged: boolean): void;

    public setWindowOpened(windowId: number, state: boolean): void;

    /** @beta */
    public setWheelFixed(wheelId: number): void;
  }

  export class Blip extends WorldObject {}

  export class PointBlip extends Blip {
    constructor(type: BlipType, x: number, y: number, z: number);
  }

  export class Colshape extends WorldObject {
    public colshapeType: ColShapeType;

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
   *
   * @beta
   */
  export function emitClient(player: Player[], eventName: string, ...args: any[]): void;

  /**
   * Emits specified event to all clients.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @beta
   */
  export function emitAllClients(eventName: string, ...args: any[]): void;

  /**
   * Change the server password at runtime
   *
   * @param password The new server password
   *
   * @beta
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
   * Subscribes to a server event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<K extends keyof IServerEvent>(eventName: K, listener: IServerEvent[K]): void;

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
   *
   * @beta
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
   *
   * @beta
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
   *
   * @beta
   */
  export function getEventListeners(eventName: string | null): Function[];

  /**
   * Gets all the listeners for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   *
   * @beta
   */
  export function getRemoteEventListeners(eventName: string | null): Function[];

  export * from "alt-shared";
}
