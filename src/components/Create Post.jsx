import { postList } from "../store/Post-List-Stor";
import { useContext, useRef } from "react";
function CreatePost (){
const {addPost}=useContext(postList)
const nameElement=useRef()
const titleElement=useRef()
const bodyElement=useRef()
const tagElement=useRef()

const handleSubmit=(event)=>{
  
  event.preventDefault();
  const  name=nameElement.current.value ;
const title=titleElement.current.value;
const body=bodyElement.current.value;
const tag=tagElement.current.value.split(" ");


nameElement.current.value="";
titleElement.current.value="";
bodyElement.current.value="";
tagElement.current.value="";
addPost(name,title,body,tag);
}

return (<form className="CreatePost" onSubmit={handleSubmit}>
  <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">User Name</label>
  <input type="text"   placeholder="Input Username" ref={nameElement} />
</div>
  <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Title of Post</label>
  <input type="text"   placeholder="Enter the Title " ref={titleElement}/>
</div>
<div className="mb-3">
    <label htmlFor="FormControlTextarea1" className="form-label">Description</label>
    <textarea   rows="5" cols="35" placeholder="Tell Us More"ref={bodyElement}></textarea>
  </div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Tags</label>
  <input type="text"   placeholder="Enter related tags " ref={tagElement}/>
  <input type="submit" className="btn btn-primary"   placeholder="Enter related tags "/>
</div>

</form>);
}
export default CreatePost