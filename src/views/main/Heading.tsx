import { RefObject } from "react";

function Heading({ refs }: { refs: RefObject<HTMLDivElement>[] | undefined[] }) {

    return (
        <div className="heading" ref={refs[0]}>
            <div className="letters">
                <span>homo<br/>affect</span>
                <span className="red">us&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="letters small" ref={refs[1]}>
                <span>mandala creators&nbsp;</span>
            </div>
        </div>
    );
}

export default Heading;
