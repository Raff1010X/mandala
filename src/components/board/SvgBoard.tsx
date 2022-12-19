import React, { ReactNode } from 'react';
import SvgCircle from './SvgCircle';
import './svgBoard.css'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectMandalaArr} from '../../features/mandala/mandalaSlice';



function SvgBoard() {
    const mandalaArr = useAppSelector(selectMandalaArr);
    let mandala: ReactNode[] =  mandalaArr.map((el, index) => {
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
    })

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