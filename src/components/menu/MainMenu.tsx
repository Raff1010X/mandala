import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ShareIcon from '@mui/icons-material/Share';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import './menu.css';

function MainMenu() {
    return (
            <div className="menu-main--frame">
                <div className="menu-main">
                    <div className="menu-main--item">
                        <i>
                            <BrushOutlinedIcon />
                        </i>
                        <p>Draw</p>
                    </div>
                    <div className="menu-main--item">
                        <i>
                            <BlurOnOutlinedIcon />
                        </i>
                        <p>Transform</p>
                    </div>
                    <div className="menu-main--item">
                        <i>
                            <ShareIcon />
                        </i>
                        <p>Share</p>
                    </div>
                    <div className="menu-main--item">
                        <i>
                            <CloudDownloadIcon />
                        </i>
                        <p>Download</p>
                    </div>
                    <div className="menu-main--item">
                        <i>
                            <FullscreenIcon />
                        </i>
                        <p>Fullscreen</p>
                    </div>
                </div>
            </div>
    );
}

export default MainMenu;
