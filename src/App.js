import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import EventHandler from './components/Handlers/eventHandler';

const App = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem('selected-theme');
        if (selectedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-theme');
        } else {
            setDarkMode(false); 
            document.body.classList.remove('dark-theme');
        }
    }, []);

    const handleToggleTheme = () => {
        const newMode = !isDarkMode;
        setDarkMode(newMode);
        document.body.classList.toggle('dark-theme', newMode);
        localStorage.setItem('selected-theme', newMode ? "dark" : "light");
    };

    return (
        <div className={isDarkMode ? 'dark-theme' : ''}>
            <EventHandler />
            <Navigation toggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
            <Home />
            <About />
            <Footer />
        </div>
    );
};

export default App;
