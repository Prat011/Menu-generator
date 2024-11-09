import React from 'react';
import MenuMarkdownGenerator from './components/MenuMarkdownGenerator';
import './styles/index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Menu Markdown Generator 📝
          </h1>
          <p className="text-gray-600">
            Upload a menu image and get beautifully formatted markdown with AI
          </p>
        </header>
        
        <ErrorBoundary>
          <MenuMarkdownGenerator />
        </ErrorBoundary>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          Powered by Tesseract OCR and Google Gemini
        </footer>
      </div>
    </div>
  );
}

export default App;