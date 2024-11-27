import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';

const PostList = ({ posts, onDelete }) => {
  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <button onClick={() => onDelete(post.id)}>Delete</button>
              <Link to={`/post/${post.id}`}>View Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
