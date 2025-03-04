/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeModal: "dataset" | "source" | "template" | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, activeModal }) => {
  const getRadioOptions = (modalType: ModalProps["activeModal"]): string[] => {
    switch (modalType) {
      case "dataset":
        return ["My dataset", "Upload your own", "Import dataset"];
      case "source":
        return ["My Datasources", "Add New"];
      case "template":
        return ["My templates", "Add new"];
      default:
        return [];
    }
  };

  const radioOptions = getRadioOptions(activeModal);
  const [selectedOption, setSelectedOption] = useState<string>(
    radioOptions[0] || ""
  );

  React.useEffect(() => {
    if (radioOptions.length > 0) {
      setSelectedOption(radioOptions[0]);
    }
  }, [activeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[90vw] md:max-w-[800px] p-4 md:p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            {activeModal === "dataset"
              ? "Datasets"
              : activeModal === "source"
              ? "Data Sources"
              : "Prompt Template"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 mt-3">Configure your {activeModal} here.</p>

        <div className="mt-4 border border-gray-200 rounded-md p-4 shadow-sm bg-white h-96 overflow-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {radioOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-2 px-4 py-2 border rounded-md cursor-pointer ${
                  selectedOption === option
                    ? "border-gray-800 bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="datasource"
                  className="peer hidden"
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />
                <div className="w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center">
                  {selectedOption === option && (
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  )}
                </div>
                <span className="text-black">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between text-gray-600 font-medium border-b pb-2">
            <span>Name</span>
            <span>Source</span>
            <span>Connector</span>
            <span>Status</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
