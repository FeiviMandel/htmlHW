// import './RecipeDetails.css';
import React, { useState, useEffect } from 'react'
// import BulletLessList from './BulletLessList';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function PostList(){

    const [posts, setPost] = useState();
    const { userId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const posts = await response.json();
                setPost(posts);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [userId]);

    // if (!post) {
    //     return null;
    // }

    // const { name, ingredients, directions, picture } = post;
    return (
        <ul>
            {posts.map(r => (
                <li key={r.id} >
                    {/* <div onClick={showPosts}> */}
                        <div>{r.title}</div>
                        <div >{r.body}</div>
                        
                    {/* </div> */}
                    {/* <Link to={`/posts/:${r.id}`}></Link> */}
                </li>))}
        </ul>
    )
}


