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

export default function DLPage(){
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
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">Deep Learning Architectures</h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    Comprehensive reference for neural network topologies, training paradigms, and framework implementations.
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
                                    <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-[20px]">                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/10">
                                    <span className="material-symbols-outlined text-white dark:text-[#c4c7c8] text-[20px]"><svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 -960 960 960" 
                                        fill="currentColor"
                                        className="w-6 h-6 text-[#c6c6cf]"
                                        >
                                        <path d="M120-120v-320h320v320H120Zm400 0v-320h320v320H520ZM120-520v-320h720v320H120Zm80 240h160v-160H200v160Zm400 0h160v-160H600v160Zm-400-400h560v-160H200v160Zm0 0v-160 160Zm0 400v-160 160Zm400 0v-160 160Z"/>
                                        </svg>
                                        </span>
                                </span></span>
                                </span>
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Neural Network Fundamentals</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">The foundational building blocks for Deep Learning architectures.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Perceptrons */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">01</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Perceptrons & Backprop</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        The foundational building blocks. Forward passes calculate loss, while backpropagation computes gradients via the chain rule to update weights.
                                    </p>
                                </div>
                            </div>

                            {/* Activation Functions */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">02</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Activation Functions</h4>
                                    </div>
                                    <ul className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] list-none flex flex-col gap-2 mb-2">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-[#ffffff] rounded-full"></span> 
                                            <span>ReLU: <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">max(0, x)</code></span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-[#ffffff] rounded-full"></span> 
                                            <span>Sigmoid: <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">1 / (1 + e^-x)</code></span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-slate-800 dark:bg-[#ffffff] rounded-full"></span> 
                                            <span>Tanh: <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">(e^x - e^-x) / (e^x + e^-x)</code></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </motion.div>

                {/* Practical Implementation */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Practical Implementation</h3>
                        <span className="material-symbols-outlined text-slate-400 dark:text-[#c4c7c8] group-hover:text-slate-800 dark:group-hover:text-[#ffffff] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" />
                                <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" />
                            </svg>
                        </span>
                    </div>
                    <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-[16px]">
                        A technical walkthrough of a binary classification pipeline using Convolutional Neural Networks to distinguish between AI-generated and authentic imagery.
                    </p>

                    <div className="grid grid-cols-1 gap-[16px]">
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg></span>
                                Stage 1: Data Acquisition & Preprocessing
                            </h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-2">Downloading the dataset from Kagglehub and preparing images via OpenCV. Normalization is applied to scale pixel values to [0, 1].</p>
                            <CodeSnippet filename="data_prep.py" code={`import kagglehub\nimport cv2\nimport numpy as np\n\npath = kagglehub.dataset_download("cashbowman/ai-generated-images-vs-real-images")\nIMG_SIZE = 64\n\ndef load_data(dir_path, label):\n    data = []\n    for img in os.listdir(dir_path):\n        img_path = os.path.join(dir_path, img)\n        image = cv2.imread(img_path)\n        image = cv2.resize(image, (IMG_SIZE, IMG_SIZE))\n        data.append([np.array(image)/255.0, label])\n    return data`} />
                        </div>
                        
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <path d="M2 12l10 5 10-5" />
                                <path d="M2 17l10 5 10-5" />
                                </svg></span>
                                Stage 2: CNN Architecture
                            </h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-2">A sequential model utilizing Conv2D for feature extraction, MaxPooling2D for downsampling, and Dropout to prevent overfitting.</p>
                            <CodeSnippet filename="model_def.py" code={`model = Sequential([\n    Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)),\n    MaxPooling2D((2, 2)),\n    Conv2D(64, (3, 3), activation='relu'),\n    MaxPooling2D((2, 2)),\n    Flatten(),\n    Dense(128, activation='relu'),\n    Dropout(0.5),\n    Dense(1, activation='sigmoid')\n])`} />
                        </div>

                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                    <path d="M12 2a10 10 0 1 1-7.4 3.3" />
                                    <polyline points="8 2 4 6 8 10" />
                                    <line x1="7" y1="12" x2="12" y2="7" />
                                    <line x1="7" y1="12" x2="12" y2="17" />
                                    <line x1="12" y1="7" x2="17" y2="12" />
                                    <line x1="12" y1="17" x2="17" y2="12" />
                                    <circle cx="7" cy="12" r="2" fill="currentColor" />
                                    <circle cx="12" cy="7" r="2" fill="currentColor" />
                                    <circle cx="12" cy="17" r="2" fill="currentColor" />
                                    <circle cx="17" cy="12" r="2" fill="currentColor" />
                                    </svg></span>
                                Stage 3: Training & Compilation
                            </h4>
                            <CodeSnippet filename="train.py" code={`model.compile(optimizer='adam', \n              loss='binary_crossentropy', \n              metrics=['accuracy'])\n\nhistory = model.fit(X_train, y_train, \n                    epochs=20, \n                    validation_data=(X_test, y_test))`} />
                        </div>

                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                    <path d="M3 3v18h18" />    
                                    <path d="M7 21v-4" opacity="0.4" />
                                    <path d="M11 21v-8" opacity="0.4" />
                                    <path d="M15 21v-11" opacity="0.4" />
                                    <path d="M3 17l6-6 4 3 7-7" />
                                    <polyline points="16 7 20 7 20 11" />
                                </svg></span>
                                Stage 4: Evaluation & Visualization
                            </h4>
                            <CodeSnippet filename="evaluate.py" code={`from sklearn.metrics import classification_report, confusion_matrix\nimport matplotlib.pyplot as plt\n\ny_pred = (model.predict(X_test) > 0.5).astype("int32")\nprint(classification_report(y_test, y_pred))\n\nplt.plot(history.history['accuracy'], label='accuracy')\nplt.plot(history.history['val_accuracy'], label = 'val_accuracy')\nplt.show()`} />
                        </div>
                    </div>
                </motion.div>

                {/* Metadata Column */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    {/* Meta Data Card */}
                    <motion.div variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                            <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Model Metadata</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Training Status</span>
                                <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff]">ACTIVE</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Model Epochs</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">1,024 / 5,000</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Dataset Size</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">4.2 TB</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Loss (val)</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">0.0142</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">IMG_SIZE</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">64 x 64</span>
                            </li>
                            <li className="flex justify-between items-center pb-1">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Optimizer</span>
                                <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">Adam</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Architecture Variants */}
                    <motion.div variants={itemVariants} className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                        <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                            <h3 className="font-['Inter'] font-semibold text-[20px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Architecture Variants</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="bg-slate-50/80 dark:bg-[#131315] p-4 border border-black/5 dark:border-white/5 rounded-lg">
                                <h4 className="font-['Inter'] font-semibold text-[14px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-1">CNN (Vision)</h4>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Utilizes spatial hierarchies via convolutional filters. Ideal for grids like images.</p>
                            </div>
                            <div className="bg-slate-50/80 dark:bg-[#131315] p-4 border border-black/5 dark:border-white/5 rounded-lg">
                                <h4 className="font-['Inter'] font-semibold text-[14px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-1">RNN (Sequential)</h4>
                                <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Maintains hidden states for temporal sequences. Often superseded by Transformers in modern NLP.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Transformer Architecture Detail Card */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-4">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <div className="bg-cover bg-center w-full h-full opacity-50 mix-blend-multiply dark:mix-blend-screen" data-alt="A highly detailed, technical data visualization background." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3bPQdbNIhTY5GFrbylNPkcl4pBRS4lU_P5AQoF1rOF0n93LQVySfNW2i5RDPzFmR8fjmAlvCRBhe6bD-vRyUPQAuVSEKHM0AL-Or_PauyCdRu_X8D-mzjELUFdNOdmaRTfwk68gR6EmoSpS98GwS7kPjwRDFnvErVc5fb6rTeqiow3_2S5CaOHWDD1GgouS9m9Kad6QHvPdTBUZTlzHpw4EkZ7O7hOF3yNS5402iUxNi3WT_fgYlplGp36cCF7x-L69qAGQ1xPJQ')" }}></div>
                        </div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div className="flex items-center gap-[8px]">
                                <span className="material-symbols-outlined text-slate-800 dark:text-[#ffffff] text-[28px] pr-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                    <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
                                    <rect x="9" y="9" width="6" height="6" rx="1" />
                                    <path d="M9 1v4M12 1v4M15 1v4" />
                                    <path d="M9 19v4M12 19v4M15 19v4" />
                                    <path d="M1 9h4M1 12h4M1 15h4" />
                                    <path d="M19 9h4M19 12h4M19 15h4" />
                                    </svg></span>
                                <div>
                                    <h3 className="font-['Inter'] font-semibold text-[26px] leading-[1.3] text-slate-900 dark:text-[#ffffff]">Transformer Architecture</h3>
                                    <p className="font-['Inter'] font-normal text-[15px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Transformers rely entirely on self-attention mechanisms.</p>
                                </div>
                            </div>
                            <span className="mt-4 md:mt-0 font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-4 py-2 border border-black/10 dark:border-white/10 rounded uppercase shadow-sm">
                                Core Topology
                            </span>
                        </div>
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-sm">
                                <h4 className="font-['Inter'] font-semibold text-[16px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-4">Self-Attention Mechanism</h4>
                                <div className="font-['JetBrains_Mono'] text-[13px] leading-[1.5] font-normal text-slate-700 dark:text-[#c4c7c8] bg-slate-50 dark:bg-[#201f22] p-4 border border-black/10 dark:border-white/10 rounded-lg mb-4 text-center">
                                    Attention(Q, K, V) = softmax(QK^T / √d_k)V
                                </div>
                                <p className="font-['Inter'] font-normal text-[14px] leading-[1.6] text-slate-600 dark:text-[#9ca0a1]">
                                    Computes a weighted sum of values (V), where weights are determined by the compatibility of a query (Q) with keys (K).
                                </p>
                            </div>
                            
                            <div className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center relative overflow-hidden min-h-[160px]">
                                <div 
                                    className="w-full h-full bg-cover bg-center absolute inset-0 opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" 
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPECQtHNjeoGz4O21ILW-akGntf9xB5W9Bbp-W0jsj6O3SyFgUfWv-gO0glc396LcDv_jCHMJtYZuw7AQ25PHcVpkPf5Nm6RdxmQS-25FjcyA-YDr2SW0QF1uSyRYl1gZJvwdXkf8mUZw6Ey2jhliYQOl0JNPp6Z8xXrZv4LAh-qaCssO1Wf899zyat6pMJac_gpoc0icSeNmY7_Dl6AVmRw4nEP-4_thuotuDGXJQ5IbqsWNfRa-m-ee2j4xa7L-GD-vtfTa6m20')" }}
                                ></div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="relative z-10 font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[13px] leading-[1.5] uppercase text-slate-800 dark:text-[#ffffff] bg-white/80 dark:bg-[#131315]/80 backdrop-blur-md px-6 py-3 border border-black/10 dark:border-white/20 rounded shadow-md cursor-default">
                                    Fig 1. Attention Flow
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}