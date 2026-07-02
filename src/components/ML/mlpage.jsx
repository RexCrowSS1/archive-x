import React from 'react';
import { motion } from "framer-motion";

export default function MLPage() {
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
        <main className="flex-1 flex flex-col min-w-0 bg-transparent transition-colors duration-300">
            {/* TopNavBar (Mobile Only / Minimal Header for Canvas) */}
            <header className="md:hidden flex justify-between items-center w-full px-6 h-16 bg-white/80 dark:bg-[#131315]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 sticky top-0 z-50">
                <div className="font-['Inter'] text-[18px] font-bold tracking-tighter text-slate-900 dark:text-white">ARCHIVE_X</div>
                <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-slate-800 dark:text-white cursor-pointer active:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    <svg className="w-6 h-6 text-slate-800 dark:text-white cursor-pointer active:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
                <motion.div 
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Main Documentation Area */}
                    <div className="lg:col-span-8 xl:col-span-9 space-y-10">
                        
                        {/* Header */}
                        <motion.section variants={itemVariants} className="border-b border-black/10 dark:border-white/10 pb-8">
                            <div className="inline-block px-3 py-1.5 border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 rounded-md font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.1em] text-slate-800 dark:text-white mb-6 backdrop-blur-sm">
                                Technical Documentation
                            </div>
                            <h1 className="font-['Inter'] font-bold text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
                                Predictive Intelligence: Machine Learning
                            </h1>
                            <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                                An archival overview of machine learning architectures, paradigms, and implementation protocols designed for robust predictive modeling in dense data environments.
                            </p>
                        </motion.section>

                        {/* Learning Paradigms Bento */}
                        <motion.section variants={itemVariants}>
                            <h2 className="font-['Inter'] font-semibold text-[22px] leading-[1.3] text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white dark:text-[#c4c7c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="3" y1="9" x2="21" y2="9"/>
                                        <line x1="9" y1="21" x2="9" y2="9"/>
                                    </svg>
                                </span>
                                Learning Paradigms
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {/* Supervised */}
                                <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 flex flex-col h-full hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300 rounded-xl">
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="text-slate-800 dark:text-[#ffffff]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                        </div>
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-white dark:text-[#c4c7c8] bg-slate-800 dark:bg-white/10 px-2 py-1 rounded">Labeled</span>
                                    </div>
                                    <h3 className="font-['Inter'] font-semibold text-[17px] text-slate-900 dark:text-white mb-2">Supervised</h3>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1] flex-1">
                                        Algorithms trained on explicitly labeled datasets, mapping inputs to predefined outputs for classification and regression tasks.
                                    </p>
                                </div>
                                
                                {/* Unsupervised */}
                                <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 flex flex-col h-full hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300 rounded-xl">
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="text-slate-800 dark:text-[#ffffff]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="12" cy="6" r="3"/></svg>
                                        </div>
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-white dark:text-[#c4c7c8] bg-slate-800 dark:bg-white/10 px-2 py-1 rounded">Unlabeled</span>
                                    </div>
                                    <h3 className="font-['Inter'] font-semibold text-[17px] text-slate-900 dark:text-white mb-2">Unsupervised</h3>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1] flex-1">
                                        Pattern discovery within unannotated data structures. Utilized primarily for clustering, dimensionality reduction, and anomaly detection.
                                    </p>
                                </div>
                                
                                {/* Reinforcement */}
                                <div className="bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 flex flex-col h-full hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300 rounded-xl">
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="text-slate-800 dark:text-[#ffffff]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/></svg>
                                        </div>
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-white dark:text-[#c4c7c8] bg-slate-800 dark:bg-white/10 px-2 py-1 rounded">Reward</span>
                                    </div>
                                    <h3 className="font-['Inter'] font-semibold text-[17px] text-slate-900 dark:text-white mb-2">Reinforcement</h3>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1] flex-1">
                                        Agents learning optimal policies through environmental interaction, balancing exploration with exploitation to maximize cumulative reward.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Classic Algorithms Matrix */}
                        <motion.section variants={itemVariants}>
                            <h2 className="font-['Inter'] font-semibold text-[22px] leading-[1.3] text-slate-900 dark:text-white mb-6 border-b border-black/10 dark:border-white/10 pb-3">
                                Classic Algorithms Matrix
                            </h2>
                            <div className="border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm">
                                <div className="grid grid-cols-4 gap-4 p-4 border-b border-black/10 dark:border-white/10 bg-slate-100 dark:bg-[#1a191b] font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-slate-500 dark:text-[#a1a1aa]">
                                    <div className="col-span-1">Algorithm</div>
                                    <div className="col-span-1">Type</div>
                                    <div className="col-span-2">Core Mechanism</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 p-4 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#131315]/80 hover:bg-slate-50 dark:hover:bg-[#18181B] transition-colors">
                                    <div className="col-span-1 font-['Inter'] text-[14px] font-semibold text-slate-900 dark:text-white">Linear Regression</div>
                                    <div className="col-span-1 font-['Inter'] text-[13.5px] text-slate-600 dark:text-[#9ca0a1]">Supervised (Regression)</div>
                                    <div className="col-span-2 font-['Inter'] text-[14px] leading-[1.5] text-slate-600 dark:text-[#9ca0a1]">Models the linear relationship between independent variables and a continuous target variable by fitting a line to observed data.</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 p-4 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#131315]/80 hover:bg-slate-50 dark:hover:bg-[#18181B] transition-colors">
                                    <div className="col-span-1 font-['Inter'] text-[14px] font-semibold text-slate-900 dark:text-white">Support Vector Machine</div>
                                    <div className="col-span-1 font-['Inter'] text-[13.5px] text-slate-600 dark:text-[#9ca0a1]">Supervised (Classification)</div>
                                    <div className="col-span-2 font-['Inter'] text-[14px] leading-[1.5] text-slate-600 dark:text-[#9ca0a1]">Constructs hyperplanes in high-dimensional space to separate classes, maximizing the margin between data points.</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 p-4 bg-white/80 dark:bg-[#131315]/80 hover:bg-slate-50 dark:hover:bg-[#18181B] transition-colors">
                                    <div className="col-span-1 font-['Inter'] text-[14px] font-semibold text-slate-900 dark:text-white">Random Forest</div>
                                    <div className="col-span-1 font-['Inter'] text-[13.5px] text-slate-600 dark:text-[#9ca0a1]">Ensemble</div>
                                    <div className="col-span-2 font-['Inter'] text-[14px] leading-[1.5] text-slate-600 dark:text-[#9ca0a1]">Aggregates multiple decision trees trained on random subsets of data to improve predictive accuracy and control over-fitting.</div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Implementation Code Block */}
                        <motion.section variants={itemVariants}>
                            <h2 className="font-['Inter'] font-semibold text-[22px] leading-[1.3] text-slate-900 dark:text-white mb-6">Implementation: Scikit-Learn</h2>
                            <div className="border border-black/10 dark:border-white/10 rounded-xl bg-slate-900 dark:bg-[#0e0e10] overflow-hidden shadow-lg">
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-800 dark:bg-white/5">
                                    <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-white/70">Python / Training Cycle</span>
                                    <button className="text-white/50 hover:text-white transition-colors cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                                            <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                                        </svg>
                                    </button>
                                </div>
                                <pre className="p-5 overflow-x-auto font-['JetBrains_Mono'] text-[13.5px] leading-[1.7] text-white/90">
                                    <code className="language-python">
{`from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. Data Partitioning
X_train, X_val, y_train, y_val = train_test_split(
    features, target, 
    test_size=0.2, 
    random_state=42
)

# 2. Model Initialization
model = RandomForestClassifier(n_estimators=100, max_depth=10)

# 3. Training Cycle
model.fit(X_train, y_train)

# 4. Validation
predictions = model.predict(X_val)
acc = accuracy_score(y_val, predictions)

print(f"Validation Accuracy: {acc:.4f}")
print(classification_report(y_val, predictions))`}
                                    </code>
                                </pre>
                            </div>
                        </motion.section>

                        {/* Use Cases */}
                        <motion.section variants={itemVariants}>
                            <h2 className="font-['Inter'] font-semibold text-[22px] leading-[1.3] text-slate-900 dark:text-white mb-6">Real-World Application Vectors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="border border-black/10 dark:border-white/10 p-6 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm rounded-xl hover:border-black/30 dark:hover:border-white/30 transition-colors">
                                    <h4 className="font-['Inter'] font-semibold text-[17px] text-slate-900 dark:text-white mb-3">Recommender Systems</h4>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">Utilizing collaborative filtering and matrix factorization to surface relevant content based on historical interaction matrices.</p>
                                </div>
                                <div className="border border-black/10 dark:border-white/10 p-6 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm rounded-xl hover:border-black/30 dark:hover:border-white/30 transition-colors">
                                    <h4 className="font-['Inter'] font-semibold text-[17px] text-slate-900 dark:text-white mb-3">Predictive Analytics</h4>
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">Time-series forecasting models predicting hardware failure rates or market fluctuations using historical trend data.</p>
                                </div>
                            </div>
                        </motion.section>

                    </div>

                    {/* Sidebar: Model Evaluation */}
                    <motion.aside variants={itemVariants} className="lg:col-span-4 xl:col-span-3">
                        <div className="sticky top-8 bg-white/80 dark:bg-[#18181B] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 md:p-8 flex flex-col shadow-sm">
                            <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-5 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-900 dark:text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10"/>
                                    <line x1="12" y1="20" x2="12" y2="4"/>
                                    <line x1="6" y1="20" x2="6" y2="14"/>
                                </svg>
                                <h3 className="font-['Inter'] font-semibold text-[18px] text-slate-900 dark:text-white">Evaluation Metrics</h3>
                            </div>
                            <div className="space-y-6 flex-1">
                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-slate-800 dark:text-white">Precision</span>
                                        <span className="font-['JetBrains_Mono'] font-medium text-[11px] text-slate-500 dark:text-[#9ca0a1]">TP / (TP + FP)</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="bg-slate-900 dark:bg-[#ffffff] h-full w-[85%]" 
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-slate-800 dark:text-white">Recall</span>
                                        <span className="font-['JetBrains_Mono'] font-medium text-[11px] text-slate-500 dark:text-[#9ca0a1]">TP / (TP + FN)</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="bg-slate-900 dark:bg-[#ffffff] h-full w-[78%]" 
                                            initial={{ width: 0 }}
                                            animate={{ width: "78%" }}
                                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] uppercase tracking-[0.05em] text-slate-800 dark:text-white">F1-Score</span>
                                        <span className="font-['JetBrains_Mono'] font-medium text-[11px] text-slate-500 dark:text-[#9ca0a1]">Harmonic Mean</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="bg-slate-900 dark:bg-[#ffffff] h-full w-[81%]" 
                                            initial={{ width: 0 }}
                                            animate={{ width: "81%" }}
                                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-5 border-t border-black/10 dark:border-white/10">
                                <p className="font-['Inter'] font-normal text-[13px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">
                                    <strong className="text-slate-700 dark:text-white font-semibold">Note:</strong> Metric selection must align with the specific cost matrix of false positives vs. false negatives in the deployment environment.
                                </p>
                            </div>
                        </div>
                    </motion.aside>

                </motion.div>
            </div>
        </main>
    );
}