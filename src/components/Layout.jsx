import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import SideBar from "./sidebar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-slate-50 dark:bg-[#131315] text-slate-700 dark:text-[#e5e1e4] min-h-screen font-['Inter'] text-[14px] leading-[1.5] font-normal overflow-x-hidden transition-colors duration-300 ease-in-out">
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
      <main
        className={`pt-24 min-h-screen transition-all duration-300 ease-in-out bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,rgba(248,250,252,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,rgba(19,19,21,1)_100%)] relative ${
          isSidebarOpen ? 'md:ml-[280px]' : 'md:ml-0'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
