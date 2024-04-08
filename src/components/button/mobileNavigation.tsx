import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { FingerPrintIcon } from "../icon";

const MobileMenuButton = ({ onClick }: { onClick: () => void; }) => {
    return <button
        data-mobile
        type="button"
        title="mobile navigation"
        onClick={onClick}
        style={{
            height: "76px",
            width: "76px",
            position: "fixed",
            bottom: 10,
            left: 10,
            backgroundColor: 'ButtonFace',
            borderRadius: "50%",
            border: "none"
        }}>
        <FingerPrintIcon />
    </button>;
}

type MobileMenuProps = {
    onMenuClick: () => void;
}

const MobileMenu = forwardRef<HTMLDialogElement, MobileMenuProps>((props, ref) => {
    const { onMenuClick } = props;

    return <dialog className="mobile-nav" ref={ref}>
        <nav onClick={onMenuClick}>
            <Link to="/">Home</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/html/">HTML</Link>
            <Link to="/css/">CSS</Link>
            <Link to="/javascript/">JavaScript</Link>
            <Link to="/settings/">Settings</Link>
            <Link to="/night_life/">Night Life</Link>
        </nav>
    </dialog>
});

const MobileNavigation = () => {
    const dialog = useRef<HTMLDialogElement>(null),
        onClick = () => {
            const { current } = dialog;
            if (!current) {
                console.error(`dialog ref is null`);
                return;
            }
            navigator.vibrate(200);
            current.showModal();
        },
        onMenuClick = () => {
            const { current } = dialog;
            if (!current) {
                console.error(`dialog ref is null`);
                return;
            }
            navigator.vibrate(200);
            current.close();
        };

    return <>
        <MobileMenu ref={dialog} onMenuClick={onMenuClick} />
        <MobileMenuButton {...{ onClick }} />
    </>
}

export { MobileNavigation as default };