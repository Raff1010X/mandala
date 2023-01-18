import { useRef } from 'react';

import useMover from '../../hooks/useMover';
import useAutoScroll from '../../hooks/useAutoScroll';

import BackVideo from './BackVideo';
import Heading from './Heading';
import MouseScroll from './MouseScroll';
import Bottom from './Bottom';

import './main.css';


function Main() {
    const main = useRef<HTMLDivElement>(null);
    const mainTopDiv = useRef<HTMLDivElement>(null);
    const mainBottomDiv = useRef<HTMLDivElement>(null);
    const heading = useRef<HTMLDivElement>(null);
    const headingSmall = useRef<HTMLDivElement>(null);
    const mainMoverDiv = useRef<HTMLDivElement>(null);
    const background = useRef<HTMLDivElement>(null);

    useAutoScroll(main, mainTopDiv, mainBottomDiv, background);
    useMover(mainMoverDiv, heading, headingSmall);
    

    return (
        <div className="main" ref={main}>
            <div className="main-top" ref={mainTopDiv}>
                <BackVideo />
                <Heading refs={[heading, headingSmall]} />
                <MouseScroll />
                <div className="main-mover" ref={mainMoverDiv}></div>
                <div className="obout">
                    Create your mandala and make your own meditation towards
                    human development.<br/> This Web App was created on the basis of an
                    international land art action carried out within the
                    framework of the Homo Affectus project.
                </div>
                <div className="description">
                    Land Art Mandala Creation by Lena Witkowska
                </div>
            </div>
            <Bottom refs={[mainBottomDiv, background]} />
        </div>
    );
}

export default Main;
