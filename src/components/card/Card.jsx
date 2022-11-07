    import React, { useContext } from "react";
    import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
    import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
    import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
    import ShareIcon from "@mui/icons-material/Share";
    import SendIcon from "@mui/icons-material/Send";
    import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
    import ReactPlayer from "react-player";
    import db from "../../firebase";
    import { deleteDoc ,doc } from "firebase/firestore";
import { myContext } from "../../context/myContext";

    const Card = ({id ,  username, ueserPhoto, img, email, time, post, vid }) => {
        const {user} = useContext(myContext)
        const haneleDelete = (id) => {
            const colRef = doc(db, "Posts", id);
            deleteDoc(colRef).then(() => {
                console.log("done");
                console.log(id);
            });
        };

    return (
        <div className="main__articles  commonCard">
        <div className="sharedActor">
            <div className="sharedActor_C">
            <img src={`${ueserPhoto}`} alt="user" />
            <div>
                <span>{username}</span>
                <span>{email}</span>
                <span>{new Date(time * 1000).toUTCString()}</span>
            </div>
            </div>
            <button className="btn_icon_MoreHorizIcon">
            <i>
                <MoreHorizIcon />
            </i>
            </button>
        </div>

        <div className="description">{post}</div>
        <div className="sharedImg">
            <div className="c">
            {img && <img src={`${img}`} alt="" />}
            {vid && <ReactPlayer width={"100%"} url={`'${vid}'`} />}
            </div>
        </div>

        <ul className="socilaCounts">
            <li>
            <button>
                <img
                src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt="emoji"
                />
                <img
                src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                alt="emoji"
                />
                <span>75</span>
            </button>
            </li>
            <li>
            <span>2 comments</span>
            </li>
        </ul>
        <div className="postActios">
            <button>
            <i>
                <ThumbUpOutlinedIcon  sx={{ fontSize: 25 }}  />{" "}
            </i>
            <span>Lilke</span>
            </button>

            <button>
            <i>
                {" "}
                <ModeCommentOutlinedIcon  sx={{ fontSize: 25 }} />{" "}
            </i>
            <span>Comment</span>
            </button>

            <button>
            <i>
                {" "}
                <ShareIcon />{" "}
            </i>
            <span>Repost</span>
            </button>

            <button>
            <i>
                {" "}
                <SendIcon sx={{ fontSize: 25 }}  />
            </i>
            <span>Send</span>
            </button>

            {
                user?.displayName  == username && 
                <button onClick={()=>haneleDelete(id)} >
                    <i>
                    <DeleteOutlineIcon sx={{ fontSize: 25 }} />
                    </i>
                    Del
                </button>
            }
        </div>
        </div>
    );
    };

    export default Card;
