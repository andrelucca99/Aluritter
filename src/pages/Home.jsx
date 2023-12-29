import { Link } from 'react-router-dom';
import { App } from '../layouts/App';

export const Home = () => (
  <App>
    <h1 className="text-xl text-sky-600">Home</h1>
    <Link to='/sing-up'>SingUp</Link>
    <Link to='/sing-in'>SingIn</Link>
  </App>
);
