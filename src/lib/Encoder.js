
export const numToBlock = {
    0: '⬛',
    1: '🟨',
    2: '🟩',
};
export const blockToNum = Object.keys(numToBlock)
    .reduce((a, c) => { a[numToBlock[c]] = parseInt(c); return a; }, {});

function convertBlocksToUnicode(blockStr) {  // Rule One
    const unList = blockStr.split('').map(e => numToBlock[e]);
    const len = 5;
    const outList = [];

    for (let i = 0; i < len; i++) {
        outList.push(unList.slice(i * len, i * len + len).join(''));
    }
    return outList.join('\n');
}

export function decode(encoded) {
    if (encoded) {
        // atob/btoa is deprecated, but I'm only using it on ASCII, so ¯\_(ツ)_/¯
        const [num, score, blocks] = atob(atob(encoded)).split(';');
        const wordle = `Wordle ${num} ${score}/6\n\n${convertBlocksToUnicode(blocks)}`;
        return { wordle, num, score, blocks };
    }
}

export function encode(num, score, blocks) {
    return btoa(btoa(`${num};${score};${blocks.join('')}`)); // yeah, yeah
}



