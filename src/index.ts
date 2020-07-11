
/**
 * Reverse the Buffer
 * @param source {Buffer} The source buffer
 * @param target {Buffer} The target buffer
 */
export function reverse (source: Buffer, target?: Buffer): Buffer
{
    if (target == undefined)
        target = Buffer.alloc(source.length);

    let start = 0;
    let end = source.length - 1;
    while (start <= end)
    {
        target[start] = source[end];
        target[end] = source[start];
        start++;
        end--;
    }
    return target;
}
