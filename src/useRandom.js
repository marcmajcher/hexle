import { useRef, useState } from "react";

export default function useRandom(seedIn) {
    const seed = useRef(parseInt(seedIn));
    const seedLen = seedIn.toString().length;
    const seedSize = seedLen % 2 ? seedLen + 1 : seedLen;

    function getNext() {
        // use middle square because dgaf, bigger seed is better
        const square = (seed.current * seed.current).toString().padStart(seedSize * 2, '0');
        const newSeed = square.slice(seedSize / 2, -seedSize / 2);
        setSeed(newSeed);
        return parseFloat(`0.${newSeed}`);
    };

    function setSeed(newSeed) {
        seed.current = parseInt(newSeed);
    }

    return [getNext, setSeed];
}