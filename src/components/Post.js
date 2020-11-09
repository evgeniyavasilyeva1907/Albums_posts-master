import React from "react";
import { NavLink } from "react-router-dom";

function Post({ posts }) {
  return (
    <div className="PostsBoard">
      {posts.map((item, index) => {

        //TODO тут не очень понятно твое решение. 
        //У тебя сейчас тольео если на title нажмешь, то откроются комменты
        //тут лучше весь диф обернуть в навлинк
        return (
          <div className="Post" key={index}> 
            <NavLink activeClassName="active" to={`posts/${item.id}`}>
              <h3 className="post-title">{item.title}</h3>
            </NavLink>
            <div className="post-body">{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Post;
