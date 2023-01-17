import './main.css';

function BackVideo() {
    return (
        <div className="bg-video">
            <video
                className="video"
                playsInline
                autoPlay
                loop
                muted
                preload='auto'
            >
                <source src="./film.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default BackVideo;
