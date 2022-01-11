import { useState } from "react/cjs/react.development";

export default function useRandom(seedIn) {
    const [seed, setSeed] = useState(parseInt(seedIn));
    const seedSize = seedIn.toString().length % 2 ? seedIn.toString().length + 1 : seedIn.toString().length;
    console.log('seedsize', seedSize);

    return function getNext() {
        // use middle square because dgaf, bigger seed is better
        let square = (seed * seed).toString();
        // pad it 
        square = square.padStart((seedSize * 2) - square.length, '0');
        const newSeed = square.slice(seedSize / 2, -seedSize / 2);
        setSeed(parseInt(newSeed));
        return newSeed;
    };
}