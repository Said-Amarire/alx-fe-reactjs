import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile (Protected)</Link>
          </li>
          <li>
            <Link to="/post/1">Post 1</Link>
          </li>
          <li>
            <Link to="/post/2">Post 2</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
