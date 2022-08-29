<p align="center">
  <img src="./assets/logo_cicle.png" width="10%" alt="Hyuns Dash" />
</p>
<h1 align="center">hyuns-api-v2-client</h1>
<h5 align="center">Hyuns API를 위한 SDK</h5>
<p align="center">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-blue"/></a>
  <img alt="MIT License" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---


## install
```
yarn add hyuns-api-v2-client
```

## Usage

```typescript
import { Client } from 'hyuns-api-v2-client';

const client = new Client({
    auth: '(Hyuns API Server Token)'
})

;(async () => {
    console.log(await client.var.list())
});
```
