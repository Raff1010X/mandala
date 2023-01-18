export const newLayer = {
    items: 6,
    rotate: 0,
    diameter: 12,
    svgItem: 1,
    stroke: '#000000',
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

// export let mandalaArr = [
//     {
//         items: 6,
//         rotate: 0,
//         diameter: 10,
//         svgItem: 1,
//         stroke: '#ff0000',
//         strokeWidth: 0.75,
//         strokeOpacity: 1,
//         fill: '#ffffff',
//         fillOpacity: 0.5,
//         svgRotate: 89,
//         scale: 0.1,
//     },
// ]

export let mandalaArr = [
    {
        items: 6,
        rotate: 0.38,
        diameter: 0.55,
        svgItem: 6,
        stroke: '#000000',
        strokeWidth: 1.35,
        strokeOpacity: 1,
        fill: '#000000',
        fillOpacity: 0,
        svgRotate: 128,
        scale: 0.027,
    },
    {
        items: 1,
        rotate: 0,
        diameter: 0,
        svgItem: 6,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ff008c',
        fillOpacity: 0.35,
        svgRotate: 90,
        scale: 0.0595,
    },
    {
        items: 3,
        rotate: 0,
        diameter: 12.09,
        svgItem: 27,
        stroke: '#000000',
        strokeWidth: 0.5,
        strokeOpacity: 1,
        fill: '#ff009a',
        fillOpacity: 0.26,
        svgRotate: 90,
        scale: 0.2495,
    },
    {
        items: 3,
        rotate: 59.7,
        diameter: 12.09,
        svgItem: 26,
        stroke: '#000000',
        strokeWidth: 0.5,
        strokeOpacity: 1,
        fill: '#0f00ff',
        fillOpacity: 0.27,
        svgRotate: 90,
        scale: 0.2465,
    },
    {
        items: 2,
        rotate: 29.73,
        diameter: 20.48,
        svgItem: 11,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#00bfff',
        fillOpacity: 0.23,
        svgRotate: 90,
        scale: 0.114,
    },
    {
        items: 2,
        rotate: 29.8,
        diameter: 7.44,
        svgItem: 8,
        stroke: '#000000',
        strokeWidth: 1.5,
        strokeOpacity: 1,
        fill: '#ff0600',
        fillOpacity: 0.21,
        svgRotate: 90,
        scale: 0.0315,
    },
    {
        items: 3,
        rotate: 29.76,
        diameter: 12.28,
        svgItem: 9,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#00ff50',
        fillOpacity: 0.29,
        svgRotate: 90,
        scale: 0.0595,
    },
    {
        items: 3,
        rotate: 89.51,
        diameter: 12.33,
        svgItem: 10,
        stroke: '#000000',
        strokeWidth: 1.1,
        strokeOpacity: 1,
        fill: '#ff0004',
        fillOpacity: 0.32,
        svgRotate: 90,
        scale: 0.061,
    },
    {
        items: 2,
        rotate: 323.49,
        diameter: 19.58,
        svgItem: 12,
        stroke: '#000000',
        strokeWidth: 0.8,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0,
        svgRotate: 85.97,
        scale: 0.129,
    },
    {
        items: 2.3,
        rotate: 330.97,
        diameter: 19.88,
        svgItem: 20,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#000000',
        fillOpacity: 0,
        svgRotate: 90,
        scale: 0.132,
    },
    {
        items: 2.7,
        rotate: 337.47,
        diameter: 19.73,
        svgItem: 18,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0,
        svgRotate: 93.81,
        scale: 0.139,
    },
    {
        items: 3,
        rotate: 0.32,
        diameter: 4.75,
        svgItem: 5,
        stroke: '#000000',
        strokeWidth: 1.7,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0,
        svgRotate: 90,
        scale: 0.0375,
    },
    {
        items: 2.4,
        rotate: 329.97,
        diameter: 8.33,
        svgItem: 2,
        stroke: '#000000',
        strokeWidth: 1.2,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0,
        svgRotate: 90,
        scale: 0.0345,
    },
    {
        items: 1,
        rotate: 278.89,
        diameter: 17.66,
        svgItem: 14,
        stroke: '#000000',
        strokeWidth: 0,
        strokeOpacity: 1,
        fill: '#003fff',
        fillOpacity: 0.35,
        svgRotate: 86.01,
        scale: 0.125,
    },
    {
        items: 1,
        rotate: 260.88,
        diameter: 17.62,
        svgItem: 15,
        stroke: '#000000',
        strokeWidth: 0,
        strokeOpacity: 1,
        fill: '#ff00a9',
        fillOpacity: 0.23,
        svgRotate: 93.58,
        scale: 0.13,
    },
    {
        items: 1.1,
        rotate: 269.73,
        diameter: 17.47,
        svgItem: 28,
        stroke: '#000000',
        strokeWidth: 0.45,
        strokeOpacity: 1,
        fill: '#0098ff',
        fillOpacity: 0.15,
        svgRotate: 88.74,
        scale: 0.068,
    },
    {
        items: 1.2,
        rotate: 87.34,
        diameter: 18.68,
        svgItem: 14,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ff4e00',
        fillOpacity: 0.27,
        svgRotate: 83.76,
        scale: 0.1,
    },
    {
        items: 1.2,
        rotate: 92.68,
        diameter: 18.64,
        svgItem: 15,
        stroke: '#000000',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#006bff',
        fillOpacity: 0.1,
        svgRotate: 98.62,
        scale: 0.1,
    },
    {
        items: 3,
        rotate: 329.71,
        diameter: 24.36,
        svgItem: 1,
        stroke: '#000000',
        strokeWidth: 0,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.25,
        svgRotate: 90,
        scale: 0.6,
    },
];
