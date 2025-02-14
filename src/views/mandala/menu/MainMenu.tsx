import Logo from './Logo';

import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ShareIcon from '@mui/icons-material/Share';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import './menu.css';

interface mainMenuProps {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function MainMenu({ onClick }: mainMenuProps) {
    return (
        <div id="menu-main-frame" className="menu-main-frame">
            
            <div className="menu-main">
                <Logo/>
                <div
                    data-item="draw"
                    className="menu-main--item"
                    onClick={(e) => onClick(e)}
                >
                    <i>
                        <BrushOutlinedIcon />
                    </i>
                    <p>Draw</p>
                </div>
                <div
                    data-item="transform"
                    className="menu-main--item"
                    onClick={(e) => onClick(e)}
                >
                    <i>
                        <BlurOnOutlinedIcon />
                    </i>
                    <p>Transform</p>
                </div>
                <div
                    data-item="share"
                    className="menu-main--item"
                    onClick={(e) => onClick(e)}
                >
                    <i>
                        <ShareIcon />
                    </i>
                    <p>Save it</p>
                </div>
                <div
                    data-item="download"
                    className="menu-main--item"
                    onClick={(e) => onClick(e)}
                >
                    <i>
                        <CloudDownloadIcon />
                    </i>
                    <p>Download</p>
                </div>
                <div
                    data-item="fullscreen"
                    className="menu-main--item"
                    onClick={(e) => onClick(e)}
                >
                    <i>
                        <FullscreenIcon />
                    </i>
                    <p>Fullscreen</p>
                </div>
                <div className="menu-background"></div>
            </div>
        </div>
    );
}

export default MainMenu;
