import React, { useEffect, useState } from 'react';
import './style.css';


export default function Four() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/blog/?populate=*');
                const data = await response.json();
                setBlogs(data.data); // Adjust this if the structure is different
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching blogs: {error.message}</p>;

    return (
        <div className='four'>
            <div className='childone'>
                <p>Blog</p>
                <h3>My blog post</h3>
            </div>
            <div className='blog-list'>
                {blogs.map(blog => (
                    <div key={blog.id} className='blog-card'>
                        {blog.attributes.image && (
                            <img
                                src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`}
                                alt={blog.attributes.image.data.attributes.name || 'Blog Image'}
                            />
                        )}
                        
                        <p>Published on the {new Date(blog.attributes.publishedAt).toLocaleDateString()}</p>
                        <h4>{blog.attributes.Name || 'No Title'}  <span> <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                                    </svg></span></h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
