import React from 'react';
import { motion } from "framer-motion";

export default function CPPPage() {

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
            <motion.header variants={itemVariants} className="mt-8 mb-[48px] border-b border-black/10 dark:border-white/10 pb-[24px]">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1.5 border border-black/10 dark:border-white/20 font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.1em] text-slate-800 dark:text-white bg-black/5 dark:bg-white/10 rounded-md backdrop-blur-sm">Systems Programming</span>
                    <span className="px-3 py-1.5 border border-black/10 dark:border-white/20 font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.1em] text-slate-800 dark:text-white bg-black/5 dark:bg-white/10 rounded-md backdrop-blur-sm">vC++20</span>
                </div>
                <h1 className="font-['Inter'] font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
                    Low-Level Mastery with C++
                </h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    A comprehensive architectural overview of C++ memory semantics, zero-overhead abstractions, and modern hardware interfacing techniques.
                </p>
            </motion.header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px]">

                {/* C++ Standards Timeline - Full width */}
                <motion.div variants={itemVariants} className="md:col-span-12" id="timeline">
                    <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">C++ Standards Timeline</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">The evolution of C++ from modern features to cutting-edge language capabilities.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="p-5 border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 rounded-lg hover:border-black/15 dark:hover:border-white/15 transition-colors">
                                <div className="font-['JetBrains_Mono'] text-[13px] font-bold text-slate-800 dark:text-white mb-2">C++11</div>
                                <div className="text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">auto, lambdas, smart pointers, move semantics</div>
                            </div>
                            <div className="p-5 border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 rounded-lg hover:border-black/15 dark:hover:border-white/15 transition-colors">
                                <div className="font-['JetBrains_Mono'] text-[13px] font-bold text-slate-800 dark:text-white mb-2">C++14</div>
                                <div className="text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">generic lambdas, variable templates, constexpr</div>
                            </div>
                            <div className="p-5 border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 rounded-lg hover:border-black/15 dark:hover:border-white/15 transition-colors">
                                <div className="font-['JetBrains_Mono'] text-[13px] font-bold text-slate-800 dark:text-white mb-2">C++17</div>
                                <div className="text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">std::optional, std::variant, structured bindings</div>
                            </div>
                            <div className="p-5 border-2 border-slate-900 dark:border-white/30 bg-slate-100 dark:bg-white/5 rounded-lg shadow-sm">
                                <div className="font-['JetBrains_Mono'] text-[13px] font-bold text-slate-900 dark:text-white mb-2">C++20 (Current)</div>
                                <div className="text-[13px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Concepts, Modules, Ranges, Coroutines</div>
                            </div>
                            <div className="p-5 border border-black/10 dark:border-white/10 border-dashed bg-slate-50/30 dark:bg-[#131315]/30 rounded-lg">
                                <div className="font-['JetBrains_Mono'] text-[13px] font-semibold text-slate-400 dark:text-[#52525b] mb-2">C++23</div>
                                <div className="text-[13px] leading-[1.5] text-slate-400 dark:text-[#52525b]">std::expected, deducing this, std::mdspan</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Language Fundamentals - Full width */}
                <motion.div variants={itemVariants} className="md:col-span-12" id="fundamentals">
                    <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Language Fundamentals</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Core building blocks of modern C++ programming.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Memory Management */}
                            <div id="memory" className="bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM9 9h6v6H9V9z"/></svg>
                                    <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Memory Management</h4>
                                </div>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Explicit control over heap allocations, stack unwinding, and object lifecycles using deterministic destructors.</p>
                            </div>
                            {/* OOP & Polymorphism */}
                            <div id="oop" className="bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18h6v-6h-6v6zM4 18h6v-6H4v6zM10 6h6V0h-6v6zM4 6h6V0H4v6z"/></svg>
                                    <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">OOP & Polymorphism</h4>
                                </div>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Vtable construction, multiple inheritance overhead, and compile-time polymorphic dispatch via templates.</p>
                            </div>
                            {/* Pointers */}
                            <div id="pointers" className="bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/></svg>
                                    <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Raw Pointers (*)</h4>
                                </div>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-4">Direct memory address access. Must be manually managed. Use sparingly in modern C++.</p>
                                <div className="mt-auto">
                                    <pre className="bg-slate-900 dark:bg-[#09090b] p-3 rounded-lg border border-transparent dark:border-white/5 text-[12px] font-['JetBrains_Mono'] text-white">
                                        <code>{`int x = 10;\nint* ptr = &x;`}</code>
                                    </pre>
                                </div>
                            </div>
                            {/* References */}
                            <div id="references" className="bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                    <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">References (&)</h4>
                                </div>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-4">Alias for an existing variable. Cannot be null. Safer than raw pointers.</p>
                                <div className="mt-auto">
                                    <pre className="bg-slate-900 dark:bg-[#09090b] p-3 rounded-lg border border-transparent dark:border-white/5 text-[12px] font-['JetBrains_Mono'] text-white">
                                        <code>{`int y = 20;\nint& ref = y;`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Best Practices - 8 col */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" id="practices">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Best Practices</h3>
                        <svg className="w-6 h-6 text-slate-400 dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-white mb-2">RAII</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Resource Acquisition Is Initialization. Tie resource lifecycle to object lifetime.</p>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-white mb-2">Rule of Zero/Three/Five</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">If you define a destructor, copy constructor, or copy assignment operator, you usually need all three (or five). Prefer zero.</p>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-white mb-2">Const-correctness</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Use `const` generously to document intent and allow compiler optimizations.</p>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-white mb-2">Prefer auto</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Use `auto` for type deduction unless explicit typing improves readability.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Compiler Matrices - 4 col sidebar */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" id="compilers">
                    <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Compiler Matrices</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">GCC</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-white bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">v13.2+</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Clang</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-white bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">v17.0+</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">MSVC</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-white bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">v19.38+</span>
                        </li>
                        <li className="flex justify-between items-center pb-1">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Std Flag</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-white bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">-std=c++20</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Code Block - Full width */}
                <motion.div variants={itemVariants} className="md:col-span-12 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" id="code">
                    <div className="flex items-center justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-900 dark:text-white text-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </span>
                            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase text-slate-700 dark:text-[#e5e1e4]">
                                smart_pointers.cpp
                            </span>
                        </div>
                        <button className="text-slate-600 dark:text-[#c4c7c8] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                                <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                            </svg>
                        </button>
                    </div>
                    <pre className="font-['JetBrains_Mono'] text-[14px] leading-[20px] font-[450] text-slate-600 dark:text-[#c4c7c8] overflow-x-auto">
                        <code className="language-cpp">
{`#include <memory>
#include <iostream>

class HighPerfEntity {
public:
    HighPerfEntity() { std::cout << "Allocated\\n"; }
    ~HighPerfEntity() { std::cout << "Deallocated\\n"; }
    void execute() { /* logic */ }
};

int main() {
    std::unique_ptr<HighPerfEntity> entity = std::make_unique<HighPerfEntity>();
    entity->execute();
    return 0;
}`}
                        </code>
                    </pre>
                </motion.div>

                {/* Primitive Data Types - 8 col */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" id="types">
                    <div className="bg-slate-50 dark:bg-[#1a191b] px-6 py-4 border-b border-black/10 dark:border-white/10">
                        <h3 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-900 dark:text-white">Primitive Data Types</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[13.5px]">
                            <thead className="text-slate-500 dark:text-[#a1a1aa] border-b border-black/10 dark:border-white/10 font-['JetBrains_Mono'] bg-white/50 dark:bg-transparent">
                                <tr>
                                    <th className="py-3 px-5 font-semibold">Type</th>
                                    <th className="py-3 px-5 font-semibold">Typical Size</th>
                                    <th className="py-3 px-5 font-semibold">Range / Description</th>
                                </tr>
                            </thead>
                            <tbody className="font-['JetBrains_Mono'] text-slate-800 dark:text-white">
                                <tr className="border-b border-black/10 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-5">int</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">4 bytes</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">-2B to 2B</td>
                                </tr>
                                <tr className="border-b border-black/10 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-5">long long</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">8 bytes</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">Large integers</td>
                                </tr>
                                <tr className="border-b border-black/10 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-5">double</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">8 bytes</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">Double precision float</td>
                                </tr>
                                <tr className="border-b border-black/10 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-5">char</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">1 byte</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">ASCII character</td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-5">bool</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">1 byte</td>
                                    <td className="py-3 px-5 text-slate-500 dark:text-[#9ca0a1]">true or false</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Performance Metrics - 4 col */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" id="performance">
                    <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Performance Metrics</h3>
                    </div>
                    <div className="space-y-6 flex-1">
                        <div>
                            <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest font-semibold mb-2">
                                <span className="text-slate-500 dark:text-[#9ca0a1]">Compile Time Overhead</span>
                                <span className="text-slate-900 dark:text-white">High</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "80%" }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest font-semibold mb-2">
                                <span className="text-slate-500 dark:text-[#9ca0a1]">Runtime Efficiency</span>
                                <span className="text-slate-900 dark:text-white">Optimal</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest font-semibold mb-2">
                                <span className="text-slate-500 dark:text-[#9ca0a1]">Memory Footprint</span>
                                <span className="text-slate-900 dark:text-white">Minimal</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "20%" }}
                                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* STL Section - Full width */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-8" id="stl">
                    <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[26px] leading-[1.3] text-slate-900 dark:text-white mb-2">Standard Template Library (STL)</h3>
                                <p className="font-['Inter'] font-normal text-[15px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Essential containers and algorithms for efficient C++ development.</p>
                            </div>
                            <button className="mt-4 md:mt-0 bg-slate-900 dark:bg-white text-white dark:text-[#2f3131] font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.05em] leading-[1.5] px-7 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-[#e2e2e2] transition-colors cursor-pointer uppercase shadow-md">Download Blueprint</button>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-slate-800 dark:text-white mb-3"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                                <strong className="font-['JetBrains_Mono'] text-[13px] text-slate-800 dark:text-white block mb-1">std::vector</strong>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Contiguous Array</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-slate-800 dark:text-white mb-3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                <strong className="font-['JetBrains_Mono'] text-[13px] text-slate-800 dark:text-white block mb-1">std::unordered_map</strong>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">O(1) Hash Table</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-slate-800 dark:text-white mb-3"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                <strong className="font-['JetBrains_Mono'] text-[13px] text-slate-800 dark:text-white block mb-1">std::set</strong>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">RB Tree</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-slate-800 dark:text-white mb-3"><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/></svg>
                                <strong className="font-['JetBrains_Mono'] text-[13px] text-slate-800 dark:text-white block mb-1">&lt;algorithm&gt;</strong>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Sort & Find</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Industrial Uses - Full width CTA */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-4" id="industrial">
                    <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 dark:to-transparent opacity-50 z-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <svg className="w-10 h-10 text-slate-900 dark:text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/></svg>
                                <div>
                                    <h3 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-900 dark:text-white mb-1">Industrial Uses</h3>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">Game Engines, High-Performance Computing, Embedded Systems, Operating Systems Kernels</p>
                                </div>
                            </div>
                            <button className="bg-slate-900 dark:bg-white text-white dark:text-[#2f3131] font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.05em] px-7 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-[#e2e2e2] transition-colors cursor-pointer uppercase shadow-md shrink-0">Download Archival Binary</button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}