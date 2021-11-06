# Import assertions

This is only available on clientside.

## General Information

As you might know, you can import a module (JS module, JSON file, etc...) by using the `import` keyword. However, there is a problem when you import a file with an extension that is not equivalent to the file context. For example, file `data.json` contains malicious JavaScript code that can be executed by the browser. Therefore, import assertions are proposed for the upcoming ECMA2022 standard. As the clientside of alt:V depends on Google's V8 engine, import assertions are available as V8 supports them. If a file does not match the import assertion by the MIME type of the file context, the file import will fail to prevent security issues. Currently, alt:V supports the following types of import assertions: `source`, `base64` and `json`

## Implementing import assertions

You can use import assertions to check if a file is safe to import. The following example shows how to use import assertions.

# [main.js](#tab/tab1-0)
```js
import * as json from "/data.json" assert { type: "json" };
console.log(json.name) // returns "John Doe"
```
# [data.json](#tab/tab1-1)
```json
{
    "name": "John Doe",
    "age": "42"
}
```
***

## Dynamic import assertions

It is also possible to use import assertions for dynamic imports.

# [main.js](#tab/tab2-0)
```js
const json = await import("./data.json", { assert: { type: "json" } });
console.log(json.default.age) // returns "42"
```
# [data.json](#tab/tab2-1)
```json
{
    "name": "John Doe",
    "age": "42"
}
```
