
import YouTubeIcon from '@mui/icons-material/YouTube';


function Tutorial() {

    function handleWatchYoutube() {
        window.open('https://www.youtube.com/watch?v=SL31KCcAQhA', 'YouTube');
    }

    return (
            <div className="menu-tutorial" onClick={handleWatchYoutube}>
                <i>
                    <YouTubeIcon />
                </i>
                Tutorial
            </div>
    );
}

export default Tutorial;
