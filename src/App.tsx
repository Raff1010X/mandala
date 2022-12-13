import SvgCircle from './components/svgCircle/SvgCircle';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <SvgCircle 
                    items={4}
                    rotate={0}
                    diameter={3}
                    svgItem={37}
                    stroke="#018686"
                    fill="transparent"
                    svgRotate={90}
                    scale={.1}
               />
            <SvgCircle 
                    items={8}
                    rotate={0}
                    diameter={10}
                    svgItem={38}
                    stroke="#215f43"
                    fill="#fff5"
                    svgRotate={90}
                    scale={.09}
               />
            <SvgCircle 
                    items={10}
                    rotate={0}
                    diameter={20}
                    svgItem={39}
                    stroke="#00680a"
                    fill="#fff0"
                    svgRotate={12}
                    scale={.1}
               />
            <SvgCircle 
                    items={12}
                    rotate={0}
                    diameter={125}
                    svgItem={40}
                    stroke="#ffe772"
                    fill="#ffffff27"
                    svgRotate={90}
                    scale={.1}
               />
            <SvgCircle 
                    items={4}
                    rotate={0}
                    diameter={3}
                    svgItem={52}
                    stroke="#018686"
                    fill="transparent"
                    svgRotate={90}
                    scale={.1}
               />
            <SvgCircle 
                    items={8}
                    rotate={22.5}
                    diameter={15}
                    svgItem={53}
                    stroke="#5f2121"
                    fill="#fff5"
                    svgRotate={90}
                    scale={.09}
               />
            <SvgCircle 
                    items={10}
                    rotate={18}
                    diameter={20}
                    svgItem={54}
                    stroke="#00680a"
                    fill="#fff0"
                    svgRotate={12}
                    scale={.1}
               />
            <SvgCircle 
                    items={12}
                    rotate={0}
                    diameter={125}
                    svgItem={55}
                    stroke="#ffe772"
                    fill="#ffffff27"
                    svgRotate={90}
                    scale={.1}
               />
            </header>
        </div>
    );
}

export default App;
