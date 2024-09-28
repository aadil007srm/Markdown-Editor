import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Construct the Markdown for the image
        const imageMarkdown = `![Image](${reader.result})`;
        // Insert the image Markdown with proper spacing
        setMarkdown((prev) => `${prev}\n\n${imageMarkdown}\n\n`);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        style={{ marginBottom: '10px' }} 
      />
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
    </div>
  );
};

export default Editor;
