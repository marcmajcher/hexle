import { useState } from "react";
import useRandom from "./useRandom";
import './index.css';
import Tiles from './tiles'
import MapCanvas from "./MapCanvas";

export default function App() {
    const [getNext, setSeed] = useRandom(123456789);

    const [wordle, setWordle] = useState('');
    const [wordleNum, setWordleNum] = useState(0);
    const [score, setScore] = useState(0);
    const [blocks, setBlocks] = useState([]);
    const [out, setOut] = '';

    const black = '⬛';
    const yellow = '🟨';
    const green = '🟩';
    // const digits = [black, yellow, green];
    const digits = [0, 1, 2];

    function convertWordle() {
        const wordlRe = /Wordle\s+(\d+)\s+(\d|X)\/(\d)/s;
        const result = wordle.match(wordlRe);
        if (result) {
            const [_, _num, _score, _six] = result;
            const _scoreNum = _score === 'X' ? 9 : _score;
            setWordleNum(_num);
            setScore(_scoreNum);
            setBlocks(wordle);
            setSeed(
                (_num + score) * (_num - _score) * (_score + 4) * (_num + 123)
            );
        }

        const _blocks = [];
        for (char of wordle) {
            switch (char) {
                case black:
                    _blocks.push(0);
                    break;
                case yellow:
                    _blocks.push(1);
                    break;
                case green:
                    _blocks.push(2);
                    break;
            }
        }

        while (_blocks.length < 30) {
            _blocks.push(getRandomBlock());
        }

        console.log(_blocks.join(''));
        setBlocks(_blocks);
    }

    function getRandomBlock() {
        return digits[Math.floor(getNext() * 3)];
    }

    function flexleMap() {
        const wdlWidth = 5;
        const wdlHeight = 6;

        const hexCodes = [];
        for (let y = 0; y <= wdlHeight; y++) {
            for (let x = 0; x <= wdlWidth; x++) {
                let codels = [];

                codels.push(y - 1 < 0 || x - 1 < 0
                    ? getRandomBlock()
                    : digits[blocks[(y - 1) * wdlWidth + (x - 1)]]);

                codels.push(y - 1 < 0 || x === wdlWidth
                    ? getRandomBlock()
                    : digits[blocks[(y - 1) * wdlWidth + x]]);

                    codels.push(y === wdlHeight || x - 1 < 0
                    ? getRandomBlock()
                    : digits[blocks[y * wdlWidth + (x - 1)]]);

                codels.push(y === wdlHeight || x === wdlWidth
                    ? getRandomBlock()
                    : digits[blocks[y * wdlWidth + x]]);

                hexCodes.push(codels.join(''));
            }
        }

        return blocks.length === 30 ?
            <section className="hexmap">
                {hexCodes.map(code => <div className="hex"><img src={Tiles[code]} /></div>)}
            </section>
            : null;
    }

    return <><h1>HEXLE</h1>
        <div>
            <textarea cols={15} rows={12} className="wordle-input"
                onChange={e => setWordle(e.target.value)} />
        </div>
        <button onClick={convertWordle}>HEXME</button>
        <hr />
        {flexleMap()}
        <hr />
        <MapCanvas />
    </>;
}

/*

Wordle 205 5/6

⬛⬛⬛⬛🟨
🟨⬛⬛🟨⬛
⬛🟩🟨🟨⬛
⬛🟩🟨⬛🟩
🟩🟩🟩🟩🟩


*/