# altv-types
This repository contains types definitions for the alt:V JavaScript modules.

# Installation
Client-side

```bash
# With npm
npm i -D @altv/types-client @altv/types-natives @altv/types-webview
# With yarn
yarn add -D @altv/types-client @altv/types-natives @altv/types-webview
```

Server-side

```bash
# With npm
npm i -D @altv/types-server
# With yarn
yarn add -D @altv/types-server
```

To make these types detectable, you've to add `typeRoots` property below to your project's `tsconfig.json`
```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@altv"
    ]
  }
}
```
