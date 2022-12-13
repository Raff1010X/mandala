import SvgBoard from './components/board/SvgBoard';
import './App.css';

function App() {



    return (
        <div className="App">
            {/* <div className="app-menu">
                <div className="app-menu--top-bar">

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

                </div>
                <div className="app-menu--leyers">
<div className="app-menu--item">

</div>
<div className="app-menu--select">
    <label htmlFor='noif'>Number of items:</label>
    <input type="range" id="noif"/>
</div>
<div className="app-menu--select">
    <label htmlFor='dol'>Diameter of layer:</label>
    <input type="range" id="dol"/>
</div>
<div className="app-menu--select">
    <label htmlFor='rol'>Rotation of layer:</label>
    <input type="range" id="rol"/>
</div>
<div className="app-menu--select-color">
    <label htmlFor='foi'>Fill:</label>
    <input type="checkbox" id="foich"/>
    <input type="color" id="foi" value="#e66465"/>
</div>
<div className="app-menu--select-color">
    <label htmlFor='stoi'>Stroke:</label>
    <input type="color" id="stoi" value="#e66465"/>
</div>
<div className="app-menu--select">
    <label htmlFor='roi'>Rotation of item:</label>
    <input type="range" id="roi"/>
</div>
<div className="app-menu--select">
    <label htmlFor='soi'>Scale of item:</label>
    <input type="range" id="soi"/>
</div>

                </div>
            </div>

            <SvgBoard />
        </div>
    );
}

export default App;
