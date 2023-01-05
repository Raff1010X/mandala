import { RefObject } from 'react';
import { Link } from 'react-router-dom';

import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import FacebookIcon from '@mui/icons-material/Facebook';
import ImageIcon from '@mui/icons-material/Image';

function Bottom({ refs }: { refs: RefObject<HTMLDivElement>[] | undefined[] }) {
    return (
        <div id="main-bottom" className="main-bottom" ref={refs[0]}>
            <div
                className="main-bottom-background-1"
                tabIndex={0}
                ref={refs[1]}
            />
            <div className="main-bottom-container" tabIndex={2}>
                <div className="main-bottom-background-2" />
                <i>
                    <FilterVintageIcon />
                </i>
                <div className="main-bottom-title">Mandala Creator</div>
                <div className="main-bottom-content">
                    <div className="main-bottom-content-header">
                        <i>
                            <FilterVintageIcon />
                        </i>
                        <div>Mandala Creator</div>
                    </div>
                    <div className="main-bottom-text">
                        Create Your individual mandala.
                        <br />
                        Transform it to new visual level. <br />
                        Save it and share with others.
                    </div>
                    <Link to="/mandala" className="main-bottom-link">
                        Open Mandala Creator
                    </Link>
                </div>
            </div>
            <div className="main-bottom-container" tabIndex={3}>
                <div className="main-bottom-background-2" />
                <i>
                    <ImageIcon />
                </i>
                <div className="main-bottom-title">Art Gallery</div>
                <div className="main-bottom-content">
                    <div className="main-bottom-content-header">
                        <i>
                            <ImageIcon />
                        </i>
                        <div>Art Gallery</div>
                    </div>
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
            <div className="main-bottom-container" tabIndex={1}>
                <div className="main-bottom-background-2" />
                <i>
                    <FacebookIcon />
                </i>
                <div className="main-bottom-title">Homo Affectus</div>
                <div className="main-bottom-content">
                    <div className="main-bottom-content-header">
                        <i>
                            <FacebookIcon />
                        </i>
                        <div>Homo Affectus</div>
                    </div>
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
        </div>
    );
}

export default Bottom;
