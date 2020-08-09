import React, { useState, useEffect } from 'react';
import { SPost, Title } from './elements/Elements';




function Post({ post }) {
    
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json())
            .then(data => {
                setAuthor(data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <SPost>
            <Title>{post.title}</Title>
            <p>{post.body}</p>
            <small>
                <small>By {author.name} AKA {author.username}</small>
            </small>
        </SPost>
    )
}

export default Post;