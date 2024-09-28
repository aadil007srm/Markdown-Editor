import React from 'react';

const Toolbar = ({ markdown, setMarkdown, isDarkMode }) => {
  const addMarkdown = (symbol) => {
    setMarkdown(`${markdown}${symbol}`);
  };

  return (
    <div className="toolbar">
      <button className={`text-sm rounded px-3 py-1 hover:bg-indigo-500 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-indigo-600 text-white'}`} onClick={() => addMarkdown('# ')}>H1</button>
      <button className={`text-sm rounded px-3 py-1 hover:bg-indigo-500 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-indigo-600 text-white'}`} onClick={() => addMarkdown('## ')}>H2</button>
      <button className={`text-sm rounded px-3 py-1 hover:bg-indigo-500 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-indigo-600 text-white'}`} onClick={() => addMarkdown('**Bold**')}>Bold</button>
      <button className={`text-sm rounded px-3 py-1 hover:bg-indigo-500 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-indigo-600 text-white'}`} onClick={() => addMarkdown('*Italic*')}>Italic</button>
      <button className={`text-sm rounded px-3 py-1 hover:bg-indigo-500 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-indigo-600 text-white'}`} onClick={() => addMarkdown('```code```')}>Code Block</button>
    </div>
  );
};

export default Toolbar;
