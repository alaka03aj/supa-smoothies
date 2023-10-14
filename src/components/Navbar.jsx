import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="__navbar">
            <div className="__navbar__title">Supa-Smoothies</div>
            <div className="__navbar__buttons">
                <NavLink to="/">
                    <button className="__navbar__home">Home</button>
                </NavLink>
                <NavLink to="/create">
                    <button className="__navbar__create">Create</button>
                </NavLink>
            </div>
        </div>
    );
}
