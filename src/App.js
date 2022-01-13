import { useEffect, useState } from 'react';
import useGenerator from './useGenerator';
import './index.scss';
import MapCanvas from './MapCanvas';
import { useNavigate, useParams } from 'react-router-dom';

export default function App() {
    const [parseWordle, mapTiles, getMapTitle, mapReady, decodeWordle] = useGenerator();
    const params = useParams();
    const navigate = useNavigate();
    const [wordle, setWordle] = useState('');

    useEffect(() => {
        setWordle(decodeWordle(params.id));
    }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

    return <div className="main">
        <nav>
            <h1>HEXLE</h1>
        </nav>
        <div>
            <div className="left-col">
                <div className="input-label">Paste Your Wordle Here!</div>
                <div>
                    <textarea className="wordle-input" value={wordle}
                        onChange={e => setWordle(e.target.value)}
                    />
                </div>
                <button onClick={() => {
                    const encodedWordle = parseWordle(wordle);
                    navigate(`/hexle/${encodedWordle}`);
                }}>HEXME</button>
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
