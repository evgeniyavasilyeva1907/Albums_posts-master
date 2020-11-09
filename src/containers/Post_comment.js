import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Comment from "./../components/Comment";

function Post_comment(props) {
  const {
    comments,
    posts,
    getComments,
    match,
    deleteComment,
    addComment,
  } = props;
  const id = match.params.postid;
  useEffect(() => { //TODO тут тоде, сначала useEffect, потом уже обычные функции
    getComments(id);
  }, [getComments, id]);

  const removeComment = (id) => {
    deleteComment(id);
  };

  const newComment = (comment) => {
    addComment(comment);
  };

  return (
    <Comment
      comments={comments}
      post={posts[id - 1]} //TODO это мы обсуждали. Нужно написать функцию find
      // post={posts.find((post)=>post.id === id)} //примерно так. Я не проверял, работает она или нет. Посмотри!!!
      add={newComment}//TODO и нету removeComment. Ты забыла добавить
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
