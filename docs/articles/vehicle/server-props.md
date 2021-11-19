# Vehicle server properties

The following article describes the server properties of the vehicle class. Keep in mind, some server properties are related to the train API and are described in the [train API article](train-api.md). Therefore, they are not mentioned here.

## Properties

| Property Name             | Type              | Description                                                                                                                           |
| ------------------------- | ------------------| -------------------------------------------------------------------|
| activeRadioStation        | RadioStation      | Gets or sets the active radio station.         
| all                       | Vehicle[]         | Gets an array of all vehicle instances.         
| attached                  | Vehicle           | Gets a vehicle that is attached to the vehicle instance.         
| attachedTo                | Vehicle           | Gets a vehicle where the vehicle is attached to.         
| bodyAdditionalHealth      | number            | Gets or sets the additional body health.         
| bodyHealth                | number            | Gets or sets the body health of a vehicle instance.         
| customPrimaryColor        | RGBA              | Gets or sets the custom primary color as a RGBA type.         
| customSecondaryColor      | RGBA              | Gets or sets the custom secondary color as a RGBA type.        
| customTires               | boolean           | Gets or sets if the vehicle instance has custom tires.         
| darkness                  | number            | Applies some decoration effects to the vehicle (e.g.: It makes the hydra looking rusty or applies snow to the front bumper of `policeold1`). Does not work on every vehicle model.    
| dashboardColor            | number            | Gets or sets the dashboard color of the vehicle.         
| daylightOn                | boolean           | Gets the current state of the daylights.         
| destroyed                 | boolean           | Gets if a vehicle is destroyed.         
| dirtLevel                 | number            | Gets or sets the dirt level of the vehicle.         
| driftModeEnabled          | boolean           | Gets or sets the drift mode state of the vehicle.         
| driver                    | Player / null     | Gets the current driver of the vehicle. It returns null, if there is no driver.         
| engineHealth              | number            | Gets or sets the current engine health.         
| engineOn                  | boolean           | Gets or sets the engine state of the vehicle.         
| flamethrowerActive        | boolean           | Gets if a flamethrower of a vehicle is active on cars like Cerberus.         
| frontWheels               | number            | Gets the type of the front wheels.         
| handbrakeActive           | boolean           | Gets if the handbrake of a car is active.         
| hasArmoredWindows         | boolean           | Gets if the car has armoredWindows.         
| headlightColor            | number            | Gets or sets the headlight color of a vehicle.         
| interiorColor             | number            | Gets or sets the interior color of a vehicle.         
| lightsMultiplier          | number            | Gets or sets the lights intensity and distance of a vehicle.         
| livery                    | number            | Gets or sets the livery of a vehicle.         
| lockState                 | VehicleLockState  | Gets or sets the lock state of a vehicle.         
| manualEngineControl       | boolean           | Enables or disables the manual engine control.         
| modKit                    | number            | Gets or sets the current mod kit of a vehicle.         
| modKitsCount              | number            | Gets the maximum amount of vehicle mod kits available.         
| model                     | string / number   | Gets the model of a vehicle instance.         
| neon                      | IVehicleNeon      | Enables or disables a neon light on a specific position (see IVehicleNeon).         
| neonColor                 | RGBA              | Gets or sets the color of the neon lights.         
| nightlightOn              | boolean           | Gets the current state of the nightlights.         
| numberPlateIndex          | NumberPlateStyle  | Gets or sets the current number plate style (see NumberPlateStyle).         
| numberPlateText           | string            | Gets or sets the current text displayed on the number plate.         
| pearlColor                | number            | Gets or sets the pearl color of a vehicle.         
| petrolTankHealth          | number            | Gets or sets the current health amount of the petrol tank.         
| primaryColor              | number            | Gets or sets the current primary color of a vehicle.         
| rearWheels                | number            | Gets the type of the rear wheels.         
| repairsCount              | number            | Gets how often a vehicle got repaired.         
| roofLivery                | number            | Gets or sets the roof livery of a vehicle.         
| roofState                 | boolean           | Gets or sets the roof state of a vehicle.         
| secondaryColor            | number            | Gets or sets the current secondary color.         
| sirenActive               | boolean           | Gets or sets the siren state of a vehicle.         
| tireSmokeColor            | RGBA              | Gets or sets the color of the tire smoke.         
| velocity                  | Vector3           | Gets the velocity vector of a vehicle.          
| wheelColor                | number            | Gets or sets the wheel color.         
| wheelType                 | number            | Gets the wheel type.         
| wheelsCount               | number            | Gets the amount of wheels of a vehicle.         
| windowTint                | WindowTint        | Gets or sets the window tint of a vehicle.          