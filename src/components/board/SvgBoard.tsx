import React, { ReactNode, useMemo } from 'react';
import SvgCircle from './SvgCircle';
import './svgBoard.css'

function SvgBoard() {
    let mandalaArr = useMemo(()=>[
        {
            items: 6,
            rotate: 0,
            diameter: 4,
            svgItem: 30,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 6,
            rotate: 0,
            diameter: 7,
            svgItem: 31,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 6,
            rotate: 29,
            diameter: 10,
            svgItem: 32,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 24,
            rotate: 0,
            diameter: 14,
            svgItem: 33,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.05,
        },
        {
            items: 18,
            rotate: 0,
            diameter: 16,
            svgItem: 34,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 18,
            rotate: 10,
            diameter: 18,
            svgItem: 35,
            stroke: '#cb02a0',
            fill: 'transparent',
            svgRotate: 270,
            scale: 0.1,
        },
        {
            items: 18,
            rotate: 0,
            diameter: 22,
            svgItem: 36,
            stroke: '#ff00e1',
            fill: 'transparent',
            svgRotate: 90,
            scale: 0.1,
        },
        {
            items: 18,
            rotate: 10,
            diameter: 22,
            svgItem: 37,
            stroke: '#ff00e1',
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
            backgroundColor: "#feffeb"
        }}>
            {mandala}
        </div>
    );
}

export default SvgBoard;