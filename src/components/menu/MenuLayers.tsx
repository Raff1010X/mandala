import './menu.css';

import CloseIcon from '@mui/icons-material/Close';


function menuLayers() {

    function handleClickLayer()  {
        document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu--hidden')
        let element = document.getElementById('menu-layers') as HTMLDivElement
            element.classList.remove('menu-layers--open')
        element = document.getElementById('menu-layer') as HTMLDivElement
            element.classList.add('menu-layers--open')
        
    }

    function handleClickCloseMenu()  {
        document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu--hidden')
        let element = document.getElementById('menu-layers') as HTMLDivElement
            element.classList.remove('menu-layers--open')
    }


    return (
        <div id="menu-layers" className="menu">
            <div className="menu--top-bar">
                <div>Layers</div>
                <i onClick={() => {handleClickCloseMenu()}}>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector">
                <div className="menu--item-select" onClick={() => handleClickLayer()}></div>

                <div className="menu--item-select"></div>
            </div>
        </div>
    );
}

export default menuLayers;
