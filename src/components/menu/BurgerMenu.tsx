
import MenuIcon from '@mui/icons-material/Menu';
import './menu.css';

interface burgerMenuProps {
    onClick: () => void
}

function BurgerMenu({onClick}:burgerMenuProps) {
    return (
        <div className="burger-menu" onClick={() => onClick()}>
            <i><MenuIcon /></i>
            <i>Menu</i>
        </div>
    );
}

export default BurgerMenu;
