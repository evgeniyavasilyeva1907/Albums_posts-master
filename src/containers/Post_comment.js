import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

function Post_comment(props) {
    const { comments, posts, getComments, match } = props
    debugger
    useEffect(() => {
        const id = +match.params.postid
        getComments(id)
    }, [getComments, match.params.postid])
    return (
        <div>
            <h1>Hello</h1>
        </div>
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