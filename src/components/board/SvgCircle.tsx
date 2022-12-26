import SvGItem from './SvgItem';
import SvGContainer from './SvgContainer';
import React, { memo } from 'react';

interface SvgProps {
    items: number;
    rotate: number;
    diameter: number;
    svgItem: number;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
    fill: string;
    fillOpacity: number;
    svgRotate: number;
    scale: number;
    keys: string;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    perspective: number;
}

function SvgCircle({
    items,
    rotate,
    diameter,
    svgItem,
    stroke,
    strokeWidth,
    strokeOpacity,
    fill,
    fillOpacity,
    svgRotate,
    scale,
    keys,
    rotateX,
    rotateY,
    rotateZ,
    perspective
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
                perspective={perspective}
            >
                <SvGItem
                    item={svgItem}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeOpacity={strokeOpacity}
                    fill={fill}
                    fillOpacity={fillOpacity}
                    rotate={svgRotate}
                    scale={scale}
                    position='absolute'
                    rotateX={rotateX}
                    rotateY={rotateY}
                    rotateZ={rotateZ}
                />
            </SvGContainer>
        );
    }

    return <React.Fragment>{elements}</React.Fragment>;
}

export default memo(SvgCircle) ;
