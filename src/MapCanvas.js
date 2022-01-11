import { useEffect, useRef } from 'react';
import { Tiles, TileList } from './tiles';

export default function MapCanvas({ mapTiles }) {
    const ref = useRef(null);
    console.log(mapTiles);

    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ url, img });
            img.onerror = () => reject(new Error(`load ${url} failed`));
            img.src = url;
        });
    }

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext('2d');

        const tileImages = TileList.map(tileUrl => loadImage(tileUrl));
        Promise.all(tileImages).then(imageList => {
            const imageDict = imageList.reduce((a, c) => { a[c.url] = c.img; return a; }, {});
            draw(context, imageDict);
        });
    }, []);

    function draw(ctx, imageDict) {
        ctx.canvas.width = 975;
        ctx.canvas.height = 975;
        const tileWidth = 150;
        const tileHeight = 175;

        let ty = 0;
        for (let row = 0; row < mapTiles.length; row++) {
            rowTiles = mapTiles[row];
            tx = 0;
            for (let col = 0; col < rowTiles.length; col++) {
                ctx.drawImage(imageDict[Tiles[rowTiles[col]]],
                    row % 2 ? tx + tileWidth / 2 : tx, ty, tileWidth, tileHeight);
                ctx.drawImage(imageDict[TileList[0]],
                    row % 2 ? tx + tileWidth / 2 : tx, ty, tileWidth, tileHeight);
                tx += tileWidth;
            }
            ty += tileHeight * .75;
        }

        ctx.drawImage(imageDict[Tiles['0001']], 0, 0, 150, 180);
    }

    return <canvas ref={ref} />;
}
