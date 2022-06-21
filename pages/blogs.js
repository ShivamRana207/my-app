import React, { useEffect, useState } from 'react';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';

// Step 1: Collect all the files from the blogdata directory
// Step 2: Iterate through them and Display them


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blogs').then((data) => {
            return data.json();
        })
            .then((parsedData) => {
                console.log(parsedData)
                setBlogs(parsedData)
            })
    }, [])

    return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                    <p className={styles.blogItemp}>{blogitem.discription.substr(0, 200)}...</p>
                </div>
            })}
        </main>
    </div>
}

export default Blog;
