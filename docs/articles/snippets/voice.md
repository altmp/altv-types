# Voice (Utilize alt:V´s built in Voice)

alt:V by default has a built in Voice functionality and this is how you can use it.

This voice can be used for 3D or 2D Voice solutions to ship features like:

-   3D & 2D Voicechat
-   Phonecalls
-   Radio communication
-   much more

**The snippet below will show you how to implement 3D voice for roleplay servers with javascript class usage**

## Functional Explanation

Quick explanation for what voice functionality is available through the alt:V API

**Player properties (clientside)**

`isTalking` boolean - which will be true if player is talking

`micLevel` number - player talking volume

```js
import * as alt from 'alt-client';

let localPlayer = alt.Player.local;
alt.log('Is player talking: ' + localPlayer.isTalking);
alt.log('Player talking volume: ' + localPlayer.micLevel);
```

**VoiceChannel Class**

`new VoiceChannel(isSpatial: boolean, maxDistance: number)` constructor - isPatial false means global voice channel,isPatial true means 3D voice channel which uses maxDistance as range

`addPlayer(player: alt.Player)` function - adds a player to the specific channel

`removePlayer(player: alt.Player)` function - removes a player to the specific channel

`mutePlayer(player: alt.Player)` function - mute the player inside the specific channel

`unmutePlayer(player: alt.Player)` function - unmute the player inside the specific channel

`isPlayerInChannel(player: alt.Player)` function - checks if the player is already in the specific channel

`isPlayerMuted(player: alt.Player)` function - checks if the player is muted in the specific channel

```js
import * as alt from 'alt-server';

let testChannel = new alt.VoiceChannel(true, 20);
alt.on('playerConnect', player => {
    testChannel.addPlayer(player);
    testChannel.unmutePlayer(player);
});

alt.on('playerDisconnect', player => {
    testChannel.removePlayer(player);
});

alt.on('playerDeath', player => {
    //mute player in testchannel if dead and connected to voice
    if (testChannel.isPlayerInChannel(player) && !testChannel.isPlayerMuted(player)) {
        testChannel.mutePlayer(player);
    }
});
//check example
```

## Example Usage 3D (Serverside)

_Serverside_

```js
import * as alt from 'alt-server';

class AltvVoiceServerModule {
    constructor() {
        //yell channel
        this.longRangeChannel = new alt.VoiceChannel(true, 16);
        //speak channel
        this.midRangeChannel = new alt.VoiceChannel(true, 8);
        //whisper channel
        this.lowRangeChannel = new alt.VoiceChannel(true, 3);
        this.registerEvents();
        alt.log('AltvVoiceServerModule init');
    }

    registerEvents() {
        //alternatively call it after player succesfully spawned after authentication
        alt.on('playerConnect', player => {
            this.addToVoiceChannels(player);
            this.changeVoiceRange(player);
        });
        //handle player disconenct
        alt.on('playerDisconnect', this.removePlayerFromChannels.bind(this));
        //handle player gamecrash/entity invalidity
        alt.on('removeEntity', this.removePlayerFromChannels.bind(this));
        //handle player voicerange change
        alt.onClient('server:ChangeVoiceRange', this.changeVoiceRange.bind(this));
    }

    /**
     * clear channels for given player
     * @param  {alt.Player} player
     * @returns {null}
     */
    removePlayerFromChannels(player) {
        if (this.lowRangeChannel.isPlayerInChannel(player)) {
            this.lowRangeChannel.removePlayer(player);
        }
        if (this.midRangeChannel.isPlayerInChannel(player)) {
            this.midRangeChannel.removePlayer(player);
        }
        if (this.longRangeChannel.isPlayerInChannel(player)) {
            this.longRangeChannel.removePlayer(player);
        }
    }

    /**
     * add player to all voice channels
     * @param  {alt.Player} player
     * @returns {null}
     */
    addToVoiceChannels(player) {
        this.lowRangeChannel.addPlayer(player);
        this.midRangeChannel.addPlayer(player);
        this.longRangeChannel.addPlayer(player);
    }

    /**
     * mute player in all voice channels
     * @param  {alt.Player} player
     * @returns {null}
     */
    muteInAllChannels(player) {
        this.lowRangeChannel.mutePlayer(player);
        this.midRangeChannel.mutePlayer(player);
        this.longRangeChannel.mutePlayer(player);
    }

    /**
     * takes a range for a player and mutes this player in all channels he shouldn´t be heard
     * @param  {alt.Player} player
     * @param  {number} range
     * @returns {null}
     */
    muteNotInRangeChannels(player, range) {
        switch (range) {
            case 3:
                this.midRangeChannel.mutePlayer(player);
                this.longRangeChannel.mutePlayer(player);
                break;
            case 8:
                this.lowRangeChannel.mutePlayer(player);
                this.longRangeChannel.mutePlayer(player);
                break;
            case 15:
                this.lowRangeChannel.mutePlayer(player);
                this.midRangeChannel.mutePlayer(player);
                break;
            default:
                break;
        }
    }

    /**
     * change the voice range of the given player and unmute in new range channel
     * @param  {alt.Player} player
     * @returns {null}
     */
    changeVoiceRange(player) {
        if (!player.voiceRange) {
            player.voiceRange = 0;
        }
        switch (player.voiceRange) {
            case 0:
                player.voiceRange = 3;
                this.muteNotInRangeChannels(player, 3);
                this.lowRangeChannel.unmutePlayer(player);
                alt.emitClient(player, 'client:UpdateCurrentAltVoiceRange', 3);
                break;
            case 3:
                player.voiceRange = 8;
                this.muteNotInRangeChannels(player, 8);
                this.midRangeChannel.unmutePlayer(player);
                alt.emitClient(player, 'client:UpdateCurrentAltVoiceRange', 8);
                break;
            case 8:
                player.voiceRange = 15;
                this.muteNotInRangeChannels(player, 15);
                this.longRangeChannel.unmutePlayer(player);
                alt.emitClient(player, 'client:UpdateCurrentAltVoiceRange', 15);
                break;
            case 15:
                player.voiceRange = 0;
                this.muteInAllChannels(player);
                alt.emitClient(player, 'client:UpdateCurrentAltVoiceRange', 0);
                break;
            default:
                break;
        }
    }
}

//initilize voice class instance
export const AltvVoiceServerModuleInstance = new AltvVoiceServerModule();
```

## Example Usage 3D (Clientside)

_Clientside_

```js
import * as alt from 'alt-client';

class AltvVoiceClientModule {
    constructor() {
        //localPlayer object shortcut
        this.localPlayer = alt.Player.local;
        //interval to check state changes
        this.interval = null;
        //cached talking state
        this.talkingState = false;
        //cached voice range
        this.currentRange = 0;
        this.registerEvents();
        alt.log('AltvVoiceClientModule init');
    }

    registerEvents() {
        alt.on('keydown', key => {
            if (key == 107) {
                //Press Num+ to change the range in which you get heard by other players
                alt.emitServer('server:ChangeVoiceRange');
            }
        });

        alt.onServer('client:UpdateCurrentAltVoiceRange', range => {
            this.currentRange = range;
            //emit new range to your user interface
            /* example payload
                {
                muted: range === 0 ? true : false,
                range: range
                }
            */
        });

        this.registerTalkingInterval();
    }

    /*
     * interval to handle talking state changes
     * i.e show in your ui if this player is talking (like ts3 voice led)
     */
    registerTalkingInterval() {
        this.interval = alt.setInterval(() => {
            //only emit if state changed
            if (this.talkingState !== this.localPlayer.isTalking && this.currentRange !== 0) {
                this.talkingState = this.localPlayer.isTalking;
                //emit talking state change to your ui {this.talkingState}
            }
            if (this.talkingState && this.currentRange === 0) {
                //emit talking state change to your ui {false}
            }
        }, 444);
    }
}

//initilize voice class instance
export const AltvVoiceClientModuleInstance = new AltvVoiceClientModule();
```