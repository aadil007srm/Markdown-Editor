import React from 'react';
import { marked } from 'marked';

const DownloadButton = ({ markdown }) => {
  const downloadFile = (content, fileName, fileType) => {
    const blob = new Blob([content], { type: fileType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="download-buttons">
      <button
        className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500"
        onClick={() => downloadFile(markdown, 'document.md', 'text/markdown')}
      >
        Download Markdown
      </button>
      <button
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500"
        onClick={() => downloadFile(marked(markdown), 'document.html', 'text/html')}
      >
        Download HTML
      </button>
    </div>
  );
};

export default DownloadButton;
