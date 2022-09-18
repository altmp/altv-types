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
    RmlElement,
    RmlDocument,
    LocalPlayer,
  }

  export const enum BlipSprite {
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

  export const enum BlipColor {
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

  export const enum AudioCategory {
    x44E21C90 = "0x44E21C90",
    xBAD598C7 = "0xBAD598C7",
    xA4D158B0 = "0xA4D158B0",
    FrontendMenu = "frontend_menu",
    Cutscenes = "cutscenes",
    GameWorld = "game_world",
    Ambience = "ambience",
    Weapons = "weapons",
    Peds = "peds",
    Speech = "speech",
    Vehicles = "vehicles",
    Collisions = "collisions",
    HUD = "hud",
    WeaponsExplosions = "weapons_explosions",
    WeaponsGuns = "weapons_guns",
    x4E8BCAED = "0x4E8BCAED",
    x32157574 = "0x32157574",
    PedsClothing = "peds_clothing",
    PedsCollisions = "peds_collisions",
    xF7C35252 = "0xF7C35252",
    VehiclesHelis = "vehicles_helis",
    VehiclesWheels = "vehicles_wheels",
    VehiclesWheelsSkids = "vehicles_wheels_skids",
    x2EED1D0A = "0x2EED1D0A",
    VehiclesHorns = "vehicles_horns",
    VehiclesHornsLoud = "vehicles_horns_loud",
    VehiclesSirens = "vehicles_sirens",
    VehiclesDoors = "vehicles_doors",
    VehiclesBrakes = "vehicles_brakes",
    VehiclesChassisRattle = "vehicles_chassis_rattle",
    VehiclesSuspension = "vehicles_suspension",
    xDF9CFFD4 = "0xDF9CFFD4",
    VehiclesEnginesIntake = "vehicles_engines_intake",
    xF48DE3B3 = "0xF48DE3B3",
    VehiclesEnginesDamage = "vehicles_engines_damage",
    VehiclesEnginesIgnition = "vehicles_engines_ignition",
    xB607457F = "0xB607457F",
    x39736A51 = "0x39736A51",
    x3F6594E4 = "0x3F6594E4",
    xE86DF43F = "0xE86DF43F",
    x1C507071 = "0x1C507071",
    Music = "music",
    MusicLoading = "music_loading",
    x6244F855 = "0x6244F855",
    xD59675EA = "0xD59675EA",
    xEA185B02 = "0xEA185B02",
    xAC3F546D = "0xAC3F546D",
    x41ACDDFF = "0x41ACDDFF",
    xC8B2D787 = "0xC8B2D787",
    x3AA35DEF = "0x3AA35DEF",
    xDCA3CC61 = "0xDCA3CC61",
    x1F418253 = "0x1F418253",
    x933E72C3 = "0x933E72C3",
    xF05AAEDD = "0xF05AAEDD",
    xC4872161 = "0xC4872161",
    xAA0678B2 = "0xAA0678B2",
    VehiclesEnginesCooling = "vehicles_engines_cooling",
    Scripted = "scripted",
    AmbienceWeather = "ambience_weather",
    x6F56A5DC = "0x6F56A5DC",
    VehiclesBoatsEngines = "vehicles_boats_engines",
    AmbienceInsects = "ambience_insects",
    AmbienceBirds = "ambience_birds",
    Radio = "radio",
    x52BA33D4 = "0x52BA33D4",
    x45EB536F = "0x45EB536F",
    FrontendRadio = "frontend_radio",
    x9B60B77E = "0x9B60B77E",
    x044986F4 = "0x044986F4",
    xF7954E76 = "0xF7954E76",
    CollisionsVehiclesGlass = "collisions_vehicles_glass",
    xEB0390D7 = "0xEB0390D7",
    x80722AAA = "0x80722AAA",
    Fire = "fire",
    Water = "water",
    Score = "score",
    Doors = "doors",
    x01E27C7E = "0x01E27C7E",
    xA95BF404 = "0xA95BF404",
    InteractiveMusic = "interactive_music",
    x9205C7A1 = "0x9205C7A1",
    xD3594A47 = "0xD3594A47",
    x20230050 = "0x20230050",
    xEA1277B9 = "0xEA1277B9",
    xF4908CAD = "0xF4908CAD",
    x05D22F30 = "0x05D22F30",
    x11034592 = "0x11034592",
    x1E51E02F = "0x1E51E02F",
    x6D867E97 = "0x6D867E97",
    x9C6A4771 = "0x9C6A4771",
    x6C742462 = "0x6C742462",
    AnimalsFootsteps = "animals_footsteps",
    x414231B5 = "0x414231B5",
    Melee = "melee",
    x992F6CB7 = "0x992F6CB7",
    x75FB2B65 = "0x75FB2B65",
    x368CC071 = "0x368CC071",
    xB2681B31 = "0xB2681B31",
    xB4C14B9C = "0xB4C14B9C",
    xE3FAF7D3 = "0xE3FAF7D3",
    xCD3365DE = "0xCD3365DE",
    x864AAAB9 = "0x864AAAB9",
    Weather = "weather",
    WeatherWind = "weather_wind",
    x4FFD9CA5 = "0x4FFD9CA5",
    xCB2382B4 = "0xCB2382B4",
    xBCE6F3E0 = "0xBCE6F3E0",
    x781669E6 = "0x781669E6",
    WeatherRain = "weather_rain",
    VehiclesTrain = "vehicles_train",
    xF1754C85 = "0xF1754C85",
    CollisionsCloth = "collisions_cloth",
    VehiclesPlanes = "vehicles_planes",
    VehiclesPlanesJet = "vehicles_planes_jet",
    xF4FABC2A = "0xF4FABC2A",
    x3EB27392 = "0x3EB27392",
    CollisionsLouder = "collisions_louder",
    xED39E59D = "0xED39E59D",
    x011F1827 = "0x011F1827",
    AmbienceMusic = "ambience_music",
    x85B8BFD4 = "0x85B8BFD4",
    xB421C2DC = "0xB421C2DC",
    VehiclesBoatsWater = "vehicles_boats_water",
    WaterSwimming = "water_swimming",
    x31A9A815 = "0x31A9A815",
    x3874EB6C = "0x3874EB6C",
    x85DBC375 = "0x85DBC375",
    xC7D71D61 = "0xC7D71D61",
    x2F34D6FC = "0x2F34D6FC",
    ScriptedAlarms = "scripted_alarms",
    WeatherRainHeavy = "weather_rain_heavy",
    x88EEAE72 = "0x88EEAE72",
    VehiclesHelisDistant = "vehicles_helis_distant",
    VehiclesPlanesProp = "vehicles_planes_prop",
    VehiclesPlanesClose = "vehicles_planes_close",
    xBC11E471 = "0xBC11E471",
    WaterOcean = "water_ocean",
    x25E385A7 = "0x25E385A7",
    VehiclesPlanesDistant = "vehicles_planes_distant",
    VehiclesEnginesStartup = "vehicles_engines_startup",
    xC701057A = "0xC701057A",
    FireLouder = "fire_louder",
    x0E212957 = "0x0E212957",
    Underwater = "underwater",
    VehiclesTrainCarriage = "vehicles_train_carriage",
    VehiclesTrainClack = "vehicles_train_clack",
    PedsWind = "peds_wind",
    VehiclesExtrasLoud = "vehicles_extras_loud",
    VehiclesWheelsLoud = "vehicles_wheels_loud",
    AmbienceIndustrial = "ambience_industrial",
    AmbienceSpeech = "ambience_speech",
    xF0E66096 = "0xF0E66096",
    x3A52AFA3 = "0x3A52AFA3",
    WaterRiver = "water_river",
    WeatherThunder = "weather_thunder",
    VehiclesBicycles = "vehicles_bicycles",
    VehiclesBicyclesMechanical = "vehicles_bicycles_mechanical",
    AmbienceGeneral = "ambience_general",
    AmbienceCollectables = "ambience_collectables",
    UnderwaterLoud = "underwater_loud",
    SpeechAmbient = "speech_ambient",
    SpeechScripted = "speech_scripted",
    SpeechPain = "speech_pain",
    SpeechBreathing = "speech_breathing",
    xBF162C33 = "0xBF162C33",
    xB9CB44C7 = "0xB9CB44C7",
    xDA38F55D = "0xDA38F55D",
    CollisionsGlass = "collisions_glass",
    WaterLoud = "water_loud",
    xF846B110 = "0xF846B110",
    x0D3C9D38 = "0x0D3C9D38",
    VehiclesTrainBrakes = "vehicles_train_brakes",
    xD2626419 = "0xD2626419",
    WeaponsExplosionsLoud = "weapons_explosions_loud",
    PedsCollisionsLoud = "peds_collisions_loud",
    x03D39751 = "0x03D39751",
    CollisionsScripted = "collisions_scripted",
    xE8C16DEA = "0xE8C16DEA",
    FrontendMenuLoud = "frontend_menu_loud",
    WeatherWindFoliage = "weather_wind_foliage",
    VehiclesPlanesExtras = "vehicles_planes_extras",
    x0BE5A8C0 = "0x0BE5A8C0",
    VehiclesCarBy = "vehicles_car_by",
    ScriptedTV = "scripted_tv",
    x02C7B342 = "0x02C7B342",
    x2BA33BE9 = "0x2BA33BE9",
    x9748F077 = "0x9748F077",
    DoorsLoud = "doors_loud",
    x0607FDB8 = "0x0607FDB8",
    ScriptedLouder = "scripted_louder",
    xA6A84701 = "0xA6A84701",
    x3C496EED = "0x3C496EED",
    VehiclesEnginesReflections = "vehicles_engines_reflections",
    WeatherRainProps = "weather_rain_props",
    UnderwaterSwimming = "underwater_swimming",
    x1FF21B89 = "0x1FF21B89",
    xA6DA13DC = "0xA6DA13DC",
    VehiclesEnginesLoud = "vehicles_engines_loud",
    x6A3DD9A1 = "0x6A3DD9A1",
    x53B27328 = "0x53B27328",
    UnderwaterMuted = "underwater_muted",
    x6805AAC2 = "0x6805AAC2",
    x8A91FE75 = "0x8A91FE75",
    xEB0865AB = "0xEB0865AB",
    xF3196F77 = "0xF3196F77",
    x05403EE1 = "0x05403EE1",
    x63614939 = "0x63614939",
    xBC72B5EB = "0xBC72B5EB",
    FrontendGameLoud = "frontend_game_loud",
    xF2C3426E = "0xF2C3426E",
    x639A44A4 = "0x639A44A4",
    x266E012E = "0x266E012E",
    xACA58232 = "0xACA58232",
    x7A6F1418 = "0x7A6F1418",
    xD4AE89CA = "0xD4AE89CA",
    xFDB42EDF = "0xFDB42EDF",
    xFF7A0598 = "0xFF7A0598",
    x5A6165D9 = "0x5A6165D9",
    x585863F0 = "0x585863F0",
    x0E4CF672 = "0x0E4CF672",
    x11D52176 = "0x11D52176",
    xF841C9F9 = "0xF841C9F9",
    x291E7FD7 = "0x291E7FD7",
    x94821026 = "0x94821026",
    xFB40B82B = "0xFB40B82B",
    xCFF0C1C2 = "0xCFF0C1C2",
  }

  export const enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary",
  }

  export const enum Permission {
    None,
    ScreenCapture,
    WebRTC,
    ClipboardAccess,
    All,
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

  export const enum ModelType {
    Invalid,
    Ped,
    Automobile,
    Plane,
    Trailer,
    QuadBike,
    SubmarineCar,
    AmphibiousAutomobile,
    AmphibiousQuadBike,
    Heli,
    Blimp,
    Autogyro,
    Bike,
    Bmx,
    Boat,
    Train,
    Submarine,
    Object,
  }

  export enum KeyCode {
    Key0 = 48,
    Key1 = 49,
    Key2 = 50,
    Key3 = 51,
    Key4 = 52,
    Key5 = 53,
    Key6 = 54,
    Key7 = 55,
    Key8 = 56,
    Key9 = 57,
    Backspace = 8,
    Tab = 9,
    Clear = 12,
    Enter = 13,
    Return = 13,
    Escape = 27,
    Space = 32,
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40,
    Delete = 46,
    Insert = 45,
    Home = 36,
    End = 35,
    PageUp = 33,
    PageDown = 34,
    CapsLock = 20,
    Shift = 16,
    Alt = 18,
    Ctrl = 17,
    "-" = 189,
    "=" = 187,
    "," = 188,
    ";" = 186,
    "." = 190,
    "/" = 191,
    "`" = 192,
    "~" = 192,
    "'" = 222,
    "[" = 219,
    "]" = 221,
    "\\" = 220,
    KpMultiply = 106,
    KpAdd = 107,
    KpSubtract = 109,
    KpDecimal = 110,
    KpDivide = 111,
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,
    F13 = 124,
    F14 = 125,
    F15 = 126,
    F16 = 127,
    F17 = 128,
    F18 = 129,
    F19 = 130,
    F20 = 131,
    Numpad0 = 96,
    Numpad1 = 97,
    Numpad2 = 98,
    Numpad3 = 99,
    Numpad4 = 100,
    Numpad5 = 101,
    Numpad6 = 102,
    Numpad7 = 103,
    Numpad8 = 104,
    Numpad9 = 105,
    MouseLeft = 1,
    MouseRight = 2,
    MouseMiddle = 4,
  }

  /**
   * This is an internal utility type and you probably don't need it
   *
   * Returns the value by the key in the interface or `unknown` by default
   * if the key is not included in the interface
   *
   * * `VDefault?` optional value type to return if the key is not included in the interface
   * * `VReplace?` optional value type to return if key is included in the interface
   *
   * @hidden
   */
  // prettier-ignore
  export type InterfaceValueByKey<
    TInterface,
    TKey,
    VDefault = unknown,
    VReplace = void,
  > = (
    TKey extends keyof TInterface
      ? (VReplace extends void ? TInterface[TKey] : VReplace)
      : VDefault
  );

  /**
   * This is an internal utility type and you probably don't need it
   *
   * Extracts string keys from interface and transforms them to a string union
   *
   * @hidden
   */
  type ExtractStringKeys<TInterface extends Record<any, any>> = keyof {
    [K in keyof TInterface as Extract<K, string>]: TInterface[K];
  };

  export interface IVector2 {
    readonly x: number;
    readonly y: number;
  }

  export interface IVector3 {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  }

  export interface IResource {
    readonly name: string;
    readonly type: string;
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

  /**
   * Extend it by interface merging for use in global meta {@link getMeta alt.getMeta}, {@link setMeta alt.setMeta}, etc.
   *
   * @example
   * ```
   * declare module "alt-shared" {
   *   // extending interface by interface merging
   *   export interface ICustomGlobalMeta {
   *     numberExample: number
   *     stringExample: string
   *   }
   * }
   *
   * const value = alt.getMeta("numberExample") // return value: number | undefined
   * alt.setMeta("stringExample", "value") // key: "stringExample", value: string
   * ```
   */
  export interface ICustomGlobalMeta {}

  /**
   * Extend it by interface merging for use in global synced meta {@link getSyncedMeta alt.getSyncedMeta}, {@link setSyncedMeta alt.setSyncedMeta}, etc.
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomGlobalSyncedMeta {}

  /**
   * Extend it by interface merging for use in baseobject meta {@link BaseObject#getMeta}, {@link BaseObject#setMeta}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
  export interface ICustomBaseObjectMeta {}

  /**
   * Extend it by interface merging for use in entity synced meta (class `Entity` on client & server, e.g. `entity.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomEntitySyncedMeta {}

  /**
   * Extend it by interface merging for use in entity stream synced meta (class `Entity` on client & server, e.g. `entity.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomEntityStreamSyncedMeta {}

  /**
   * Extend it by interface merging for use in player synced meta (class `Player` on client & server, e.g. `player.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomPlayerSyncedMeta extends ICustomEntitySyncedMeta {}

  /**
   * Extend it by interface merging for use in player stream synced meta (class `Player` on client & server, e.g. `player.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomPlayerStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {}

  /**
   * Extend it by interface merging for use in player local meta (class `Player` on client & server, e.g. `player.getLocalMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomPlayerLocalMeta {}

  /**
   * Extend it by interface merging for use in player synced meta (class `Player` on client & server, e.g. `player.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomVehicleSyncedMeta extends ICustomEntitySyncedMeta {}

  /**
   * Extend it by interface merging for use in vehicle stream synced meta (class `Vehicle` on client & server, e.g. `vehicle.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
  export interface ICustomVehicleStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {}

  export class Vector3 {
    public readonly x: number;

    public readonly y: number;

    public readonly z: number;

    constructor(x: number, y: number, z: number);

    constructor(arr: [number, number, number]);

    constructor(obj: IVector3);

    constructor(value: number);

    public get length(): number;

    /**
     * Returns [x, y, z] array.
     */
    public toArray(): [number, number, number];

    /**
     * Adds two vectors.
     */
    public add(x: number, y: number, z: number): Vector3;

    /**
     * Adds a number to all vector axis.
     */
    public add(value: number): Vector3;

    /**
     * Adds two vectors.
     */
    public add(array: [number, number, number]): Vector3;

    /**
     * Adds two vectors.
     */
    public add(vector: IVector3): Vector3;

    /**
     * Subtracts two vectors.
     */
    public sub(x: number, y: number, z: number): Vector3;

    /**
     * Subtracts a number from all vector axis.
     */
    public sub(value: number): Vector3;

    /**
     * Subtracts two vectors.
     */
    public sub(array: [number, number, number]): Vector3;

    /**
     * Subtracts two vectors.
     */
    public sub(vector: IVector3): Vector3;

    /**
     * Divides two vectors.
     */
    public div(x: number, y: number, z: number): Vector3;

    /**
     * Divides all vector axis by value.
     */
    public div(value: number): Vector3;

    /**
     * Divides two vectors.
     */
    public div(array: [number, number, number]): Vector3;

    /**
     * Divides two vectors.
     */
    public div(vector: IVector3): Vector3;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(x: number, y: number, z: number): number;

    /**
     * Calculates dot product between vector and a number.
     */
    public dot(value: number): number;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(array: [number, number, number]): number;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(vector: IVector3): number;

    /**
     * Calculates cross product between two vectors.
     */
    public cross(x: number, y: number, z: number): Vector3;

    /**
     * Calculates cross product between vector and a number.
     */
    public cross(value: number): Vector3;

    /**
     * Calculates cross product between two vectors.
     */
    public cross(array: [number, number, number]): Vector3;

    /**
     * Calculates cross product between two vectors.
     */
    public cross(vector: IVector3): Vector3;

    /**
     * Multiplies two vectors.
     */
    public mul(x: number, y: number, z: number): Vector3;

    /**
     * Multiplies all vector axis by a number.
     */
    public mul(value: number): Vector3;

    /**
     * Multiplies two vectors.
     */
    public mul(array: [number, number, number]): Vector3;

    /**
     * Multiplies two vectors.
     */
    public mul(vector: IVector3): Vector3;

    /**
     * Negates vector.
     */
    public negative(): Vector3;

    /**
     * Normalizes vector.
     */
    public normalize(): Vector3;

    /**
     * Calculates distance between vectors.
     */
    public distanceTo(vector: IVector3): number;

    /**
     * Calculates squared distance between vectors.
     */
    public distanceToSquared(vector: IVector3): number;

    /**
     * Calculates angle between to vectors (in radians).
     */
    public angleTo(vector: IVector3): number;

    /**
     * Calculates angle between to vectors (in degrees).
     */
    public angleToDegrees(vector: IVector3): number;

    /**
     * Converts degrees to radians.
     */
    public toRadians(): Vector3;

    /**
     * Converts radians to degrees.
     */
    public toDegrees(): Vector3;

    /**
     * Checks if distance between vectors is smaller or equal to range.
     */
    public isInRange(vector: IVector3, range: number): boolean;

    /**
     * Interpolates vectors linearly.
     */
    public lerp(vector: IVector3, ratio: number): Vector3;

    /** (0, 0, 0) vector */
    public static readonly zero: Vector3;

    /** (1, 1, 1) vector */
    public static readonly one: Vector3;

    /** (0, 1, 0) vector */
    public static readonly forward: Vector3;

    /** (0, -1, 0) vector */
    public static readonly back: Vector3;

    /** (0, 0, 1) vector */
    public static readonly up: Vector3;

    /** (0, 0, -1) vector */
    public static readonly down: Vector3;

    /** (-1, 0, 0) vector */
    public static readonly left: Vector3;

    /** (1, 0, 0) vector */
    public static readonly right: Vector3;

    /** (-Infinity, -Infinity, -Infinity) vector */
    public static readonly negativeInfinity: Vector3;

    /** (Infinity, Infinity, Infinity) vector */
    public static readonly positiveInfinity: Vector3;
  }

  export class Vector2 {
    public readonly x: number;

    public readonly y: number;

    constructor(x: number, y: number);

    constructor(arr: [number, number]);

    constructor(obj: IVector2);

    constructor(value: number);

    public get length(): number;

    /**
     * Returns [x, y] array.
     */
    public toArray(): [number, number];

    /**
     * Adds two vectors.
     */
    public add(x: number, y: number): Vector2;

    /**
     * Adds a number to all vector axis.
     */
    public add(value: number): Vector2;

    /**
     * Adds two vectors.
     */
    public add(array: [number, number]): Vector2;

    /**
     * Adds two vectors.
     */
    public add(vector: IVector2): Vector2;

    /**
     * Subtracts two vectors.
     */
    public sub(x: number, y: number): Vector2;

    /**
     * Subtracts a number from all vector axis.
     */
    public sub(value: number): Vector2;

    /**
     * Subtracts two vectors.
     */
    public sub(array: [number, number]): Vector2;

    /**
     * Subtracts two vectors.
     */
    public sub(vector: IVector2): Vector2;

    /**
     * Divides two vectors.
     */
    public div(x: number, y: number): Vector2;

    /**
     * Divides two vectors.
     */
    public div(value: number): Vector2;

    /**
     * Divides two vectors.
     */
    public div(array: [number, number]): Vector2;

    /**
     * Divides two vectors.
     */
    public div(vector: IVector2): Vector2;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(x: number, y: number): Vector2;

    /**
     * Calculates dot product between vector and a number.
     */
    public dot(value: number): Vector2;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(array: [number, number]): Vector2;

    /**
     * Calculates dot product between two vectors.
     */
    public dot(vector: IVector2): Vector2;

    /**
     * Multiplies two vectors.
     */
    public mul(x: number, y: number): Vector2;

    /**
     * Multiplies all vector axis by a number.
     */
    public mul(value: number): Vector2;

    /**
     * Multiplies two vectors.
     */
    public mul(array: [number, number]): Vector2;

    /**
     * Multiplies two vectors.
     */
    public mul(vector: IVector2): Vector2;

    /**
     * Negates vector.
     */
    public negative(): Vector2;

    /**
     * Normalizes vector.
     */
    public normalize(): Vector2;

    /**
     * Calculates distance between vectors.
     */
    public distanceTo(vector: IVector2): number;

    /**
     * Calculates squared distance between vectors.
     */
    public distanceToSquared(vector: IVector2): number;

    /**
     * Calculates angle between to vectors (in radians).
     */
    public angleTo(vector: IVector2): Vector2;

    /**
     * Calculates angle between to vectors (in degrees).
     */
    public angleToDegrees(vector: IVector2): Vector2;

    /**
     * Converts degrees to radians.
     */
    public toRadians(): Vector2;

    /**
     * Converts radians to degrees.
     */
    public toDegrees(): Vector2;

    /**
     * Checks if distance between vectors is smaller or equal to range.
     */
    public isInRange(vector: IVector2, range: number): boolean;

    /**
     * Interpolates vectors linearly.
     */
    public lerp(vector: IVector2, ratio: number): Vector2;

    /** (0, 0) vector */
    public static readonly zero: Vector2;

    /** (1, 1) vector */
    public static readonly one: Vector2;

    /** (0, 1) vector */
    public static readonly up: Vector2;

    /**  (0, -1) vector */
    public static readonly down: Vector2;

    /** (-1, 0) vector */
    public static readonly left: Vector2;

    /** (1, 0) vector */
    public static readonly right: Vector2;

    /** (-Infinity, -Infinity) vector */
    public static readonly negativeInfinity: Vector2;

    /** (Infinity, Infinity) vector */
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
     * @param a An a component. Defaults to 255.
     *
     * @remarks The RGBA values are allowed to range from 0 to 255.
     */
    constructor(r: number, g: number, b: number, a?: number);

    constructor(array: [r: number, g: number, b: number, a?: number]);

    constructor(rgba: { r: number; g: number; b: number; a?: number });

    public toArray(): [r: number, g: number, b: number, a: number];
  }

  export class File {
    protected constructor();

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
    public static read(filename: string, encoding?: FileEncoding.Utf8 | `${FileEncoding.Utf8}` | FileEncoding.Utf16 | `${FileEncoding.Utf16}`): string;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */
    public static read(filename: string, encoding: FileEncoding.Binary | `${FileEncoding.Binary}`): ArrayBuffer;
  }

  export class BaseObject {
    protected constructor();

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
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteMeta(key: string): void;
    public deleteMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getMeta<K extends string>(key: Exclude<K, keyof ICustomBaseObjectMeta>): unknown;
    public getMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K] | undefined;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public getMeta<V extends any>(key: string): V | undefined;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    public hasMeta(key: string): boolean;
    public hasMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K>): void;
    public setMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, V>): void;

    /**
     * Returns the ref count of the entity.
     *
     * @remarks It's only available in debug-mode.
     */
    public readonly refCount: number;
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
  export const sdkVersion: string;

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

  // "V" generic overloads in get & set meta methods remain only for backward compatibility
  // TODO: remove "V" generic overloads from all get & set meta methods (alt.getMeta, alt.Entity.getSyncedMeta, etc.)
  /**
   * Removes the specified key and the data connected to that specific key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteMeta(key: string): void;
  export function deleteMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key or undefined if no data is present.
   */
  export function getMeta<K extends string>(key: Exclude<K, keyof ICustomGlobalMeta>): unknown;
  export function getMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): ICustomGlobalMeta[K] | undefined;
  /** @deprecated See {@link ICustomGlobalMeta} */
  export function getMeta<V extends any>(key: string): V | undefined;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns True when element associated with the specified key is stored.
   */
  export function hasMeta(key: string): boolean;
  export function hasMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): boolean;

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared locally to all resources.
   *
   * @param key The key of the value to store.
   * @param value The value to store.
   */
  export function setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K>): void;
  export function setMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K, value: ICustomGlobalMeta[K]): void;
  /** @deprecated See {@link ICustomGlobalMeta} */
  export function setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K, V>): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key or undefined if no data is present.
   */
  export function getSyncedMeta<K extends string>(key: Exclude<K, keyof ICustomGlobalSyncedMeta>): unknown;
  export function getSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): ICustomGlobalSyncedMeta[K] | undefined;
  /** @deprecated See {@link ICustomGlobalSyncedMeta} */
  export function getSyncedMeta<V extends any>(key: string): V | undefined;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns True if the meta table contains any data at the specified key or False if not
   */
  export function hasSyncedMeta(key: string): boolean;
  export function hasSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): boolean;

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
   * @remarks Keep in mind that sending invalid (destroyed) BaseObject instance
   * (for example vehicle, player, colshape, etc.)
   * results in sending a null value.
   *
   * *Note:* this does not apply to [raw events](https://docs.altv.mp/js/articles/events/index.html#raw-events).
   *
   * @example
   * ```js
   * alt.on('test', (vehicle) =>
   *   alt.log('received vehicle:', vehicle) // vehicle object will be null here
   * );
   *
   * const vehicle = new alt.Vehicle('sultan', 0, 0, 0, 0, 0, 0);
   * vehicle.destroy(); // makes vehicle object invalid
   * alt.emit('test', vehicle); // sends vehicle object as null and throws error
   * ```
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(eventName: string, ...args: any[]): void;

  /**
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   *
   * @remarks Works only from JS resource to JS resource
   */
  export function emitRaw(eventName: string, ...args: any[]): void;

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
   * Gets the exports of the specified resource.
   *
   * @param name Name of the resource.
   */
  export function getResourceExports(name: string): any;

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
   * Logs the specified arguments to the console if debug is enabled.
   *
   * @alpha
   */
  export function logDebug(...args: any[]): void;

  /**
   * Schedules execution of handler on next tick/next frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: (...args: any[]) => void): number;

  /**
   * Subscribes to a custom local event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to a custom local event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once(eventName: string, listener: (...args: any[]) => void): void;

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
   */
  export const isClient: boolean;

  /**
   * A boolean indicating whether the current script is executed on the serverside.
   */
  export const isServer: boolean;

  export function getAllResources(): ReadonlyArray<IResource>;

  export function time(timerName: string): void;

  export function time(): void;

  export function timeEnd(timerName: string): void;

  export function timeEnd(): void;

  export class Resource {
    protected constructor();

    public readonly isStarted: boolean;
    public readonly type: string;
    public readonly name: string;
    public readonly main: string;
    public readonly exports: Record<string, any>;
    public readonly dependencies: ReadonlyArray<string>;
    public readonly dependants: ReadonlyArray<string>;
    public readonly requiredPermissions: ReadonlyArray<Permission>;
    public readonly optionalPermissions: ReadonlyArray<Permission>;

    public static getByName(name: string): Resource | null;
    public static readonly all: ReadonlyArray<Resource>;
    public static readonly current: Resource;
  }

  export class Utils {
    protected constructor();

    public static wait(timeout: number): Promise<void>;

    /**
     * Waits for the callback to return true, otherwise the promise will be rejected after timeout
     *
     * @param callback If callback returns true it resolves promise.
     * @param timeout The maximum milliseconds to wait, otherwise promise will be rejected. Defaults to 2000.
     */
    public static waitFor(callback: () => boolean, timeout?: number): Promise<void>;
  }

  export namespace Utils {
    /** @alpha */
    export class Timer {
      public readonly id: number;

      constructor(callback: () => void, ms: number, once: boolean);

      public destroy(): void;
    }

    /** @alpha */
    export class Timeout extends Timer {
      constructor(callback: () => void, ms: number);
    }

    /** @alpha */
    export class Interval extends Timer {
      constructor(callback: () => void, ms: number);
    }

    /** @alpha */
    export class NextTick extends Timer {
      constructor(callback: () => void);
    }

    /** @alpha */
    export class EveryTick extends Timer {
      constructor(callback: () => void);
    }

    /** @alpha */
    export class ConsoleCommand {
      constructor(name: string, callback: (...args: string[]) => void);

      public destroy(): void;
    }
  }

  /**
   * Gets all the listeners for the specified local event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
  export function getEventListeners(eventName: string | null): ((...args: any[]) => void)[];

  export function stringToSHA256(string: string): string;
}
