# Cursor Package For React

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

- [Installation](#installation)
- [Usage](#USE)
- [Props](#Props)
- [License](#license)
- [Author](#author)

### Installation

```bash
npm i cursor-react
```

## USE Cursor Package

```js
import React from "react";
import Cursor from "cursor-react";

import image from "./image.png";

function App() {
  return (
    <div>
      <Cursor imageIcon={image} size={40}>
        <div
          style={{
            height: "100px",
            backgroundColor: "blue",
          }}
        >
          This is a Test
        </div>
      </Cursor>
    </div>
  );
}
```

## Props

| props     | defaultValue | description        |
| --------- | ------------ | ------------------ |
| imageIcon | null         | cursor image icon  |
| size      | 16           | min = 4 & max = 50 |

### License

MIT

### Author

> Minoo Tavakoli

[license-image]: http://img.shields.io/npm/l/cursor-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/cursor-react
[npm-version-image]: http://img.shields.io/npm/v/cursor-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/cursor-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/cursor-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/cursor-react?minimal=true
