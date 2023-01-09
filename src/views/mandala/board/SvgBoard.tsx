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

    const [dragYellow, setDragYellow] = useState(false);
    const [dragRed, setDragRed] = useState(false);
    const [dragOrange, setDragOrange] = useState(false);
    const [dragBlue, setDragBlue] = useState(false);
    const [dragWhite, setDragWhite] = useState(false);
    const [dragLightBlue, setDragLightBlue] = useState(false);
    const [dragViolet, setDragViolet] = useState(false);

    const handleMouseDownYellow = () => {
        setDragYellow(true);
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseUpYellow = () => {
        setDragYellow(false);
        dispatch(setHoveredLayer(-1));
    };
    const handleMouseDownRed = () => {
        setDragRed(true);
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseUpRed = () => {
        setDragRed(false);
        dispatch(setHoveredLayer(-1));
    };
    const handleMouseDownOrange = () => {
        setDragOrange(true);
    };
    const handleMouseUpOrange = () => {
        setDragOrange(false);
        dispatch(setHoveredLayer(-1));
    };
    const handleMouseDownBlue = () => {
        setDragBlue(true);
    };
    const handleMouseUpBlue = () => {
        setDragBlue(false);
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseDownWhite = () => {
        setDragWhite(true);
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseUpWhite = () => {
        setDragWhite(false);
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseDownLightBlue = () => {
        setDragLightBlue(true);
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseUpLightBlue = () => {
        setDragLightBlue(false);
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseDownViolet = () => {
        setDragViolet(true);
        dispatch(setHoveredLayer(Number(layer)));
    };
    const handleMouseUpViolet = () => {
        setDragViolet(false);
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseUp = () => {
        setDragRed(false);
        setDragYellow(false);
        setDragOrange(false);
        setDragBlue(false);
        setDragLightBlue(false);
        setDragWhite(false);
        setDragViolet(false);
        dispatch(setHoveredLayer(-1));
    };

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let value = 0;
        let value2 = 0;

        if (dragYellow) {
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

        if (dragWhite) {
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
        

        if (dragViolet) {
            let absX = 1;
            let absY = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate -90> 0)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate -90> 90)
                absX = 1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate -90> 270)
                absX = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate -90> 0)
                absY = -1;
            if (mandalaArrlayer.rotate + mandalaArrlayer.svgRotate -90> 180)
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

        if (dragRed || dragOrange || dragBlue || dragLightBlue) {
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

        if (dragRed) {
            dispatch(changeLayerArr({ name: 'rotate', value }));
        }
        if (dragOrange) {
            dispatch(changeLayerArr({ name: 'fill', value: getColor(value) }));
            dispatch(changeLayerArr({ name: 'fillOpacity', value: value2 }));
        }
        if (dragBlue) {
            // background?.current?.setAttribute('style', `background-color: ${getColor(value)}`)
            dispatch(
                changeLayerArr({ name: 'stroke', value: getColor(value) })
            );
            dispatch(changeLayerArr({ name: 'strokeOpacity', value: value2 }));
        }
        if (dragLightBlue) {
            dispatch(
                changeLayerArr({
                    name: 'svgRotate',
                    value: value - 90 - mandalaArrlayer.rotate,
                })
            );
        }
    };

    function distance(x: number, y: number, x1: number, y1: number): number {
        return Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
    }

    function getColor(hue: number) {
        const color = hslToRgb(hue / 360, 1, 0.5);
        return (
            '#' +
            componentToHex(color[0]) +
            componentToHex(color[1]) +
            componentToHex(color[2])
        );
        // return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }

    function componentToHex(c: number) {
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    function hslToRgb(h: number, s: number, l: number) {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    return (
        <div
            onClick={handleClick}
            ref={refs}
            className="svgBoard"
            onMouseUp={handleMouseUp}
        >
            {mandala}
            <div
                className="layer-controller-background"
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                onMouseUp={handleMouseUp}
                style={{
                    transform: `rotate(${mandalaArrlayer.rotate}deg)`,
                }}
            >
                <div className="layer-controller">
                    <div
                        className="layer-controller-end"
                        onMouseDown={handleMouseDownRed}
                        onMouseUp={handleMouseUpRed}
                    />
                    <div
                        className="layer-controller-end yellow"
                        style={{
                            left: `${49 + mandalaArrlayer.diameter * 0.81}%`,
                        }}
                        onMouseDown={handleMouseDownYellow}
                        onMouseUp={handleMouseUpYellow}
                    />
                    <div
                        className="layer-controller-end white"
                        style={{
                            left: `${mandalaArrlayer.scale * 80 - 2.5}%`,
                        }}
                        onMouseDown={handleMouseDownWhite}
                        onMouseUp={handleMouseUpWhite}
                    />
                </div>
                <div
                    className="layer-controller item-controller"
                    style={{
                        transform: `rotate(${
                            mandalaArrlayer.svgRotate + 90
                        }deg) translateY(-2vh)`,
                    }}
                >
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
                    <div
                        className="layer-controller-end lightblue"
                        onMouseDown={handleMouseDownLightBlue}
                        onMouseUp={handleMouseUpLightBlue}
                    />
                    <div
                        className="layer-controller-end violet"
                        style={{
                            left: `${mandalaArrlayer.strokeWidth * 10 + 10}%`,
                        }}
                        onMouseDown={handleMouseDownViolet}
                        onMouseUp={handleMouseUpViolet}
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
