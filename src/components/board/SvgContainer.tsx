import { ReactNode } from "react";

interface SvgProps {
    item: number;
    items: number;
    rotate: number;
    diameter: number;
    children: ReactNode;
    perspective: number;
}

function SvgContainer({ item, items, rotate, diameter, children, perspective }: SvgProps) {

    return (
        <div
            style={{
                width: '100vw',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${(item * 360) / items + rotate}deg) translateX(${diameter}vw)`,
                perspective: `${perspective}vw`
            }}
        >
            {children}
        </div>
    );
}

export default SvgContainer ;
