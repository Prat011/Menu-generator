import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-blue-600 mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">{children}</h2>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start space-x-2">
              <span className="text-blue-500">•</span>
              <span>{children}</span>
            </li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;