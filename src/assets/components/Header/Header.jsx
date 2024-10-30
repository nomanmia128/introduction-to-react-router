import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <h2>Navber</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    );
};

export default Header;