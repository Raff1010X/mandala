import { ReactNode, useMemo } from 'react';
import SvgItem from '../board/SvgItem';
import CloseIcon from '@mui/icons-material/Close';
import './menu.css';

function MenuImage() {
    function handleClickCloseMenu() {
        let element = document.getElementById('menu-image') as HTMLDivElement;
        element.classList.remove('menu-layers--open');
        element = document.getElementById('menu-layer') as HTMLDivElement;
        element.classList.add('menu-layers--open');
    }

    let images = useMemo(() => {
        let images: ReactNode[] = [];
        for (let i = 1; i <= 136; i++) {
            images.push(
                <div
                    key={i}
                    className="menu--item-select"
                    onClick={() => handleClickCloseMenu()}  
                >
                    <p className="menu-image-title">Image {i}</p>
                    <SvgItem item={i} stroke="#940083" fill="white" rotate={0} scale={1} position="relative"/>
                </div>
            );
        }
        return images
    }, []);

    return (
        <div id="menu-image" className="menu">
            <div
                className="menu--top-bar"
                onClick={() => handleClickCloseMenu()}
            >
                <div>Select image</div>
                <i>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector">
                {images}
            </div>
        </div>
    );
}

export default MenuImage;
