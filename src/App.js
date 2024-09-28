import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';
import DownloadButton from './components/DownloadButton';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update body class based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <button onClick={toggleDarkMode} className="toggle-dark-mode">
        Toggle Dark Mode
      </button>
      <Toolbar markdown={markdown} setMarkdown={setMarkdown} />
      <div className="editor-preview-container">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
      <DownloadButton markdown={markdown} />
    </div>
  );
}

export default App;
