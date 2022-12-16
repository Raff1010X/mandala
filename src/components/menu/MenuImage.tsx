import './menu.css';

import CloseIcon from '@mui/icons-material/Close';

function MenuImage() {

    function handleClickCloseMenu()  {
        let element = document.getElementById('menu-image') as HTMLDivElement
            element.classList.remove('menu-layers--open')
        element = document.getElementById('menu-layer') as HTMLDivElement
            element.classList.add('menu-layers--open')
    }

    return (
            <div id="menu-image" className="menu">
                <div className="menu--top-bar" onClick={() => handleClickCloseMenu()}>
                    <div>Select image</div>
                    <i><CloseIcon /></i>
                </div>
                <div className="menu--item-selector">
                    <div className="menu--item-select" onClick={() => handleClickCloseMenu()}></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                    <div className="menu--item-select"></div>
                </div>
            </div>
    );
}

export default MenuImage;
