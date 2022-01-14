import { useEffect, useState } from 'react';
import useGenerator from './lib/useGenerator';
import './index.scss';
import MapCanvas from './MapCanvas';
import { useNavigate, useParams } from 'react-router-dom';

export default function App() {
    const [parseWordle, mapTiles, getMapTitle, mapReady, decodeWordle] = useGenerator();
    const params = useParams();
    const navigate = useNavigate();
    const [wordle, setWordle] = useState('');
    const [needHelp, setNeedHelp] = useState(false);

    useEffect(() => {
        setWordle(decodeWordle(params.id));
    }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="main">
            <div className="left-col">
                <div className={needHelp ? 'help input-label' : 'input-label'}>Paste Your Wordle Here!</div>
                <div>
                    <textarea className="wordle-input" value={wordle}
                        onChange={e => setWordle(e.target.value)}
                    />
                </div>
                <button className={needHelp ? 'help' : ''} onClick={() => {
                    const encodedWordle = parseWordle(wordle);
                    navigate(`/${encodedWordle}`);
                }}>HEXME</button>
            </div>
            <div className="right-col">
                <nav>
                    <span class="material-icons help-button"
                        onClick={() => setNeedHelp(!needHelp)}>help_outline</span>
                    <h1>HEXLE</h1>
                    <span className="material-icons share-button">share</span>
                </nav>
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
                <footer>
                    Hexle Wordle Hexmap Generator |
                    2022 <a href="https://majcher.itch.io">Marc Majcher</a> |
                    <a href="https://twitter.com/majcher">@majcher</a>
                </footer>
            </div>
            <a href="https://github.com/marcmajcher/hexle/issues"><span class="material-icons bug-button">bug_report</span></a>
        </div>
    );
}
