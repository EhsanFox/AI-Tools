# AI-Tools
 AI-Tools, a Package to Access Bete AI

## Client
Currently, we have a few AI-Tools implented in our AI-Client.

> ClientOptions:
```js
{
    reject: Boolean,
    handleOK?: Boolean
}
```

>> HandleOK: Removes 'ok' property from Request
>> reject: decide to reject the Error or resolve it anyway

### NSFW
check and detects if the image contains anything NSFW

> Output: `Promise<Object>`

> Example:
```js
const { AITools } = require("AI-Tools");
const AIClient = new AITools();
AIClient.NSFW("AN_IMAGE_URL_HERE");
```

> Output Data
```js
{
    ok: Boolean,
    isNSFW: Boolean,
    detections: Array<String>,
    point: Number,
    confidence: String
}
```

### FaceDetector
check and count how many faces are in the picture + get their confidence

> Output: `Promise<Object>`

> Example: 
```js
const { AITools } = require("AI-Tools");
const AIClient = new AITools();
AIClient.FaceDetector("AN_IMAGE_URL_HERE")
.then(console.log);
```

> Output Data
```js
{
    ok: Boolean,
    hasFaces: Boolean,
    counts: Number,
    confidences: String
}
```

## Contributors
Since the package requests to a custom API Server, it would be probably better to not contribute, but if you can fix with a problem in the package, you are always welcomed.

## License
This software is released under the <a href="https://ehsanfox.mit-license.org/">MIT License</a>
```
 The MIT License (MIT)

Copyright © 2021 Ehsan Golmakani ehsan8184@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```