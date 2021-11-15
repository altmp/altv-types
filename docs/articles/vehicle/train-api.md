# Train API

The Train API has been introduced in version 7.0 and provides properties and methods to control trains. It is part of the serverside vehicle class and synchronized. This article should give you an overview of the API and how to use it.

## Properties

| Property Name             | Description                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------                                                                   |
| isMissionTrain            | Gets or sets if the created vehicle is a mission train.                                                                               |
| trainTrackId              | Gets or sets the track id of the train. [Valid track ids: 0 - 11]                                                                     |
| trainEngineId             | Gets the engine of the train.                                                                                                         | 
| trainConfigIndex          | Gets or sets the trains config index. You can find a list of all possible config indices in the trains.xml. [Valid indices: 1 - 25]   |
| trainDistanceFromEngine   | Gets or sets the distance of the trains to the engine.                                                                                |
| isTrainEngine             | Gets or sets if the vehicle is the engine of the train.                                                                               |
| isTrainCaboose            | Gets or sets if the vehicle is a caboose.                                                                                             |
| trainDirection            | Gets or sets the direction of the train. (`true` means forward, `false` means backward)                                               |
| trainPassengerCarriages   | Gets or sets if the train contains a passenger carriage.                                                                              |
| trainRenderDerailed       | Gets or sets if the trains is rendered derailed.                                                                                      |
| trainForceDoorsOpen       | Gets or sets if the doors of the trains should be forced open.                                                                        |
| trainCruiseSpeed          | Gets or sets the cruise speed of the train.                                                                                           |
| trainCarriageConfigIndex  | Gets or sets the config index of the train's carriage.                                                                                |
| trainLinkedToBackwardId   | Gets or sets a vehicle that is linked to the back of the train.                                                                       |
| trainLinkedToForwardId    | Gets or sets a vehicle that is linked to the front of the train.                                                                      |

## Methods

| Method Name                   | Description                                   |
| ----------------------------- | --------------------------------------------- |
| setTrainEngineId              | Applying a vehicle as an engine of a train.   |
| setTrainLinkedToBackwardId    | Links a vehicle to the back of the train.     |
| setTrainLinkedToForwardId     | Links a vehicle to the front of the train.    |  

## Example Code

The following code creates the metrotrain that drives on track 1. The track goes from the city to Paleto Bay and back.

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