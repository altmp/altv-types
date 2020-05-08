# altv-types
This repository contains types definitions for alt:V JavaScript modules.

# Installation
Server-side

```bash
npm i -D @altv/types-server
```

Client-side

```bash
npm i -D @altv/types-client
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
