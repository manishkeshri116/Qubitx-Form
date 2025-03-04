"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import NavigationButtons from "./NavigationButtons";
import WorkflowPage from "../../pages/Workflow";
import Security from "../../pages/Security";
import OverviewPage from "../../pages/Overview";
import BasicConfiguration from "@/pages/BasicConfiguration";
import RAGConfiguration from "@/pages/RagConfiguration";

const sections = ["basic", "rag", "workflows", "security", "overview"];

const MainBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  };
  

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex flex-row bg-gray-100 w-full min-h-screen">
      <Sidebar activeSection={sections[activeIndex]} setActiveSection={(section) => setActiveIndex(sections.indexOf(section))} />

      <main className="flex-1 bg-white flex flex-col">
        <div>
          {sections[activeIndex] === "basic" && <BasicConfiguration />}
          {sections[activeIndex] === "rag" && <RAGConfiguration />}
          {sections[activeIndex] === "workflows" && <WorkflowPage />}
          {sections[activeIndex] === "security" && <Security />}
          {sections[activeIndex] === "overview" && <OverviewPage />}
        </div>

        <NavigationButtons
          activeSection={sections[activeIndex]}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </main>
    </div>
  );
};

export default MainBar;
