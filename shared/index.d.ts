/**
 * @module alt-shared
 */
declare module "alt-shared" {
  export const enum BaseObjectType {
    Player,
    Vehicle,
    Blip,
    WebView,
    VoiceChannel,
    Colshape,
    Checkpoint,
    WebSocketClient,
    HttpClient,
    Audio,
    LocalPlayer,
  }

  export enum BlipSprite {
    Higher,
    Lower,
    PolicePed,
    WantedRadius,
    Area,
    Centre,
    North,
    Waypoint,
    Radius,
    RadiusOutline,
    WeaponHigher,
    WeaponLower,
    HigherAI,
    LowerAI,
    PoliceHeliSpin,
    PolicePlaneMove,
    MPCrew = 27,
    MPFriendlies,
    CableCar = 36,
    Activities,
    Raceflag,
    Safehouse = 40,
    Police,
    PoliceChase,
    PoliceHeli,
    BombA,
    Snitch = 47,
    PlanningLocations,
    CriminalCarsteal = 50,
    CriminalDrugs,
    CriminalHoldups,
    CriminalPlayer = 54,
    CopPatrol = 56,
    CopPlayer,
    CriminalWanted,
    Heist,
    PoliceStation,
    Hospital,
    AssassinsMark,
    Elevator,
    Helicopter,
    RandomCharacter = 66,
    SecurityVan,
    TowTruck,
    IllegalParking = 70,
    Barber,
    CarModShop,
    ClothesStore,
    Tattoo = 75,
    ArmenianFamily,
    LesterFamily,
    MichaelFamily,
    TrevorFamily,
    JewelryHeist,
    DragRaceFinish = 82,
    Rampage = 84,
    VinewoodTours,
    LamarFamily,
    FranklinFamily = 88,
    ChineseStrand,
    FlightSchool,
    EyeSky,
    AirHockey,
    Bar,
    BaseJump,
    Basketball,
    BiolabHeist = 96,
    CabaretClub = 99,
    CarWash,
    ComedyClub = 102,
    Darts,
    DocksHeist,
    FbiHeist,
    FbiOfficersStrand,
    FinaleBankHeist,
    FinancierStrand,
    Golf,
    GunShop,
    InternetCafe,
    MichaelFamilyExile,
    NiceHouseHeist,
    RandomFemale,
    RandomMale,
    RuralBankHeist = 118,
    ShootingRange,
    SolomonStrand,
    StripClub,
    Tennis,
    TrevorFamilyExile,
    MichaelTrevorFamily,
    Triathlon = 126,
    OffRoadRacing,
    GangCops,
    GangMexicans,
    GangBikers,
    SnitchRed = 133,
    CriminalCuffKeys,
    Cinema,
    MusicVenue,
    PoliceStationBlue,
    Airport,
    CriminalSavedVehicle,
    WeedStash,
    Hunting,
    Pool,
    ObjectiveBlue,
    ObjectiveGreen,
    ObjectiveRed,
    ObjectiveYellow,
    ArmsDealing,
    MPFriend,
    CelebrityTheft,
    WeaponAssaultRifle,
    WeaponBat,
    WeaponGrenade,
    WeaponHealth,
    WeaponKnife,
    WeaponMolotov,
    WeaponPistol,
    WeaponRocket,
    WeaponShotgun,
    WeaponSmg,
    WeaponSniper,
    MPNoise,
    PointOfInterest,
    Passive,
    UsingMenu,
    GangCopsPartner = 171,
    WeaponMinigun = 173,
    WeaponArmour = 175,
    PropertyTakeover,
    GangMexicansHighlight,
    GangBikersHighlight,
    TriathlonCycling,
    TriathlonSwimming,
    PropertyTakeoverBikers,
    PropertyTakeoverCops,
    PropertyTakeoverVagos,
    Camera,
    CentreRed,
    HandcuffKeysBikers,
    HandcuffKeysVagos,
    HandcuffsClosedBikers,
    HandcuffsClosedVagos,
    CameraBadger = 192,
    CameraFacade,
    CameraIfruit,
    Yoga = 197,
    Taxi,
    Shrink = 205,
    Epsilon,
    FinancierStrandGrey,
    TrevorFamilyGrey,
    TrevorFamilyRed,
    FranklinFamilyGrey,
    FranklinFamilyBlue,
    FranklinA,
    FranklinB,
    FranklinC,
    GangVehicle = 225,
    GangVehicleBikers,
    GangVehicleCops,
    GangVehicleVagos,
    Guncar,
    DrivingBikers,
    DrivingCops,
    DrivingVagos,
    GangCopsHighlight,
    ShieldBikers,
    ShieldCops = 235,
    ShieldVagos,
    CustodyBikers,
    CustodyVagos,
    ArmsDealingAir = 251,
    PlayerStateArrested,
    PlayerStateCustody,
    PlayerStateDriving,
    PlayerStateKeyholder,
    PlayerStatePartner,
    Ztype = 262,
    Stinger,
    Packer,
    Monroe,
    Fairground,
    Property,
    GangHighlight,
    Altruist,
    AI,
    OnMission,
    CashPickup,
    Chop,
    Dead,
    TerritoryLocked,
    CashLost,
    CashVagos,
    CashCops,
    Hooker,
    Friend,
    Mission2to4,
    Mission2to8,
    Mission2to12,
    Mission2to16,
    CustodyDropOff,
    OnMissionCops,
    OnMissionLost,
    OnMissionVagos,
    CriminalCarStealCops,
    CriminalCarStealBikers,
    CriminalCarStealVagos,
    BandStrand,
    SimeonFamily,
    Mission1,
    Mission2,
    FriendDarts,
    FriendComedyClub,
    FriendCinema,
    FriendTennis,
    FriendStripClub,
    FriendLiveMusic,
    FriendGolf,
    BountyHit,
    UgcMission,
    Horde,
    CrateDrop,
    PlaneDrop,
    Sub,
    Race,
    Deathmatch,
    ArmWrestling,
    Mission1to2,
    ShootingRangeGunShop,
    RaceAir,
    RaceLand,
    RaceSea,
    Tow,
    Garbage,
    Drill,
    Spikes,
    Firetruck,
    Minigun2,
    Bugstar,
    Submarine,
    Chinook,
    GetawayCar,
    MissionBikers1,
    MissionBikers1to2,
    MissionBikers2,
    MissionBikers2to4,
    MissionBikers2to8,
    MissionBikers2to12,
    MissionBikers2to16,
    MissionCops1,
    MissionCops1to2,
    MissionCops2,
    MissionCops2to4,
    MissionCops2to8,
    MissionCops2to12,
    MissionCops2to16,
    MissionVagos1,
    MissionVagos1to2,
    MissionVagos2,
    MissionVagos2to4,
    MissionVagos2to8,
    MissionVagos2to12,
    MissionVagos2to16,
    GangBike,
    GasGrenade,
    PropertyForSale,
    GangAttackPackage,
    MartinMadrazzo,
    EnemyHeliSpin,
    Boost,
    Devin,
    Dock,
    Garage,
    GolfFlag,
    Hangar,
    Helipad,
    JerryCan,
    Mask,
    HeistPrep,
    Incapacitated,
    SpawnPointPickup,
    Boilersuit,
    Completed,
    Rockets,
    GarageForSale,
    HelipadForSale,
    DockForSale,
    HangarForSale,
    Placeholder6,
    Business,
    BusinessForSale,
    RaceBike,
    Parachute,
    TeamDeathmatch,
    RaceFoot,
    VehicleDeathmatch,
    Barry,
    Dom,
    Maryann,
    Cletus,
    Josh,
    Minute,
    Omega,
    Tonya,
    Paparazzo,
    Aim,
    CrateDropBackground,
    GreenAndNetPlayer1,
    GreenAndNetPlayer2,
    GreenAndNetPlayer3,
    GreenAndFriendly,
    NetPlayer1AndNetPlayer2,
    NetPlayer1AndNetPlayer3,
    Creator,
    CreatorDirection,
    Abigail,
    Blimp,
    Repair,
    Testosterone,
    Dinghy,
    Fanatic,
    InfoIcon = 407,
    CaptureTheFlag,
    LastTeamStanding,
    Boat,
    CaptureTheFlagBase,
    CaptureTheFlagOutline = 413,
    CaptureTheFlagBaseNoBag,
    WeaponJerrycan,
    Rp,
    LevelInside,
    BountyHitInside,
    CaptureTheUSAFlag,
    CaptureTheUSAFlagOutline,
    Tank,
    PlayerHeli,
    PlayerPlane,
    PlayerJet,
    CentreStroke,
    PlayerGunCar,
    PlayerBoat,
    MPHeist,
    Temp1,
    Temp2,
    Temp3,
    Temp4,
    Temp5,
    Temp6,
    RaceStunt,
    HotProperty,
    UrbanWarfareVersus,
    KingOfTheCastle,
    PlayerKing,
    DeadDrop,
    PennedIn,
    Beast,
    EdgePointer,
    EdgeCrossTheLine,
    MPLamar,
    Bennys,
    CornerNumber1,
    CornerNumber2,
    CornerNumber3,
    CornerNumber4,
    CornerNumber5,
    CornerNumber6,
    CornerNumber7,
    CornerNumber8,
    Yacht,
    FindersKeepers,
    AssaultPackage,
    HuntTheBoss,
    Sightseer,
    TurretedLimo,
    BellyOfTheBeast,
    YachtLocation,
    PickupBeast,
    PickupZoned,
    PickupRandom,
    PickupSlowTime,
    PickupSwap,
    PickupThermal,
    PickupWeed,
    WeaponRailgun,
    Seashark,
    PickupHidden,
    Warehouse,
    WarehouseForSale,
    Office,
    OfficeForSale,
    Truck,
    Contraband,
    Trailer,
    VIP,
    Cargobob,
    AreaOutline,
    PickupAccelerator,
    PickupGhost,
    PickupDetonator,
    PickupBomb,
    PickupArmoured,
    Stunt,
    WeaponLives,
    StuntPremium,
    Adversary,
    BikerClubhouse,
    BikerCagedIn,
    BikerTurfWar,
    BikerJoust,
    ProductionWeed,
    ProductionCrack,
    ProductionFakeId,
    ProductionMeth,
    ProductionMoney,
    Package,
    Capture1,
    Capture2,
    Capture3,
    Capture4,
    Capture5,
    Capture6,
    Capture7,
    Capture8,
    Capture9,
    Capture10,
    Quad,
    Bus,
    DrugsPackage,
    PickupJump,
    Adversary4,
    Adversary8,
    Adversary10,
    Adversary12,
    Adversary16,
    Laptop,
    PickupDeadline,
    SportsCar,
    WarehouseVehicle,
    RegPapers,
    PoliceStationDropoff,
    Junkyard,
    ExVech1,
    ExVech2,
    ExVech3,
    ExVech4,
    ExVech5,
    ExVech6,
    ExVech7,
    TargetA,
    TargetB,
    TargetC,
    TargetD,
    TargetE,
    TargetF,
    TargetG,
    TargetH,
    Juggernaut,
    PickupRepair,
    SteeringWheel,
    Trophy,
    PickupRocketBoost,
    PickupHomingRocket,
    PickupMachinegun,
    PickupParachute,
    PickupTime5,
    PickupTime10,
    PickupTime15,
    PickupTime20,
    PickupTime30,
    Supplies,
    PropertyBunker,
    GrWvm1,
    GrWvm2,
    GrWvm3,
    GrWvm4,
    GrWvm5,
    GrWvm6,
    GrCovertOps,
    AdversaryBunker,
    GrMocUpgrade,
    GrWUpgrade,
    SmCargo,
    SmHangar,
    TfCheckpoint,
    RaceTf,
    SmWp1,
    SmWp2,
    SmWp3,
    SmWp4,
    SmWp5,
    SmWp6,
    SmWp7,
    SmWp8,
    SmWp9,
    SmWp10,
    SmWp11,
    SmWp12,
    SmWp13,
    SmWp14,
    NhpBag,
    NhpChest,
    NhpOrbit,
    NhpVeh1,
    NhpBase,
    NhpOverlay,
    NhpTurret,
    NhpMgFirewall,
    NhpMgNode,
    NhpWp1,
    NhpWp2,
    NhpWp3,
    NhpWp4,
    NhpWp5,
    NhpWp6,
    NhpWp7,
    NhpWp8,
    NhpWp9,
    NhpCCTV,
    NhpStarterpack,
    NhpTurretConsole,
    NhpMgMirRotate,
    NhpMgMirStatic,
    NhpMgProxy,
    AcsrRaceTarget,
    AcsrRaceHotring,
    AcsrWp1,
    AcsrWp2,
    BatClubProperty,
    BatCargo,
    BatTruck,
    BatHackJewel,
    BatHackGold,
    BatKeypad,
    BatHackTarget,
    PickupDtbHealth,
    PickupDtbBlastIncrease,
    PickupDtbBlastDecrease,
    PickupDtbBombIncrease,
    PickupDtbBombDecrease,
    BatRivalClub,
    BatDrone,
    BatCashReg,
    CCTV,
    BatAssassinate,
    BatPbus,
    BatWp1,
    BatWp2,
    BatWp3,
    BatWp4,
    BatWp5,
    BatWp6,
    Blimp2,
    Oppressor2,
    BatWp7,
    ArenaSeries,
    ArenaPremium,
    ArenaWorkshop,
    RaceWars,
    ArenaTurret,
    ArenaRCCar,
    ArenaRCWorkshop,
    ArenaTrapFire,
    ArenaTrapFlip,
    ArenaTrapSea,
    ArenaTrapTurn,
    ArenaTrapPit,
    ArenaTrapMine,
    ArenaTrapBomb,
    ArenaTrapWall,
    ArenaTrapBrd,
    ArenaTrapSbrd,
    ArenaBruiser,
    ArenaBrutus,
    ArenaCerberus,
    ArenaDeathbike,
    ArenaDominator,
    ArenaImpaler,
    ArenaImperator,
    ArenaIssi,
    ArenaSasquatch,
    ArenaScarab,
    ArenaSlamvan,
    ArenaZr,
  }

  export enum BlipColor {
    White,
    Red,
    Green,
    Blue,
    Yellow = 5,
    LightRed,
    Violet,
    Pink,
    LightOrange,
    LightBrown,
    LightGreen,
    LightBlue,
    LightPurple,
    DarkPurple,
    Cyan,
    LightYellow,
    Organe,
    DarkPink = 19,
    GraniteGreen,
    DarkBrown,
    LightGray,
    LightPink,
    LemonGreen,
    ForestGreen,
    ElectricBlue,
    BrightPurple,
    DarkYellow,
    DarkCyan = 30,
    Beige = 36,
    DarkGray = 40,
    PinkRed,
    Gold = 46,
    Orange,
    BrilliantRose,
    MediumPurple = 50,
    Salmon,
    DarkGreen,
    BlizzardBlue,
    OracleBlue,
    Silver,
    EastBay = 58,
    YellowOrange = 60,
    MulberryPink,
    AltoGray,
    JellyBeanBlue,
    DarkOrange,
    Mamba,
    TransparentBlack = 72,
    DeepRed = 76,
    TransparentRed = 79,
    TransparentBlue = 80,
    Purple = 83,
  }

  export const enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary",
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

    public dot(x: number, y: number, z: number): Vector3;

    public dot(value: number): Vector3;

    public dot(array: [number, number, number]): Vector3;

    public dot(vector: IVector3): Vector3;

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

    /** @beta */
    public static readonly zero: Vector3;

    /** @beta */
    public static readonly one: Vector3;

    /** @beta */
    public static readonly forward: Vector3;

    /** @beta */
    public static readonly back: Vector3;

    /** @beta */
    public static readonly up: Vector3;

    /** @beta */
    public static readonly down: Vector3;

    /** @beta */
    public static readonly left: Vector3;

    /** @beta */
    public static readonly right: Vector3;

    /** @beta */
    public static readonly negativeInfinity: Vector3;

    /** @beta */
    public static readonly positiveInfinity: Vector3;
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

    public dot(x: number, y: number): Vector2;

    public dot(value: number): Vector2;

    public dot(array: [number, number]): Vector2;

    public dot(vector: IVector2): Vector2;

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

    /** @beta */
    public static readonly zero: Vector2;

    /** @beta */
    public static readonly one: Vector2;

    /** @beta */
    public static readonly up: Vector2;

    /** @beta */
    public static readonly down: Vector2;

    /** @beta */
    public static readonly left: Vector2;

    /** @beta */
    public static readonly right: Vector2;

    /** @beta */
    public static readonly negativeInfinity: Vector2;

    /** @beta */
    public static readonly positiveInfinity: Vector2;
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
     *
     * @remarks The RGBA values are allowed to range from 0 to 255.
     */
    constructor(r: number, g: number, b: number, a: number);
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
     *
     * @param key The key of the value to store.
     */
    public setMeta(key: string, value: any): void;
  }

  /**
   * Resource name of the executing resource.
   */
  export const resourceName: string;

  /**
   * Represents the current version.
   *
   * @remarks It's a slighty modified semantic versioning specification, which can be matched using this regular expression pattern `^(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))$`.
   */
  export const version: string;

  /**
   * Represents the current SDK version.
   *
   * @remarks It's the version of the SDK the current runtime was compiled with.
   */
  export const sdkVersion: number;

  /**
   * Represents the current branch.
   */
  export const branch: string;

  /**
   * Returns if the resource is in debug mode.
   *
   * @returns True when the resource is launched with debug mode enabled.
   */
  export const debug: boolean;

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
   *
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
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(eventName: string, ...args: any[]): void;

  /**
   * Schedules execution of handler on every tick/every frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearEveryTick} function to cancel the timer.
   */
  export function everyTick(handler: (...args: any[]) => void): number;

  /**
   * Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string from which hash will be created.
   */
  export function hash(str: string): number;

  /**
   * Returns whether the specified resource exists.
   *
   * @param name Name of the resource.
   */
  export function hasResource(name: string): boolean;

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
   * Schedules execution of handler on next tick/next frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: (...args: any[]) => void): number;

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
   * Subscribes to all events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
  export function on(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to all events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
  export function once(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   */
  export function setInterval(handler: (...args: any[]) => void, miliseconds: number): number;

  /**
   * Schedules execution of handler once after the expiration of interval.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, before execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearTimeout} function to cancel the timer.
   */
  export function setTimeout(handler: (...args: any[]) => void, miliseconds: number): number;

  /**
   * A boolean indicating whether the current script is executed on the clientside.
   *
   * @beta
   */
  export const isClient: boolean;

  /**
   * A boolean indicating whether the current script is executed on the serverside.
   *
   * @beta
   */
  export const isServer: boolean;
}
