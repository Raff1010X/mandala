import { ReactNode } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectFileName, selectNumberOfItems } from '../mandalaSlice';

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
    const filename = useAppSelector(selectFileName);
    if (numberOfItems > 64 && filename === 0) perspective = 1000;

    return (
        <div
            data-item={item}
            style={{
                width: '5vw',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
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
