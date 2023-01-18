import CloseIcon from '@mui/icons-material/Close';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareIcon from '@mui/icons-material/Share';
import { postNewMandala } from '../mandalaAPI';
import { selectMandalaArr, selectTransform } from '../mandalaSlice';
import { MouseEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { classRemove } from './handleMenu';

function Post() {
    const dispatch = useAppDispatch();
    const name = useRef<HTMLInputElement>(null);
    const origin = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLTextAreaElement>(null);

    function handleClickCloseMenu() {
        classRemove('post-wrapper', 'post-wrapper--visible');
    }

    function handleClickCancel(
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ): void {
        e.preventDefault();
        classRemove('post-wrapper', 'post-wrapper--visible');
    }

    const mandalaArr = useAppSelector(selectMandalaArr);
    const transform = useAppSelector(selectTransform);

    function handleClickPost(
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ): void {
        e.preventDefault();

        name?.current?.reportValidity();
        origin?.current?.reportValidity();
        message?.current?.reportValidity();

        if (
            !name?.current?.checkValidity() ||
            !origin?.current?.checkValidity() ||
            !message?.current?.checkValidity()
        )
            return;

        const userInfo = {
            name: name?.current?.value,
            origin: origin?.current?.value,
            message: message?.current?.value,
        };
        const data = {mandalaArr, transform, userInfo}
        dispatch(postNewMandala(data));
        
        handleClickCloseMenu();
    }

    return (
        <div id="post-wrapper" className="post-wrapper">
            <div className="post">
                <div className="menu-post--top-bar">
                    <div>
                        <i>
                            <ShareIcon />
                        </i>
                        Save Your Mandala to Art Gallery
                    </div>
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
                            ref={name}
                            id="post-name"
                            type="text"
                            placeholder="Your name?"
                            required
                            minLength={3}
                            maxLength={64}
                            onChange={() => {
                                name?.current?.setCustomValidity('');
                            }}
                        ></input>
                        <input
                            ref={origin}
                            id="post-origin"
                            type="text"
                            placeholder="Where do You come from?"
                            required
                            minLength={3}
                            maxLength={64}
                        ></input>
                        <textarea
                            ref={message}
                            id="post-message"
                            placeholder="What Homo Affectus - Feel Full Human - means to You?"
                            required
                            minLength={15}
                            maxLength={256}
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
                            onClick={(e) => handleClickCancel(e)}
                        >
                            Cancel
                        </button>
                        <button
                            className="post-button"
                            onClick={(e) => handleClickPost(e)}
                        >
                            <i>
                                <IosShareIcon />
                            </i>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Post;
