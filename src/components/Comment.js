import React from 'react'

function Comment({ comments, post, remove }) {
    debugger
    return (
        <div className="post-comment">
            <div className='Post'>
                <h3>{post.title}</h3>
                <div>{post.body} </div>
            </div>
            {comments.map((item, index) => {
                return (
                    <div key={index} className='comment'>
                        <div>
                            <span className='name'>Name: </span>
                             {item.name}
                            <span className='email'> email: </span>
                             {item.email}
                        </div>
                        <div>{item.body}</div>
                        <button onClick={()=> remove(item.id)}>Remove comment</button>
                    </div>
                )
            })}
        </div>)
}
export default Comment