import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectNumberOfItems, setFileName } from './mandalaSlice';

import { classAdd, classRemove } from './menu/handleMenu';
import { FullScreenHandle } from '../mandala/mandalaType';

import SvgBoard from './board/SvgBoard';
import MainMenu from './menu/MainMenu';
import BurgerMenu from './menu/BurgerMenu';
import MenuLayer from './menu/MenuLayer';
import MenuLayers from './menu/MenuLayers';
import MenuTransform from './menu/MenuTransform';
import MenuImage from './menu/MenuImage';
import Post from './menu/Post';
import Tutorial from './menu/Tutorial';
import Download from './menu/Download';

import './mandala.css';


function Mandala({ handle }: { handle: FullScreenHandle }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFileName);
    }, [dispatch]);

    // const MenuImage = React.lazy(
    //     () => import('../../components/menu/MenuImage')
    // );
    const numberOfItems = useAppSelector(selectNumberOfItems);

    const boardRef = useRef<HTMLDivElement>(null);


    function handleClickMenuItem(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        classRemove('menu-main-frame', 'menu-main-frame--open');

        if (e.currentTarget.dataset.item === 'draw') {
            classAdd('menu-layers', 'menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'transform') {
            if (numberOfItems <= 64) {
                classAdd('menu-transform', 'menu-layers--open');
            } else {
                window.alert(
                    `You can transform mandalas with no more than 64 elements. Your mandala has ${numberOfItems} elements.`
                );
                classRemove('burger-menu', 'burger-menu--hidden');
            }
        }
        if (e.currentTarget.dataset.item === 'share') {
            classRemove('burger-menu', 'burger-menu--hidden');
            classAdd('post-wrapper', 'post-wrapper--visible');
        }
        if (e.currentTarget.dataset.item === 'download') {
            classRemove('burger-menu', 'burger-menu--hidden');
            classAdd('menu-download', 'post-wrapper--visible');
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
            <Tutorial />
            <Post />
            <Download refs={boardRef}/>
        </div>
    );
}

export default Mandala;
