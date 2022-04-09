[![NPM](https://img.shields.io/npm/dt/base64-tools.svg?maxAge=3600)](https://npmjs.com/package/base64-tools/)

<h1 align="center">🧬 Base64 Encode/Decode</h1>
<h6 align="center">Developed with ❤️ by Roxza</h6>

# 📦Installation

```console
npm i base64-tools  --save
yarn add base64-tools
```

# 📝 Usage

```js
const rgif = require("base64-tools");
let base64 = "data:image/png;base64,...";

base64.encode("roxza.png", function (err, data) {
  if (err) return;
  console.log(data);
});

base64.decode(base64, "roxza.png", function (err, name) {
  if (err) return;
  console.log(name);
});
```

## License

Webscreen is **licensed** under the **[MIT License]**. The terms of the license are as follows:

    The MIT License (MIT)

    Copyright (c) 2022 - Roxza

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
