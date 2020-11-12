import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Comment({ comments, post, remove, add }) {
    const [text, setText] = useState();

    const addComment = () => {
        if (text) {
            const comment = {
                postId: post.id,
                name: 'Evgeniya',
                email: '123@email.com',
                body: text.trim(),
            }
            add(comment)
        }
        else (console.log('Заполните поле ввода'))
    }

    const getPostWithComments = () => {
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
                            <Button onClick={() => remove(item.id)} color="primary">Remove comment</Button>
                        </div>
                    )
                })}
                <TextField id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={3}
                    defaultValue="Your comment"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)} value={text} />
                <Button variant="contained" onClick={addComment}>Save comment</Button>
            </div>
        )
    }

    return (
        <div>
            { post ? getPostWithComments() : (<div>Post is absent</div>)}
        </div>
    )
}

export default Comment