import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import Tesseract from 'tesseract.js';
import { generateMenuMarkdown } from '../lib/gemini';
import MarkdownPreview from './MarkdownPreview';

const MenuMarkdownGenerator = () => {
  const [menuText, setMenuText] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    setIsLoading(true);
    setError(null);

    try {
      // First use Tesseract to extract text from the image
      const { data: { text } } = await Tesseract.recognize(
        event.target.files[0],
        'eng',
        { logger: m => console.log(m) }
      );
      
      setMenuText(text);

      // Then use Gemini to generate formatted markdown
      const markdown = await generateMenuMarkdown(text);
      setMarkdownContent(markdown);
    } catch (e) {
      setError('Error processing the menu image. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center space-y-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        <div className="w-full max-w-xl">
          <label 
            htmlFor="menu-image" 
            className="block w-full cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <Camera className="text-gray-400 h-16 w-16 mb-4" />
              <span className="text-gray-600">
                {isLoading ? 'Processing...' : 'Upload Menu Image'}
              </span>
            </div>
          </label>
          <input
            id="menu-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
            disabled={isLoading}
          />
        </div>

        {markdownContent && (
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <MarkdownPreview content={markdownContent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuMarkdownGenerator;