import SvgBoard from './components/board/SvgBoard';
import './App.css';

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

function App() {
    return (
        <div className="App">
            {/* <div className="app-menu">
                <div className="app-menu--top-bar">
                    <div>Layers</div>
                    <i><CloseIcon /></i>
                </div>
                <div className="app-menu--leyers">
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                    <div className="app-menu--leyer"></div>
                </div>
            </div> */}

            <div className="app-menu">
                <div className="app-menu--top-bar">
                    <div>Layer</div>
                    <i>
                        <CloseIcon />
                    </i>
                </div>
                <div className="app-menu--leyers">
                    <div className="app-menu--item"></div>
                    <div className="app-menu--select">
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
                    <div className="app-menu--select">
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
                    <div className="app-menu--select">
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
                    <div className="app-menu--select-color">
                        <label htmlFor="fill">Fill:</label>
                        <Checkbox
                        size="small"
                        color="secondary"
                        id="fill-check" />
                        <input type="color" id="fill" />
                    </div>
                    <div className="app-menu--select-color">
                        <label htmlFor="stroke">Stroke:</label>
                        <input type="color" id="stroke" />
                    </div>
                    <div className="app-menu--select">
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
                    <div className="app-menu--select">
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

            {/* <div className="app-menu">
                <div className="app-menu--top-bar">
                    <div>Select image</div>
                    <i><CloseIcon /></i>
                </div>
                <div className="app-menu--item-selector">
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                    <div className="app-menu--item-select"></div>
                </div>
            </div> */}

            <SvgBoard />
        </div>
    );
}

export default App;
