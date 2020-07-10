import { reverse } from '../lib';
import * as assert from 'assert';

describe('reverse', () => {

    it('Test of reading and writing hex string', () => {
        let source = Buffer.from("abcdefgh");
        let target = reverse(source);

        // Check
        assert.strictEqual(target.toString(), 'hgfedcba');
    });
});
