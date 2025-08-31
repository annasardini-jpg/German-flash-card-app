import React, { useState, useRef, useCallback } from 'react';
import { Search, Trash2, ArrowLeft } from 'lucide-react';

const GermanFlashcardApp = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeFlashcardSet, setActiveFlashcardSet] = useState(null);

  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const currentSearchTerm = useRef('');

  const sampleDictionary = [
    { id: 1, german: 'das Haus', english: 'house', article: 'das', plural: 'die Häuser', type: 'noun' },
    { id: 2, german: 'die Katze', english: 'cat', article: 'die', plural: 'die Katzen', type: 'noun' },
    { id: 3, german: 'der Hund', english: 'dog', article: 'der', plural: 'die Hunde', type: 'noun' },
    { id: 4, german: 'schön', english: 'beautiful', article: null, plural: null, type: 'adjective' },
    { id: 5, german: 'schnell', english: 'fast', article: null, plural: null, type: 'adjective' }
  ];

  const extractArticle = (definition) => {
    const match = definition.match(/\b(der|die|das)\b/i);
    return match ? match[0].toLowerCase() : null;
  };

  const extractPlural = (definition) => {
    const match = definition.match(/plural[:\s]+([^,\s]+)/i);
    return match ? match[1] : null;
  };

  const renderSearchResults = (results) => {
    if (!searchResultsRef.current) return;

    if (results.length === 0) {
      searchResultsRef.current.innerHTML = '';
      return;
    }

    const resultsHTML = results.map(word => `
      <div class="search-result bg-white p-4 rounded-lg shadow-sm border border-green-100 hover:border-green-300 cursor-pointer transition-all hover:shadow-md" 
           data-word='${JSON.stringify(word)}'>
        <div class="flex justify-between items-center">
          <div class="flex-1">
            <h3 class="font-medium text-green-800 text-lg">${word.german}</h3>
            <p class="text-gray-600 line-clamp-2">${word.english}</p>
            ${word.article ? `<p class="text-sm text-green-600 mt-1">${word.article} • ${word.plural || 'no plural'}</p>` : ''}
          </div>
          <div class="text-sm text-green-600 capitalize bg-green-50 px-3 py-1 rounded-full ml-4">${word.type}</div>
        </div>
      </div>
    `).join('');

    searchResultsRef.current.innerHTML = `
      <h2 class="text-xl font-light text-green-800 mb-4">Search Results</h2>
      <div class="space-y-3 max-h-80 overflow-y-auto">${resultsHTML}</div>
    `;

    searchResultsRef.current.querySelectorAll('.search-result').forEach(el => {
      el.addEventListener('click', () => {
        const word = JSON.parse(el.getAttribute('data-word'));
        setSelectedWord(word);
        addToFlashcards(word);
      });
    });
  };

  const performSearch = (term) => {
    currentSearchTerm.current = term;
    if (!term.trim()) {
      renderSearchResults([]);
      return;
    }

    const results = sampleDictionary.filter(word =>
      word.german.toLowerCase().includes(term.toLowerCase()) ||
      word.english.toLowerCase().includes(term.toLowerCase())
    );

    renderSearchResults(results);
  };

  const handleSearchInput = useCallback((e) => {
    const term = e.target.value;
    currentSearchTerm.current = term;
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => performSearch(term), 500);
  }, []);

  const addToFlashcards = (word) => {
    if (!flashcards.find(c => c.german === word.german)) {
      setFlashcards(prev => [...prev, { ...word, id: Date.now(), difficulty: 0 }]);
    }
  };

  const HomeView = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-light text-green-800 mb-6 text-center">German Learning</h1>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-green-500" />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search German or English..."
          onChange={handleSearchInput}
          className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
          autoComplete="off"
        />
      </div>
      <div ref={searchResultsRef} className="mb-8"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-green-50" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {currentView === 'home' && <HomeView />}
    </div>
  );
};

export default GermanFlashcardApp;
