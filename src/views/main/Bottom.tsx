import { RefObject } from 'react';
import { useNavigate } from 'react-router-dom';

import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import HelpIcon from '@mui/icons-material/Help';
import ImageIcon from '@mui/icons-material/Image';

function Bottom({ refs }: { refs: RefObject<HTMLDivElement>[] | undefined[] }) {
    const navigate = useNavigate();
    function handleClickLinkToMandala() {
        navigate('/mandala');
    }
    function handleClickLinkToGallery() {
        navigate('/gallery');
    }
    function handleClickLinkToPage() {
        window.location.replace('https://www.homoaffectus.org');
    }

    return (
        <div id="main-bottom" className="main-bottom" ref={refs[0]}>
            <div
                className="main-bottom-background-1"
                tabIndex={0}
                ref={refs[1]}
            />
            <div className="main-bottom-container" tabIndex={0}> 
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
                    <div
                        className="main-bottom-link"
                        onClick={()=>handleClickLinkToMandala()}
                    >
                        Open Mandala Creator
                    </div>
                </div>
            </div>
            <div className="main-bottom-container" tabIndex={0}>
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
                    <div
                        className="main-bottom-link"
                        onClick={()=>handleClickLinkToGallery()}
                    >
                        <p>Open Art Gallery</p>
                    </div>
                </div>
            </div>
            <div className="main-bottom-container" tabIndex={0}>
                <div className="main-bottom-background-2" />
                <i>
                    <HelpIcon />
                </i>
                <div className="main-bottom-title">Homo Affectus</div>
                <div className="main-bottom-content">
                    <div className="main-bottom-content-header">
                        <i>
                            <HelpIcon />
                        </i>
                        <div>Homo Affectus</div>
                    </div>
                    <div className="main-bottom-text">
                        Discover Homo Afectus project.
                        <br />
                        Interdisciplinary art initiative.
                        <br />
                        See more at Project page.
                    </div>
                    <div
                        // href="https://www.facebook.com/hominis.affectus"
                        className="main-bottom-link"
                        onClick={()=>handleClickLinkToPage()}
                    >
                        Go to Project Page
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
