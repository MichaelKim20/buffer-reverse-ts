# buffer-reverse-ts
Reverse the order of contents in the buffer.
## Installation 
```sh
npm install buffer-reverse-ts --save
yarn add buffer-reverse-ts
bower install buffer-reverse-ts --save
```
## Usage

### Javascript
```javascript
var utils = require('buffer-reverse-ts');
console.log(utils.reverse(Buffer.from('12345')).toString());
```
```sh
Output should be '54321'
```
### TypeScript
```typescript
import { reverse } from 'buffer-reverse-ts';
console.log(reverse(Buffer.from("XYZ")).toString());
```
```sh
Output should be 'ZYX'
```
## Test 
```sh
npm run test
```