import re

content = """import { motion } from "framer-motion";

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
                <span className="material-symbols-outlined text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                        <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                    </svg>
                </span>
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

export default function JavPage() {
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
                    <span className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 font-['JetBrains_Mono'] font-semibold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff] uppercase rounded-md backdrop-blur-sm">Language Ref</span>
                    <span className="font-['JetBrains_Mono'] font-medium text-[13px] leading-[1.5] text-slate-500 dark:text-[#c4c7c8]">ECMAScript 2023</span>
                </div>
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">Modern Javascript Archive</h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    A definitive reference for ECMAScript specifications, detailing core fundamentals, advanced architectural patterns, and framework ecosystems. Designed for high-performance application development.
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
                                    <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-lg">architecture</span>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Core Fundamentals</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Konsep dasar dan pola sintaks JavaScript untuk referensi cepat.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Bento Box 1: Variables */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">01</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Lexical Declarations</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Deklarasi variabel modern dalam JavaScript menggunakan let dan const.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="variables.js" code={`let count = 0;     // Block-scoped, reassignable\nconst max = 100;   // Block-scoped, immutable binding\nvar legacy = true; // Function-scoped, hoisted (Legacy)`} />
                                </div>
                            </div>

                            {/* Bento Box 2: Data Types */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">02</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Type System</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Tipe data primitif (Pass by Value) vs referensi (Pass by Ref).
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="types.js" code={`// Primitives (Pass by Value)\nconst str = "Hello";\nconst num = 42;\nconst isTrue = true;\nconst empty = null;\nconst notDef = undefined;\n\n// References (Pass by Reference)\nconst obj = { key: "value" };\nconst arr = [1, 2, 3];`} />
                                </div>
                            </div>

                            {/* Bento Box 3: Functions */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">03</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Execution Contexts</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Arrow Function favored for concise syntax and lexical 'this' binding.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="functions.js" code={`// Arrow Function (Lexical 'this')\nconst mapData = (items) => items.map(i => i * 2);\n\n// Classic Function\nfunction regularFunc() {\n  console.log(this);\n}`} />
                                </div>
                            </div>

                            {/* Bento Box 4: Async */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">04</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Concurrency Model</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Event Loop Non-Blocking I/O menggunakan Promises dan async/await.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="async.js" code={`// Syntactic Sugar for Promises\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/data');\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}`} />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
                
                {/* Framework Ecosystem Card */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Framework Ecosystem</h3>
                        <span className="material-symbols-outlined text-slate-400 dark:text-[#c4c7c8] group-hover:text-slate-800 dark:group-hover:text-[#ffffff] transition-colors">
                            hub
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300 flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-4xl mb-3 text-slate-600 dark:text-[#9ca3af] group-hover:text-slate-900 dark:text-[#ffffff] transition-colors">view_quilt</span>
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">React</h4>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-2">Component-based UI Library. Virtual DOM architecture.</p>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300 flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-4xl mb-3 text-slate-600 dark:text-[#9ca3af] group-hover:text-slate-900 dark:text-[#ffffff] transition-colors">dashboard_customize</span>
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Vue.js</h4>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-2">Progressive Framework. Reactive data binding system.</p>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300 flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-4xl mb-3 text-slate-600 dark:text-[#9ca3af] group-hover:text-slate-900 dark:text-[#ffffff] transition-colors">layers</span>
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Next.js</h4>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-2">React Framework for Production. SSR & SSG support.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Meta Data Card */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Module Metadata</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Execution Engine</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">V8 Engine</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Standard</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">ES2023</span>
                        </li>
                        <li className="flex flex-col border-b border-black/5 dark:border-white/5 pb-3 gap-2">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Target Environments</span>
                            <div className="flex gap-2 flex-wrap">
                                <span className="font-['JetBrains_Mono'] font-semibold text-[11px] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2 py-0.5 border border-black/10 dark:border-white/10 rounded">Node.js</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[11px] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2 py-0.5 border border-black/10 dark:border-white/10 rounded">Browser</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[11px] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2 py-0.5 border border-black/10 dark:border-white/10 rounded">Deno</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 pb-1 mt-2 text-[13px] font-['Inter'] text-slate-700 dark:text-[#c4c7c8]">
                            <span className="w-2 h-2 bg-slate-800 dark:bg-[#ffffff] rounded-full"></span>
                            Maintained & Active
                        </li>
                    </ul>
                    <button className="w-full mt-4 bg-slate-900 dark:bg-[#ffffff] text-white dark:text-[#131315] font-['Inter'] text-[13px] font-semibold py-2.5 rounded-lg hover:bg-slate-800 dark:hover:bg-[#e2e2e2] transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        Export Specs
                    </button>
                </motion.div>

                {/* Advanced Patterns Section */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-4 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6 md:p-8 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2 border-b border-black/10 dark:border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-lg">memory</span>
                            </span>
                            <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Advanced Patterns</h3>
                        </div>
                    </div>
                    <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-4">
                        Custom Hook Pattern for Data Fetching with AbortController, menunjukkan lifecycle React modern dan memory management.
                    </p>
                    <CodeSnippet 
                        filename="useFetchData.js" 
                        code={`// Custom Hook Pattern for Data Fetching with AbortController
import { useState, useEffect, useCallback } from 'react';

export const useFetchData = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (abortController) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...options,
        signal: abortController.signal
      });
      if (!response.ok) throw new Error(\`HTTP error! status: \\${response.status}\`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort(); // Cleanup on unmount
    };
  }, [fetchData]);

  return { data, loading, error };
};`}
                    />
                </motion.div>

            </div>
        </motion.div>
    );
}
"""

with open('src/components/Jav/javpage.jsx', 'w') as f:
    f.write(content)
