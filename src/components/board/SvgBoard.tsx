import { LegacyRef, ReactNode } from 'react';
import SvgCircle from './SvgCircle';
import './svgBoard.css'

import { useAppSelector } from '../../app/hooks';
import {selectMandalaArr, selectTransform} from '../../features/mandala/mandalaSlice';



function SvgBoard({refs}: {refs: LegacyRef<HTMLDivElement> | undefined}) {
    
    const { rotateX, rotateY, rotateZ, perspective } = useAppSelector(selectTransform);

    const mandalaArr = useAppSelector(selectMandalaArr);

    let mandala: ReactNode[] =  [...mandalaArr].reverse().map((el, index) => {
        return <SvgCircle
                items={el.items}
                rotate={el.rotate}
                diameter={el.diameter}
                svgItem={el.svgItem}
                stroke={el.stroke}
                strokeWidth={el.strokeWidth}
                strokeOpacity={el.strokeOpacity}
                fill={el.fill}
                fillOpacity={el.fillOpacity}
                svgRotate={el.svgRotate}
                scale={el.scale}
                key={`SvgCircle${index}`}
                keys={`SvgCircle${index}`}
                rotateX={rotateX}
                rotateY={rotateY}
                rotateZ={rotateZ}
                perspective={perspective}
            />
    })

    const handleClick = () => {
        document
        .getElementsByClassName('menu-main-frame')[0]
        .classList.remove('menu-main-frame--open');
        document
        .getElementsByClassName('burger-menu')[0]
        .classList.remove('burger-menu--hidden');
    }

    return (
        <div 
        onClick={handleClick}
        ref={refs}
        className="svgBoard"
        style={{
            backgroundColor: "#feffeb"
        }}>
            {mandala}
        </div>
    );
}

export default SvgBoard;