import React, { useState, useEffect } from 'react';
// import BulletLessList from './BulletLessList';
import { Link } from 'react-router-dom';
import Posts from './posts';

const UserList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                // const response = await fetch('users.json');
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const users = await response.json();
                setBlogs(users);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    // const showPosts = () => {
    //     // fetch('./posts.js');
    //     return <Posts />           
    // }

    return (
        <ul>
            {blogs.map(r => (
                <li key={r.id} >
                    <div onClick={<Posts/>}>
                        <div>{r.name}</div>
                        <div >{r.website}</div>
                        <div>
                            <div>{r.company.name}</div>
                            <div>{r.company.catchPhrase}</div>
                            <div>{r.company.bs}</div>
                        </div>
                    </div>
                    <Link to={`/posts/:${r.id}`}></Link>
                </li>))}
        </ul>
    )
}

export default UserList;