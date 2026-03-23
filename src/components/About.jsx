export default function About() {
    return (
        <main className="main">
            <section className="panel about-page">
                <div className="about-hero">
                    <h2 className="about-title">About the Project</h2>
                    <p className="about-subtitle">
                        <strong>My To-Do App</strong> is a modern task management application 
                        designed to showcase professional <strong>React</strong> development skills. 
                    </p>
                </div>

                <div className="about-grid">
                    <div className="tech-card">
                        <div className="tech-icon-box">
                            <span className="tech-icon">⚛️</span>
                        </div>
                        <h3>React & Router</h3>
                        <p>Seamless navigation and efficient component-based architecture for a smooth user experience.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon-box">
                            <span className="tech-icon">💾</span>
                        </div>
                        <h3>LocalStorage</h3>
                        <p>Persistent data storage in your browser, ensuring your tasks are always there when you return.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon-box">
                            <span className="tech-icon">📡</span>
                        </div>
                        <h3>Fetch API</h3>
                        <p>Real-time integration with DummyJSON for fetching initial data and testing API interactions.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon-box">
                            <span className="tech-icon">🎨</span>
                        </div>
                        <h3>Modern UI</h3>
                        <p>A clean, responsive, and glassmorphism-inspired design crafted for all screen sizes.</p>
                    </div>
                </div>

            </section>
        </main>
    );
}
