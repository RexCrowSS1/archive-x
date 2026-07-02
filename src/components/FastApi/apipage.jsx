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
                <code className="language-python">
{code}
                </code>
            </pre>
        </div>
    </div>
);

export default function ApiPage(){
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
                    <span className="font-['JetBrains_Mono'] font-medium text-[13px] leading-[1.5] text-slate-500 dark:text-[#c4c7c8]">Archive_X</span>
                </div>
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">Modern API Development with FastAPI</h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to optimize developer experience, enabling rapid iterations and production-ready code generation natively within the Archive X infrastructure.
                </p>
            </motion.header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px]">
                
                {/* Core Features Section */}
                <motion.div variants={itemVariants} className="md:col-span-12">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-[20px]"><svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 -960 960 960" 
                                        fill="currentColor"
                                        className="w-6 h-6 text-[#c6c6cf]"
                                        >
                                        <path d="M120-120v-320h320v320H120Zm400 0v-320h320v320H520ZM120-520v-320h720v320H120Zm80 240h160v-160H200v160Zm400 0h160v-160H600v160Zm-400-400h560v-160H200v160Zm0 0v-160 160Zm0 400v-160 160Zm400 0v-160 160Z"/>
                                        </svg>
                                        </span>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Core Features</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Key capabilities that make FastAPI stand out.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">01</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Fast Performance</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        On par with NodeJS and Go. Thanks to Starlette and Pydantic, it ranks among the fastest Python frameworks available.
                                    </p>
                                </div>
                            </div>

                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">02</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Easy to Use</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Designed for rapid development. Intuitive editor support, rigorous type checking, and minimized boilerplate.
                                    </p>
                                </div>
                            </div>

                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">03</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Robust & Secure</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Get production-ready code with automatic interactive documentation. Built-in security and authentication tools.
                                    </p>
                                </div>
                            </div>

                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">04</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Standards-based</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Fully compatible with open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Getting Started & Advanced Implementation */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Getting Started</h3>
                        <span className="material-symbols-outlined text-slate-400 dark:text-[#c4c7c8] group-hover:text-slate-800 dark:group-hover:text-[#ffffff] transition-colors">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 -960 960 960" 
                                fill="currentColor"
                                className="w-6 h-6 text-[#c6c6cf]"
                                >
                                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm160-120 200-200-200-200-56 56 144 144-144 144 56 56Zm120 0h240v-80H440v80ZM160-240v-400 400Z"/>
                                </svg>
                        </span>
                    </div>

                    <CodeSnippet filename="main.py" code={`from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}`} />

                    <div className="mt-10 border-t border-black/10 dark:border-white/10 pt-8">
                        <h3 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-800 dark:text-[#ffffff] mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">                                    <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="2.5"></circle>
                                        <g>
                                            <line x1="12" y1="9.5" x2="12" y2="5.8"></line>
                                            <circle cx="12" cy="4.5" r="1.3"></circle>
                                        </g>
                                        <g transform="rotate(72, 12, 12)">
                                            <line x1="12" y1="9.5" x2="12" y2="5.8"></line>
                                            <circle cx="12" cy="4.5" r="1.3"></circle>
                                        </g>
                                        <g transform="rotate(144, 12, 12)">
                                            <line x1="12" y1="9.5" x2="12" y2="5.8"></line>
                                            <circle cx="12" cy="4.5" r="1.3"></circle>
                                        </g>
                                        <g transform="rotate(216, 12, 12)">
                                            <line x1="12" y1="9.5" x2="12" y2="5.8"></line>
                                            <circle cx="12" cy="4.5" r="1.3"></circle>
                                        </g>
                                        <g transform="rotate(288, 12, 12)">
                                            <line x1="12" y1="9.5" x2="12" y2="5.8"></line>
                                            <circle cx="12" cy="4.5" r="1.3"></circle>
                                        </g>
                                        </svg></span></span>
                            Advanced Implementation
                        </h3>
                        
                        <div className="space-y-[16px]">
                            <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                                <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Pydantic Models</h4>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">
                                    Declare request body and response schemas using standard Python type hints. Pydantic handles the data validation, serialization, and deserialization automatically.
                                </p>
                            </div>
                            <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                                <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Dependency Injection</h4>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">
                                    A powerful DI system that allows you to easily share logic (e.g., database connections, authentication) across multiple path operations, keeping code DRY and testable.
                                </p>
                            </div>
                            <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                                <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Asynchronous Support</h4>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">
                                    Natively built on \`asyncio\`. Use \`async def\` for path operations to handle high concurrency and I/O-bound tasks efficiently without blocking.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Metadata Column */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    {/* Meta Data Card */}
                    <motion.div variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                            <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Technical Specs</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">System Status</span>
                                <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff]">ACTIVE</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Python Version</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">3.7+</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Core Framework</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Starlette</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Data Validation</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Pydantic</span>
                            </li>
                            <li className="flex justify-between items-center pb-1">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">ASGI Server</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Uvicorn</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Performance Benchmark */}
                    <motion.div variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                            <h3 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Performance Benchmark</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="flex items-end gap-[8px] mb-[4px]">
                                    <span className="font-['Inter'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-slate-900 dark:text-[#ffffff]">8.2k</span>
                                    <span className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-slate-600 dark:text-[#c4c7c8] pb-1">req/sec</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-200 dark:bg-[#2a2a2c] rounded-full overflow-hidden mt-2">
                                    <motion.div 
                                        className="h-full bg-slate-800 dark:bg-[#ffffff] w-[85%] rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <span className="font-['JetBrains_Mono'] font-medium tracking-[0.05em] text-[12px] leading-[1.0] text-slate-500 dark:text-[#c4c7c8]">vs Django (avg 2.1k)</span>
                                    <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff]">Top Tier</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Auto-generated Documentation */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-4">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <div className="bg-cover bg-center w-full h-full opacity-50 mix-blend-multiply dark:mix-blend-screen" data-alt="A highly detailed, technical data visualization background." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3bPQdbNIhTY5GFrbylNPkcl4pBRS4lU_P5AQoF1rOF0n93LQVySfNW2i5RDPzFmR8fjmAlvCRBhe6bD-vRyUPQAuVSEKHM0AL-Or_PauyCdRu_X8D-mzjELUFdNOdmaRTfwk68gR6EmoSpS98GwS7kPjwRDFnvErVc5fb6rTeqiow3_2S5CaOHWDD1GgouS9m9Kad6QHvPdTBUZTlzHpw4EkZ7O7hOF3yNS5402iUxNi3WT_fgYlplGp36cCF7x-L69qAGQ1xPJQ')" }}></div>
                        </div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-[8px]">
                                <span className="material-symbols-outlined text-slate-800 dark:text-[#ffffff] text-[28px] pr-5"><svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 -960 960 960" 
                                fill="currentColor"
                                className="w-6 h-6 text-[#c6c6cf]"
                                >
                                <path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T60-752q52-31 112-46.5T260-814q64 0 122.5 18T480-740q40-38 98.5-56T700-814q64 0 124 15.5T900-752q10 5 15.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-400Z"/>
                                </svg></span>
                                <div>
                                    <h3 className="font-['Inter'] font-semibold text-[26px] leading-[1.3] text-slate-900 dark:text-[#ffffff]">Auto-generated Documentation</h3>
                                    <p className="font-['Inter'] font-normal text-[15px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Automatic, interactive API documentation out of the box.</p>
                                </div>
                            </div>
                            <span className="mt-4 md:mt-0 font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-4 py-2 border border-black/10 dark:border-white/10 rounded uppercase shadow-sm">
                                OpenAPI
                            </span>
                        </div>
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
                                <h4 className="font-['Inter'] font-semibold text-[16px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Swagger UI</h4>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">
                                    Interactive exploration and testing of API endpoints directly from the browser. Send requests and view responses instantly.
                                </p>
                            </div>
                            
                            <div className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
                                <h4 className="font-['Inter'] font-semibold text-[16px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">ReDoc</h4>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">
                                    Clean, readable documentation layout prioritizing readability. Excellent for sharing API specs with external teams and consumers.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}