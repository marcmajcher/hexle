import { useState } from "react";
import useRandom from "./useRandom";

export default function App() {
    const [getNext, setSeed] = useRandom(123456789);

    const [wordle, setWordle] = useState('');
    const [wordleNum, setWordleNum] = useState(0);
    const [score, setScore] = useState(0);
    const [blocks, setBlocks] = useState([]);
    const [out, setOut] = '';

    const black = '⬛';
    const green = '🟩';
    const yellow = '🟨';
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
            _blocks.push(digits[Math.floor(getNext() * 3)]);
        }

        console.log(_blocks.join(''));
        setBlocks(_blocks);


    }

    return <><h1>HEXLE</h1>
        <textarea cols={15} rows={10} onChange={e => setWordle(e.target.value)} />
        <button onClick={convertWordle}>HEXME</button>
    </>;
}

/*

Wordle 205 5/6

⬛⬛⬛⬛🟨
🟨⬛⬛🟨⬛
⬛🟩🟨🟨⬛
⬛🟩🟨⬛🟩
🟩🟩🟩🟩🟩



Wastes:

⬛⬛
⬛⬛

Water:

🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 ⬛🟩 🟩⬛
⬛⬛ ⬛🟨 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩🟨 🟩🟩 ⬛⬛ ⬛⬛

Mountain:

⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛
⬛🟨 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩🟨 🟩🟩

Desert:

⬛🟨 🟨⬛ 🟨🟨 🟨🟨 🟨🟨 🟨🟨 🟨🟨 🟨🟩 🟩🟨 
🟨🟨 🟨🟨 ⬛🟨 🟨⬛ 🟨🟨 🟨🟩 🟩🟨 🟨🟨 🟨🟨 

Hills:

⬛🟨 ⬛🟨 ⬛🟨 ⬛🟨 ⬛🟩 ⬛🟩 🟨⬛ 🟨⬛ 🟨⬛ 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩⬛ 🟩🟨
⬛🟨 ⬛🟩 🟨⬛ 🟩⬛ ⬛🟨 🟨⬛ ⬛🟨 ⬛🟩 🟨⬛ 🟩⬛ ⬛⬛ ⬛⬛ ⬛🟨 🟨⬛ ⬛⬛

Plains:

⬛🟨 ⬛🟨 ⬛🟩 🟨⬛ 🟨⬛ 🟨🟨 🟨🟨 🟨🟩 🟨🟩 🟩⬛ 🟩🟨 🟩🟨
🟨🟩 🟩🟨 🟨🟨 🟨🟩 🟩🟨 ⬛🟩 🟩⬛ ⬛🟨 🟨⬛ 🟨🟨 ⬛🟨 🟨⬛

Marsh/Swamp:

⬛🟨 🟨⬛
⬛⬛ ⬛⬛

Forest:

⬛🟨 ⬛🟩 ⬛🟩 ⬛🟩 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟨🟩 🟨🟩 🟩⬛ 🟩⬛ 🟩⬛ 🟩⬛ 🟩🟨 🟩🟨 🟩🟨
🟩🟩 ⬛🟩 🟨🟩 🟩⬛ 🟩🟨 🟩🟩 🟩🟩 ⬛🟩 🟨🟩 🟩⬛ ⬛🟩 🟨🟩 🟩⬛ 🟩🟨 🟨🟩 🟩⬛ 🟩🟨

Jungle:

⬛🟩 🟨🟩 🟩⬛ 🟩🟨
🟩🟩 🟩🟩 🟩🟩 🟩🟩




































































































*/