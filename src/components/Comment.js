import React from 'react'

function Comment({ comments, post }) {
    debugger
    return (
        <div >
            <div className='Post'>
                <h3>{post.title}</h3>
                <div>{post.body} </div>
            </div>
            {comments.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{item.email} {item.name}</div>
                        <div>{item.body}</div>
                    </div>
                )
            })}
        </div>)
}
export default Comment