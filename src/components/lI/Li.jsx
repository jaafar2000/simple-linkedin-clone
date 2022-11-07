    import React from "react";
    import { downIcon } from "../../Assets";
    const Li = ({ img, title, active, arrow, me, work, sighnOut }) => {
    return (
        <li
        className={`navList ${active ? "activeUser" : null}  ${work && "work"} ${
            me && "meClass"
        } `}
        >
        <a href="#">
            <img
            className={`${me && "avatarUser"}`}
            src={`${img}`}
            alt={`${title}-icon`}
            />
            <span>
            {title} {arrow && <img src={downIcon} />}
            </span>
        </a>
        {me && (
            <button className="SignOut_btn" onClick={sighnOut}>
            Sign Out
            </button>
        )}
        </li>
    );
    };

    export default Li;
