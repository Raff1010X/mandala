import SvgBoard from './components/board/SvgBoard';
import MainMenu from './components/menu/MainMenu';
import BurgerMenu from './components/menu/BurgerMenu';
import MenuImage from './components/menu/MenuImage';
import MenuLayer from './components/menu/MenuLayer';
import MenuLayers from './components/menu/MenuLayers';


import './App.css';


function App() {
    return (
        <div className="App">
            <BurgerMenu />
            <SvgBoard />
            {/* <MenuImage /> */}
            {/* <MenuLayer /> */}
            {/* <MenuLayers /> */}
            {/* <MainMenu /> */}
            
        </div>
    );
}

export default App;
