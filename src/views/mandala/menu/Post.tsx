import CloseIcon from '@mui/icons-material/Close';

const handleClickCloseMenu = () => {};

function Post() {
    return (
        <div className="post">
            <div className="menu--top-bar">
                <div>Post your mandala</div>
                <i
                    onClick={() => {
                        handleClickCloseMenu();
                    }}
                >
                    <CloseIcon />
                </i>
            </div>
                <form className="post-form">
                    <fieldset>
                        <input
                            id="post-name"
                            type="text"
                            placeholder="Your name"
                        ></input>
                        <input
                            id="post-origin"
                            type="text"
                            placeholder="Your origin"
                        ></input>
                        <input
                            id="post-message"
                            type="text"
                            placeholder="What Homo Affectus means to You?"
                        ></input>
                    </fieldset>
                    <div className="post-buttons">
                        <button className="post-button">Cancel</button>
                        <button className="post-button">
                            Post Your Mandala
                        </button>
                    </div>
                </form>
        </div>
    );
}
export default Post;
