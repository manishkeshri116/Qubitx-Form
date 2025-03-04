"use client";

import React from "react";
import Image from "next/image";
import QUBITZ from "@/assets/bot.png";
import { FiSettings, FiDatabase, FiShare, FiShield, FiPieChart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { LuChevronUp } from "react-icons/lu";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  section: string;
}

const menuItems: MenuItem[] = [
  { icon: <FiSettings />, label: "Basic Config", section: "basic" },
  { icon: <FiDatabase />, label: "RAG", section: "rag" },
  { icon: <FiShare />, label: "Workflows", section: "workflows" },
  { icon: <FiShield />, label: "Security Overview", section: "security" },
  { icon: <FiPieChart />, label: "Overview", section: "overview" },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-white p-4 border-r h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <Image src={QUBITZ} alt="QUBITZ Logo" width={48} height={48} priority />
        <h1 className="text-xl font-bold text-black">QUBITZ</h1>
      </div>

      <nav className="space-y-0">
        <span className="text-black text-sm">Configuration Steps</span>
        {menuItems.map((item) => (
          <button
            key={item.section}
            className={`p-2 flex items-center gap-3 w-full text-left rounded transition-all duration-200 ${
              activeSection === item.section
                ? "bg-gray-200 text-black shadow"
                : "text-gray-700"
            }`}
            onClick={() => setActiveSection(item.section)}
          >
            {item.icon}
            <span className="text-md font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <footer className="mt-96">
        <button className="text-gray-600 w-full flex items-center gap-2 p-2">
          <AiOutlineUser />
          <div className="flex flex-row justify-between items-center w-full">
            <span>UserName</span>
            <LuChevronUp />
          </div>
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
