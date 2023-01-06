export const newLayer = {
    items: 6,
    rotate: 0,
    diameter: 4,
    svgItem: 1,
    stroke: '#ff0000',
    strokeWidth: .75,
    strokeOpacity: 1,
    fill: '#ffffff',
    fillOpacity: .5,
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

export interface MandalaState {
    mandalaArr: MandalaArrProps[];
    layer: number;
    transform: MandalaArrTransform;
    status: 'idle' | 'loading' | 'failed';
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
        "items": 3,
        "rotate": 117,
        "diameter": 11,
        "svgItem": 20,
        "stroke": "#000000",
        "strokeWidth": 0.3,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 0.96,
        "svgRotate": 90,
        "scale": 0.16
    },
    {
        "items": 6,
        "rotate": 85,
        "diameter": 5,
        "svgItem": 17,
        "stroke": "#000000",
        "strokeWidth": 1.5,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.04
    },
    {
        "items": 1,
        "rotate": 0,
        "diameter": 0,
        "svgItem": 6,
        "stroke": "#000000",
        "strokeWidth": 0.4,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 90,
        "scale": 0.12
    },
    {
        "items": 3,
        "rotate": 26,
        "diameter": 8,
        "svgItem": 7,
        "stroke": "#000000",
        "strokeWidth": 0.75,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 90,
        "scale": 0.08
    },
    {
        "items": 3,
        "rotate": 26,
        "diameter": 12,
        "svgItem": 9,
        "stroke": "#000000",
        "strokeWidth": 0.75,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 90,
        "scale": 0.08
    },
    {
        "items": 3,
        "rotate": 27,
        "diameter": 18,
        "svgItem": 10,
        "stroke": "#000000",
        "strokeWidth": 0.75,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 109,
        "scale": 0.12
    },
    {
        "items": 1,
        "rotate": 87,
        "diameter": 13,
        "svgItem": 14,
        "stroke": "#000000",
        "strokeWidth": 0.4,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.14
    },
    {
        "items": 1,
        "rotate": 80,
        "diameter": 13,
        "svgItem": 15,
        "stroke": "#000000",
        "strokeWidth": 0.4,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.14
    },
    {
        "items": 1,
        "rotate": 93,
        "diameter": 13,
        "svgItem": 15,
        "stroke": "#000000",
        "strokeWidth": 0.3,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.14
    },
    {
        "items": 1,
        "rotate": 328,
        "diameter": 12,
        "svgItem": 13,
        "stroke": "#000000",
        "strokeWidth": 0.4,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.14
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 19,
        "svgItem": 18,
        "stroke": "#000000",
        "strokeWidth": 0.4,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0.5,
        "svgRotate": 270,
        "scale": 0.12
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 16,
        "svgItem": 18,
        "stroke": "#000000",
        "strokeWidth": 0.5,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 270,
        "scale": 0.1
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 11,
        "svgItem": 18,
        "stroke": "#000000",
        "strokeWidth": 0.75,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0.5,
        "svgRotate": 90,
        "scale": 0.08
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 13,
        "svgItem": 18,
        "stroke": "#000000",
        "strokeWidth": 1,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0.5,
        "svgRotate": 90,
        "scale": 0.06
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 15,
        "svgItem": 18,
        "stroke": "#000000",
        "strokeWidth": 1.3,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0.5,
        "svgRotate": 90,
        "scale": 0.04
    },
    {
        "items": 3,
        "rotate": 57,
        "diameter": 11,
        "svgItem": 21,
        "stroke": "#000000",
        "strokeWidth": 0.3,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 90,
        "scale": 0.16
    },
    {
        "items": 3,
        "rotate": 58,
        "diameter": 5,
        "svgItem": 4,
        "stroke": "#000000",
        "strokeWidth": 0.9,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.06
    },
    {
        "items": 1,
        "rotate": 320,
        "diameter": 16,
        "svgItem": 5,
        "stroke": "#000000",
        "strokeWidth": 0.7,
        "strokeOpacity": 1,
        "fill": "#ffffff",
        "fillOpacity": 0,
        "svgRotate": 90,
        "scale": 0.06
    },
    {
        "items": 1,
        "rotate": 207,
        "diameter": 17,
        "svgItem": 7,
        "stroke": "#000000",
        "strokeWidth": 1.4,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 90,
        "scale": 0.04
    },
    {
        "items": 1,
        "rotate": 341,
        "diameter": 15,
        "svgItem": 16,
        "stroke": "#ffffff",
        "strokeWidth": 0,
        "strokeOpacity": 0,
        "fill": "#000000",
        "fillOpacity": 1,
        "svgRotate": 92,
        "scale": 0.18
    },
    {
        "items": 6,
        "rotate": 0,
        "diameter": 1,
        "svgItem": 6,
        "stroke": "#000000",
        "strokeWidth": 0.6,
        "strokeOpacity": 1,
        "fill": "#000000",
        "fillOpacity": 0,
        "svgRotate": 128,
        "scale": 0.06
    }
]