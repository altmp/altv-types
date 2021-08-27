# Using Events

If you are not familiar with the event driven structure of alt:V. This is going to teach you all about how to use the event driven structure that alt:V uses.

Which means that nothing can happen on the server without an event to trigger an action.

## What Triggers an Event?

This is an example of an event on server-side.

This will only trigger when a player has connected to the server and finished downloaded all resources. The criteria for this event is that the player opens their in-game server browser and tries to join your server.

```js
import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    // do something when the player connects
});
```

## What to do with an Event?

This is where you get to practice your problem solving skills and come up with some general infrastructure. You get to decide what happens to the player when they connect.

A common thing to do is spawn the player and give them a player model.

```js
import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    // x, y, z, delay in milliseconds
    player.spawn(0, 0, 0, 0);
    player.model = 'mp_m_freemode_01';
});
```

## What are the events?

There is a massive list of events when you start typing `alt.on` and it will give you all the relevant events when you have a proper file setup.
