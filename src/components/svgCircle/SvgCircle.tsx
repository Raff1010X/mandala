import SvGItem from '../svgItem/SvgItem';
import SvGContainer from '../svgContainer/SvgContainer';
import React from 'react';

interface SvgProps {
    items: number;
    rotate: number;
    diameter: number;
    svgItem: number;
    stroke: string;
    fill: string;
    svgRotate: number;
    scale: number;
}

function SvgCircle({
    items,
    rotate,
    diameter,
    svgItem,
    stroke,
    fill,
    svgRotate,
    scale,
}: SvgProps) {
    let elements = [];
    for (let i = 0; i < items; i++) {
        elements.push(
            <SvGContainer
                item={i}
                items={items}
                rotate={rotate}
                diameter={diameter}
            >
                <SvGItem
                    item={svgItem}
                    stroke={stroke}
                    fill={fill}
                    rotate={svgRotate}
                    scale={scale}
                />
            </SvGContainer>
        );
    }

    return <React.Fragment>{elements}</React.Fragment>;
}

export default SvgCircle;
