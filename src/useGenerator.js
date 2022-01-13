import { useState } from 'react';
import useRandom from './useRandom';
import useWordle from './useWordle';

export default function useGenerator() {
    const [getRandom, setSeed] = useRandom(123456789);
    const getTodaysWord = useWordle();
    const [blocks, setBlocks] = useState([]);
    const [score, setScore] = useState(0);
    const [wordleNum, setWordleNum] = useState(0);

    const wordleWidth = 5;
    const wordleHeight = 6;
    const blockNum = {
        '⬛': 0,
        '🟨': 1,
        '🟩': 2,
    };

    const regionNames = [
        'Land of %%', 'Kingdom of %%', 'Duchy of %%', '%% Territory',
        '%% Region', 'Realm of %%', '%% Empire', '%% Nation', '%% Domain',
        'Province of %%', '%% Colonies', 'Throne of %%', 'Crown of %%',
    ];

    function getRandomBlock() {
        return getRandom(3);
    }

    function getRegionName() {
        const index = getRandom(regionNames);
        return regionNames[index].replace('%%', getTodaysWord(wordleNum));
    }

    function getMapTitle() {
        return `The ${getRegionName(0)}`;
    }

    function parseWordle(wordle) {
        const wordlRe = /Wordle\s+(\d+)\s+(\d|X)\/(\d)/s;
        const result = wordle.match(wordlRe);

        if (result) {
            const [, _num, _score] = result;
            setWordleNum(_num);
            setScore(_score === 'X' ? 9 : _score);
            setSeed((_num + score) * (_num - _score) * (_score + 4) * (_num + 123));
        }

        const _blocks = [];
        for (let char of wordle) {
            if (char in blockNum) {
                _blocks.push(blockNum[char]);
            }
        }
        while (_blocks.length < 30) {
            _blocks.push(getRandomBlock());
        }
        setBlocks(_blocks);
    }

    function createMapTiles(width, height) {
        const hexCodes = [];
        for (let y = 0; y <= height; y++) {
            const row = [];
            for (let x = 0; x <= width; x++) {
                let codels = [];

                codels.push(y - 1 < 0 || x - 1 < 0
                    ? getRandomBlock()
                    : blocks[(y - 1) * width + (x - 1)]);

                codels.push(y - 1 < 0 || x === width
                    ? getRandomBlock()
                    : blocks[(y - 1) * width + x]);

                codels.push(y === height || x - 1 < 0
                    ? getRandomBlock()
                    : blocks[y * width + (x - 1)]);

                codels.push(y === height || x === width
                    ? getRandomBlock()
                    : blocks[y * width + x]);

                row.push(codels.join(''));
            }
            hexCodes.push(row);
        }

        return hexCodes;
    }

    function mapReady() {
        return blocks.length === 30;
    }

    return [parseWordle, () => createMapTiles(wordleWidth, wordleHeight), getMapTitle, mapReady];
}
