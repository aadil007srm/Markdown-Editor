import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, {
      gfm: true,
      breaks: true,
      renderer: new marked.Renderer({
        image: (href, title, text) => {
          return `<img src="${href}" alt="${text || ''}" style="max-width: 100%; height: auto;" />`;
        },
      }),
    });
    return { __html: rawMarkup };
  };

  return (
    <div className="preview" dangerouslySetInnerHTML={getMarkdownText()} />
  );
};

export default Preview;
