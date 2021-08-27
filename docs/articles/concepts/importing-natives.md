# How to import alt:V natives

# native

Used to import native or game function calls on **client-side**.

## Install Types

You can use npm from command line to install these packages. Make sure you initialize your main directory with `npm init` first. Checkout the bootcamp if this doesn't make any sense to you.

```
npm install --save-dev @altv/types-natives
```

## Client Usage

```js
/// <reference types="@altv/types-server" />
// The above is only required if you're working in .js

import * as native from 'natives'; // Native import can only be used client-side.
```
