import { ReactNode } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectNumberOfItems } from '../mandalaSlice';

interface SvgProps {
    item: number;
    items: number;
    rotate: number;
    diameter: number;
    children: ReactNode;
    perspective: number;
}

function SvgContainer({
    item,
    items,
    rotate,
    diameter,
    children,
    perspective,
}: SvgProps) {


    const numberOfItems = useAppSelector(selectNumberOfItems);
    if (numberOfItems > 64) perspective = 1000

    return (
        <div
            data-item={item}
            style={{
                width: '1vw',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${
                    (item * 360) / Math.floor(items) + rotate
                }deg) translateX(${diameter}vw)`,
                perspective: `${perspective}vw`,
            }}
        >
            {children}
        </div>
    );
}

export default SvgContainer;
