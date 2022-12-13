import SvgCircle from './components/svgCircle/SvgCircle';

import './App.css';

function App() {
        let mandalaArr = [
                {
                        items:4,
                        rotate:0,
                        diameter:3,
                        svgItem:30,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:6,
                        rotate:0,
                        diameter:4,
                        svgItem:31,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:8,
                        rotate:0,
                        diameter:5,
                        svgItem:32,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:10,
                        rotate:0,
                        diameter:6,
                        svgItem:33,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:12,
                        rotate:0,
                        diameter:7,
                        svgItem:34,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:14,
                        rotate:0,
                        diameter:8,
                        svgItem:35,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:16,
                        rotate:0,
                        diameter:9,
                        svgItem:36,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
                {
                        items:18,
                        rotate:0,
                        diameter:10,
                        svgItem:37,
                        stroke:"#018686",
                        fill:"transparent",
                        svgRotate:90,
                        scale:.1,
                },
        ]



        let mandala =[]

        mandalaArr.forEach(el => {
                mandala.push(
                <SvgCircle 
                        items={el.items}
                        rotate={el.rotate}
                        diameter={el.diameter}
                        svgItem={el.svgItem}
                        stroke={el.stroke}
                        fill={el.fill}
                        svgRotate={el.svgRotate}
                        scale={el.scale}
                />)
        })

console.log(mandala)


    return (
        <div className="App">
            <header className="App-header">
                {mandala}
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
