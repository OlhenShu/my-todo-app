import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="main">
            <section className="panel home-page">
                <div className="home-hero">
                    <h2 className="home-title">Welcome to My To-Do App!</h2>
                    <p className="home-description">
                        A sleek and efficient tool to manage your daily tasks. 
                        Our app helps you stay organized, focused, and productive.
                    </p>
                    <div className="home-features">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">✨</span>
                            </div>
                            <h3>Task Management</h3>
                            <p>Easily add, edit, and remove your tasks with one click.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">🚀</span>
                            </div>
                            <h3>Priority System</h3>
                            <p>Set importance levels to focus on what matters most.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">🌐</span>
                            </div>
                            <h3>API Integration</h3>
                            <p>Synced with DummyJSON API and persistent local storage.</p>
                        </div>
                    </div>
                    <div className="home-actions">
                        <Link to="/tasks" className="btn btn--primary">Get Started →</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
