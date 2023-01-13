import { ReactNode } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    selectMandalaArr,
    setLayer,
    deleteLayer,
    addLayer,
} from '../mandalaSlice';
import { classAdd, classRemove } from './handleMenu';
import SvgItem from '../board/SvgItem';
import CloseIcon from '@mui/icons-material/Close';

function MenuLayers() {
    const mandalaArr = useAppSelector(selectMandalaArr);
    const dispatch = useAppDispatch();

    function handleClickLayer(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const selectedLayer = (e.currentTarget.dataset.index || 0) as number;
        dispatch(setLayer(selectedLayer));
        classRemove('menu-layers', 'menu-layers--open')
        classAdd('menu-layer', 'menu-layers--open')
    }

    function handleClickCloseMenu() {
        classRemove('burger-menu', 'burger-menu--hidden')
        classRemove('menu-layers', 'menu-layers--open')
    }

    function handleClickDeleteLayer(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        const selectedLayer = (e.currentTarget.dataset.index || -1) as number;
        dispatch(deleteLayer(selectedLayer));
    }

    function handleNewLayer() {
        dispatch(addLayer());
        dispatch(setLayer(mandalaArr.length));
        classRemove('menu-layers', 'menu-layers--open')
        classAdd('menu-layer', 'menu-layers--open')
    }

    let layers: ReactNode[] = mandalaArr.map((el, index) => {
        return (
            <div className="menu--item-select" key={index}>
                <p className="menu-image-title">Edit Layer {index + 1}</p>
                {mandalaArr.length > 1 && (
                    <p
                        className="menu-image-delete"
                        data-index={index}
                        onClick={(e) => handleClickDeleteLayer(e)}
                    >
                        Delete
                    </p>
                )}
                <div data-index={index} onClick={(e) => handleClickLayer(e)}>
                    <SvgItem
                        index={index}
                        item={el.svgItem}
                        strokeWidth={0.75}
                        strokeOpacity={1}
                        fillOpacity={0.25}
                        stroke={el.stroke}
                        fill={el.fill}
                        rotate={0}
                        scale={1}
                        position="relative"
                        rotateX={0}
                        rotateY={0}
                        rotateZ={0}
                    />
                </div>
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
                {mandalaArr.length < 24 && (
                    <div
                        className="menu--item-select"
                        onClick={() => handleNewLayer()}
                    >
                        <p className="menu-image-title">Add new layer</p>
                        <p className="menu-layer-plus">+</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MenuLayers;
