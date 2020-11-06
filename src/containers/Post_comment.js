import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Comment from './../components/Comment'

function Post_comment(props) {
    const { comments, posts, getComments, match, deleteComment, addComment } = props
    const id = match.params.postid
    const removeComment = (id) => {
        deleteComment(id)
    }
    useEffect(() => {
        getComments(id)
    }, [getComments, id])

    const newComment = (comment) => {
        addComment(comment)
    }


    return (
        <Comment
            comments={comments}
            post={posts[id - 1]}
            remove={removeComment}
            add={newComment} />

    )
}
const mapStateToProps = state => {
    return {
        posts: state.PostsReducer.postsList,
        comments: state.CommentsReducer.commentsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch({
            type: 'COMMENTS/FETCHED_SAGA',
            payload: id
        }),
        deleteComment: (id) => dispatch({
            type: 'COMMENTS/DELETE_COMMENT_SAGA',
            payload: id
        }),
        addComment: (comment) => dispatch({
            type: 'COMMENTS/ADD_COMMENT_SAGA',
            payload: comment
        })
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (withRouter(Post_comment))