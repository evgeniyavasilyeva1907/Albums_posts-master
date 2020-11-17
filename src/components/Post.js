import React from "react";
import { NavLink } from "react-router-dom";

function Post({ posts }) {
  return (
    <div className="PostsBoard">
      <h2>List of Posts</h2>
      <div className="Posts">
        {posts.map((item, index) => {
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
    </div>
  );
}
export default Post;
