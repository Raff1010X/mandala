import { ReactNode, useMemo } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { changeLayerArr } from '../mandalaSlice';
import SvgItem from '../board/SvgItem';
import CloseIcon from '@mui/icons-material/Close';
import {classAdd, classRemove} from './handleMenu'


function MenuImage() {
    const dispatch = useAppDispatch();

    function handleClickCloseMenu(e: React.MouseEvent<HTMLElement>) {
        const item = e.currentTarget.dataset.item;
        if (item)
            dispatch(changeLayerArr({ name: 'svgItem', value: Number(item) }));
        classRemove('menu-image', 'menu-layers--open');
        classAdd('menu-layer', 'menu-layers--open');
    }

    let images = useMemo(() => {
        let images: ReactNode[] = [];
        for (let i = 1; i <= 120; i++) {
            images.push(
                <div
                    key={i}
                    data-item={i}
                    className="menu--item-select"
                    onClick={(e) => handleClickCloseMenu(e)}
                >
                    <p className="menu-image-title">Select image {i}</p>
                    <SvgItem
                        index={-1}
                        item={i}
                        stroke="black"
                        strokeWidth={0.75}
                        strokeOpacity={1}
                        fill="white"
                        fillOpacity={0.5}
                        rotate={0}
                        scale={1}
                        position="relative"
                        rotateX={0}
                        rotateY={0}
                        rotateZ={0}
                    />
                </div>
            );
        }
        return images;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="menu-image" className="menu">
            <div
                className="menu--top-bar"
                onClick={(e) => handleClickCloseMenu(e)}
            >
                <div>Select image</div>
                <i>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector">{images}</div>
        </div>
    );
}

export default MenuImage;
