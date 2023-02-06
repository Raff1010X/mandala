import downloadjs from 'downloadjs';
import { toPng, toSvg } from 'html-to-image';
import { RefObject } from 'react';
import { classRemove } from './handleMenu';
import CloseIcon from '@mui/icons-material/Close';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PolylineIcon from '@mui/icons-material/Polyline';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
// import _ from 'lodash';


function Download({ refs }: { refs: RefObject<HTMLDivElement> | undefined }) {

    const hadleSaveImage = async (mode: string) => {
        refs?.current?.setAttribute(
            'style',
            'background: linear-gradient(120deg, #f3f3f3 0%, #d5d5d5 100%);'
        );

        let canvas;
        if (mode === 'png') canvas = await toPng(refs?.current as HTMLElement);
        if (mode === 'svg') canvas = await toSvg(refs?.current as HTMLElement);
        if (canvas) downloadjs(canvas, `download.${mode}`);

        
        // const originalObject = refs?.current as HTMLDivElement;
        // console.log(originalObject)
        // const copyWithoutCircularReferences = _.cloneDeep(originalObject);
        // const json = JSON.stringify(copyWithoutCircularReferences);
        // console.log(json)
        
        refs?.current?.setAttribute('style', 'background: transparent;');
        classRemove('menu-download', 'post-wrapper--visible');
    };

    function handleClickCloseMenu() {
        classRemove('menu-download', 'post-wrapper--visible');
    }

    return (
        <div id="menu-download" className="post-wrapper">
            <div className="post download">
                <div className="menu-post--top-bar">
                    <div>
                        <i>
                            <CloudDownloadIcon />
                        </i>
                        Download...
                    </div>
                    <i
                        onClick={() => {
                            handleClickCloseMenu();
                        }}
                    >
                        <CloseIcon />
                    </i>
                </div>
                <div className="post-form download-form">
                    <div className="post-buttons">
                        <button
                            className="post-button"
                            onClick={() => hadleSaveImage('png')}
                        >
                            <i>
                                <PhotoSizeSelectActualOutlinedIcon />
                            </i>
                            As PNG
                        </button>
                        <button
                            className="post-button"
                            onClick={() => hadleSaveImage('svg')}
                        >
                            <i>
                                <PolylineIcon />
                            </i>
                            As SVG
                        </button>
                    </div>
                    You can view downloaded images in web browser
                </div>
            </div>
        </div>
    );
}

export default Download;
