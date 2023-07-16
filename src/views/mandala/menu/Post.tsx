import CloseIcon from '@mui/icons-material/Close';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareIcon from '@mui/icons-material/Share';
import { postNewMandala } from '../mandalaAPI';
import { selectMandalaArr, selectTransform } from '../mandalaSlice';
import { MouseEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { classRemove } from './handleMenu';
import { send } from 'process';
import { sendMessage } from '../../../features/message/messageSlice';

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

        const cookieTime = document.cookie
            .split('; ')
            .find((row) => row.startsWith('time='))
            ?.split('=')[1];

        const allowPost = Date.now() - Number(cookieTime) > 1000 * 60 * 5;

        if (!cookieTime || allowPost) {
            document.cookie = `time=${Date.now()}`;
        } else if (!allowPost) {
            dispatch(sendMessage('Please wait at least 5 minutes before posting new mandala.'));
            return;
        }

        const userInfo = {
            name: name?.current?.value,
            origin: origin?.current?.value,
            message: message?.current?.value,
        };
        const data = { mandalaArr, transform, userInfo };
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
                            placeholder="Leave Your comment about the best version of human evolution in future. What Homo Affectus - Feelfull Human means to You? Write short sentence directed to this topic."
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
