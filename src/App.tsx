import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Main from './views/main/Main';
import Mandala from './views/mandala/Mandala';
import Gallery from './views/gallery/Gallery';

function App() {
    const handle = useFullScreenHandle();

    useEffect(() => {
        const el = ReactDOM.findDOMNode(document.querySelector('#loader'));
        if (el) el.remove();
    }, []);

    return (
        <Router>
            <FullScreen handle={handle}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/mandala"
                        element={<Mandala handle={handle} />}
                    />
                    <Route
                        path="/gallery"
                        element={<Gallery handle={handle} />}
                    />
                    <Route path="*" element={<Main />} />
                </Routes>
            </FullScreen>
        </Router>
    );
}

export default App;
