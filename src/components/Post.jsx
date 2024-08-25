import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { useContext } from "react";
import { postList } from "../store/Post-List-Stor";

function Post({post}){
  const {deletePost}=useContext(postList)
    return (<div className="card">
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
    <AiFillDelete/>
    </span>
    <div className="user-info">
      <img src="src\components\Images\user.jpg" alt="user image" />
      <span>{post.name===undefined?"Anonymous_user":post.name}</span>
      <img src="src\components\Images\verify_tag.png" alt="verified logo" id="verified-tag" />
    </div>
    <hr />
        <div className="card-body">
          <h5 className="card-title " >{post.title}</h5>
          <br />
          <p className="card-text fs-6">{post.body}</p>
      <br />
          <p className="card-text text-primary">{post.tags.map((tag)=>{return `#${tag } `})}</p>
<br />
        </div><hr /> <div id="icons">
   <FaHeart id="like"  onClick={(e)=>{e.target.style.color='red' ; alert('this post is liked !!')}}/>
   <FaComment id="comment" />
   <FaShare id="share" />
        </div>
      </div>)
}
export default Post;