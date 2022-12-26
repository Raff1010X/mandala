import './menu.css';
import {ReactComponent as Menu} from "../../assets/menu.svg"

interface burgerMenuProps {
    onClick: () => void;
}

function BurgerMenu({ onClick }: burgerMenuProps) {
    return (
        <div className="burger-menu" onClick={() => onClick()}>
            <i><Menu /></i>
            <i>Menu</i>
        </div>
    );
}

export default BurgerMenu;
