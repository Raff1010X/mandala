// import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useMover from '../../hooks/useMover';
import useAutoScroll from '../../hooks/useAutoScroll';

import BackVideo from './BackVideo';
import Heading from './Heading';
import MouseScroll from './MouseScroll';

import './main.css';

function Main() {
    // const navigate = useNavigate();
    // navigate('/mandala') in useEffect
    const mainTopDiv = useRef<HTMLDivElement>(null);
    const mainBottomDiv = useRef<HTMLDivElement>(null);
    const main = useRef<HTMLDivElement>(null);
    const heading = useRef<HTMLDivElement>(null);
    const headingSmall = useRef<HTMLDivElement>(null);
    const mainMoverDiv = useRef<HTMLDivElement>(null);

    useAutoScroll(main, mainTopDiv, mainBottomDiv);
    useMover(mainMoverDiv, heading, headingSmall);

    return (
        <div className="main" ref={main}>
            <div className="main-top" ref={mainTopDiv}>
                <BackVideo />
                <Heading refs={[heading, headingSmall]} />
                <MouseScroll />
                <div className="main-mover" ref={mainMoverDiv}></div>
                <div className="description">
                    Land Art Mandala Creation by Lena Witkowska
                </div>
            </div>
            <div id="main-bottom" className="main-bottom" ref={mainBottomDiv}>
                <div className="main-bottom-text">
                    <div className="main-bottom-title">Inspiration</div>
                    <div className="main-bottom-content">
                        <div>Inspiration</div>
                        <div>Inspiration</div>
                        <div>Inspiration</div>
                    </div>
                </div>
                <div className="main-bottom-text">
                    <div className="main-bottom-title">Create Mandala</div>
                    <div className="main-bottom-content">
                        <div>Create Mandala</div>
                        <div>Create Mandala</div>
                        <Link to="/mandala">Open editor</Link>
                    </div>
                </div>
                <div className="main-bottom-text">
                    <div className="main-bottom-title">Art Gallery</div>
                    <div className="main-bottom-content">
                        <div>Art Gallery</div>
                        <div>Art Gallery</div>
                        <div>Art Gallery</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
