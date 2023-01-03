import { LegacyRef, ReactNode } from 'react';
import { useAppSelector } from '../../app/hooks';
import {
    selectMandalaArr,
    selectTransform,
} from '../../features/mandala/mandalaSlice';
import { classRemove } from '../menu/handleMenu';
import SvgCircle from './SvgCircle';
import './svgBoard.css';

function SvgBoard({ refs }: { refs: LegacyRef<HTMLDivElement> | undefined }) {
    const { rotateX, rotateY, rotateZ, perspective } =
        useAppSelector(selectTransform);

    const mandalaArr = useAppSelector(selectMandalaArr);

    let mandala: ReactNode[] = [...mandalaArr].reverse().map((el, index) => {
        return (
            <SvgCircle
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
        );
    });

    const handleClick = () => {
        classRemove('menu-main-frame', 'menu-main-frame--open');
        classRemove('burger-menu', 'burger-menu--hidden');
    };

    return (
        <div
            onClick={handleClick}
            ref={refs}
            className="svgBoard"
            style={{
                backgroundColor: '#ececec',
            }}
        >
            {mandala}
        </div>
    );
}

export default SvgBoard;
