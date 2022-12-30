import { ReactComponent as Menu } from '../../assets/menu.svg';

interface burgerMenuProps {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function BurgerMenu({ onClick }: burgerMenuProps) {
    return (
        <div
            id="burger-menu"
            data-item="burger-menu"
            className="burger-menu"
            onClick={(e) => onClick(e)}
        >
            <i>
                <Menu />
            </i>
            <i>Menu</i>
        </div>
    );
}

export default BurgerMenu;
