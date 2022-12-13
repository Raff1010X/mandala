import React, { ReactNode, useMemo } from 'react';
import SvgCircle from './SvgCircle';
import './svgBoard.css'

function SvgBoard() {
    let mandalaArr = useMemo(()=>[
        {
            items: 4,
            rotate: 0,
            diameter: 3,
            svgItem: 30,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 6,
            rotate: 0,
            diameter: 4,
            svgItem: 31,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 8,
            rotate: 0,
            diameter: 5,
            svgItem: 32,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 10,
            rotate: 0,
            diameter: 6,
            svgItem: 33,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 12,
            rotate: 0,
            diameter: 7,
            svgItem: 34,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 14,
            rotate: 0,
            diameter: 8,
            svgItem: 35,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 16,
            rotate: 0,
            diameter: 9,
            svgItem: 36,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 18,
            rotate: 0,
            diameter: 10,
            svgItem: 37,
            stroke: '#018686',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
    ],[]);

    let mandala:ReactNode[] = useMemo(() => mandalaArr.map((el, index) => {
        return <SvgCircle
                items={el.items}
                rotate={el.rotate}
                diameter={el.diameter}
                svgItem={el.svgItem}
                stroke={el.stroke}
                fill={el.fill}
                svgRotate={el.svgRotate}
                scale={el.scale}
                key={`SvgCircle${index}`}
                keys={`SvgCircle${index}`}
            />
    }),[mandalaArr])

    return (
        <div className="svgBoard"
        style={{
            backgroundColor: "#ff0"
        }}>
            {mandala}
        </div>
    );
}

export default SvgBoard;