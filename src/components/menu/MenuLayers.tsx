import { ReactNode } from 'react';
import SvgItem from '../board/SvgItem';
import './menu.css';

import CloseIcon from '@mui/icons-material/Close';

import mandalaArr from '../../features/mandala/mandalaArr';

function MenuLayers() {

    function handleClickLayer() {
        let element = document.getElementById('menu-layers') as HTMLDivElement;
        element.classList.remove('menu-layers--open');
        element = document.getElementById('menu-layer') as HTMLDivElement;
        element.classList.add('menu-layers--open');

        
    }

    function handleClickCloseMenu() {
        document
            .getElementsByClassName('burger-menu')[0]
            .classList.remove('burger-menu--hidden');
        let element = document.getElementById('menu-layers') as HTMLDivElement;
        element.classList.remove('menu-layers--open');
    }

    function handleClickNewLayer() {
        
    }

    let layers: ReactNode[] = mandalaArr.map((el, index) => {
        return (
            <div
                key={el.svgItem}
                className="menu--item-select"
                onClick={() => handleClickLayer()}
            >
                <p className="menu-image-title">Layer {index + 1}</p>
                <SvgItem
                    item={el.svgItem}
                    stroke="#940083"
                    fill="white"
                    rotate={0}
                    scale={1}
                    position="relative"
                />
            </div>
        );
    });

    return (
        <div id="menu-layers" className="menu">
            <div className="menu--top-bar">
                <div>Layers</div>
                <i
                    onClick={() => {
                        handleClickCloseMenu();
                    }}
                >
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector">
                {layers}
                {mandalaArr.length < 24 ? (
                    <div
                        className="menu--item-select"
                        onClick={() => handleClickNewLayer()}
                    >
                        <p className="menu-image-title">Add new layer</p>
                        <p className="menu-layer-plus">+</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default MenuLayers;
