import './gallery.css';
import { FullScreenHandle } from '../mandala/mandalaType';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LogoEditable from '../mandala/menu/LogoEditable';
import BrushIcon from '@mui/icons-material/Brush';
import SvgCircle from '../mandala/board/SvgCircle';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    selectMandalaArr,
    selectStatus,
    selectTransform,
    selectUserInfo,
} from '../mandala/mandalaSlice';
import { ReactNode, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getMandala } from '../mandala/mandalaAPI';
import { classAdd, classRemove } from '../mandala/menu/handleMenu';

function Gallery({ handle }: { handle: FullScreenHandle }) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const select = useAppSelector;

    const { name, origin, message } = select(selectUserInfo);
    const status = select(selectStatus);

    const { rotateX, rotateY, rotateZ, perspective } = select(selectTransform);

    const mandalaArr = useAppSelector(selectMandalaArr);
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
        classAdd('gallery-mandala', 'gallery-mandala--loading');
        dispatch(getMandala(1));
    }

    function handleClickNext() {
        classAdd('gallery-mandala', 'gallery-mandala--loading');
        dispatch(getMandala(15));
    }

    useEffect(() => {
        if (status === "loading") {
            classAdd('gallery-mandala', 'gallery-mandala--loading');
        }
        if (status === 'idle') {
            classRemove('gallery-mandala', 'gallery-mandala--loading');
        }
    }, [status]);

    return (
        <div className="gallery">
            <div id="gallery-mandala" className="gallery-mandala">
                {mandala}
            </div>
            <div
                style={{
                    backgroundColor: '#ffffff00',
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                }}
            ></div>
            {/* <div className="logo-img"/> */}
            <LogoEditable />
            <div className="gallery-info">
                <i>
                    <FormatQuoteIcon />
                </i>
                <div className="gallery-message">{message}</div>
                <div className="gallery-author">
                    {name}, {origin}
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
            <div
                className="gallery-top-icon gallery-top-icon--edit"
                onClick={() => navigate('/mandala')}
            >
                <i>
                    <BrushIcon />
                </i>
            </div>
        </div>
    );
}

export default Gallery;
