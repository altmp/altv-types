# Request Model

## Description

You need to request some models, before using them. Because natives are non-blocking methods and the game wouldn't wait until the model has been loaded from disk, you need to call them as a async method. Here you can find an example, written in JavaScript how to load them correctly.

## Async Request Model Method

```js
export const RequestModel = async (modelHash, timeoutMs = 1000) => {
    return new Promise((resolve, reject) => {
        if (!natives.isModelValid(modelHash)) {
            reject(new Error(`Model does not exist: ${modelHash}`));
            return;
        }

        if (natives.hasModelLoaded(modelHash)) {
            resolve(true);
            return;
        }

        natives.requestModel(modelHash);

        const deadline = new Date().getTime() + timeoutMs;

        const inter = alt.setInterval(() => {
            if (natives.hasModelLoaded(modelHash)) {
                alt.clearInterval(inter);
                resolve(true);
            } else if (deadline < new Date().getTime()) {
                alt.clearInterval(inter);
                const error = `Loading failed for model: ${modelHash}`;
                alt.logError(error);
                reject(new Error(error));
            }
        }, 10);
    });
};
```

## Usage of Request Model Method

You need to call the RequestModel Method with await, this will wait and run other code until the model is loaded.

You need to use at least ES8 as your JavaScript Standard.

```js
const modelHash = alt.hash('mp_m_freemode_01');

await RequestModel(modelHash);
natives.createPed(2, modelHash, 0, 0, 70, 0, false, false);
```