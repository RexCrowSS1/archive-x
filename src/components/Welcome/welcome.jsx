import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Welcome(){
    return(
      <>
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </div>
        
        <div className="relative z-10 px-[20px] md:px-[64px] py-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center md:text-left md:max-w-[800px]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Inter'] text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-slate-900 dark:text-[#ffffff] mb-6"
            >
              Synthesized Archive: Mastering the Digital Frontier
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Inter'] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] text-lg md:text-xl mb-8"
            >
              Sebuah koleksi terkurasi dari potongan kode, kerangka kerja, dan terobosan ilmu data. Jelajahi batas teknologi.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <button className="bg-slate-900 dark:bg-[#ffffff] text-white dark:text-[#2f3131] px-8 py-3 rounded-lg cursor-pointer font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase hover:opacity-90 transition-opacity">
                JELAJAHI ARSIP
              </button>
              <button className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-slate-300 dark:border-[#8e9192] cursor-pointer text-slate-700 dark:text-[#e5e1e4] px-8 py-3 rounded-lg font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                KONTRIBUSI
              </button>
            </motion.div>
          </motion.div>

          {/* Bento Grid Categories */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6 col-span-1 md:col-span-8 hover:shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group min-h-[300px] flex flex-col justify-end"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYvziOaMTY94Xsy_xu6RAVAktavztrM6BEABHv0azDv5esGhtVu3UOzm4qVIptCg67dWyN_zd6xjjLOGBXK25spWQmukXUBGG8OROCC827LgN-N3tuD-1MaI1LwZoRmQFHstnKw4v2rbF6f9jbgoy2gtm7B_p0o9q6R2cLtxA2dmEfRPgFbXnItble76mLNSRMzMqp1HwfcQT74TGCk7bJVRKYlVq2ul5VtOb_BHgXCgD2DUfJyQD95RHZdb8YYTBT4hHqbrEiiOA')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#353437] to-transparent" />
              <div className="relative z-10">
                <div className="bg-black/5 dark:bg-white/10 text-slate-900 dark:text-[#ffffff] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase px-3 py-1 rounded inline-block mb-3 border border-black/20 dark:border-white/20 backdrop-blur-md">
                  CORE LANGUAGE
                </div>
                <h2 className="font-['Inter'] text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-slate-700 dark:text-[#e5e1e4] mb-2">
                  Python Ecosystem
                </h2>
                <p className="text-slate-600 dark:text-[#c4c7c8] font-['Inter'] text-[14px] leading-[1.5]">
                  Algoritma tingkat lanjut, struktur data, dan arsitektur backend.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6 col-span-1 md:col-span-4 hover:shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-300 flex flex-col items-start justify-between min-h-[300px]"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-slate-900 dark:text-[#ffffff] border border-black/10 dark:border-white/10 mb-4">
                <span className="material-symbols-outlined">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                </span>
              </div>
              <div>
                <h2 className="font-['Inter'] text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-slate-700 dark:text-[#e5e1e4] mb-2">
                  Data Mining
                </h2>
                <p className="text-slate-600 dark:text-[#c4c7c8] font-['Inter'] text-sm leading-[1.5] mb-4">
                  Ekstraksi pola dari set data masif. Teknik visualisasi dan pra-pemrosesan.
                </p>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-[#353437] rounded-full overflow-hidden mt-auto">
                <motion.div 
                  className="h-full bg-slate-800 dark:bg-[#ffffff] w-[85%] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6 col-span-1 md:col-span-12 hover:shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group min-h-[200px] flex items-center"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 grayscale" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQesLiLS-7lca4RAPnzF4_y5w_mTyKcnmV_Jiv7vZ389AuJ_TuIvUuobAmOcUVot_-67TkRvVMIzSgtVUFLEXtW29krkHtnjvQiJWgYmQ11txIUdejpOeJffO4EywXYBdbg-nBT7hA6Xg-bZpoyH1Tyfefu6DJRecThMsnUDJZQeoueA5XlHi0blDNyFY-RzW2CbJaV8UrzuGhm-DFMGn2x7wbq2rTR8P5JrHFbjh_nCZmAee-74rArGJrqtRzvbpXUi8B77BH2vw')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-[#353437] via-slate-50/80 dark:via-[#353437]/80 to-transparent" />
              <div className="relative z-10 flex flex-col md:flex-row items-center w-full gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-slate-900 dark:text-[#ffffff] border border-black/20 dark:border-white/20 shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-3xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path>
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                            <path d="M12 8v2"></path>
                            <path d="M11 9h2"></path>
                        </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="bg-black/5 dark:bg-white/10 text-slate-900 dark:text-[#ffffff] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase px-3 py-1 rounded inline-block mb-2 border border-black/20 dark:border-white/20">
                    ADVANCED
                  </div>
                  <h2 className="font-['Inter'] text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-slate-700 dark:text-[#e5e1e4] mb-2">
                    Machine Learning Models
                  </h2>
                  <p className="text-slate-600 dark:text-[#c4c7c8] font-['Inter'] text-[14px] leading-[1.5] max-w-2xl">
                    Arsitektur jaringan saraf tiruan, model prediktif, dan implementasi TensorFlow/PyTorch siap produksi.
                  </p>
                </div>
                <Link to="/machinelearn" className="md:ml-auto mt-4 md:mt-0">
                  <button className="w-10 h-10 rounded-full cursor-pointer border border-slate-300 dark:border-[#8e9192] flex items-center justify-center text-slate-700 dark:text-[#e5e1e4] hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12H19"/>
                            <path d="M13 6L19 12L13 18"/>
                        </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
            
          </div>

          {/* Code Snippet Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-[#ffffff] text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold uppercase text-slate-700 dark:text-[#e5e1e4]">
                  model_training.py
                </span>
              </div>
              <button className="text-slate-600 dark:text-[#c4c7c8] hover:text-slate-900 dark:hover:text-[#ffffff] transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                    <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                    <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                  </svg>
                </span>
              </button>
            </div>
            <pre className="font-['JetBrains_Mono'] text-[14px] leading-[20px] font-[450] text-slate-600 dark:text-[#c4c7c8] overflow-x-auto">
              <code className="language-python">
{`import tensorflow as tf
from models import AdvancedNet

def train_model(dataset, epochs=100):
    """
    Synthesized training loop with optimized gradient application.
    """
    model = AdvancedNet()
    optimizer = tf.keras.optimizers.Adam(learning_rate=1e-4)
    
    for epoch in range(epochs):
        for batch in dataset:
            with tf.GradientTape() as tape:
                predictions = model(batch['images'])
                loss = compute_loss(batch['labels'], predictions)
                
            gradients = tape.gradient(loss, model.trainable_variables)
            optimizer.apply_gradients(zip(gradients, model.trainable_variables))
            
    return model`}
              </code>
            </pre>
          </motion.div>
          
        </div>
      </>
    )
}