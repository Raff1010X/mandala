import ReactDOM from 'react-dom';
import { ReactNode, RefObject, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    changeLayerArr,
    selectLayer,
    selectMandalaArr,
    selectTransform,
    setHoveredLayer,
} from '../mandalaSlice';

import { getColor, distance } from '../../../misc/functions';

import { classRemove } from '../menu/handleMenu';

import SvgCircle from './SvgCircle';

import './svgBoard.css';

function SvgBoard({ refs }: { refs: RefObject<HTMLDivElement> | undefined }) {
    const dispatch = useAppDispatch();

    const { rotateX, rotateY, rotateZ, perspective } =
        useAppSelector(selectTransform);

    const mandalaArr = useAppSelector(selectMandalaArr);
    const mandalaArrLen = mandalaArr.length - 1;
    const layer = useAppSelector(selectLayer);
    const mandalaArrlayer = useAppSelector(selectMandalaArr)[layer];

    const svgBoardBackground = useRef<HTMLDivElement>(null);
    const svgBoardColorPalette = useRef<HTMLDivElement>(null);

    let mandala: ReactNode[] = [...mandalaArr].reverse().map((el, index) => {
        return (
            <SvgCircle
                index={mandalaArrLen - index}
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
        const menu = ReactDOM.findDOMNode(
            document.querySelector('.menu-main-frame')
        ) as HTMLDivElement;
        if (menu.classList.contains('menu-main-frame--open')) {
            classRemove('menu-main-frame', 'menu-main-frame--open');
            classRemove('burger-menu', 'burger-menu--hidden');
        }
    };

    type dragTypes =
        | 'yellow'
        | 'red'
        | 'orange'
        | 'blue'
        | 'white'
        | 'lightBlue'
        | 'violet'
        | 'limegreen'
        | 'none';
    const [draged, setDraged] = useState<dragTypes>();

    const handleMouseDownYellow = () => {
        setDraged('yellow');
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseDownRed = () => {
        setDraged('red');
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseDownOrange = () => {
        setDraged('orange');
        svgBoardColorPalette?.current?.setAttribute('style', `opacity: 1;`);
    };
    const handleMouseDownBlue = () => {
        setDraged('blue');
        svgBoardColorPalette?.current?.setAttribute('style', `opacity: 1;`);
    };
    const handleMouseDownWhite = () => {
        setDraged('white');
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseDownLightBlue = () => {
        setDraged('lightBlue');
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseDownViolet = () => {
        setDraged('violet');
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseDownLimeGreen = () => {
        setDraged('limegreen');
        dispatch(setHoveredLayer(Number(layer)));
    };

    const handleMouseUp = () => {
        if (draged === 'orange' || 'blue')
            svgBoardColorPalette?.current?.setAttribute('style', `opacity: 0;`);
        svgBoardBackground?.current?.setAttribute(
            'style',
            `transform: rotate(${mandalaArrlayer.rotate}deg);
            background-color: transparent; opacity: 1;`
        );
        setDraged('none');
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let value = 0;
        let value2 = 0;

        if (draged === 'yellow') {
            let absX = 1;
            let absY = 1;
            if (mandalaArrlayer.rotate > 0) absX = 1;
            if (mandalaArrlayer.rotate > 90) absX = -1;
            if (mandalaArrlayer.rotate > 270) absX = 1;
            if (mandalaArrlayer.rotate > 0) absY = 1;
            if (mandalaArrlayer.rotate > 180) absY = -1;
            if (Math.abs(e.movementX * absX + e.movementY * absY) > 10) return;
            value = Number(
                (
                    mandalaArrlayer.diameter +
                    (e.movementX * absX + e.movementY * absY) / 20
                ).toFixed(2)
            );
            if (value < 0 || value > 60) return;
            dispatch(changeLayerArr({ name: 'diameter', value }));
        }

        if (draged === 'white') {
            let absX = 1;
            let absY = 1;
            if (mandalaArrlayer.rotate > 0) absX = 1;
            if (mandalaArrlayer.rotate > 90) absX = -1;
            if (mandalaArrlayer.rotate > 270) absX = 1;
            if (mandalaArrlayer.rotate > 0) absY = 1;
            if (mandalaArrlayer.rotate > 180) absY = -1;
            if (Math.abs(e.movementX * absX + e.movementY * absY) > 10) return;
            value = Number(
                (
                    mandalaArrlayer.scale +
                    (e.movementX * absX + e.movementY * absY) / 1000
                ).toFixed(3)
            );
            if (value < 0.01 || value > 0.6) return;
            dispatch(changeLayerArr({ name: 'scale', value }));
        }

        if (draged === 'violet') {
            let absX = 1;
            let absY = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 0)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 90)
                absX = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 270)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 0)
                absY = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 180)
                absY = 1;
            if (Math.abs(e.movementX * absX + e.movementY * absY) > 10) return;
            value = Number(
                (
                    mandalaArrlayer.strokeWidth +
                    (e.movementX * absX + e.movementY * absY) / 100
                ).toFixed(2)
            );
            if (value < 0 || value > 5) return;
            dispatch(changeLayerArr({ name: 'strokeWidth', value }));
        }

        if (draged === 'limegreen') {
            let absX = 1;
            let absY = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 0)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 90)
                absX = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 270)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 0)
                absY = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate - 90 > 180)
                absY = 1;
            if (Math.abs(e.movementX * absX + e.movementY * absY) > 10) return;
            value = Number(
                (
                    mandalaArrlayer.items +
                    (e.movementX * absX + e.movementY * absY) / 15
                ).toFixed(1)
            );
            if (value < 1 || value > 32) return;
            dispatch(changeLayerArr({ name: 'items', value }));
        }

        if (draged === 'red' || 'orange' || 'blue' || 'lightBlue') {
            if (Math.abs(e.movementX) > 10) return;
            const x = -(window.innerHeight / 2 - e.clientY);
            const y = window.innerWidth / 2 - e.clientX;
            value = Number(
                (360 - (Math.atan2(x, y) * (180 / Math.PI) + 180)).toFixed(2)
            );
            value2 = Number(
                (
                    distance(0, 0, x, y) /
                    (Math.min(window.innerHeight, window.innerWidth) / 2)
                ).toFixed(2)
            );
            if (value2 > 1) value2 = 1;
        }

        if (draged === 'red') {
            dispatch(changeLayerArr({ name: 'rotate', value }));
        }
        if (draged === 'orange') {
            const color = getColor(value);
            svgBoardColorPalette?.current?.setAttribute(
                'style',
                `opacity: ${1 - value2};`
            );
            svgBoardBackground?.current?.setAttribute(
                'style',
                `transform: rotate(${mandalaArrlayer.rotate}deg);
                background-color: ${color}; opacity: ${value2};`
            );
            dispatch(changeLayerArr({ name: 'fill', value: getColor(value) }));
            dispatch(changeLayerArr({ name: 'fillOpacity', value: value2 }));
        }
        if (draged === 'blue') {
            const color = getColor(value);
            svgBoardColorPalette?.current?.setAttribute(
                'style',
                `opacity: ${1 - value2};`
            );
            svgBoardBackground?.current?.setAttribute(
                'style',
                `transform: rotate(${mandalaArrlayer.rotate}deg);
                 background-color: ${color}; opacity: ${value2};`
            );
            dispatch(
                changeLayerArr({ name: 'stroke', value: getColor(value) })
            );
            dispatch(changeLayerArr({ name: 'strokeOpacity', value: value2 }));
        }
        if (draged === 'lightBlue') {
            dispatch(
                changeLayerArr({
                    name: 'svgRotate',
                    value: value - 90 - mandalaArrlayer.rotate,
                })
            );
        }
    };

    const handleMouseOut = () => {
        svgBoardBackground?.current?.setAttribute(
            'style',
            `transform: rotate(${mandalaArrlayer.rotate}deg);
             background-color: transparent; opacity: 0;`
        );
    };
    const handleMouseOver = () => {
        svgBoardBackground?.current?.setAttribute(
            'style',
            `transform: rotate(${mandalaArrlayer.rotate}deg);
             background-color: transparent; opacity: 1;`
        );
    };

    return (
        <div
            onClick={handleClick}
            ref={refs}
            className="svgBoard"
            onMouseUp={handleMouseUp}
        >
            <div ref={svgBoardColorPalette} id="color-palette"></div>
            {mandala}
            <div
                ref={svgBoardBackground}
                className="layer-controller-background"
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                onMouseOver={handleMouseOver}
                style={{
                    transform: `rotate(${mandalaArrlayer.rotate}deg)`,
                }}
            >
                <div className="layer-controller">
                    <div
                        className="layer-controller-end"
                        onMouseDown={handleMouseDownRed}
                    />
                    <div
                        className="layer-controller-end yellow"
                        style={{
                            left: `${49 + mandalaArrlayer.diameter * 0.81}%`,
                        }}
                        onMouseDown={handleMouseDownYellow}
                    />
                    <div
                        className="layer-controller-end white"
                        style={{
                            left: `${mandalaArrlayer.scale * 80 - 2.5}%`,
                        }}
                        onMouseDown={handleMouseDownWhite}
                    />
                </div>
                <div
                    className="layer-controller item-controller"
                    style={{
                        transform: `rotate(${
                            mandalaArrlayer.svgRotate + 90
                        }deg) translateY(-3vh)`,
                    }}
                >
                    <div
                        className="layer-controller-end orange"
                        onMouseDown={handleMouseDownOrange}
                    />
                    <div
                        className="layer-controller-end blue"
                        onMouseDown={handleMouseDownBlue}
                    />
                    <div
                        className="layer-controller-end lightblue"
                        onMouseDown={handleMouseDownLightBlue}
                    />
                    <div
                        className="layer-controller-end violet"
                        style={{
                            left: `${55 + mandalaArrlayer.strokeWidth * 8}%`,
                        }}
                        onMouseDown={handleMouseDownViolet}
                    />
                    <div
                        className="layer-controller-end limegreen"
                        style={{
                            left: `${(mandalaArrlayer.items - 1) * 1.35}%`,
                        }}
                        onMouseDown={handleMouseDownLimeGreen}
                    />
                </div>
            </div>
            {/* <div
                ref={background2}
                className="layer-controller-background"
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                onMouseUp={handleMouseUp}
                style={{
                    rotate: `${mandalaArrlayer.svgRotate}deg`,
                }}
            >
                <div className="layer-controller">
                    <div
                        className="layer-controller-end"
                        onMouseDown={handleMouseDownRed}
                        onMouseUp={handleMouseUpRed}
                    />
                    <div
                        className="layer-controller-end orange"
                        onMouseDown={handleMouseDownOrange}
                        onMouseUp={handleMouseUpOrange}
                    />
                    <div
                        className="layer-controller-end blue"
                        onMouseDown={handleMouseDownBlue}
                        onMouseUp={handleMouseUpBlue}
                    />
                </div>
            </div> */}
        </div>
    );
}

export default SvgBoard;
