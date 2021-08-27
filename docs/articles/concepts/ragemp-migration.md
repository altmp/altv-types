# Migrating from RAGE:MP

The data in this table is subject to change based on new releases, and updates.

|Feature Name|RAGE:MP |alt:V |alt:V Equivalent |Remarks |
|----|----|----|----|----|
|Server ColShapes|✔️ |✔️ |alt.ColshapeCylinder | |
|Server Markers|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|Server Text Labels|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|Server Particle Effects|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|Server Static Peds|✔️ |❌ |❌ | |
|Server Objects|✔️ |❌ |❌ |Object Streamers exist in C# to help synchronize objects and such. |
|Server Blips|✔️ |❌ |❌ |Does not work anywhere near to the capacity of RAGE. Works well client-side though.|
|Server Pickups|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|Server Checkpoints|✔️ |✔️ |alt.Checkpoint | |
|Trailer Synchronization|❌ |✔️ |✔️ |Built-in Voice Chat |
|Actual Voice Chat|❌ |✔️ |new alt.VoiceChannel |Built-in Voice Chat |
|Discord Rich Presence|✔️ |❌ |❌ | |
|Draw on Texture CEF|✔️ |✔️ |new alt.WebView | |
|Vector3 Utilities|✔️ |✔️ |✔️ | |
|Net Ownership Changing|❌ |✔️ |✔️ |Customizable functionality for entities near a player. |
|Local Storage|✔️ |✔️ |alt.LocalStorage | |
|Screenshot API|✔️ |✔️ |alt.takeScreenshotGameOnly | |
|Max Ping |✔️ |❌ |❌ |The equivalent can be written in server-side code. |
|Minimum FPS |✔️ |❌ |❌ |Kicks if player FPS drops too heavily. |
|Max Packet Loss|✔️ |❌ |❌ |Kicks if packet loss is greater than a percentage |
|Traffic Compression|✔️ |❌ |❌ | |
|Set Ped Clothes|✔️ |✔️ |player.setClothes, player.getClothes |May not be implemented yet. |
|Set Ped Appearance|✔️ |❌ |❌ |Blend Data, Props, Overlays, etc. |
|player.getStreamedPlayers()|✔️ |☕ |isEntityInStreamRange |Can now create a filter to getting stream range. |
|Customize GTA:V Stats|❌ |✔️ |✔️ |RAGE requires you to use specific save game files. |
|Custom Events|✔️ |✔️ |✔️ |alt.on, alt.emit, alt.onClient, alt.onServer |
|playerDamage Event|✔️ |✔️ |alt.on('playerDamage' |playerDamage event on alt:V |
|playerDeath Event|✔️ |✔️ |alt.on('playerDeath' |playerDeath event on alt:V |
|playerJoin Event|✔️ |✔️ |alt.on('playerConnect' |playerConnect event on alt:V |
|playerQuit Event|✔️ |✔️ |alt.on('playerDisconnect' |playerDisconnect event on alt:V |
|playerReady Event|✔️ |☕ |- |Not sure this applies to alt:V. Equivalent is connectionComplete on client-side. |
|playerSpawn Event?|✔️ |☕ |player.spawn(... |Not sure this applies to alt:V. Developer handles when they spawn. |
|playerWeaponChange Event|✔️ |✔️ |alt.on('playerWeaponChange' |known as playerWeaponChange on alt:V. |
|playerDetonateStickies Event|✔️ |✔️ |alt.on('explosion' |Can be done through the 'explosion' event. Can be cancelled. |
|playerEnterCheckpoint Event|✔️ |✔️ |alt.on('entityEnterColshape' |alt:V's checkpoint enter is bound to colshapes. |
|playerExitCheckpoint Event|✔️ |✔️ |alt.on('entityLeaveColshape' |alt:V's checkpoint exit is bound to colshapes. |
|playerEnterVehicle|✔️ |✔️ |alt.on('playerEnteredVehicle' | |
|playerLeftVehicle|✔️ |✔️ |alt.on('playerLeftVehicle' | |
|playerStartEnterVehicle Event|✔️ |❌ |❌ |RAGE can cancel the event. alt:V cannot. |
|playerCreateWaypoint|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|playerReachWaypoint|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|vehicleSirenToggle Event|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|vehicleDoorBreak Event|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|vehicleWindowSmash Event|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|vehicleTyreBurst Event|✔️ |❌ |❌ |The equivalent can be written in client-side code. |
|vehicleTrailerChange Event|✔️ |✔️ |alt.on('vehicleDetach' | |
|vehicleTrailerDetach Event|❌ |✔️ |alt.on('vehicleDetach' | |
|vehicleHornToggle Event|✔️ |❌ |❌ | |
|vehicleDestroy|✔️ |✔️ |alt.on('vehicleDestroy' |vehicleDestroy on alt:V |
|vehicleDamage|✔️ |✔️ |alt.on('weaponDamage' |Can be done through the weaponDamage event. |
|entityCreated|✔️ |❌ |❌ | |
|entityDestroyed|✔️ |✔️ |alt.on('removeEntity' | |
|playerStreamIn|✔️ |❌ |❌ |Tells what player streamed in for what player on server-side. |
|playerStreamOut|✔️ |❌ |❌ |Tells what player streamed out for what player on server-side. |
|startFire |❌ |✔️ |alt.on('startFire' |Gets a list of fires started by a player based on a weapon type. |
|incomingDamage|✔️ |❌ |❌ |This is a client-side event. |
|outgoingDamage|✔️ |❌ |❌ |This is a client-side event. |
|entitySteamIn|✔️ |✔️ |alt.on('gameEntityCreate' | |
|entitystreamOut|✔️ |✔️ |alt.on('gameEntityDestroy' | |
|colshapeEnter|✔️ |✔️ |alt.emitClient('... | |
|colshapeLeave|✔️ |✔️ |alt.emitClient('... | |
|enteredVehicle|✔️ |✔️ |alt.on('enteredVehicle' | |
|leftVehicle |✔️ |✔️ |alt.on('leftVehicle' | |
|seatShuffleEvent|❌ |✔️ |alt.on('changedVehicleSeat' | |
