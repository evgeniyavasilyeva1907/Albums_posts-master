import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Comment from './../components/Comment'

function Post_comment(props) {
    const { comments, posts, getComments, match } = props
    const id = match.params.postid
    useEffect(() => {
        getComments(id)
    }, [id])
    return (
        <Comment
            comments={comments}
            post={posts[id-1]} />

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
        })
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (withRouter(Post_comment))