import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import TodoDetail from './components/TodoDetail.jsx';
import NotFound from './components/NotFound.jsx';
import { TodoProvider } from './contexts/TodoContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { SettingsProvider } from './contexts/SettingsContext.jsx';
import './App.css';

export default function App() {
    return (
        <ThemeProvider>
            <TodoProvider>
                <SettingsProvider>
                    <div className="app">
                        <Header title="My To-Do App" />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/tasks" element={<Main />} />
                            <Route path="/tasks/:id" element={<TodoDetail />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        
                        <Footer />
                    </div>
                </SettingsProvider>
            </TodoProvider>
        </ThemeProvider>
    );
}
