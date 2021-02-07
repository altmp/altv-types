# Setting up an alt:V server with the JS module

This article will explain how to setup an alt:V server with the JS module.

## Requirements

- [Latest Version of NodeJS](https://nodejs.org/en/)
- A Code Editor (Visual Studio Code, Sublime Text etc.)
- Basic knowledge of command prompts
- VS Redist Latest Version installed
- Windows 10 or Linux (For running the server)

## Summary

If you are interested in learning all of the ins and outs of getting a server setup please follow this tutorial entirely.

If you are more interested in getting a server running in a few minutes check out [alt:V Quickstart repository](https://github.com/Stuyk/altv-quickstart) and follow those instructions. 

## Obtaining the server files

[Download](https://altv.mp/#/downloads) the latest build here.
Within the Dropdown navigate to: **Release**, **Release candidate** OR **Development**\*.<br>
*For development, most of the time the branch release candidate is used. 

Tick the following elements:
```
[x] Data Files
[x] JS Module
[ ] C# Module
[x] Sample Config File
[x] Example Resource Pack
```

Press **DOWNLOAD** and once you're done => Extract the .zip with your preferred program (7-Zip, Winrar, etc.)*

*Into a folder that is **not** on your Desktop! 

## Running the server

Depending on your chosen Code Editor, you may consider the following options:

### Visual Studio Code
```md
- Within VSC, open the Server Root (File > Open Folder)
- Create a new Terminal (Terminal > New Terminal )

Once you archieved to have a Terminal, it's up to you:

For PowerShell:
- Select the Prompt PowerShell
- Type > ./altv-server.exe

For Command Prompt:
- Select the Command Prompt
- Type > altv-server.exe

Congrats, your server is now running

- Press CTRL + C to stop the server.
- Press arrow up and press enter simply restart the server.
```

### PowerShell
```md
- Navigate to the root folder of your altv-server.exe 
- Head to the adress bar of the file explorer
- Type > powershell
- Type > ./altv-server.exe

Congrats, your server is now running

- Press CTRL + C to stop the server.
- Press arrow up and press enter simply restart the server.
```

### Command Prompt
```md
Just run altv-server.exe
```

## Configuring your client for development

- Navigate to your root of alt:V Client
- View altv.cfg in your preferred editor

Now something similar to this should appear:
```yaml
branch: 'rc'
build: '1182'
debug: 'true'
gtapath: 'D:\\Program Files (x86)\\Steam\\steamapps\\common\\Grand Theft Auto V'
ignoreLowPriorityProps: 'false'
lang: 'en'
lastip: ''
name: 'YourWonderfulName'
netgraph: 'false'
streamerMode: 'false'
voiceActivationEnabled: 'false'
voiceActivationKey: '78'
voiceEnabled: 'true'
voiceInputSensitivity: '20'
voiceVolume: '100'
```

### Using branches

Set your branch based on what you've choose in [Obtaining the Server Files](#obtaining-the-server-files).
Branch names:
- release
- release candidate
- dev

```yaml
Release:
branch: 'release'

Release candidate (Mostly used):
branch: 'rc'

Development:
branch: 'dev'
```

### Using debug mode (client)

Edit the `altv.cfg` in the directory of your alt:V installation and add the following:
```yaml
debug: true
```
This allows the usage of several debug features like reconnect etc. with your F8 console.

## Configuring the `server.cfg`

Once you're done changing the stated things above, it's time to head to the server again.
The server.cfg is where the magic happens, here you can change what is most important.

Once opened, something similar to this should appear: 
```yaml
name: 'alt:V Server'
host: 0.0.0.0
port: 7788
players: 128
#password: ultra-password
announce: false
#token: YOUR_TOKEN
gamemode: Freeroam
website: example.com
language: en
description: 'alt:V Sample Server'
modules: [ js-module ]
resources: [
  
]
```

## Using debug mode (server)

While you are developing make sure you **ENABLE** the following inside the server.cfg.
Add this to your config:
```yaml
debug: true
```

Once enabled, you can now use several debug commands like:

`restart [RESOURCE]`<br>
`stop [RESOURCE]`<br>
`start [RESOURCE]`<br>
`reconnect`*<br>
*Reconnect can cause bugs and issues, this is an experimental feature and only meant to be used in development.

## Adding resources

Adding a resource is as simple as putting the folders name inside of the resources array.
No commas necessary - But you can add them if you want.

Right now, your resource array is empty.
Keep in mind, as you've chosen the Example Resource Pack you've got three example resources.

Load them, by simple adding the folder names*<br>
*The name is case sensitive! - Also templating with [resourceName] isn't gonna work as seen in other multiplayer modifications.

```yaml
resources: [
    freeroam
    chat
    newResource
]
```
