import { RefObject, useEffect } from "react";

type refType = RefObject<HTMLDivElement> | null

const useAutoScroll = (main: refType, mainTop: refType, mainBottom: refType, background: refType) => {

    useEffect(() => {
        const MainTop = mainTop?.current as HTMLDivElement;
        const MainBottom = mainBottom?.current as HTMLDivElement;

        let observerBottom: IntersectionObserver;

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: [0.5],
        };

        observerBottom = new IntersectionObserver(
            handleIntersectBottom,
            options
        );

        observerBottom.observe(MainBottom);

        function handleIntersectBottom(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry) => {
                if (entry.intersectionRatio <= 0.5) {
                    main?.current?.scrollTo(0, 0);
                    MainTop?.classList.remove('main-top--hidden');
                    MainBottom?.classList.remove(
                        'main-bottom--visible'
                    );
                }
                if (entry.intersectionRatio >= 0.5) {
                    main?.current?.scrollTo(0, 10000);
                    MainTop?.classList.add('main-top--hidden');
                    MainBottom?.classList.add(
                        'main-bottom--visible'
                    );
                    if (background?.current) {
                        background.current.focus()
                    }
                }
            });
        }

        return () => {
            observerBottom.unobserve(MainBottom);
        };
    }, [main, mainBottom, mainTop, background]);

};

export default useAutoScroll;