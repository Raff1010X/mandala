// import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useMover from '../../hooks/useMover';
import useAutoScroll from '../../hooks/useAutoScroll';

import BackVideo from './BackVideo';
import Heading from './Heading';
import MouseScroll from './MouseScroll';

import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import FacebookIcon from '@mui/icons-material/Facebook';
import ImageIcon from '@mui/icons-material/Image';

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
                <div className="main-bottom-background-1" />
                <div className="main-bottom-container">
                    <div className="main-bottom-background-2" />
                    <i>
                        <FacebookIcon />
                    </i>
                    <div className="main-bottom-title">Homo Affectus</div>
                    <div className="main-bottom-content">
                        <i>
                            <FacebookIcon />
                        </i>
                        <div>Homo Affectus</div>
                        <div className="main-bottom-text">
                            Discover Homo Afectus project.
                            <br />
                            Interdisciplinary art initiative.
                            <br />
                            See more at Facebook page.
                        </div>
                        <a
                            href="https://www.facebook.com/hominis.affectus"
                            className="main-bottom-link"
                        >
                            Go to Facebook Page
                        </a>
                    </div>
                </div>
                <div className="main-bottom-container">
                    <div className="main-bottom-background-2" />
                    <i>
                        <FilterVintageIcon />
                    </i>
                    <div className="main-bottom-title">Mandala Creator</div>
                    <div className="main-bottom-content">
                        <i>
                            <FilterVintageIcon />
                        </i>
                        <div>Mandala Creator</div>
                        <div className="main-bottom-text">
                            Create Your individual mandala.
                            <br />
                            Transform it to new visual level. <br />
                            Save it and share with others.
                        </div>
                        <Link to="/mandala" className="main-bottom-link">
                            Open editor
                        </Link>
                    </div>
                </div>
                <div className="main-bottom-container">
                    <div className="main-bottom-background-2" />
                    <i>
                        <ImageIcon />
                    </i>
                    <div className="main-bottom-title">Art Gallery</div>
                    <div className="main-bottom-content">
                        <i>
                            <ImageIcon />
                        </i>
                        <div>Art Gallery</div>
                        <div className="main-bottom-text">
                            See other people's creations.
                            <br />
                            Colors and shapes of Mandalas.
                            <br />
                            What is Homo Affectus?.
                        </div>
                        <Link to="/mandala" className="main-bottom-link">
                            Open Art Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
