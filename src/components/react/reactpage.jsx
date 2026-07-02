import React from 'react';
import { motion } from "framer-motion";

const CodeSnippet = ({ filename, code }) => (
    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-lg overflow-hidden mt-4 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/10 dark:border-white/10 bg-slate-50/50 dark:bg-[#1a191b]/50">
            <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-[#a1a1aa] text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] leading-[14px] font-semibold uppercase text-slate-600 dark:text-[#d4d4d8]">
                    {filename}
                </span>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-[#ffffff] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                    <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                </svg>
            </button>
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="font-['JetBrains_Mono'] text-[12.5px] leading-[1.7] font-[450] text-slate-600 dark:text-[#c4c7c8]">
                <code className="language-javascript">
{code}
                </code>
            </pre>
        </div>
    </div>
);

export default function ReactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div 
            className="pb-[48px] px-[24px] md:px-[48px] max-w-[1600px] mx-auto transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.header variants={itemVariants} className="mb-[48px] border-b border-black/10 dark:border-white/10 pb-[24px]">
                <div className="flex items-center gap-4 mb-4">
                    <span className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 font-['JetBrains_Mono'] font-semibold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff] uppercase rounded-md backdrop-blur-sm">Documentation</span>
                    <span className="font-['JetBrains_Mono'] font-medium text-[13px] leading-[1.5] text-slate-500 dark:text-[#c4c7c8]">v18.2.0</span>
                </div>
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">React Ecosystem</h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    A clinical breakdown of React's architectural paradigm, component lifecycle mechanics, and its role in complex, state-driven web applications. Designed for dynamic, high-performance UI rendering.
                </p>
            </motion.header>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px]">
                
                {/* Fundamentals Section */}
                <motion.div variants={itemVariants} className="md:col-span-12">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">React Fundamentals</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Konsep dasar dan arsitektur React untuk pengembangan UI modern.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* 1. Virtual DOM */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">01</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Virtual DOM</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        React creates an in-memory data structure cache. It computes resulting differences, and then updates the browser's displayed DOM efficiently.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="rendering.jsx" code={`const root = ReactDOM.createRoot(\n  document.getElementById('root')\n);\nroot.render(<App />);`} />
                                </div>
                            </div>

                            {/* 2. JSX Syntax */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">02</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">JSX Syntax</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        An XML-like syntax extension to ECMAScript. It provides a visual structure for components.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="element.jsx" code={`const name = 'Josh Perez';\nconst element = (\n  <h1>Hello, {name}</h1>\n);`} />
                                </div>
                            </div>

                            {/* 3. Components & Props */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">03</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Components & Props</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Components let you split the UI into independent, reusable pieces. Props pass data to them.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="component.jsx" code={`function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n<Welcome name="Sara" />`} />
                                </div>
                            </div>

                            {/* 4. State Management */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">04</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">State Management</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        State allows components to change their output over time in response to actions.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="state.jsx" code={`const [count, setCount] = useState(0);\n\nreturn (\n  <button onClick={() => setCount(count + 1)}>\n    Count: {count}\n  </button>\n);`} />
                                </div>
                            </div>
                            
                            {/* 5. Effect Hook */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">05</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Effect Hook</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Perform side effects in function components (data fetching, subscriptions).
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="effect.jsx" code={`useEffect(() => {\n  document.title = \`You clicked \${count} times\`;\n}, [count]); // Run when count changes`} />
                                </div>
                            </div>

                            {/* 6. Context API */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">06</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Context API</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Share values like themes or authenticated user across the component tree.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="context.jsx" code={`const ThemeContext = React.createContext('light');\n\nconst value = useContext(ThemeContext);\n// No need to pass props down manually`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Advanced Concepts Card */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Advanced Patterns</h3>
                        <span className="text-slate-400 dark:text-[#c4c7c8] group-hover:text-slate-800 dark:group-hover:text-[#ffffff] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-6 h-6">
                            <rect x="3" y="6" width="5" height="5" />
                            <rect x="15" y="6" width="5" height="5" />
                            <rect x="15" y="14" width="5" height="5" />
                            <path d="M8 8.5H15" />
                            <path d="M11.5 8.5V16.5H15" />
                            </svg>
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Higher-Order Components</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-5">A pattern that emerges from React's compositional nature. A function that takes a component and returns a new component.</p>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-[#2a2a2c] rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] w-[85%] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="font-['JetBrains_Mono'] font-medium tracking-[0.05em] text-[12px] leading-[1.0] text-slate-500 dark:text-[#c4c7c8]">Reusability</span>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff]">High Efficiency</span>
                            </div>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Custom Hooks</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-5">Extract component logic into reusable functions. Share stateful logic between components without adding more components to the tree.</p>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-[#2a2a2c] rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] w-[90%] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "90%" }}
                                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="font-['JetBrains_Mono'] font-medium tracking-[0.05em] text-[12px] leading-[1.0] text-slate-500 dark:text-[#c4c7c8]">Logic Sharing</span>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff]">Modern Standard</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Meta Data Card */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Ecosystem</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">State Management</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Redux / Zustand</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Routing</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">React Router</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Framework</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Next.js</span>
                        </li>
                        <li className="flex justify-between items-center pb-1">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Bundler</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Vite / Webpack</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Code Block Implementation */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-900 dark:text-[#ffffff] text-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </span>
                            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase text-slate-700 dark:text-[#e5e1e4]">
                                DataContainer.jsx
                            </span>
                        </div>
                        <button className="text-slate-600 dark:text-[#c4c7c8] hover:text-slate-900 dark:hover:text-[#ffffff] transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                                <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                            </svg>
                        </button>
                    </div>
                    <pre className="font-['JetBrains_Mono'] text-[14px] leading-[20px] font-[450] text-slate-600 dark:text-[#c4c7c8] overflow-x-auto">
                        <code className="language-javascript">
{`import React, { useState, useEffect } from 'react';

function DataContainer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/metrics')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  
  return <MetricsView payload={data} />;
}`}
                        </code>
                    </pre>
                </motion.div>

                {/* Visualization Section */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-8">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <div className="bg-cover bg-center w-full h-full opacity-50 mix-blend-multiply dark:mix-blend-screen" data-alt="React virtual dom visualization background" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3bPQdbNIhTY5GFrbylNPkcl4pBRS4lU_P5AQoF1rOF0n93LQVySfNW2i5RDPzFmR8fjmAlvCRBhe6bD-vRyUPQAuVSEKHM0AL-Or_PauyCdRu_X8D-mzjELUFdNOdmaRTfwk68gR6EmoSpS98GwS7kPjwRDFnvErVc5fb6rTeqiow3_2S5CaOHWDD1GgouS9m9Kad6QHvPdTBUZTlzHpw4EkZ7O7hOF3yNS5402iUxNi3WT_fgYlplGp36cCF7x-L69qAGQ1xPJQ')" }}></div>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[26px] leading-[1.3] text-slate-900 dark:text-[#ffffff] mb-2">Fiber Architecture</h3>
                                <p className="font-['Inter'] font-normal text-[15px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">React's core algorithm for scheduling and rendering component trees.</p>
                            </div>
                            <button className="mt-4 md:mt-0 bg-slate-900 dark:bg-[#ffffff] text-white dark:text-[#2f3131] font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.05em] leading-[1.5] px-7 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-[#e2e2e2] transition-colors cursor-pointer uppercase shadow-md">Explore Details</button>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Incremental</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18" />
                                    <path d="M9 21V9" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Scheduling</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4" />
                                    <path d="M12 16h.01" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Prioritization</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Concurrent</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}