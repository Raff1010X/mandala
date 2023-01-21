import './gallery.css';
import { FullScreenHandle } from '../mandala/mandalaType';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LogoEditable from '../mandala/menu/LogoEditable';
// import BrushIcon from '@mui/icons-material/Brush';
import SvgCircle from '../mandala/board/SvgCircle';

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    // editMandalaFromGallery,
    selectFileMandala,
    selectFileName,
    selectFileTransform,
    selectStatus,
    selectUserInfo,
} from '../mandala/mandalaSlice';
import { ReactNode, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
import { getMandala } from '../mandala/mandalaAPI';
import { classAdd, classRemove } from '../mandala/menu/handleMenu';

function Gallery({ handle }: { handle: FullScreenHandle }) {
    // const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const select = useAppSelector;

    let { name, origin, message } = select(selectUserInfo);
    const status = select(selectStatus);
    let fileName = select(selectFileName);

    const { rotateX, rotateY, rotateZ, perspective } =
        select(selectFileTransform);

    const mandalaArr = useAppSelector(selectFileMandala);
    const mandalaArrLen = mandalaArr.length - 1;

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

    function handleClickFullscreen() {
        if (handle.active) handle.exit();
        else handle.enter();
    }

    useEffect(() => {
        dispatch(getMandala(-1));
    }, [dispatch]);

    function handleClickPrev() {
        if (status !== 'idle') return
        classAdd('gallery-mandala', 'gallery-mandala--loading');
        classAdd('loader2', 'loader--loading');
        setTimeout(() => {
            dispatch(getMandala(fileName - 1));
        }, 350);
    }

    function handleClickNext() {
        if (status !== 'idle') return
        classAdd('gallery-mandala', 'gallery-mandala--loading');
        classAdd('loader2', 'loader--loading');
        setTimeout(() => {
            dispatch(getMandala(fileName + 1));
        }, 350);
    }

    // function handleClickEdit() {
    //     dispatch(editMandalaFromGallery());
    //     navigate('/mandala');
    //     setTimeout(() => {
    //         classAdd('burger-menu', 'burger-menu--hidden');
    //         classAdd('menu-layers', 'menu-layers--open');
    //     }, 750);
    // }

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (status === 'idle') {
            timer = setTimeout(() => {
                classRemove('gallery-mandala', 'gallery-mandala--loading');
                classRemove('loader2', 'loader--loading');
            }, 350);
        } 
        return () => clearTimeout(timer);
    }, [status]);
 

    return (
        <div className="gallery">
            <div id="gallery-mandala" className="gallery-mandala gallery-mandala--loading">
                {mandala}
            </div>
            <div id="loader2" className="loader2 loader--loading"></div>
            <div
                style={{
                    backgroundColor: '#ffffff00',
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh'
                }}
            ></div>
            {/* <div className="logo-img"/> */}
            <LogoEditable />
            <div className="gallery-info">
                <i>
                    <FormatQuoteIcon />
                </i>
                <div className="gallery-message">
                    {status === 'loading' ? 'Loadind mandala...' : message}
                </div>
                <div className="gallery-author">
                    {status === 'loading'
                        ? 'Mandala Creators'
                        : `${name}, ${origin}`}
                </div>
            </div>
            <div
                className="gallery-button gallery-button--prev"
                onClick={handleClickPrev}
            >
                <i>
                    <ArrowBackIosNewIcon /> Prev
                </i>
            </div>
            <div
                className="gallery-button gallery-button--next"
                onClick={handleClickNext}
            >
                <i>
                    Next <ArrowForwardIosIcon />
                </i>
            </div>
            <div className="gallery-top-icon" onClick={handleClickFullscreen}>
                <i>
                    <FullscreenIcon />
                </i>
            </div>
            {/* { (!handle.active) ?
                <div className="gallery-top-icon gallery-top-icon--edit">
                    <i>
                        <Popup trigger={<BrushIcon />} position="left center">
                            <div onClick={handleClickEdit}>
                                Click this popup to open this mandala in editor.
                            </div>
                        </Popup>
                    </i>
                </div> : null
            } */}
        </div>
    );
}

export default Gallery;
