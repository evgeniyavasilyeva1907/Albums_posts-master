import React from 'react';

function Post({ posts }){
return(
    <div className="PostsBoard">
           {posts.map((item, index)=>{
               return(
               <div key={index} className='Post' >{item.title}</div>
               )
           })}

        </div>
)
}
export default Post;