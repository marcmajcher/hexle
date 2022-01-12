import { useState } from "react";
import useRandom from "./useRandom";
import './index.css';
import MapCanvas from "./MapCanvas";

export default function App() {
    const [getNext, setSeed] = useRandom(123456789);

    const [wordle, setWordle] = useState('');
    const [wordleNum, setWordleNum] = useState(0);
    const [score, setScore] = useState(0);
    const [blocks, setBlocks] = useState([]);

    const blockNum = {
        '⬛': 0,
        '🟨': 1,
        '🟩': 2,
    };

    function convertWordle() {
        const wordlRe = /Wordle\s+(\d+)\s+(\d|X)\/(\d)/s;
        const result = wordle.match(wordlRe);

        if (result) {
            const [, _num, _score] = result;
            const _scoreNum = _score === 'X' ? 9 : _score;
            setWordleNum(_num);
            setScore(_scoreNum);
            setSeed(
                (_num + score) * (_num - _score) * (_score + 4) * (_num + 123)
            );
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

    function getRandomBlock() {
        return Math.floor(getNext() * 3);
    }

    function createMapTiles() {
        const wdlWidth = 5;
        const wdlHeight = 6;

        const hexCodes = [];
        for (let y = 0; y <= wdlHeight; y++) {
            const row = [];
            for (let x = 0; x <= wdlWidth; x++) {
                let codels = [];

                codels.push(y - 1 < 0 || x - 1 < 0
                    ? getRandomBlock()
                    : blocks[(y - 1) * wdlWidth + (x - 1)]);

                codels.push(y - 1 < 0 || x === wdlWidth
                    ? getRandomBlock()
                    : blocks[(y - 1) * wdlWidth + x]);

                codels.push(y === wdlHeight || x - 1 < 0
                    ? getRandomBlock()
                    : blocks[y * wdlWidth + (x - 1)]);

                codels.push(y === wdlHeight || x === wdlWidth
                    ? getRandomBlock()
                    : blocks[y * wdlWidth + x]);

                row.push(codels.join(''));
            }
            hexCodes.push(row);
        }

        return hexCodes;
    }

    return <div className="main">
        <nav>
            <h1>HEXLE</h1>
        </nav>

        <div>
            <div className="left-col">
                <div className="input-label">Paste Your Wordle Here!</div>
                <div>
                    <textarea className="wordle-input"
                        onChange={e => setWordle(e.target.value)}
                    />
                </div>
                <button onClick={convertWordle}>HEXME</button>
            </div>
            <div className="right-col">
                {blocks.length > 0 ?
                    <div>
                        <h2>Map Number {wordleNum}-{score}</h2>
                        <MapCanvas mapTiles={createMapTiles()} />
                    </div>
                    : null}
            </div>
        </div>
    </div>;
}

/*

Wordle 205 5/6

⬛⬛⬛⬛🟨
🟨⬛⬛🟨⬛
⬛🟩🟨🟨⬛
⬛🟩🟨⬛🟩
🟩🟩🟩🟩🟩

*/