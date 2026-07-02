import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import DiscordModal from "./discordpage";
import AppLogo from "../assets/logo.png";

export default function Navbar({ toggleSidebar }){
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme !== null ? savedTheme === 'dark' : true;
    });
    const [isDiscordOpen, setIsDiscordOpen] = useState(false);
    const navigate = useNavigate();

    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const searchInputRef = useRef(null);
    const dropdownRef = useRef(null);

    const GLOBAL_SEARCH_INDEX = [
        { id: "py", title: "Python Ecosystem", route: "/python", description: "Advanced data structures, algorithmic implementations, and architectural patterns.", keywords: ["python", "dict", "list", "tuple", "set", "oop", "class", "asyncio", "cpython", "collections", "typing"] },
        { id: "js", title: "JavaScript Mastery", route: "/javascript", description: "Event loop, asynchronous patterns, and modern ECMAScript features.", keywords: ["javascript", "js", "promise", "async", "await", "event loop", "closure", "es6", "dom", "v8"] },
        { id: "c++", title: "Low-Level Mastery with C++", route: "/cplus", description: "Memory semantics, zero-overhead abstractions, and hardware interfacing.", keywords: ["c++", "cpp", "pointers", "memory", "stl", "vector", "raii", "templates", "oop", "polymorphism", "c++20", "gcc", "clang"] },
        { id: "react", title: "React Architecture", route: "/react", description: "Component lifecycles, state management, and virtual DOM reconciliation.", keywords: ["react", "jsx", "hooks", "usestate", "useeffect", "context", "redux", "components", "vdom"] },
        { id: "fastapi", title: "FastAPI Development", route: "/fastapi", description: "High-performance API building with Python and Pydantic.", keywords: ["fastapi", "python", "api", "rest", "pydantic", "async", "swagger", "openapi", "endpoints"] },
        { id: "dm", title: "Data Mining", route: "/datamining", description: "Knowledge discovery, preprocessing, and pattern recognition.", keywords: ["data mining", "kdd", "preprocessing", "classification", "clustering", "association", "apriori", "outliers", "pca"] },
        { id: "ml", title: "Machine Learning", route: "/machinelearn", description: "Supervised and unsupervised learning, model evaluation.", keywords: ["machine learning", "ml", "supervised", "unsupervised", "regression", "svm", "random forest", "scikit-learn", "metrics", "overfitting"] },
        { id: "dl", title: "Deep Learning", route: "/deeplearn", description: "Neural networks, backpropagation, CNNs, and transformers.", keywords: ["deep learning", "dl", "neural networks", "nn", "cnn", "rnn", "transformers", "pytorch", "tensorflow", "backpropagation", "gradient descent"] },
    ];

    // Fuzzy search results
    const searchResults = useMemo(() => {
        if (!searchQuery || searchQuery.length < 2) return [];
        const q = searchQuery.toLowerCase();
        return GLOBAL_SEARCH_INDEX
            .map(item => {
                const titleMatch = item.title.toLowerCase().includes(q);
                const descMatch = item.description.toLowerCase().includes(q);
                const keywordMatches = item.keywords.filter(k => k.toLowerCase().includes(q));
                const score = (titleMatch ? 15 : 0) + (descMatch ? 5 : 0) + keywordMatches.length * 2;
                return { ...item, score, keywordMatches };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score);
    }, [searchQuery]);

    // Keyboard navigation and shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl+K or Cmd+K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
            if (e.key === 'Escape') {
                setIsSearchFocused(false);
                searchInputRef.current?.blur();
            }
            if (isSearchFocused && searchResults.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => Math.max(prev - 1, 0));
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSelectResult(searchResults[selectedIndex]);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchFocused, searchResults, selectedIndex]);

    useEffect(() => { setSelectedIndex(0); }, [searchResults]);

    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !searchInputRef.current?.contains(e.target)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const handleSelectResult = (result) => {
        if (result) {
            navigate(result.route);
            setSearchQuery('');
            setIsSearchFocused(false);
            searchInputRef.current?.blur();
        }
    };

    const HighlightText = ({ text, query }) => {
        if (!query || query.length < 2) return <>{text}</>;
        const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        const parts = text.split(regex);
        return (
            <>
                {parts.map((part, i) =>
                    regex.test(part) ? (
                        <mark key={i} className="bg-amber-200/80 dark:bg-amber-400/30 text-slate-900 dark:text-white rounded-sm px-0.5">{part}</mark>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </>
        );
    };

  // Fungsi toggle
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Efek untuk menambahkan class 'dark' ke tag <html> secara global (Opsional/Sesuai standar Tailwind)
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const discord = () => {
      setIsDiscordOpen(true);
    }

    const github = () => {
      window.location.href = "https://github.com/SayyidinaAnshari";
    }

    return(
        <>
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/60 dark:bg-[#131315]/60 backdrop-blur-xl fixed top-0 w-full z-50 shadow-none border-b border-black/10 dark:border-white/5 flex items-center justify-between h-20 md:px-[64px] px-[20px] transition-colors duration-300"
    >
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200 active:scale-95 p-2 rounded-full hidden md:block"
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-[#c4c7c8]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round">
                    <line x1="4" y1="7" x2="20" y2="7"/>
                    <line x1="4" y1="12" x2="20" y2="12"/>
                    <line x1="4" y1="17" x2="20" y2="17"/>
                </svg>
            </span>
          </button>
          <div className="flex items-center gap-3">
            <img src={AppLogo} alt="Archive X Logo" className="w-8 h-8 rounded-lg shadow-sm" />
            <div className="font-['Inter'] text-[28px] leading-[1.1] tracking-[-0.04em] font-extrabold text-slate-900 dark:text-[#ffffff]">
              ARCHIVE_X
            </div>
          </div>
        </div>
        
        <div className="relative">
            <div className={`hidden md:flex items-center rounded-full px-4 py-2 border transition-colors ${isSearchFocused ? 'bg-white dark:bg-[#18181B] border-slate-900 dark:border-white/30 shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'bg-slate-200/50 dark:bg-[#2a2a2c]/50 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10'}`}>
              <span className={`material-symbols-outlined mr-2 transition-colors ${isSearchFocused ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-[#c4c7c8]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6.5"/>
                    <line x1="16" y1="16" x2="21" y2="21"/>
                </svg>
              </span>
              <input 
                ref={searchInputRef}
                className="bg-transparent border-none outline-none text-slate-700 dark:text-[#e5e1e4] font-['Inter'] text-[13.5px] leading-[1.5] w-64 placeholder:text-slate-400 dark:placeholder:text-slate-600/70 focus:ring-0" 
                placeholder="Cari modul atau topik... (Ctrl+K)" 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
              {searchQuery && (
                  <button onClick={() => { setSearchQuery(''); searchInputRef.current?.focus(); }} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors ml-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
              )}
            </div>

            <AnimatePresence>
                {isSearchFocused && searchQuery.length >= 2 && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[420px] bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 rounded-xl shadow-2xl dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden max-h-[400px] overflow-y-auto"
                    >
                        {searchResults.length > 0 ? (
                            <div className="py-2">
                                <div className="px-4 py-2 border-b border-black/5 dark:border-white/5">
                                    <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-[#52525b]">{searchResults.length} module{searchResults.length !== 1 ? 's' : ''} found</span>
                                </div>
                                {searchResults.map((result, i) => (
                                    <button
                                        key={result.id}
                                        onClick={() => handleSelectResult(result)}
                                        onMouseEnter={() => setSelectedIndex(i)}
                                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors cursor-pointer border-b border-black/5 dark:border-white/5 last:border-0 ${i === selectedIndex ? 'bg-slate-50 dark:bg-white/5' : 'hover:bg-slate-50/50 dark:hover:bg-white/[0.02]'}`}
                                    >
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="font-['Inter'] font-semibold text-[14px] text-slate-800 dark:text-white">
                                                    <HighlightText text={result.title} query={searchQuery} />
                                                </div>
                                                <span className="font-['JetBrains_Mono'] text-[10px] bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-[#9ca0a1] px-1.5 py-0.5 rounded">{result.route}</span>
                                            </div>
                                            <p className="font-['Inter'] text-[12px] text-slate-500 dark:text-[#9ca0a1] mb-1.5 truncate">
                                                <HighlightText text={result.description} query={searchQuery} />
                                            </p>
                                            {result.keywordMatches.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {result.keywordMatches.slice(0, 4).map((kw, j) => (
                                                        <span key={j} className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded text-slate-600 dark:text-[#c4c7c8]">
                                                            <HighlightText text={kw} query={searchQuery} />
                                                        </span>
                                                    ))}
                                                    {result.keywordMatches.length > 4 && (
                                                        <span className="font-['JetBrains_Mono'] text-[10px] text-slate-400 dark:text-[#52525b]">+{result.keywordMatches.length - 4}</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="px-4 py-8 text-center">
                                <svg className="w-8 h-8 text-slate-300 dark:text-[#3f3f46] mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                                <p className="font-['Inter'] text-[14px] text-slate-500 dark:text-[#52525b]">Tidak ada hasil untuk "<strong className="text-slate-700 dark:text-white">{searchQuery}</strong>"</p>
                                <p className="font-['Inter'] text-[12px] text-slate-400 dark:text-[#3f3f46] mt-1">Coba kata kunci lain seperti "python", "react", atau "memory"</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200 active:scale-95 p-2 rounded-full text-slate-600 dark:text-[#c4c7c8]">
            <span className="material-symbols-outlined">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            </span>
          </button>
          <button onClick={discord} className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200 active:scale-95 p-2 rounded-full text-slate-600 dark:text-[#c4c7c8]">
            <span className="material-symbols-outlined">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer duration-200 active:scale-95 p-2 rounded-full text-slate-600 dark:text-[#c4c7c8]"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ?
              <svg xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.3"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>
            </svg> : <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>}
            </span>
          </button>
        </div>
      </motion.header>
      <DiscordModal isOpen={isDiscordOpen} onClose={() => setIsDiscordOpen(false)} />
        </>
    )
}