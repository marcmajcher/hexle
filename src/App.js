/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useGenerator from './lib/useGenerator';
import './index.scss';
import MapCanvas from './MapCanvas';
import { useNavigate, useParams } from 'react-router-dom';
import { decode } from './lib/Encoder';

export default function App() {
    const navigate = useNavigate();
    const params = useParams();
    const [wordle, setWordle] = useState('');
    const [mapTitle, setMapTitle] = useState('');
    const [mapTiles, setMapTiles] = useState([]);
    const [help, setHelp] = useState(false);
    const [dummy, setDummy] = useState(false);
    const { parseWordle, getMapTiles, getMapTitle, mapReady } = useGenerator();

    useEffect(() => {
        if (params.id !== undefined) {
            const { wordle } = decode(params.id);
            setWordle(wordle);
            parseWordle(wordle);
            setDummy(true);
        }
    }, [params.id]);

    useEffect(() => { // UGH
        setMapTitle(getMapTitle());
        setMapTiles(getMapTiles());
    }, [dummy]);

    return (
        <div className="main">
            <div className="left-col">
                <div className={help ? 'help input-label' : 'input-label'}>
                    Paste Your Wordle Here!
                </div>
                <div>
                    <textarea className="wordle-input" value={wordle}
                        onChange={e => setWordle(e.target.value)}
                    />
                </div>
                <button className={help ? 'help' : ''} onClick={() => {
                    const encodedWordle = parseWordle(wordle);
                    navigate(`/${encodedWordle}`);
                    setDummy(false);
                }}>HEXME</button>
            </div>
            <div className="right-col">
                <nav>
                    <span className="material-icons help-button"
                        onClick={() => setHelp(!help)}>help_outline</span>
                    <h1>HEXLE</h1>
                    <span className="material-icons share-button">share</span>
                </nav>
                {mapReady() ?
                    <div>
                        <h2>{mapTitle}</h2>
                        <MapCanvas mapTiles={mapTiles} />
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
                <footer>
                    Hexle Wordle Hexmap Generator |
                    2022 <a href="https://majcher.itch.io">Marc Majcher</a> |
                    <a href="https://twitter.com/majcher">@majcher</a>
                </footer>
            </div>
            <a href="https://github.com/marcmajcher/hexle/issues">
                <span className="material-icons bug-button">bug_report</span>
            </a>
        </div>
    );
}
