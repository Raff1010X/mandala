import React, { useRef } from 'react';

import { classAdd, classRemove } from './menu/handleMenu';
import { toPng, toSvg } from 'html-to-image';
import downloadjs from 'downloadjs';

import SvgBoard from './board/SvgBoard';
import MainMenu from './menu/MainMenu';
import BurgerMenu from './menu/BurgerMenu';
import MenuLayer from './menu/MenuLayer';
import MenuLayers from './menu/MenuLayers';
import MenuTransform from './menu/MenuTransform';
import MenuImage from './menu/MenuImage';

import './mandala.css';

interface FullScreenHandle {
    active: boolean;
    enter: () => Promise<void>;
    exit: () => Promise<void>;
    node: React.MutableRefObject<HTMLDivElement | null>;
}

function Mandala({ handle }: { handle: FullScreenHandle }) {
    // const MenuImage = React.lazy(
    //     () => import('../../components/menu/MenuImage')
    // );

    const boardRef = useRef<HTMLDivElement>(null);

    const hadleSaveImage = async () => {
        const canvas = await toPng(boardRef.current as HTMLElement);
        downloadjs(canvas, 'download.png');
    };

    function handleClickMenuItem(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        classRemove('menu-main-frame', 'menu-main-frame--open');

        if (e.currentTarget.dataset.item === 'draw') {
            classAdd('menu-layers', 'menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'transform') {
            classAdd('menu-transform', 'menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'share') {
            classRemove('burger-menu', 'burger-menu--hidden');
        }
        if (e.currentTarget.dataset.item === 'download') {
            classRemove('burger-menu', 'burger-menu--hidden');
            hadleSaveImage();
        }
        if (e.currentTarget.dataset.item === 'fullscreen') {
            classRemove('burger-menu', 'burger-menu--hidden');
            if (handle.active) handle.exit();
            else handle.enter();
        }
        if (e.currentTarget.dataset.item === 'burger-menu') {
            classAdd('menu-main-frame', 'menu-main-frame--open');
            classAdd('burger-menu', 'burger-menu--hidden');
        }
    }

    return (
        <div className="mandala">
            <BurgerMenu
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                    handleClickMenuItem(e)
                }
            />
            <MenuLayer />
            <SvgBoard refs={boardRef} />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <MenuImage />
            {/* </Suspense> */}
            <MenuLayers />
            <MenuTransform />
            <MainMenu
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                    handleClickMenuItem(e)
                }
            />
            
        </div>
    );
}

export default Mandala;
