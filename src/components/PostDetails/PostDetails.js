import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getPostDetails, updatePost } from '../../services/api';
import './PostDetails.css';

const PostDetails = () => {
  const { postId } = useParams(); 
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await getPostDetails(postId);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  const handleSave = async () => {
    try {

        await updatePost(postId, post);
      alert('Post saved successfully!');
      navigate(`/`); 
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  if (loading) return <div className="spinner">Loading...</div>; 

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <textarea
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        rows="10"
        cols="50"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PostDetails;
