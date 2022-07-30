# DID:Web Resolver 

JavaScript Implementation of the [DID:Web](https://w3c-ccg.github.io/did-method-web/) Resolver. 

# Install

```sh
npm install @pathcheck/did-web-resolver --save
```

# Usage

## 1. Resolving

```js
import { resolve } from '@pathcheck/did-web-resolver'

let result = await resolve('did:web:...')
result.didDocument
```

# Development

```sh
npm install
``` 

# Test

```sh
npm test
```
