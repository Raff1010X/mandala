import React, { useRef } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import downloadjs from 'downloadjs';
import SvgBoard from './components/board/SvgBoard';
import MainMenu from './components/menu/MainMenu';
import BurgerMenu from './components/menu/BurgerMenu';
import MenuImage from './components/menu/MenuImage';
import MenuLayer from './components/menu/MenuLayer';
import MenuLayers from './components/menu/MenuLayers';


import MenuTransform from './components/menu/MenuTransform';

function App() {
    const handle = useFullScreenHandle();
    const domRef = useRef<HTMLDivElement>(null);

    const hadleSaveImage = async () => {
        const canvas = await toPng(domRef.current as HTMLElement);
        downloadjs(canvas, 'download.png');
    };

    function handleClickMenuItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        document
            .getElementsByClassName('menu-main-frame')[0]
            .classList.remove('menu-main-frame--open');

        if (e.currentTarget.dataset.item === 'draw') {
            let element = document.getElementById('menu-layers') as HTMLDivElement;
            element.classList.add('menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'transform') {
            let element = document.getElementById(
                'menu-transform'
            ) as HTMLDivElement;
            element.classList.add('menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'share') {
            let element = document.getElementById('menu-layers') as HTMLDivElement;
            element.classList.add('menu-layers--open');
        }
        if (e.currentTarget.dataset.item === 'download') {
            hadleSaveImage();
            document
            .getElementsByClassName('burger-menu')[0]
            .classList.remove('burger-menu--hidden');
        }
        if (e.currentTarget.dataset.item === 'fullscreen') {
            if (handle.active) handle.exit()
            else handle.enter()
            document
            .getElementsByClassName('burger-menu')[0]
            .classList.remove('burger-menu--hidden');
        }
    }

    function handleClickBurgerMenu() {
        document
            .getElementsByClassName('menu-main-frame')[0]
            .classList.add('menu-main-frame--open');
        document
            .getElementsByClassName('burger-menu')[0]
            .classList.add('burger-menu--hidden');
    }

    return (
        <FullScreen handle={handle}>
            <div className="App">
                <BurgerMenu onClick={() => handleClickBurgerMenu()} />
                <SvgBoard refs={domRef}/>
                <MenuImage />
                <MenuLayer />
                <MenuLayers />
                <MenuTransform />
                <MainMenu onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleClickMenuItem(e)}/>
            </div>
        </FullScreen>
    );
}

export default App;
