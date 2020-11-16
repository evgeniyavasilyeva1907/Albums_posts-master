import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Post from './../components/Post';
import { Pagination } from '@material-ui/lab';


function Posts({ getPosts, posts }) {
    const [page, setPage] = useState(1)
    useEffect(() => {
        getPosts()
    }, [getPosts])

    const getNumber = (event, value) => {
        setPage(value)
    }

    let newPosts = posts.slice((page - 1) * 10, page * 10)

    return (
        <div >
            <Post posts={newPosts} />
            <Pagination count={10}
                color="primary"
                defaultPage={1}
                page={page}
                onChange={getNumber}
            />
        </div>

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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)

