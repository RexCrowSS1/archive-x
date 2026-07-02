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

export default function PyPage() {
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
                    <span className="font-['JetBrains_Mono'] font-medium text-[13px] leading-[1.5] text-slate-500 dark:text-[#c4c7c8]">v3.12.2</span>
                </div>
                <h1 className="font-['Inter'] font-bold tracking-[-0.01em] text-[32px] leading-[1.2] md:tracking-[-0.02em] md:text-[48px] md:leading-[1.1] text-slate-900 dark:text-[#ffffff] mb-4">Python Ecosystem</h1>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-slate-600 dark:text-[#c4c7c8] max-w-3xl">
                    A deep dive into advanced data structures, algorithmic implementations, and architectural patterns within the Python execution environment. Designed for high-performance, concurrent processing scenarios.
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
                                <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-900 dark:text-white">Python Fundamentals</h3>
                            </div>
                            <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1]">Konsep dasar dan pola sintaks Python untuk referensi cepat.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* 1. Output Dasar */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">01</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Output Dasar</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Fungsi <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">print()</code> digunakan untuk mengeluarkan data ke layar. agar dapat tertampil kan di 
                                        <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">terminal</code> atau <code className="bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 rounded text-[12px] font-['JetBrains_Mono'] text-slate-700 dark:text-[#c4c7c8]">
                                        cmd</code> kita. print ini hanya bersifat tampilan bukan variabel yang bisa menyimpankan data agar bisa di panggil. jadi intinya perintah dasar yang digunakan untuk menampilkan informasi (teks, angka, atau hasil perhitungan)
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="output.py" code={`# Mengeluarkan string\nprint("Halo, Python!")`} />
                                </div>
                            </div>

                            {/* 2. Variabel dan Tipe Data */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">02</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Variabel & Tipe Data</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Python bersifat <em>dynamically typed</em>, tipe variabel ditentukan saat runtime.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="variables.py" code={`x = 5            # int\ny = 3.14         # float\nname = "Dev"     # str\nis_on = True     # bool\nitems = [1, 2]   # list\ndata = {"k": 1}  # dict`} />
                                </div>
                            </div>

                            {/* 3. Alur Kontrol */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">03</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Alur Kontrol: if-else</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Pernyataan kondisional mengeksekusi blok kode berbeda berdasarkan kondisi.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="control_flow.py" code={`if x > 0:\n    print("Positif")\nelif x == 0:\n    print("Nol")\nelse:\n    print("Negatif")`} />
                                </div>
                            </div>

                            {/* 4. Perulangan */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">04</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Perulangan: for & while</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Perulangan mengulangi blok kode selama kondisi terpenuhi.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="loops.py" code={`# Perulangan for\nfor i in range(5):\n    print(i)\n\n# Perulangan while\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1`} />
                                </div>
                            </div>

                            {/* 5. Struktur Data */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">05</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Struktur Data</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        List (mutable) dan Tuple (immutable) adalah urutan berindeks.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="data_structs.py" code={`fruits = ["apel", "jeruk"]\ncoords = (10, 20)\nunique = {1, 2, 3}\n\nfruits.append("mangga")\nprint(fruits[0])  # apel`} />
                                </div>
                            </div>

                            {/* 6. Fungsi */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">06</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Fungsi (Functions)</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="functions.py" code={`def sapa(nama, salam="Halo"):\n    return f"{salam}, {nama}!"\n\nprint(sapa("Python"))\n# Halo, Python!`} />
                                </div>
                            </div>

                            {/* 7. Operator */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">07</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">Operator Python</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] text-justify">
                                        Operator aritmatika, perbandingan, logika, dan penugasan. 
                                        Bentuk dari operasi perkalian, pertambahan, pengurangan, pembagian, perpangkatan, modulo, dan lainnya. 
                                        Operator perbandingan seperti sama dengan '==', tidak sama dengan '!=', dan lainnya. 
                                        Operator logika seperti 'and', 'or', dan 'not'. 
                                        Operator penugasan seperti '+=', '-=', '*=', '/=', '**=', '%=', dan lainnya. 

                                        ini semua di lakukan agar komputer dapat mengetahui operasi yang kita lakukan, istilah nya juga kita akan memberi tahu ke python dengan bahasa python agar semua nya dapat di mengerti oleh komputer
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <CodeSnippet filename="operators.py" code={`# Aritmatika\nresult = (10 + 5) * 2 ** 3\n\n# Perbandingan & Logika\ncheck = (5 == 5) and (10 > 3)\n\n# Penugasan\ncount = 0\ncount += 1  # count = 1`} />
                                </div>
                            </div>

                            {/* 8. OOP Python */}
                            <div className="group/item bg-slate-50/80 dark:bg-[#131315]/80 border border-black/5 dark:border-white/5 rounded-xl p-6 hover:border-black/15 dark:hover:border-white/15 transition-all duration-300 flex flex-col h-full">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-white bg-slate-800 dark:bg-white/15 dark:text-[#c4c7c8] px-2 py-0.5 rounded">08</span>
                                        <h4 className="font-['Inter'] font-semibold text-[16px] text-slate-800 dark:text-white">OOP (Object-Oriented)</h4>
                                    </div>
                                    <p className="font-['Inter'] font-normal text-[13.5px] leading-[1.6] text-slate-500 dark:text-[#9ca0a1] mb-2">
                                        Paradigma berbasis objek: class, inheritance, encapsulation, dan polymorphism.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <CodeSnippet filename="oop.py" code={`class Hewan:\n    def __init__(self, nama, suara):\n        self.nama = nama\n        self._suara = suara  # encapsulation\n\n    def bersuara(self):\n        return f"{self.nama}: {self._suara}"\n\nclass Kucing(Hewan):\n    def __init__(self, nama):\n        super().__init__(nama, "Meow")\n\n    def bersuara(self):  # override\n        return f"{super().bersuara()}"\n\nk = Kucing("Miko")\nprint(k.bersuara()) #  Miko: Meow`} />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
                {/* Core Concepts Card */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 p-[24px] rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                        <h3 className="font-['Inter'] font-semibold text-[24px] leading-[1.3] text-slate-800 dark:text-[#ffffff]">Advanced Algorithms</h3>
                        <span className="material-symbols-outlined text-slate-400 dark:text-[#c4c7c8] group-hover:text-slate-800 dark:group-hover:text-[#ffffff] transition-colors">
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
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Graph Traversal (BFS/DFS)</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-5">Optimized implementations for navigating complex node networks, prioritizing memory efficiency in large-scale data topologies.</p>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-[#2a2a2c] rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] w-[85%] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="font-['JetBrains_Mono'] font-medium tracking-[0.05em] text-[12px] leading-[1.0] text-slate-500 dark:text-[#c4c7c8]">O(V + E)</span>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff]">High Efficiency</span>
                            </div>
                        </div>
                        <div className="bg-slate-50/80 dark:bg-[#131315] p-5 border border-black/5 dark:border-white/5 rounded-lg hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300">
                            <h4 className="font-['Inter'] font-semibold text-[15px] leading-[1.5] text-slate-800 dark:text-[#ffffff] mb-2">Dynamic Programming</h4>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] mb-5">Memoization strategies for overlapping subproblems. Essential for predictive modeling and optimal substructure resolution.</p>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-[#2a2a2c] rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-slate-800 dark:bg-[#ffffff] w-[70%] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "70%" }}
                                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="font-['JetBrains_Mono'] font-medium tracking-[0.05em] text-[12px] leading-[1.0] text-slate-500 dark:text-[#c4c7c8]">O(N^2)</span>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.0] text-slate-800 dark:text-[#ffffff]">Memory Intensive</span>
                            </div>
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
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Primary Standard Library</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">collections</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Type Hinting</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">typing</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-3">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Concurrency</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">asyncio</span>
                        </li>
                        <li className="flex justify-between items-center pb-1">
                            <span className="font-['Inter'] font-medium text-[14px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Execution Engine</span>
                            <span className="font-['JetBrains_Mono'] font-semibold text-[12px] leading-[1.5] text-slate-800 dark:text-[#ffffff] bg-slate-100 dark:bg-[#131315] px-2.5 py-1 border border-black/10 dark:border-white/10 rounded">CPython</span>
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
                                data_structure.py
                            </span>
                        </div>
                        <button className="text-slate-600 dark:text-[#c4c7c8] hover:text-slate-900 dark:hover:text-[#ffffff] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="7" width="10" height="12" rx="1.5"/>
                                    <rect x="9" y="3" width="10" height="12" rx="1.5"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <pre className="font-['JetBrains_Mono'] text-[14px] leading-[20px] font-[450] text-slate-600 dark:text-[#c4c7c8] overflow-x-auto">
                        <code className="language-python">
{`# Advanced Implementation of a Thread-Safe LRU Cache
from typing import Generic, TypeVar, Optional, Dict
from threading import Lock
from collections import OrderedDict

K = TypeVar('K')
V = TypeVar('V')

class ThreadSafeLRUCache(Generic[K, V]):
    """
    A strictly typed, thread-safe Least Recently Used (LRU) cache
    designed for high-concurrency read-heavy environments.
    """
    def __init__(self, capacity: int) -> None:
        self.capacity: int = capacity
        self.cache: OrderedDict[K, V] = OrderedDict()
        self._lock: Lock = Lock()

    def get(self, key: K) -> Optional[V]:
        with self._lock:
            if key not in self.cache:
                return None
            # Move to end to indicate recent use
            self.cache.move_to_end(key)
            return self.cache[key]

    def put(self, key: K, value: V) -> None:
        with self._lock:
            if key in self.cache:
                self.cache.move_to_end(key)
            self.cache[key] = value
            if len(self.cache) > self.capacity:
                self.cache.popitem(last=False)`}
                        </code>
                    </pre>
                </motion.div>

                {/* Visualization Section */}
                <motion.div variants={itemVariants} className="md:col-span-12 mt-8">
                    <div className="bg-white/80 dark:bg-[#201f22]/60 backdrop-blur-md border border-black/10 dark:border-white/5 rounded-xl p-[32px] relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            <div className="bg-cover bg-center w-full h-full opacity-50 mix-blend-multiply dark:mix-blend-screen" data-alt="A highly detailed, technical data visualization background." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3bPQdbNIhTY5GFrbylNPkcl4pBRS4lU_P5AQoF1rOF0n93LQVySfNW2i5RDPzFmR8fjmAlvCRBhe6bD-vRyUPQAuVSEKHM0AL-Or_PauyCdRu_X8D-mzjELUFdNOdmaRTfwk68gR6EmoSpS98GwS7kPjwRDFnvErVc5fb6rTeqiow3_2S5CaOHWDD1GgouS9m9Kad6QHvPdTBUZTlzHpw4EkZ7O7hOF3yNS5402iUxNi3WT_fgYlplGp36cCF7x-L69qAGQ1xPJQ')" }}></div>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-8">
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[26px] leading-[1.3] text-slate-900 dark:text-[#ffffff] mb-2">Architecture Diagram</h3>
                                <p className="font-['Inter'] font-normal text-[15px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8]">Structural representation of the LRU Cache memory mapping.</p>
                            </div>
                            <button className="mt-4 md:mt-0 bg-slate-900 dark:bg-[#ffffff] text-white dark:text-[#2f3131] font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.05em] leading-[1.5] px-7 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-[#e2e2e2] transition-colors cursor-pointer uppercase shadow-md">Download Blueprint</button>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <rect x="6" y="6" width="12" height="12" />
                                    <rect x="10" y="10" width="4" height="4" />
                                    <path d="M9 3v3 M12 3v3 M15 3v3 M9 18v3 M12 18v3 M15 18v3 M3 9h3 M3 12h3 M3 15h3 M18 9h3 M18 12h3 M18 15h3" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Heap Allocation</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <rect x="5" y="11" width="14" height="10" rx="1.5" />
                                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Thread Mutex</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <path d="M9 5H8a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h1" />
                                    <path d="M15 5h1a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">Ordered Dict</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white/90 dark:bg-[#131315]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 flex flex-col items-center justify-center rounded-xl shadow-sm cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 text-slate-800 dark:text-[#ffffff] mb-3">
                                    <path d="M4 16a8 8 0 1 1 16 0" />
                                    <path d="M12 14l4-5" />
                                    <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                                </svg>
                                <span className="font-['JetBrains_Mono'] font-bold tracking-[0.05em] text-[12px] leading-[1.5] text-slate-600 dark:text-[#c4c7c8] uppercase">O(1) Access</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}