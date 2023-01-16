import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    changeTransform,
    selectTransform,
} from '../mandalaSlice';
import { classRemove } from './handleMenu';
import CloseIcon from '@mui/icons-material/Close';
import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { Tooltip } from '@mui/material';


function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function MenuTransform() {
    const dispatch = useAppDispatch();
    const transform = useAppSelector(selectTransform);

    let { rotateX, rotateY, rotateZ, perspective } = transform;

    function handleClickCloseMenu() {
        classRemove('menu-transform', 'menu-layers--open')
        classRemove('burger-menu', 'burger-menu--hidden')
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | any) {
        dispatch(
            changeTransform({ name: e.target.name, value: e.target.value })
        );
    }

    return (
        <div id="menu-transform" className="menu">
            <div
                className="menu--top-bar"
                onClick={() => handleClickCloseMenu()}
            >
                <div>Transform</div>
                <i>
                    <CloseIcon />
                </i>
            </div>
            <div className="menu-transform">
                <div className="menu-transform-select">
                    <label htmlFor="rotateX">X</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="primary"
                        id="rotateX"
                        name="rotateX"
                        orientation="vertical"
                        min={0}
                        max={180}
                        step={3}
                        value={rotateX}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu-transform-select">
                    <label htmlFor="rotateY">Y</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="primary"
                        id="rotateY"
                        name="rotateY"
                        orientation="vertical"
                        min={0}
                        max={180}
                        step={3}
                        value={rotateY}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu-transform-select">
                    <label htmlFor="rotateZ">Z</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="primary"
                        id="rotateZ"
                        name="rotateZ"
                        orientation="vertical"
                        min={-30}
                        max={130}
                        step={3}
                        value={rotateZ}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="menu-transform-select">
                    <label htmlFor="perspective">P</label>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        size="small"
                        color="primary"
                        id="perspective"
                        name="perspective"
                        orientation="vertical"
                        min={2.5}
                        max={4}
                        step={0.025}
                        value={perspective}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuTransform;
