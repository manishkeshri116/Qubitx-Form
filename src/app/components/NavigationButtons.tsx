import React from "react";

interface NavigationButtonsProps {
  activeSection: string;
  handlePrevious: () => void;
  handleNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ activeSection, handlePrevious, handleNext }) => {
  const isLastStep = activeSection === "overview";

  return (
    <div className="flex justify-between p-6">
      <button
        className={`px-4 py-2 rounded-md transition-all duration-200 ${
          activeSection === "basic"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white "
        }`}
        onClick={handlePrevious}
        disabled={activeSection === "basic"}
      >
        Previous
      </button>

      <button
        className={`px-4 py-2 rounded-md transition-all duration-200 ${
          isLastStep
            ? "bg-black text-white"
            : "bg-black text-white"
        }`}
        onClick={handleNext}
      >
        {isLastStep ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default NavigationButtons;
