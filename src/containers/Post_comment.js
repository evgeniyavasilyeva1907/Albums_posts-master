import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Comment from "./../components/Comment";

function Post_comment(props) {
  const { comments, posts, getComments, match, deleteComment, addComment } = props;
  const id = match.params.postid;
  useEffect(() => {
    getComments(id);
  }, [getComments, id]);

  const removeComment = (id) => {
    deleteComment(id);
  };

  const newComment = (comment) => {
    addComment(comment);
  };
  let post = posts.find((item) => item.id === +id)

  return (
    <Comment
      id={id}
      comments={comments}
      post={post}
      add={newComment}
      remove={removeComment}
      getComments={getComments}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.postsList,
    comments: state.CommentsReducer.commentsList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (id) =>
      dispatch({
        type: "COMMENTS/FETCHED_SAGA",
        payload: id,
      }),
    deleteComment: (id) =>
      dispatch({
        type: "COMMENTS/DELETE_COMMENT_SAGA",
        payload: id,
      }),
    addComment: (comment) =>
      dispatch({
        type: "COMMENTS/ADD_COMMENT_SAGA",
        payload: comment,
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post_comment));




