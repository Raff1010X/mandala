export const newLayer = {
    items: 6,
    rotate: 0,
    diameter: 12,
    svgItem: 1,
    stroke: '#1e72b9',
    strokeWidth: 0.75,
    strokeOpacity: 1,
    fill: '#ffffff',
    fillOpacity: 0.5,
    svgRotate: 90,
    scale: 0.1,
};

export const mandalaTransform = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    perspective: 3,
};

export type mandalaType =
    | 'items'
    | 'rotate'
    | 'diameter'
    | 'svgItem'
    | 'stroke'
    | 'strokeWidth'
    | 'strokeOpacity'
    | 'fill'
    | 'fillOpacity'
    | 'svgRotate'
    | 'scale';
export type transformType = 'rotateX' | 'rotateY' | 'rotateZ' | 'perspective';

export interface MandalaArrProps {
    items: number;
    rotate: number;
    diameter: number;
    svgItem: number;
    stroke: any;
    strokeWidth: number;
    strokeOpacity: number;
    fill: any;
    fillOpacity: number;
    svgRotate: number;
    scale: number;
}

export interface MandalaArrTransform {
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    perspective: number;
}

interface userInfo {
    name: string;
    origin: string;
    message: string;
}

export interface MandalaState {
    mandalaArr: MandalaArrProps[];
    layer: number;
    hoveredLayer: number;
    transform: MandalaArrTransform;
    fileName: number;
    fileMandala: MandalaArrProps[];
    fileTransform: MandalaArrTransform;
    userInfo: userInfo;
    status: 'idle' | 'loading' | 'failed';
}

export interface UserInfo {
    name: string;
    origin: string;
    message: string;
}

export interface FetchMandala {
    mandalaArr: MandalaArrProps[];
    transform: MandalaArrTransform;
    userInfo: UserInfo;
}

export interface FullScreenHandle {
    active: boolean;
    enter: () => Promise<void>;
    exit: () => Promise<void>;
    node: React.MutableRefObject<HTMLDivElement | null>;
}

export let mandalaArr = [
    {
        items: 6,
        rotate: 0,
        diameter: 10,
        svgItem: 1,
        stroke: '#1e72b9',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 89,
        scale: 0.1,
    },
]