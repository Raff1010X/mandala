import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectMandalaArr,
    selectLayer,
    changeLayerArr
} from '../../features/mandala/mandalaSlice';

import CloseIcon from '@mui/icons-material/Close';
import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { Checkbox, Tooltip } from '@mui/material';
import './menu.css';
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
    let { items, rotate, diameter, svgItem, stroke, fill, svgRotate, scale } =
        mandalaArr;

    let fillCheck = true;
    if (fill === "transparent") {
        fill = "#ffffff";
        fillCheck = false;
    }

    function handleClickCloseMenu() {
        let element = document.getElementById('menu-layer') as HTMLDivElement;
        element.classList.remove('menu-layers--open');
        element = document.getElementById('menu-layers') as HTMLDivElement;
        element.classList.add('menu-layers--open');
    }

    function handleClickOpenImageMenu() {
        let element = document.getElementById('menu-image') as HTMLDivElement;
        element.classList.add('menu-layers--open');
        element = document.getElementById('menu-layer') as HTMLDivElement;
        element.classList.remove('menu-layers--open');
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | any) {
        if ( e.target.name === "fill-check") {
            if (e.target.checked) dispatch(changeLayerArr({name: 'fill', value: '#ffffff'}))
            else dispatch(changeLayerArr({name: 'fill', value: 'transparent'}))
        } else {
            dispatch(changeLayerArr({name: e.target.name, value: e.target.value}))
        }
    }

    return (
        <div id="menu-layer" className="menu">
            <div
                className="menu--top-bar"
                onClick={() => handleClickCloseMenu()}
            >
                <div>Layer</div>
                <i>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu--item-selector no-scroll fit-height">
                <div
                    className="menu--item-select"
                    onClick={() => handleClickOpenImageMenu()}
                >
                    <SvgItem item={svgItem} stroke="#940083" fill="white" rotate={0} scale={1} position="relative"/>
                </div>
                <div className="menu--select">
                    <label htmlFor="items">Number of items:</label>
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
                    <label htmlFor="diameter">Diameter of layer:</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="diameter"
                        name="diameter"
                        min={1}
                        max={60}
                        value={diameter}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="rorate">Rotation of layer:</label>
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
                        value={rotate}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select-color">
                    <label htmlFor="fill">Fill:</label>
                    <Checkbox size="small" color="secondary" id="fill-check" name="fill-check" checked={fillCheck} onChange={(e) => handleChange(e)}/>
                    <input type="color" id="fill" name="fill" value={fill} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="menu--select-color">
                    <label htmlFor="stroke">Stroke:</label>
                    <input type="color" id="stroke" name="stroke" value={stroke} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="menu--select">
                    <label htmlFor="svgRotate">Rotation of item:</label>
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
                        value={svgRotate}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu--select">
                    <label htmlFor="scale">Scale of item:</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="secondary"
                        id="scale"
                        name="scale"
                        min={0.02}
                        max={0.6}
                        step={0.02}
                        value={scale}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuLayer;
