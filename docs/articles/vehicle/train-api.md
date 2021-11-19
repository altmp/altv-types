# Train API

The Train API has been introduced in version 7.0 and provides properties and methods to control trains. It is part of the serverside vehicle class and synchronized. This article should give you an overview of the API and how to use it.

## Properties

| Property Name             | Description                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------                                                                   |
| isMissionTrain            | Gets or sets if the created train is a mission train.                                                                                 |
| trainTrackId              | Gets or sets the track id of the train. [Valid track ids: 0 - 11]                                                                     |
| trainEngineId             | Gets the engine of the train.                                                                                                         | 
| trainConfigIndex          | Gets or sets the trains config index. You can find a list of all possible config indices in the trains.xml. [Valid indices: 1 - 25]   |
| trainDistanceFromEngine   | Gets or sets the distance of the trains to the engine.                                                                                |
| isTrainEngine             | Gets or sets if the train is the engine of the train.                                                                                 |
| isTrainCaboose            | Gets or sets if the train is a caboose.                                                                                               |
| trainDirection            | Gets or sets the direction of the train. (`true` means forward, `false` means backward)                                               |
| trainPassengerCarriages   | Gets or sets if the train contains a passenger carriage.                                                                              |
| trainRenderDerailed       | Gets or sets if the trains is rendered derailed.                                                                                      |
| trainForceDoorsOpen       | Gets or sets if the doors of the trains should be forced open.                                                                        |
| trainCruiseSpeed          | Gets or sets the cruise speed of the train.                                                                                           |
| trainCarriageConfigIndex  | Gets or sets the config index of the train's carriage.                                                                                |
| trainLinkedToBackwardId   | Gets or sets another train that is linked to the back of the train.                                                                   |
| trainLinkedToForwardId    | Gets or sets another train that is linked to the front of the train.                                                                  |

## Methods

> [!WARNING]
> Please keep in mind that these methods will only work when they are used right on spawn.

| Method Name                   | Description                                       |
| ----------------------------- | ---------------------------------------------     |
| setTrainEngineId              | Applying a train as an engine of a train.         |
| setTrainLinkedToBackwardId    | Links another train to the back of the train.     |
| setTrainLinkedToForwardId     | Links another train to the front of the train.    |  

## Example Code

The following code creates the metrotrain that drives on track 1. The track goes from the city to Paleto Bay and back.

### Single train

```js
let vehicle = new alt.Vehicle(alt.hash("metrotrain"), 0, 0, 0, 0, 0, 0);
vehicle.isMissionTrain = false;
vehicle.trainTrackId = 1;
vehicle.setTrainEngineId(null);
vehicle.trainConfigIndex = 25;
vehicle.trainDistanceFromEngine = 0;
vehicle.isTrainEngine = true;
vehicle.isTrainCaboose = false;
vehicle.trainDirection = true;
vehicle.trainPassengerCarriages = false;
vehicle.trainRenderDerailed = false;
vehicle.trainForceDoorsOpen = false;
vehicle.trainCruiseSpeed = 5;
vehicle.trainCarriageConfigIndex = 0;
vehicle.setTrainLinkedToBackwardId(null);
vehicle.setTrainLinkedToForwardId(null);
```

### Linked trains

In order to link two trains to each other you need to use the `setTrainLinkedToBackwardId` and`setTrainLinkedToForwardId` methods. It is also important that one of the trains needs to be the engine of the train and the other one needs to be the carriage. Otherwise, you need to set the distance of the second train via`trainDistanceFromVehicle` manually.

```js
  // The whole train drives on track 3 and starts at the node index 1 of track 3.
  
  let vehicle = new alt.Vehicle(alt.hash("metrotrain"), 193, -603, 16, 0, 0, 0);
  vehicle.isMissionTrain = false;
  vehicle.trainTrackId = 3;
  vehicle.setTrainEngineId(null);
  vehicle.trainConfigIndex = 25;
  vehicle.trainDistanceFromEngine = 0;
  vehicle.isTrainEngine = true; // Make this train the engine of the whole train
  vehicle.isTrainCaboose = false;
  vehicle.trainDirection = false;
  vehicle.trainPassengerCarriages = false; // Disable this train as a passenger carriage
  vehicle.trainRenderDerailed = false;
  vehicle.trainForceDoorsOpen = false;
  vehicle.trainCarriageConfigIndex = 1;
  vehicle.setTrainLinkedToForwardId(null);

  let vehicle2 = new alt.Vehicle(alt.hash("metrotrain"), 193, -603, 16, 0, 0, 0);
  vehicle2.isMissionTrain = false;
  vehicle2.trainTrackId = 3;
  vehicle2.setTrainEngineId(vehicle);
  vehicle2.trainConfigIndex = 25;
  vehicle2.trainDistanceFromEngine = 0;
  vehicle2.isTrainEngine = false; // Disable this train as the engine of the whole train
  vehicle2.isTrainCaboose = false;
  vehicle2.trainDirection = false;
  vehicle2.trainPassengerCarriages = true; // Make this train as a passenger carriage
  vehicle2.trainRenderDerailed = false;
  vehicle2.trainForceDoorsOpen = false;
  vehicle2.trainCarriageConfigIndex = 1;
  
  vehicle2.setTrainLinkedToBackwardId(null); // Link no train to the back of this vehicle2
  vehicle2.setTrainLinkedToForwardId(vehicle); // Link vehicle to the front of the vehicle
  vehicle.setTrainLinkedToBackwardId(vehicle2); // Link vehicle2 to the back of the vehicle

```