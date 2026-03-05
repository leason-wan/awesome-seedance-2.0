import React, { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'zh';
  switchUrl: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, switchUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all shadow-sm group"
        aria-label="Switch language"
      >
        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {currentLang === 'en' ? 'English' : '中文'}
        </span>
        <svg className={`w-4 h-4 ml-auto text-gray-500 group-hover:text-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-gray-900 rounded-lg shadow-2xl border border-gray-800 py-2 z-50">
          {/* English */}
          <a
            href={currentLang === 'en' ? '#' : switchUrl}
            className={`flex items-center px-4 py-3 hover:bg-gray-800 transition-colors ${currentLang === 'en' ? 'bg-gray-800' : ''
              }`}
            onClick={(e) => {
              if (currentLang === 'en') {
                e.preventDefault();
              }
            }}
          >

            <div className="flex-1">
              <div className="text-xs text-gray-400">English</div>
            </div>
            {currentLang === 'en' && (
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 16 16">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </a>

          {/* Chinese */}
          <a
            href={currentLang === 'zh' ? '#' : switchUrl}
            className={`flex items-center px-4 py-3 hover:bg-gray-800 transition-colors ${currentLang === 'zh' ? 'bg-gray-800' : ''
              }`}
            onClick={(e) => {
              if (currentLang === 'zh') {
                e.preventDefault();
              }
            }}
          >

            <div className="flex-1">
              <div className="text-xs text-gray-400">中文</div>
            </div>
            {currentLang === 'zh' && (
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 16 16">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
