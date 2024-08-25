import Post from "./Post";
import { useContext } from "react";
import { postList as PostData } from "../store/Post-List-Stor";
import ErrorMsg from "./ErrorMsg";
function Postlist(){
    const {PostList,addInitialPost}=useContext(PostData)


const handleServerPost=()=>{
    alert("Fetching server post please wait a moment ! ")
    fetch("https://dummyjson.com/Posts")
    .then((response)=>response.json())
    .then((data)=>{
      addInitialPost(data.posts);
    })
}



    return (
        <>
        {PostList.length===0 && <ErrorMsg hsp={handleServerPost}/>}
        <div className="posts">
{PostList.map((post)=>{
    return (<Post key={post.id} post={post}/>);
})}
        </div>
        </>
    );
}
export default Postlist