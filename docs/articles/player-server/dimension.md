# player.dimension

**Description**

Change or get the player's dimension.
Negative dimensions see positive dimensions. However, positive dimensions do not see negative dimensions.

**Syntax**

```js
dimension: number;
```

**Example Usage**

```js
const currentDimension = player.dimension;
player.dimension = 2147483647; // Maximum
player.dimension = -2147483647; // Minimum
player.dimension = 0; // Default Dimension
```
