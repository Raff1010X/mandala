import SvgBoard from './components/board/SvgBoard';
import MainMenu from './components/menu/MainMenu';
import BurgerMenu from './components/menu/BurgerMenu';
import MenuImage from './components/menu/MenuImage';
import MenuLayer from './components/menu/MenuLayer';
import MenuLayers from './components/menu/MenuLayers';


import './App.css';
import React from 'react';

function handleClickBurgerMenu()  {
    document.getElementsByClassName('menu-main-frame')[0].classList.add('menu-main-frame--open')
    document.getElementsByClassName('burger-menu')[0].classList.add('burger-menu--hidden')
}

function handleClickMenuItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>)  {
    document.getElementsByClassName('menu-main-frame')[0].classList.remove('menu-main-frame--open') 

    if (e.currentTarget.dataset.item === 'draw') {
        let element = document.getElementById('menu-layers') as HTMLDivElement
        element.classList.add('menu-layers--open')
    }
    if (e.currentTarget.dataset.item === 'transform') {
        let element = document.getElementById('menu-layers') as HTMLDivElement
        element.classList.add('menu-layers--open')
    }
    if (e.currentTarget.dataset.item === 'download') {
        let element = document.getElementById('menu-layers') as HTMLDivElement
        element.classList.add('menu-layers--open')
    }
    if (e.currentTarget.dataset.item === 'share') {
        let element = document.getElementById('menu-layers') as HTMLDivElement
        element.classList.add('menu-layers--open')
    }
    if (e.currentTarget.dataset.item === 'fullscreen') {
        
    }
}


function App() {
    return (
        <div className="App">
            <BurgerMenu onClick={()=>handleClickBurgerMenu()}/>
            <SvgBoard />
            <MenuImage />
            <MenuLayer />
            <MenuLayers />
            <MainMenu onClick={(e)=>handleClickMenuItem(e)}/>
            
        </div>
    );
}


export default App;
