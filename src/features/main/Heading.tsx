import { LegacyRef } from "react";

function Heading({ refs }: { refs: LegacyRef<HTMLDivElement>[] | undefined[] }) {
    return (
        <div className="heading" ref={refs[0]}>
            <div className="letters">
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>o</span>
                <span> </span>
                <br />
                <span>a</span>
                <span>f</span>
                <span>f</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span className="red">u</span>
                <span className="red">s</span>
                <span className="red">&nbsp;</span>
                <span className="red">&nbsp;</span>
                <span className="red">&nbsp;</span>
            </div>
            <div className="letters small" ref={refs[1]}>
                <span>m</span>
                <span>a</span>
                <span>n</span>
                <span>d</span>
                <span>a</span>
                <span>l</span>
                <span>a</span>
                <span> </span>
                <span>c</span>
                <span>r</span>
                <span>e</span>
                <span>a</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
                <span>s</span>
                <span>&nbsp;</span>
            </div>
        </div>
    );
}

export default Heading;
