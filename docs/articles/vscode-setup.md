# Setup VSCode for your project

In this article we'll focus on configuration and creation of simple node
built-in scripts.

> [!WARNING]
> This article is still a work in progress.

## Downloading VSCode

Before we start, we need downloaded and installed software, so in case
you didn't download yet, [here](https://code.visualstudio.com/#alt-downloads)
you can find all download types for different platforms. By the time I'm writing
this article, I'm using Windows portable package.

## Choose language and model

Now, you're left with decision to go with JavaScript or TypeScript. I'll
cover configuration for both of them, but if you don't know which one to
choose and you're ok with familiarising yourself with additional features
that TypeScript implements, you should definitely choose it.
Also it'd be good to know if you're creating project for client-side/server-side
model or both (will be mentioned later).

## Preparing folder for project

In VSCode click File -> Open Folder, this option will open File Dialog.
Create folder in your preferred directory and select folder which you've
just created. All project files will be stored in that folder.

> [!CAUTION]
> Always open your project as folder instead of single files.

## Creating node package

Now we'll cover using Terminal feature for executing shell scripts in your
project folder. To open it, click View -> Terminal, which will show docked
window at the bottom of the editor. Terminal will use default shell in your
system (for Windows 10 it's PowerShell). Any possible differences in my shell
scripts will be mentioned.

Now execute this script in Terminal
```powershell
npm init --yes
```
It will create default package configuration file without asking any
questions. You can fill them up later.

Now you can install types definitions for your chosen model, which will
be used by editor for code validation, auto-completion etc.
Check out [this](https://github.com/altmp/altv-types/blob/master/README.md#altv-types)
document for up-to-date information.

If you've chosen TypeScript language for your project, you also need to
install TypeScript package
```powershell
npm i -D typescript
```

## Creating configuration

If you've chosen JavaScript project, your configuration file should be
named ``jsconfig.json`` and for TypeScript project ``tsconfig.json``.
Both are similiar, so if you change your mind later, it won't be hard to
switch later.

Your configuration file should have content as below
```json
{
    "compilerOptions": {
      "module": "es2015",
      "target": "es6",
      "checkJs": true,
      "strict": true,
      "typeRoots": [
        "./node_modules/@types",
        "./node_modules/@altv"
      ],
      "outDir": "out"
    },
    "exclude": ["node_modules"]
  }
```

> [!TIP]
> Notice ``typeRoots`` entry, it's necessary for alt:V types to work
> without manually defining every package. If you desire to minimise
> used packages to minimum, use ``types`` entry instead.

## First project script

Now we can create our first script, which should be named ``index.js``
(as described in ``package.json``).
To test if it all works properly, you can copy this code below
```js
import * as alt from "alt-client";

alt.setInterval(() => {
    alt.log("This is a self repeating notification every 5 seconds.");
}, 5000);
```

> [!WARNING]
> If you're creating server-side script, you may get error mentioning that
> module ``alt-client`` cannot be found. In this case just change it to ``alt-server``.

If all went well, you shouldn't get any errors in your script as well as
when typing ``alt.`` you should get auto-completion for all available types
in that module.

## Creating resource configuration

For this project to be recognised by a language module, we need to create
resource configuration file. You can check [here](https://docs.altv.mp/js/articles/create-your-first-resource.html#configuring-the-resourcecfg) for how to proceed.
