import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/meprofile.jpeg";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

// Routes that belong to each category — used to auto-expand & detect active category
const DEV_ROUTES = ["/python", "/javascript", "/cplus", "/react", "/fastapi"];
const DATA_ROUTES = ["/datamining", "/machinelearn", "/deeplearn"];

export default function SideBar({ isOpen, toggleSidebar }){
  const location = useLocation();
  const isDevRouteActive = DEV_ROUTES.includes(location.pathname);
  const isDataRouteActive = DATA_ROUTES.includes(location.pathname);
  const [isDevOpen, setIsDevOpen] = useState(isDevRouteActive);
  const [isDataOpen, setIsDataOpen] = useState(isDataRouteActive);

  const getNavLinkClass = ({ isActive }) => {
    const baseClasses = "px-5 py-2.5 flex items-center gap-3 rounded-lg mx-2 transition-all duration-200 group/item";
    const activeClasses = "bg-slate-900/[0.06] dark:bg-white/[0.08] text-slate-900 dark:text-white font-semibold";
    const inactiveClasses = "text-slate-500 dark:text-[#9ca0a1] font-normal hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-slate-700 dark:hover:text-[#d0d3d4]";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };
  const getTextClass = (isActive) => {
    return `font-['Inter'] text-[13.5px] leading-[1.4] tracking-[-0.01em] transition-all duration-200 ${isActive ? 'font-semibold' : 'font-normal'}`;
  };
  const ActiveDot = ({ isActive }) => (
    isActive ? (
      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
    ) : null
  );
  const getCategoryClass = (isExpanded, hasActiveChild) => {
    const base = "w-full px-5 py-2.5 flex items-center justify-between rounded-lg mx-2 transition-all duration-200 cursor-pointer group/cat";
    const active = hasActiveChild
      ? "text-slate-900 dark:text-white"
      : "text-slate-600 dark:text-[#b5b8b9] hover:text-slate-800 dark:hover:text-white";
    const hover = "hover:bg-black/[0.03] dark:hover:bg-white/[0.04]";
    return `${base} ${active} ${hover}`;
  };

  return(
    <>
      <motion.nav 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`bg-white/90 dark:bg-[#1a191c]/80 backdrop-blur-2xl fixed left-0 top-0 h-full w-[280px] z-40 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col pt-24 pb-6 transition-transform duration-300 ease-in-out hidden md:flex ${
          isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'
        }`}
      >
        <div className="px-6 mb-6">
          <div className="text-slate-800 dark:text-[#e0e3e4] font-['JetBrains_Mono'] text-[11px] leading-[14px] font-semibold uppercase tracking-[0.12em] mb-1.5">Tech Archive</div>
          <div className="text-slate-400 dark:text-[#6b7071] font-['Inter'] text-[12.5px] leading-[1.4] tracking-[-0.01em]">Dokumentasi & Referensi</div>
        </div>

        <div className="mx-5 mb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] dark:via-white/[0.08] to-transparent" />
        </div>
        
        <div className="flex-1 overflow-y-auto sidebar-scroll px-1">
          <div className="px-6 mb-2">
            <span className="font-['JetBrains_Mono'] text-[10px] leading-[12px] font-medium uppercase tracking-[0.15em] text-slate-400/70 dark:text-[#5a5e5f]">Navigasi</span>
          </div>
          <NavLink to="/" end className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span className={getTextClass(isActive)}>Beranda</span>
                <ActiveDot isActive={isActive} />
              </>
            )}
          </NavLink>

          <div className="h-5" />

          <div className="px-6 mb-2">
            <span className="font-['JetBrains_Mono'] text-[10px] leading-[12px] font-medium uppercase tracking-[0.15em] text-slate-400/70 dark:text-[#5a5e5f]">Kategori</span>
          </div>

          <div className="mb-1">
            <button 
              onClick={() => setIsDevOpen(!isDevOpen)}
              className={getCategoryClass(isDevOpen, isDevRouteActive)}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 opacity-70 group-hover/cat:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </span>
                <span className={`font-['Inter'] text-[13.5px] leading-[1.4] tracking-[-0.01em] ${isDevRouteActive ? 'font-semibold' : 'font-medium'}`}>
                  Software Development
                </span>
              </div>
              <FaAngleRight className={`text-[10px] opacity-40 group-hover/cat:opacity-70 transition-all duration-300 ${isDevOpen ? "rotate-90" : ""}`} />
            </button>

            <AnimatePresence>
              {isDevOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-1 pb-1 ml-6 border-l border-black/[0.06] dark:border-white/[0.06]">
                    <NavLink to="/python" className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>Python</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/javascript' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="4 17 10 11 4 5"></polyline>
                              <line x1="12" y1="19" x2="20" y2="19"></line>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>Javascript</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/cplus' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                              <line x1="12" y1="2" x2="12" y2="22"></line>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>C++</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/react' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                              <polyline points="2 17 12 22 22 17"></polyline>
                              <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>React Framework</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/fastapi' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="9" y1="9" x2="15" y2="9"></line>
                              <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>RestAPI (FastAPI)</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mb-1">
            <button 
              onClick={() => setIsDataOpen(!isDataOpen)}
              className={getCategoryClass(isDataOpen, isDataRouteActive)}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 opacity-70 group-hover/cat:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </span>
                <span className={`font-['Inter'] text-[13.5px] leading-[1.4] tracking-[-0.01em] ${isDataRouteActive ? 'font-semibold' : 'font-medium'}`}>
                  Data Science & AI
                </span>
              </div>
              <FaAngleRight className={`text-[10px] opacity-40 group-hover/cat:opacity-70 transition-all duration-300 ${isDataOpen ? "rotate-90" : ""}`} />
            </button>

            <AnimatePresence>
              {isDataOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-1 pb-1 ml-6 border-l border-black/[0.06] dark:border-white/[0.06]">
                    <NavLink to='/datamining' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>Data Mining</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/machinelearn' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path>
                              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                              <path d="M12 8v2"></path>
                              <path d="M11 9h2"></path>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>Machine Learning</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>

                    <NavLink to='/deeplearn' className={getNavLinkClass}>
                      {({ isActive }) => (
                        <>
                          <span className="shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="M12 12v6"></path>
                              <path d="M12 12l4-2"></path>
                              <path d="M12 12l-4-2"></path>
                              <path d="M12 12l4 2"></path>
                              <path d="M12 12l-4 2"></path>
                            </svg>
                          </span>
                          <span className={getTextClass(isActive)}>Deep Learning</span>
                          <ActiveDot isActive={isActive} />
                        </>
                      )}
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
        
        <div className="mt-auto px-5 pt-4">
          <div className="mx-1 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] dark:via-white/[0.08] to-transparent" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer px-2 py-2 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors group/profile"
            onClick={() => window.open("https://sayyidinaa.vercel.app/", "_blank")}>
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-black/[0.06] dark:ring-white/[0.08] group-hover/profile:ring-black/[0.12] dark:group-hover/profile:ring-white/[0.15] transition-all">
              <img src={profileImg} className="w-full h-full object-cover" alt="profile" />
            </div>
            <div>
              <div className="font-['Inter'] text-[13px] leading-[1.3] font-medium text-slate-700 dark:text-[#d0d3d4] tracking-[-0.01em]">Sayyidina Anshari Ahmad</div>
              <div className="font-['Inter'] text-[11px] leading-[1.3] text-slate-400 dark:text-[#6b7071] mt-0.5">Lihat profil →</div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}