    import React from "react";
    import { Feed } from "../../Assets";
    import { rightIcon, person } from "../../Assets";

    import "./rightSide.css";
    const RightSide = () => {
    return (
        <div className="rightside_container">
        <div className="followCard">
            <div className="title">
            <h2>Add to your feed</h2>
            <img src={Feed} alt="feed" />
            </div>

            <ul className="feedList">
            <li>
                <a>
                <div className="avatar"></div>
                </a>
                <div>
                <span className="spanH">#Linkedin</span>
                <button>Follow</button>
                </div>
            </li>

            <li>
                <a>
                <div className="avatar"></div>
                </a>
                <div>
                <span className="spanH">#Video</span>
                <button>Follow</button>
                </div>
            </li>
            </ul>
            <div className="recommendation">
            View all recommendations
            <img src={rightIcon} alt="rightIcon" />
            </div>
        </div>
        <div className="bannerCard">
            <img src={person} alt="" />
        </div>
        </div>
    );
    };

    export default RightSide;
