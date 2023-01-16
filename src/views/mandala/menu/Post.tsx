import CloseIcon from '@mui/icons-material/Close';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareIcon from '@mui/icons-material/Share';

function Post() {
    function handleClickCloseMenu() {
        throw new Error('Function not implemented.');
    }

    function handleClickPost() {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="post">
            <div className="menu--top-bar">
                <div> <i><ShareIcon/></i>Save Your Mandala to Art Gallery</div>
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
                        placeholder="Your name?"
                        minLength={3}
                        maxLength={64}
                    ></input>
                    <input
                        id="post-origin"
                        type="text"
                        placeholder="Where do You come from?"
                        minLength={3}
                        maxLength={64}
                    ></input>
                    <textarea
                        id="post-message"
                        placeholder="What Homo Affectus - Feel Full Human - means to You?"
                        minLength={3}
                        maxLength={512}
                        onInput={(e) => {
                            (e.target as HTMLTextAreaElement).value = (
                                e.target as HTMLTextAreaElement
                            ).value.replace(/\n/g, '');
                        }}
                    ></textarea>
                </fieldset>
                <div className="post-buttons">
                    <button
                        className="post-button"
                        onClick={handleClickCloseMenu}
                    >
                         Cancel
                    </button>
                    <button className="post-button" onClick={handleClickPost}>
                        <i><IosShareIcon /></i>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Post;
