import { useState, useEffect } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 20));
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">

      {}
      <UserProfile />

      <h1 className='text-red-600 text-4xl mt-10'>Posts</h1>

      <ul className="posts">
        {posts.map((post, idx) => (
          <li key={post.id} className="post">
            <h4>Post {idx + 1}</h4>
            <h2 className='text-lg font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
