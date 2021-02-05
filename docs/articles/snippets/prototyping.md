# Prototyping

Prototyping allows you to extend default class functionality for Player's, Vehicle's, etc.

It is important to understand that all Prototype files should be loaded immediately after your database initialization.

Granted your Prototype has database features.

They do **NOT** work in multiple resources. Single resource only.

This means that the data for a prototype is **non-transferrable** between resources.

### JavaScript Server Side Example

```js
alt.Player.prototype.emitMeta = function emitMeta(key, value) {
    if (typeof value === 'function') {
        throw new Error(`Value cannot be a function. emitMeta.prototype`);
    }

    this.setMeta(key, value);
    alt.emitClient(this, 'meta:Emit', key, value);
};

alt.Player.prototype.init = function init() {
    this.data = {};
};

alt.Player.prototype.syncCash = function syncCash() {
    this.emitMeta('cash', this.data.cash);
};

alt.Player.prototype.setCash = function setCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. setCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    this.data.cash = value;
    this.syncCash();
};

alt.Player.prototype.subCash = function subCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. subCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    const absValue = Math.abs(parseFloat(value)) * 1;
    if (this.data.cash < absValue) {
        return false;
    }

    this.data.cash -= absValue;
    this.data.cash = Number.parseFloat(this.data.cash).toFixed(2) * 1;
    this.syncCash();
    return true;
};

alt.Player.prototype.addCash = function addCash(value) {
    if (isNaN(value)) {
        throw new Error(`Value is not a number. addCash.prototype`);
    }

    if (!this.data) {
        this.data = {};
    }

    const absValue = Math.abs(parseFloat(value));
    if (this.data.cash + absValue > 92233720368547757) {
        absValue = 92233720368547757;
    }

    this.data.cash += absValue;
    this.data.cash = Number.parseFloat(this.data.cash).toFixed(2) * 1;
    this.syncCash();
    return true;
};
```

### Typescript Server Side Example

```ts
// Use `alt-client` to do prototyping on client-side.
declare module 'alt-server' {
    export interface Player {
        cash?: number;
        bank?: number;

        // You must declare your function interfaces.
        addToCash(value: number): boolean;
        addToBank(value: number): boolean;
    }
}

// Then you can define your prototype functions.
alt.Player.prototype.addToCash = function addToCash(value: number) {
    if (!this.cash) {
        this.cash = value;
    } else {
        this.cash += value;
    }

    return true;
};

alt.Player.prototype.addToBank = function addToBank(value: number) {
    if (!this.bank) {
        this.bank = value;
    } else {
        this.bank += value;
    }

    return true;
};
```

## Example Usage

**Server Side**

```js
player.init();
player.emitMeta('test', true);
player.setCash(25);
player.subCash(5);
player.addCash(2);
```