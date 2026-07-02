import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import discordIcon from '../assets/image.png';

export default function DiscordModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const inviteLink = "https://discord.gg/sqPkCgRQ9";

  // Fungsi untuk menyalin link ke clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset ikon setelah 2 detik
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          
          {/* Backdrop (Klik di luar modal untuk menutup) */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Modal Card */}
          <motion.div 
            className="relative bg-[#2B2D31] border border-white/10 rounded-xl p-8 w-full max-w-md shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            
            {/* Tombol Tutup (Close X) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white transition-colors"
              aria-label="Tutup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Header: Ikon, Judul, Deskripsi */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-[#5865F2] text-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(88,101,242,0.3)] overflow-hidden">
                <img src={discordIcon} alt="Eclipnesia Icon" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Eclipnesia</h2>
              <p className="text-zinc-400 text-sm">Join the digital frontier and collaborate with fellow developers.</p>
            </div>

            {/* Statistik Member */}
            <div className="flex items-center gap-6 justify-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">1,240 Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-500"></div>
                <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase">5,800 Members</span>
              </div>
            </div>

            {/* Input Link & Tombol Gabung */}
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-[10px] font-bold text-zinc-400 mb-1.5 uppercase tracking-widest">
                  Invite Link
                </label>
                <div className="flex gap-2">
                  <input
                    className="flex-1 bg-[#1E1F22] border border-white/5 rounded-md px-3 py-2 text-sm font-mono text-zinc-200 outline-none focus:border-[#5865F2]/50 transition-colors"
                    readOnly
                    type="text"
                    value={inviteLink}
                  />
                  <button
                    onClick={handleCopy}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 px-3 rounded-md transition-all text-zinc-300 flex items-center justify-center min-w-[44px]"
                    title="Copy link"
                  >
                    {copied ? (
                      // Ikon Centang (Sukses Copy)
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      // Ikon Copy
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                </div>
              </div>
              <button onClick={() => window.open("https://discord.gg/sqPkCgRQ9", "_blank")} className="w-full bg-[#5865F2] text-white py-3 rounded-md text-sm font-bold tracking-wide hover:bg-[#4752C4] transition-colors active:scale-[0.98]">
                JOIN SERVER
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}