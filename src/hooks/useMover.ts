import { RefObject, useEffect } from "react";

type refType = RefObject<HTMLDivElement> | null

const useMover = (main: refType, heading: refType, headingSmall: refType) => {

    useEffect(() => {
        const card = main?.current;
        function onCardMouseMove(e: globalThis.MouseEvent) {
            const target = e.target as HTMLDivElement
            const posRotX =
                (e.offsetY - target?.offsetHeight / 2) /
                (target?.offsetHeight / 10);
            const posRotY =
                (e.offsetX - target?.offsetWidth / 2) /
                (target?.offsetWidth / 10);
            heading?.current?.setAttribute(
                'style',
                `transform: rotateX(${-posRotX}deg) rotateY(${-posRotY}deg);`
            );
            headingSmall?.current?.setAttribute(
                'style',
                `transform: rotateX(${posRotY}deg) rotateY(${-posRotX*1.5}deg);`
            );
        }

        card?.addEventListener('mousemove', (e) => onCardMouseMove(e), false);

        return () => {
            card?.removeEventListener(
                'mousemove',
                (e) => onCardMouseMove(e),
                false
            );
        };
    }, [heading, headingSmall, main]);

};

export default useMover;