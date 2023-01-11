import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    selectMandalaArr,
    selectLayer,
    changeLayerArr,
    setLayer,
} from '../mandalaSlice';
import { classAdd, classRemove } from './handleMenu';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { Tooltip } from '@mui/material';
import SvgItem from '../board/SvgItem';

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function MenuLayer() {
    const dispatch = useAppDispatch();
    const layer = useAppSelector(selectLayer);
    const mandalaArr = useAppSelector(selectMandalaArr)[layer];

    let {
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
    } = mandalaArr;

    function handleClickCloseMenu() {
        classRemove('menu-layer', 'menu-layers--open');
        classAdd('menu-layers', 'menu-layers--open');
    }

    function handleClickOpenImageMenu() {
        classAdd('menu-image', 'menu-layers--open');
        classRemove('menu-layer', 'menu-layers--open');
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | any) {
        dispatch(
            changeLayerArr({ name: e.target.name, value: e.target.value })
        );
    }

    function handlePrevLayer() {
        dispatch(setLayer(-100));
    }

    function handleNextLayer() {
        dispatch(setLayer(100));
    }

    return (
        <div id="menu-layer" className="menu">
            <div className="menu--top-bar">
                <div>Layer {Number(layer) + 1}</div>
                <i onClick={handleClickCloseMenu}>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector">
                <div className="menu-layer-item-wrapper">
                    <div
                        className="menu--layer-changer"
                        onClick={handlePrevLayer}
                    >
                        <i>
                            <NavigateBeforeIcon />
                        </i>
                    </div>
                    <div
                        className="menu--item-select"
                        onClick={handleClickOpenImageMenu}
                    >
                        <p className="menu-image-title">Image {svgItem}</p>
                        <SvgItem
                            index={layer}
                            item={svgItem}
                            strokeWidth={0.35}
                            strokeOpacity={1}
                            fillOpacity={0.25}
                            stroke={stroke}
                            fill={fill}
                            rotate={0}
                            scale={1}
                            position="relative"
                            rotateX={0}
                            rotateY={0}
                            rotateZ={0}
                        />
                    </div>
                    <div
                        className="menu--layer-changer"
                        onClick={handleNextLayer}
                    >
                        <i>
                            <NavigateNextIcon />
                        </i>
                    </div>
                </div>
                <div className="menu--select">
                    <label htmlFor="items">Number of items: {Math.ceil(items)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="items"
                        name="items"
                        min={1}
                        max={32}
                        value={items}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="diameter">Diameter of layer: {diameter.toFixed(2)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="diameter"
                        name="diameter"
                        min={0}
                        max={60}
                        step={0.01}
                        value={diameter}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="rotate">Rotation of layer: {rotate.toFixed(2)} deg</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="rotate"
                        name="rotate"
                        min={0}
                        max={360}
                        step={0.05}
                        value={rotate}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select-color">
                    <label htmlFor="stroke">Stroke:</label>
                    <input
                        type="color"
                        id="stroke"
                        name="stroke"
                        value={stroke}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="strokeWidth">Stroke width: {strokeWidth.toFixed(2)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="strokeWidth"
                        name="strokeWidth"
                        min={0}
                        max={5}
                        step={0.05}
                        value={strokeWidth}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="strokeOpacity">Stroke opacity: {strokeOpacity.toFixed(2)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="strokeOpacity"
                        name="strokeOpacity"
                        min={0}
                        max={1}
                        step={0.01}
                        value={strokeOpacity}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select-color">
                    <label htmlFor="fill">Fill:</label>
                    <input
                        type="color"
                        id="fill"
                        name="fill"
                        value={fill}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="fillOpacity">Fill opacity: {fillOpacity.toFixed(2)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="fillOpacity"
                        name="fillOpacity"
                        min={0}
                        max={1}
                        step={0.01}
                        value={fillOpacity}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="svgRotate">Rotation of item: {svgRotate.toFixed(2)} deg</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="svgRotate"
                        name="svgRotate"
                        min={0}
                        max={360}
                        step={0.05}
                        value={svgRotate}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="scale">Scale of item: {scale.toFixed(4)}</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="scale"
                        name="scale"
                        min={0.01}
                        max={0.6}
                        step={0.0005}
                        value={scale}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuLayer;
