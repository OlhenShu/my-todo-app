import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <h1 className="header__title">My To-Do</h1>
                <nav className="header__nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                </nav>
            </div>
        </header>
    );
}
