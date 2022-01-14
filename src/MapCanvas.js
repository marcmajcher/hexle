import { useEffect, useRef, useState } from 'react';
import { Tiles, TileList } from './Tiles';
import HexSpinner from './ui/HexSpinner';

const tileWidth = 100;
const tileHeight = tileWidth * 1.16667;

export default function MapCanvas({ mapTiles }) {
    const canvasRef = useRef(null);
    const [imageDict, setImageDict] = useState({});
    const [ready, setReady] = useState(false);

    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ url, img });
            img.onerror = () => reject(new Error(`loading ${url} failed`));
            img.src = url;
        });
    }

    useEffect(() => {
        const tileImages = TileList.map(tileUrl => loadImage(tileUrl));
        Promise.all(tileImages).then(imageList => {
            setImageDict(imageList.reduce((a, c) => { a[c.url] = c.img; return a; }, {}));
            setReady(true);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function draw(ctx, imageDict) {
        ctx.canvas.width = tileWidth * 6.35;
        ctx.canvas.height = tileWidth * 6.25;

        let ty = 0;
        for (let row = 0; row < mapTiles.length; row++) {
            const rowTiles = mapTiles[row];
            let tx = 0;
            for (let col = 0; col < rowTiles.length; col++) {
                ctx.drawImage(imageDict[Tiles[rowTiles[col]]],
                    row % 2 ? tx + tileWidth / 2 : tx, ty, tileWidth, tileHeight);
                ctx.drawImage(imageDict[TileList[0]],
                    row % 2 ? tx + tileWidth / 2 : tx, ty, tileWidth, tileHeight);
                tx += tileWidth - 3;
            }
            ty += tileHeight * .75 - 3;
        }
    }

    if (ready) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context, imageDict);
    }

    return <div className="canvas-frame">
        <canvas ref={canvasRef} />
        {ready ? null : <HexSpinner />}
    </div>;
}
