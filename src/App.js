import { useState } from 'react';
import useGenerator from './useGenerator';
import './index.scss';
import MapCanvas from './MapCanvas';
import { useParams } from 'react-router-dom';

export default function App() {
    const [parseWordle, mapTiles, getMapTitle, mapReady] = useGenerator();
    const params = useParams();
    const id = params.id;

    const [wordle, setWordle] = useState('');

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
                <button onClick={() => parseWordle(wordle)}>HEXME</button>
            </div>
            <div className="right-col">
                {mapReady() ?
                    <div>
                        <h2>{getMapTitle()}</h2>
                        <MapCanvas mapTiles={mapTiles()} />
                    </div>
                    : 
                    <div>
                        <h2 className="greybar">
                            <span className="g3" />
                            <span className="g7" />
                            <span className="g2" />
                            <span className="g5" />
                            </h2>
                            <img src="placeholder.png" alt="placeholder" />
                        </div>
                        }
            </div>
        </div>
    </div>;
}
