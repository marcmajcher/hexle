import { useState } from "react";

export default function App() {
    const [wordle, setWordle] = useState('');
    const [wordleNum, setWordleNum] = useState(0);
    const [score, setScore] = useState(0);
    const [blocks, setBlocks] = useState([]);
    const [out, setOut] = '';

    const black = '⬛';
    const green = '🟩';
    const yellow = '🟨';

    function convertWordle() {
        console.log(wordle);
        const wordlRe = /Wordle\s+(\d+)\s+(\d)\/(\d)/s;
        const result = wordle.match(wordlRe);
        if (result) {
            const [_, _num, _score, _six] = result;
            setWordleNum(_num);
            setScore(_score);
            setBlocks(wordle);
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
        console.log(_blocks.join(''));
        setBlocks(_blocks);
    }

    return <><h1>HEXLE</h1>
        <textarea cols={15} rows={10} onChange={e => setWordle(e.target.value)} />
        <button onClick={convertWordle}>HEXME</button>
        <div>{wordleNum} - {score}/6 - {out}</div>
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