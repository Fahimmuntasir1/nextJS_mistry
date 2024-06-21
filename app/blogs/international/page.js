import React from 'react';

const international = () => {
    const blogs = [
        { "title": "First Object", "description": "This is the first object." },
        { "title": "Second Object", "description": "This is the second object." },

    ]
    return (
        <div>
            <h1>
                This is International page.
            </h1>
            <ul>
                {
                    blogs.map(blog =>
                        <li key={blog.title}>{blog.title}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default international;