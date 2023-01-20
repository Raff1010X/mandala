import ReactDOM from 'react-dom';
import { ReactNode, RefObject, Touch, useRef, useState } from 'react';
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
// console.log(mandalaArr)
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

    let previousTouch: Touch;
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.nativeEvent instanceof TouchEvent) {
            const touch = e.touches[0];
            if (previousTouch) {
                let movementX =
                    (touch.pageX - previousTouch.pageX) * 5;
                let movementY =
                    (touch.pageY - previousTouch.pageY)  * 5;
                handleMove(movementX, movementY, touch.pageX, touch.pageY, 250);
            }
            previousTouch = touch;
        }
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleMove(
            e.movementX * devicePixelRatio,
            e.movementY * devicePixelRatio,
            e.clientX,
            e.clientY
        );

    function handleMove(
        movementX: number,
        movementY: number,
        clientX: number,
        clientY: number,
        hold: number = 10
    ): void {
        let value = 0;
        let value2 = 0;
        let absX = 1;
        let absY = 1;
        let quarter =  mandalaArrlayer.rotate /90;
        if (quarter <= 4) {
            absX = 1;
            absY = -1;
        }
        if (quarter <= 3) {
            absX = -1;
            absY = -1;
        }
        if (quarter <= 2) {
            absX = -1;
            absY = 1;
        }
        if (quarter <= 1) {
            absX = 1;
            absY = 1;
        }

        if (draged === 'yellow') {
            if (Math.abs(movementX * absX + movementY * absY) > hold) return;
            value = Number(
                (
                    mandalaArrlayer.diameter +
                    (movementX * absX + movementY * absY) / 20
                ).toFixed(2)
            );
            if (value < 0 || value > 60) return;
            dispatch(changeLayerArr({ name: 'diameter', value }));
        }

        if (draged === 'white') {

            if (Math.abs(movementX * absX + movementY * absY) > hold) return;
            value = Number(
                (
                    mandalaArrlayer.scale +
                    (movementX * absX + movementY * absY) / 1000
                ).toFixed(3)
            );
            if (value < 0.01 || value > 0.6) return;
            dispatch(changeLayerArr({ name: 'scale', value }));
        }

        quarter =  mandalaArrlayer.svgRotate /90;
        if (quarter <= 4) {
            absX = 1;
            absY = -1;
        }
        if (quarter <= 3) {
            absX = -1;
            absY = -1;
        }
        if (quarter <= 2) {
            absX = -1;
            absY = 1;
        }
        if (quarter <= 1) {
            absX = 1;
            absY = 1;
        }
        if (draged === 'violet') {

            if (Math.abs(movementX * absX + movementY * absY) > hold) return;
            value = Number(
                (
                    mandalaArrlayer.strokeWidth +
                    (movementX * absX + movementY * absY) / 100
                ).toFixed(2)
            );
            if (value < 0 || value > 5) return;
            dispatch(changeLayerArr({ name: 'strokeWidth', value }));
        }
        if (draged === 'limegreen') {
            if (Math.abs(movementX * absX + movementY * absY) > hold) return;
            value = Number(
                (
                    mandalaArrlayer.items +
                    (movementX * absX + movementY * absY) / 15
                ).toFixed(1)
            );
            if (value < 1 || value > 32) return;
            dispatch(changeLayerArr({ name: 'items', value }));
        }

        if (draged === 'red' || 'orange' || 'blue' || 'lightBlue') {
            if (Math.abs(movementX) > hold) return;
            const x = -(window.innerHeight / 2 - clientY);
            const y = window.innerWidth / 2 - clientX;
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
                    value: value,
                })
            );
        }
    }

    const handleMouseOut = (up: boolean = false) => {
        if (up) handleMouseUp();
        svgBoardBackground?.current?.setAttribute(
            'style',
            `transform: rotate(${mandalaArrlayer.rotate}deg);
             background-color: transparent; opacity: 0;`
        );
        document?.getElementById("menu-layer")?.setAttribute(
            'style',
            `z-index: 10;`
        );
    };
    const handleMouseOver = () => {
        svgBoardBackground?.current?.setAttribute(
            'style',
            `transform: rotate(${mandalaArrlayer.rotate}deg);
             background-color: transparent; opacity: 1;`
        );
        document?.getElementById("menu-layer")?.setAttribute(
            'style',
            `z-index: 0;`
        );
    };

    return (
        <div
            onClick={handleClick}
            ref={refs}
            className="svgBoard"
            onMouseUp={handleMouseUp}
            onTouchEnd={() => handleMouseOut(true)}
        >
            <div ref={svgBoardColorPalette} id="color-palette"></div>
            {mandala}
            <div style={{backgroundColor: '#ffffff00', position: 'absolute', width: '100vw', height: '100vh'}}></div>
            <div
                ref={svgBoardBackground}
                className="layer-controller-background"
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                onTouchMove={(e) => {
                    handleTouchMove(e);
                }}
                onMouseUp={handleMouseUp}
                onMouseOut={() => handleMouseOut()}
                onMouseOver={handleMouseOver}
                onTouchStart={handleMouseOver}
                style={{
                    transform: `rotate(${mandalaArrlayer.rotate}deg)`,
                }}
            >
                <div className="layer-controller">
                    <div
                        className="layer-controller-end"
                        onMouseDown={handleMouseDownRed}
                        onTouchStart={handleMouseDownRed}
                    />
                    <div
                        className="layer-controller-end yellow"
                        style={{
                            left: `${49 + mandalaArrlayer.diameter * 0.81}%`,
                        }}
                        onMouseDown={handleMouseDownYellow}
                        onTouchStart={handleMouseDownYellow}
                    />
                    <div
                        className="layer-controller-end white"
                        style={{
                            left: `${mandalaArrlayer.scale * 80 - 2.5}%`,
                        }}
                        onMouseDown={handleMouseDownWhite}
                        onTouchStart={handleMouseDownWhite}
                    />
                </div>
                <div
                    className="layer-controller item-controller"
                    style={{
                        transform: `rotate(${
                            mandalaArrlayer.svgRotate - mandalaArrlayer.rotate
                        }deg) translateY(-3vh)`,
                    }}
                >
                    <div
                        className="layer-controller-end orange"
                        onMouseDown={handleMouseDownOrange}
                        onTouchStart={handleMouseDownOrange}
                    />
                    <div
                        className="layer-controller-end blue"
                        onMouseDown={handleMouseDownBlue}
                        onTouchStart={handleMouseDownBlue}
                    />
                    <div
                        className="layer-controller-end lightblue"
                        onMouseDown={handleMouseDownLightBlue}
                        onTouchStart={handleMouseDownLightBlue}
                    />
                    <div
                        className="layer-controller-end violet"
                        style={{
                            left: `${58 + mandalaArrlayer.strokeWidth * 7}%`,
                        }}
                        onMouseDown={handleMouseDownViolet}
                        onTouchStart={handleMouseDownViolet}
                    />
                    <div
                        className="layer-controller-end limegreen"
                        style={{
                            left: `${(mandalaArrlayer.items - 1) * 1.2}%`,
                        }}
                        onMouseDown={handleMouseDownLimeGreen}
                        onTouchStart={handleMouseDownLimeGreen}
                    />
                </div>
            </div>
        </div>
    );
}

export default SvgBoard;


// function IFrame({ children } : any) {
//     const [ref, setRef] = useState<any>();
//     const container = ref?.contentWindow?.document?.body;
// //   const container = document.getElementById("mandala")
//     return (
//       <div ref={setRef} title="mandala" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '40vw', width: '60vw', height: '100vh', zIndex: '1'}}>
//         {container && createPortal(children, container)}
//       </div>
//     );
//   }