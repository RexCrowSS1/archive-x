import React from 'react';
import { motion } from "framer-motion";

export default function DMPage() {
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
                    <span className="text-slate-500 dark:text-[#a1a1aa] flex items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </span>
                    <span className="font-['JetBrains_Mono'] font-medium text-[13px] leading-[1.5] text-slate-500 dark:text-[#c4c7c8] uppercase">Data Mining</span>
                </div>
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">
                    Uncovering Insights with Data Mining
                </h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    A comprehensive guide to extracting actionable intelligence from massive datasets using advanced computational algorithms and statistical techniques.
                </p>
            </motion.header>

            {/* Data Pipeline Visualization */}
            <motion.section variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 relative overflow-hidden group mb-8">
                <div 
                    className="absolute inset-0 opacity-[0.05] dark:opacity-10 pointer-events-none group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500" 
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px', color: 'gray' }} 
                />
                
                <h2 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-900 dark:text-white mb-8 flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="9" y1="21" x2="9" y2="9"/>
                        </svg>
                    </span>
                    Data Pipeline Architecture
                </h2>
                
                <div className="flex flex-col md:flex-row gap-4 items-stretch relative z-10">
                    {/* Raw Data */}
                    <div className="flex-1 bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                        </svg>
                        <span className="font-['JetBrains_Mono'] font-semibold text-[13px] leading-[1.5] text-slate-700 dark:text-[#c4c7c8] text-center">
                            Raw Data Lake<br />Ingestion
                        </span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </div>
                    <div className="md:hidden flex items-center justify-center py-2 text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                    
                    {/* Preprocessing */}
                    <div className="flex-1 bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                        </svg>
                        <span className="font-['JetBrains_Mono'] font-semibold text-[13px] leading-[1.5] text-slate-700 dark:text-[#c4c7c8] text-center">
                            ETL &amp;<br />Preprocessing
                        </span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </div>
                    <div className="md:hidden flex items-center justify-center py-2 text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                    
                    {/* Modeling */}
                    <div className="flex-1 bg-slate-800 dark:bg-[#ffffff]/10 border border-slate-900 dark:border-white/20 p-6 rounded-lg flex flex-col items-center justify-center gap-4 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="absolute inset-0 bg-white/5 dark:bg-white/5 opacity-50" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white dark:text-[#ffffff] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        <span className="font-['JetBrains_Mono'] font-semibold text-[13px] leading-[1.5] text-white dark:text-[#ffffff] text-center relative z-10">
                            Algorithmic<br />Modeling
                        </span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </div>
                    <div className="md:hidden flex items-center justify-center py-2 text-slate-400 dark:text-[#52525b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                    
                    {/* Insights */}
                    <div className="flex-1 bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                        </svg>
                        <span className="font-['JetBrains_Mono'] font-semibold text-[13px] leading-[1.5] text-slate-700 dark:text-[#c4c7c8] text-center">
                            Actionable<br />Insights
                        </span>
                    </div>
                </div>
            </motion.section>

            {/* Bento Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
                
                {/* The Mining Process */}
                <motion.section variants={itemVariants} className="lg:col-span-2 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl flex flex-col overflow-hidden hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                    <div className="border-b border-black/10 dark:border-white/10 p-6 bg-slate-50/50 dark:bg-[#1a191b]/50">
                        <h2 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-900 dark:text-white flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                            The Mining Process
                        </h2>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                        <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">
                            The systematic approach to discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-5 rounded-lg flex flex-col gap-3 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mt-1">KDD Framework</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1] mt-auto">Knowledge Discovery in Databases establishes the overarching structured process.</p>
                            </div>
                            <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-5 rounded-lg flex flex-col gap-3 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 12h20M12 2v20M5 5l14 14M19 5L5 19"/>
                                </svg>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mt-1">Data Cleaning</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1] mt-auto">Removing noise and inconsistent data to ensure model accuracy and reliability.</p>
                            </div>
                            <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-5 rounded-lg flex flex-col gap-3 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"/>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                </svg>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mt-1">Pattern Recognition</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1] mt-auto">Identifying structural patterns and regularities in multidimensional datasets.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Core Techniques */}
                <motion.section variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl flex flex-col overflow-hidden hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                    <div className="border-b border-black/10 dark:border-white/10 p-6 bg-slate-50/50 dark:bg-[#1a191b]/50">
                        <h2 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-900 dark:text-white flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="3" y1="9" x2="21" y2="9"/>
                                <line x1="9" y1="21" x2="9" y2="9"/>
                            </svg>
                            Core Techniques
                        </h2>
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                        <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-4 rounded-lg flex items-start gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 group">
                            <div className="mt-0.5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="6" cy="18" r="3"/>
                                    <circle cx="18" cy="18" r="3"/>
                                    <circle cx="12" cy="6" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mb-1">Clustering</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">Grouping unlabelled data based on inherent similarities.</p>
                            </div>
                        </div>
                        <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-4 rounded-lg flex items-start gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 group">
                            <div className="mt-0.5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 14h3a2 2 0 0 1 2 2v3"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mb-1">Association Rules</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">Discovering interesting relations between variables in databases.</p>
                            </div>
                        </div>
                        <div className="border border-black/5 dark:border-white/5 bg-slate-50/80 dark:bg-[#131315]/80 p-4 rounded-lg flex items-start gap-4 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 group">
                            <div className="mt-0.5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                    <polyline points="17 6 23 6 23 12"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] text-slate-800 dark:text-white uppercase mb-1">Regression</h3>
                                <p className="font-['Inter'] text-[13px] leading-[1.5] text-slate-500 dark:text-[#9ca0a1]">Modeling numerical data values to predict future trends.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Business Applications Image Banner */}
                <motion.section variants={itemVariants} className="lg:col-span-3 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl relative overflow-hidden min-h-[300px] flex items-center p-8 md:p-12 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 dark:opacity-20 grayscale mix-blend-multiply dark:mix-blend-screen" 
                        data-alt="A stark, minimalist corporate command center viewed from an abstract angle." 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7yquD-zmTjFVuTkyMpbmA4ndJ54XgGS3gcyfGIy5c5y90k89VZhV2gh9bd7OgKLG1cPGphyKJSY2NwWroD2PBhPfdquK_4G03Q1dzoRGmW3L7R7WAxQOw1Q01NnYYR0x6WNo2WODFXaZQRKhAsbyQ9VdmzkZCBz8pOYXWRyOIvkVsYGb3IoJPp0QEZ7s8iSGJMhSsvUiZPpGbIf-LWm1SsTx-UwYAWg9z1bBmIbv5uzcnKEGCLB7htwuYX-anAsIJmu46jkZPb7E')" }} 
                    />
                    <div className="relative z-10 max-w-2xl bg-white/90 dark:bg-[#131315]/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl p-8">
                        <h2 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-700 dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                            </svg>
                            Business Applications
                        </h2>
                        <ul className="space-y-4 font-['Inter'] text-[14.5px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-white inline-block rounded-full mt-2 shrink-0" /> 
                                <div><strong className="text-slate-900 dark:text-white">Fraud Detection:</strong> Anomaly detection algorithms isolating irregular transactional behavior.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-white inline-block rounded-full mt-2 shrink-0" /> 
                                <div><strong className="text-slate-900 dark:text-white">Market Basket Analysis:</strong> Association rule learning to optimize product placement and cross-selling.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-white inline-block rounded-full mt-2 shrink-0" /> 
                                <div><strong className="text-slate-900 dark:text-white">Customer Segmentation:</strong> Clustering techniques to identify distinct consumer profiles for targeted strategies.</div>
                            </li>
                        </ul>
                    </div>
                </motion.section>
                
            </div>
        </motion.div>
    );
}