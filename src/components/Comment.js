import React from 'react'

function Comment({ comments, post }) {
    debugger
    return (
        <div>
            <h3>{post.title}</h3>
            <div>{post.body} </div>
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