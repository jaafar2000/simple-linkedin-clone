import React, { useContext, useState , useEffect} from "react";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FeedIcon from '@mui/icons-material/Feed';
import { myContext } from "../../context/myContext";
import PostModel from "../model/PostModel";
import Card from "../card/Card";
import db from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import "./main.css";


const Main = () => {
	const {user} = useContext(myContext)
	const [showModel , setShowModel ] = useState('close')
	const [posts , setPosts ] = useState([])

		useEffect(() => {
			const colRef = collection(db, "Posts");
			const  q= query(colRef, orderBy("actor.timestamp" , "desc"));
			console.log(q)
			onSnapshot(q, (snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
			});
		}, []);
	

	const handleClick = (e)=>{
		e.preventDefault();
		switch(showModel){
			case "open" :
				setShowModel("close");
				break;
			case "close" :
				setShowModel("open");
				break;
			default :
				setShowModel('close')
				break
		}
	}

	return (
	<div className="main_container">
		<div className="commonCard">
			<div className="shareBox">

			<div className="sendPost" >
				<img src={`${user?.photoURL}`} alt="user" />
				<button className="sendBtn"  onClick={e=>handleClick(e)} >Start a post</button>
			</div>

			<div className="btns_container" >
				<button>
					<i style={{color:"#378fe9"}}  ><InsertPhotoIcon/></i>
					<span>Photo</span>
				</button>
			
			
				<button>
					<i style={{color:"#5f9b41"}}  ><VideocamIcon/></i>
					<span>Video</span>
				</button>
			
			
				<button>
					<i style={{color:"#c37d16"}}  ><EventAvailableIcon/></i>
					<span>Event</span>
				</button>
			
			
				<button>
					<i style={{color:"#e16745"}}  ><FeedIcon/></i>
					<span>Write articel</span>
				</button>
			</div>
		</div>
		</div>
		{
			posts &&
			posts.map(post=>(
				<Card 
					username= {post?.data?.actor?.username} 
					img={ post?.data?.imgeUploaded } 
					email={post?.data?.actor?.description}
					time={post?.data?.actor?.timestamp?.seconds}
					post = {post?.data?.post}
					vid ={post?.data?.videoLink}
					ueserPhoto={post?.data?.actor?.userPhoto}
					id={post?.id}
					key={post?.id}

					/>
			))
		}

			<PostModel showModel={showModel} handleClick={handleClick} />

	</div>
);
};

export default Main;
