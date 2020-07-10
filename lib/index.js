"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
/**
 * Reverse the Buffer
 * @param source{Buffer} The source buffer
 * @param target{Buffer} The target buffer
 */
function reverse(source, target) {
    if (target == undefined)
        target = Buffer.alloc(source.length);
    var start = 0;
    var end = source.length - 1;
    while (start < end) {
        target[start] = source[end];
        target[end] = source[start];
        start++;
        end--;
    }
    return target;
}
exports.reverse = reverse;
