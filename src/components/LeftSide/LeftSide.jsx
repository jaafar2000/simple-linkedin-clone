    import React, { useContext } from "react";
    import { bg, widgetIcon, itemIcon, plusIcon } from "../../Assets";
    import { myContext } from "../../context/myContext";
    import "./leftside.css";
    const LeftSide = () => {
    const { user } = useContext(myContext);
    return (
        <div className="leftside__contaienr">
        <div className="art_card">
            <div className="user_info">
            <div
                className="background"
                style={{ backgroundImage: `url(${bg})` }}
            />
            <div
                className="photo"
                style={{ backgroundImage: `url(${user?.photoURL})` }}
            />
            <div className="link">Welcome, {user?.displayName}</div>
            <div className="add_photo_text">add photo</div>
            </div>
            <div className="widget">
            <div>
                <span>Conections</span>
                <span>Grow your network</span>
            </div>
            <img className="widgetIcon" src={widgetIcon} alt="widgetIcon" />
            </div>
            <div className="item">
            <span>
                <img className="itemIcon" src={itemIcon} alt="item icon" />
                My Items
            </span>
            </div>
        </div>
        <div className="community_card">
            <span>Groups</span>
            <span>
            Events
            <img src={plusIcon} alt="plusIcon" />
            </span>
            <span>Follow Hashtag</span>
            <span>Dicover more</span>
        </div>
        </div>
    );
    };

    export default LeftSide;
