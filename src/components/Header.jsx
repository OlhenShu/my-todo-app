import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header__top">
                <h1 className="header__title">My To-Do</h1>
                <nav className="header__nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                </nav>
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme}
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    );
}
