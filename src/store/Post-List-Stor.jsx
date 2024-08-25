import { createContext, useReducer } from "react";
export const postList =createContext({

    PostList:[],
    addPost:()=>{},
    addInitialPost:()=>{},
    deletePost:()=>{},
})

const postListReducer=(currentList,action)=>{
    let newList=currentList;
    if(action.type==="DELETE_POST"){
     newList=currentList.filter((post)=>{ return post.id !==action.payload.postid}  )
    }
    else if (action.type==="ADD_POST")
    {
        newList=[action.payload, ...currentList]
    }
    else if (action.type==="ADD_INITIAL_POST"){
        newList=action.payload.posts;
    }

    return newList
}



function PostListProvider({children}){
const [PostList,dispatchPostList]=useReducer(postListReducer,[]);

const addPost=(name,title,body,tag)=>{
    dispatchPostList({
        type:"ADD_POST",
        payload:{
               id:Date.now(),
                name:name,
                title:title,
                body:body,
                tags:tag,
            

        }
    });

}

const addInitialPost=(posts)=>{
    dispatchPostList({
        type:"ADD_INITIAL_POST",
        payload:{
            posts,
            
        }
    });

}
const deletePost=(postid)=>{
    dispatchPostList(
        {type:"DELETE_POST",
            payload:{
                postid,
            }

        }
    );

}

    return(   
        <postList.Provider value={{PostList,addPost,addInitialPost,deletePost}}>

            {children}
        </postList.Provider>
     );
    }


export default PostListProvider