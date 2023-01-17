import './gallery.css';
import { FullScreenHandle } from '../mandala/mandalaType';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SvgCircle from '../mandala/board/SvgCircle';
import { useAppSelector } from '../../app/hooks';
import { selectMandalaArr, selectTransform } from '../mandala/mandalaSlice';
import { ReactNode } from 'react';
import LogoEditable from '../mandala/menu/LogoEditable';

function Gallery({ handle }: { handle: FullScreenHandle }) {
    const { rotateX, rotateY, rotateZ, perspective } =
        useAppSelector(selectTransform);

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

    return (
        <div className="gallery">
            <div className="gallery-mandala">{mandala}</div>
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
                <div className="gallery-message">
                    Long message from author of this mandala to show on the
                    screen Long message from author of this mandala to show on
                    the screen
                </div>
                <div className="gallery-author">Name, origin</div>
            </div>
            <div className="gallery-button gallery-button--prev">
                <i>
                    <ArrowBackIosNewIcon />
                </i>
            </div>
            <div className="gallery-button gallery-button--next">
                <i>
                    <ArrowForwardIosIcon />
                </i>
            </div>
            <div className="gallery-fullscreen" onClick={handleClickFullscreen}>
                <i>
                    <FullscreenIcon />
                </i>
            </div>
        </div>
    );
}

export default Gallery;
