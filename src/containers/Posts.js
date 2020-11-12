import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Post from './../components/Post'

function Posts ({getPosts, posts}) {
    useEffect(()=> {
        getPosts()
    } ,[getPosts])
    return(
        <Post posts={posts}
        />
    )
}

const mapStateToProps = state => {
    return {
        posts: state.PostsReducer.postsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch({
            type: 'POSTS/FETCHED_SAGA'
        })
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Posts)

