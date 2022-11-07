    import React, { useContext, useState } from "react";
    import CloseIcon from "@mui/icons-material/Close";
    import { myContext } from "../../context/myContext";
    import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
    import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
    import ShortTextIcon from "@mui/icons-material/ShortText";
    import { type } from "@testing-library/user-event/dist/type";
    import { storage } from "../../firebase";
    import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    import db from "../../firebase";
    import { collection, addDoc, serverTimestamp } from "firebase/firestore";
    import ReactPlayer from "react-player";

    import "./postModel.css";

    const PostModel = ({ showModel, handleClick }) => {
    const { user } = useContext(myContext);
    const [editorText, setEditorText] = useState("");
    const [shareImg, setShareImg] = useState(null);
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");
    const [progress, setProgress] = useState(0);
    const handleUpload = (file) => {
        const colRef = collection(db, "Posts");
        const storaheRef = ref(storage, `/files/${file?.name}`);
        const uploadTask = uploadBytesResumable(storaheRef, file);
        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
        (err) => alert(err.message),
        () => {
            if (file) {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                addDoc(colRef, {
                actor: {
                    username: user?.displayName,
                    userPhoto: user?.photoURL,
                    description: user?.email,
                    timestamp: serverTimestamp(),
                },
                imgeUploaded: url,
                post: editorText,
                videoLink: videoLink,
                });
            });
            } else {
            addDoc(colRef, {
                actor: {
                username: user?.displayName,
                userPhoto: user?.photoURL,
                description: user?.email,
                timestamp: serverTimestamp(),
                },
                imgeUploaded: "",
                post: editorText,
                videoLink: videoLink,
            });
            }
        }
        );
    };

    const handleChange = (e) => {
        const img = e.target.files[0];
        if (img == "" || img == undefined) {
        alert(`not an image , the file is a ${type(img)}`);
        return;
        }
        setShareImg(img);
    };

    const reset = (e, file) => {
        handleUpload(file);
        setEditorText("");
        setShareImg("");
        setVideoLink("");
        setProgress(0);
        handleClick(e);
    };

    const switchAssetArea = (area) => {
        setShareImg("");
        setVideoLink("");
        setAssetArea(area);
    };

    return (
        <>
        {showModel == "open" && (
            <div className="post__model-container">
            <div className="pm__content">
                <div className="pm__header">
                <h2>Create a post </h2>
                <button onClick={(e) => handleClick(e)}>
                    <i>
                    <CloseIcon />
                    </i>
                </button>
                </div>

                <div className="sharedContent">
                <div className="pm__userInfo">
                    <img src={`${user?.photoURL}`} alt="userPhoto" />
                    <span>{user?.displayName}</span>
                </div>
                <div className="Editor">
                    <textarea
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    placeholder="What do you want to talk about?"
                    autoFocus={true}
                    />

                    {assetArea == "image" && (
                    <div className="uploadImg">
                        <input
                        type="file"
                        accept="image/gif , image/jpeg , image/png "
                        name="img"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(e) => handleChange(e)}
                        />
                        <p>
                        <label htmlFor="file" style={{ cursor: "pointer" }}>
                            Select an image to share
                        </label>
                        </p>
                        {shareImg && (
                        <img
                            className="image"
                            src={URL.createObjectURL(shareImg)}
                        />
                        )}
                    </div>
                    )}
                    {assetArea == "media" && (
                    <>
                        <input
                        type="text"
                        placeholder="please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        />
                        {videoLink && (
                        <ReactPlayer width={"100%"} url={`'${videoLink}'`} />
                        )}
                    </>
                    )}
                </div>
                </div>

                <div className="shareCreation">
                <div className="attatchAssets">
                    <button onClick={() => switchAssetArea("image")}>
                    <i>
                        <InsertPhotoIcon />
                    </i>
                    </button>
                    <button>
                    <i>
                        <SmartDisplayIcon
                        onClick={() => switchAssetArea("media")}
                        />
                    </i>
                    </button>
                </div>

                <div className="shareComment">
                    <button>
                    <i>
                        <ShortTextIcon />
                    </i>
                    Anyone
                    </button>
                </div>

                <button
                    onClick={(e) => reset(e, shareImg)}
                    className={`postButton`}
                >
                    Post
                </button>
                </div>
            </div>
            </div>
        )}
        </>
    );
    };

    export default PostModel;
