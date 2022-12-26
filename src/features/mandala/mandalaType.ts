export const newLayer = {
    items: 6,
    rotate: 0,
    diameter: 4,
    svgItem: 1,
    stroke: '#000000',
    strokeWidth: 1,
    strokeOpacity: 1,
    fill: '#ffffff',
    fillOpacity: 1,
    svgRotate: 90,
    scale: 0.1,
};

export const mandalaTransform = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    perspective: 3,
}

export type mandalaType = 'items' | 'rotate' | 'diameter' | 'svgItem' | 'stroke' | 'strokeWidth' | 'strokeOpacity' | 'fill' | 'fillOpacity' | 'svgRotate' | 'scale';
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

export interface MandalaState {
    mandalaArr: MandalaArrProps[];
    layer: number;
    transform: MandalaArrTransform;
    status: 'idle' | 'loading' | 'failed';
}

export let mandalaArr = [
    {
        items: 6,
        rotate: 0,
        diameter: 4,
        svgItem: 30,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
    {
        items: 6,
        rotate: 0,
        diameter: 7,
        svgItem: 31,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
    {
        items: 6,
        rotate: 29,
        diameter: 10,
        svgItem: 32,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
    {
        items: 24,
        rotate: 0,
        diameter: 14,
        svgItem: 33,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.05,
    },
    {
        items: 18,
        rotate: 0,
        diameter: 16,
        svgItem: 34,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
    {
        items: 18,
        rotate: 10,
        diameter: 18,
        svgItem: 35,
        stroke: '#cb02a0',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 270,
        scale: 0.1,
    },
    {
        items: 18,
        rotate: 0,
        diameter: 22,
        svgItem: 36,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
    {
        items: 18,
        rotate: 10,
        diameter: 22,
        svgItem: 37,
        stroke: '#ff00e1',
        strokeWidth: 0.75,
        strokeOpacity: 1,
        fill: '#ffffff',
        fillOpacity: 0.5,
        svgRotate: 90,
        scale: 0.1,
    },
];