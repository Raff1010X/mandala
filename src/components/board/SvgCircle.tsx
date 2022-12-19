import SvGItem from './SvgItem';
import SvGContainer from './SvgContainer';
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
    keys: string;
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
    keys,
}: SvgProps) {
    let elements = [];
    for (let i = 0; i < items; i++) {
        elements.push(
            <SvGContainer
                key={`SvgContainer${i}${keys}`}
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
                    position='absolute'
                />
            </SvGContainer>
        );
    }

    return <React.Fragment>{elements}</React.Fragment>;
}

export default SvgCircle;
