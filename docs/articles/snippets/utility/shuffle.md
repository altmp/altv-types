# Shuffle Array

If you find yourself ever needing to shuffle an array.

Here's a simple exported function to shuffle your array.

```js
export function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
```

## Example Usage

```js
const myArray = [1, 2, 3, 4, 5];
const result = shuffle(myArray);
console.log(result);
```