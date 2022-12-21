import { ReactNode } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectMandalaArr, setLayer} from '../../features/mandala/mandalaSlice';

import SvgItem from '../board/SvgItem';
import CloseIcon from '@mui/icons-material/Close';

import './menu.css';




function MenuLayers() {

    const mandalaArr = useAppSelector(selectMandalaArr);
    const dispatch = useAppDispatch();

    function handleClickLayer(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const selectedLayer = (e.currentTarget.dataset.index || 0) as number
        dispatch(setLayer(selectedLayer))
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
                data-index={index}
                className="menu--item-select"
                onClick={(e) => handleClickLayer(e)}
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
