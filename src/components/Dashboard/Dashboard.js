import React, { useEffect, useState } from 'react';
import { getUserData, deletePost } from '../../services/api';
import PostList from '../PostList/PostList';
import './Dashboard.css'; 

const Dashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, postsResponse, commentsResponse, todosResponse] = await getUserData(userId);
        setUser(userResponse.data);
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setTodos(todosResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const summaryData = {
    posts: posts.length,
    comments: comments.length,
    todos: todos.length
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>{user.name}'s Dashboard</h1>
      <div className="summary">
        <div><strong>Posts:</strong> {summaryData.posts}</div>
        <div><strong>Comments:</strong> {summaryData.comments}</div>
        <div><strong>To-Dos:</strong> {summaryData.todos}</div>
      </div>

      <PostList posts={posts} onDelete={handleDeletePost} />
    </div>
  );
};

export default Dashboard;
