# Import assertions

This is only available on clientside.

## General Information

As you might know, you can import a module (JS module, JSON file, etc...) by using the `import` keyword. However, there might be a security issue if you import a file with an extension that is not equivalent to the file content. Therefore, import assertions are proposed for the upcoming ECMA2022 standard. As the clientside of alt:V depends on Google's V8 engine, import assertions are available as V8 supports them. If a file can not be parsed based on the type of the import assertion, the file import will fail to prevent security issues. Currently, alt:V supports the following types of import assertions: `source`, `base64` and `json`.

## Implementing import assertions

You can use import assertions to check if a file is safe to import. The following example shows how to use import assertions with different types of import assertions.

# [main.js](#tab/tab1-0)
```js
import "console.log('check source import')" assert { type: "source" };
import "Y29uc29sZS5sb2coJ2NoZWNrIHNvdXJjZSBpbXBvcnQnKQ==" assert { type: "base64" };

import json from "/data.json" assert { type: "json" };
console.log(json.name); // returns "John Doe"
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
(async () => {
  await import("Y29uc29sZS5sb2coJ2R5bmFtaWMgaW1wb3J0IHdpdGggaW1wb3J0IGFzc2VydGlvbiBvZiB0eXBlIHNvdXJjZScp", { assert: { type: "base64" } });
  await import("console.log('dynamic import with import assertion of type source')", { assert: { type: "source" } });
});

const json = await import("./data.json", { assert: { type: "json" } });
console.log(json.default.age); // returns "42"
```
# [data.json](#tab/tab2-1)
```json
{
    "name": "John Doe",
    "age": "42"
}
```
