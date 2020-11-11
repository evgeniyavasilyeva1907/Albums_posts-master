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
  let post=posts.find((item) => item.id === +id)

  return (
    <Comment
      comments={comments}
      post={post} 
      add={newComment}
      remove={removeComment}
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



//TODO также случайно заметил, что если ты открываешь комменты, потом перезагружаешь страницу,
//то у тебя валится ошибка. Нужно это подправить, например придумать какую-нибудь защиту от дурака
//можно сделать так: если нету данных в /post/2, то сделать редирект на страницу с постами
// а лучше сделать еще один запрос для получения комментов
