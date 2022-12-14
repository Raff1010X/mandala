import './menu.css';

import CloseIcon from '@mui/icons-material/Close';
import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { Checkbox, Tooltip } from '@mui/material';

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}


function menuLayer() {
    return (
                <div className="menu">
                <div className="menu--top-bar">
                    <div>Layer</div>
                    <i>
                        <CloseIcon />
                    </i>
                </div>
                <div className="menu--item-selector no-scroll">
                    <div className="menu--item-select"></div>
                    <div className="menu--select">
                        <label htmlFor="number">Number of items:</label>
                        <Slider

                            valueLabelDisplay="auto"
                            components={{
                                ValueLabel: ValueLabelComponent,
                            }}
                            size="small"
                            color="secondary"
                            id="number"
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
                        />
                    </div>
                    <div className="menu--select">
                        <label htmlFor="rol">Rotation of layer:</label>
                        <Slider
                            valueLabelDisplay="auto"
                            components={{
                                ValueLabel: ValueLabelComponent,
                            }}
                            size="small"
                            color="secondary"
                            id="layer-rotation"
                        />
                    </div>
                    <div className="menu--select-color">
                        <label htmlFor="fill">Fill:</label>
                        <Checkbox
                        size="small"
                        color="secondary"
                        id="fill-check" />
                        <input type="color" id="fill" />
                    </div>
                    <div className="menu--select-color">
                        <label htmlFor="stroke">Stroke:</label>
                        <input type="color" id="stroke" />
                    </div>
                    <div className="menu--select">
                        <label htmlFor="rotation">Rotation of item:</label>
                        <Slider
                            valueLabelDisplay="auto"
                            components={{
                                ValueLabel: ValueLabelComponent,
                            }}
                            size="small"
                            color="secondary"
                            id="rotation"
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
                        />
                    </div>
                </div>
            </div>
    );
}

export default menuLayer;
