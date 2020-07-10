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
var reverse = require('buffer-reverse-ts');
var CBA = reverse(Buffer.From('ABC')).toString();
```
```sh
Output should be 'CBA'
```
### TypeScript
```typescript
import { reverse } from 'buffer-reverse-ts';
console.log(reverse(Buffer.From('XYZ').toString()))
```
```sh
Output should be 'ZYX'
```
## Test 
```sh
npm run test
```