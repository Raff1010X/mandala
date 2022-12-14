import React, { ReactNode, useMemo } from 'react';
import SvgCircle from './SvgCircle';
import './svgBoard.css'

function SvgBoard() {
    let mandalaArr = useMemo(()=>[
        {
            items: 6,
            rotate: 0,
            diameter: 5,
            svgItem: 30,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 8,
            rotate: 0,
            diameter: 8,
            svgItem: 31,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 10,
            rotate: 0,
            diameter: 11,
            svgItem: 32,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 12,
            rotate: 0,
            diameter: 15,
            svgItem: 33,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 14,
            rotate: 0,
            diameter: 18,
            svgItem: 34,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 16,
            rotate: 0,
            diameter: 20,
            svgItem: 35,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 18,
            rotate: 0,
            diameter: 22,
            svgItem: 36,
            stroke: '#000',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 24,
            rotate: 0,
            diameter: 24,
            svgItem: 37,
            stroke: '#000',
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
            backgroundColor: "#fff"
        }}>
            {mandala}
        </div>
    );
}

export default SvgBoard;