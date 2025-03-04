"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ConfigurationForm from "./ConfigurationForm";

interface Configuration {
  knowledgeBaseName: string;
  description: string;
  pattern: string;
  embeddings: string;
  chunking: string;
  metrics: string;
  vectorDB: string;
}

export default function RAGConfiguration() {
  const [configurations, setConfigurations] = useState<Configuration[]>([]);

  const handleAddConfiguration = (formData: Configuration) => {
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Please fill in all fields.");
      return;
    }
    setConfigurations((prev) => [...prev, formData]);
    toast.success("Configuration added successfully!");
  };

  return (
    <main className="flex-1 p-6 bg-white h-full w-full">
      <Toaster />

      <div className="bg-[#3d7069] text-white p-3 rounded flex items-center">
        <span className="text-lg font-semibold">RAG Configuration</span>
      </div>

      <ConfigurationForm onAddConfiguration={handleAddConfiguration} />

      {configurations.length > 0 && (
      <>
        <div className=" p-2 border- border-gray-300 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-black mb-2">
            Added Configurations
          </h2>
          <div className="space-y-4">
            {configurations.map((config, index) => (
              <div
                key={index}
                className="p-4 rounded-md shadow-sm border flex flex-row flex-wrap gap-16 w-full border-gray-600"
              >
                <p className="text-black flex flex-col justify-start">
                  <strong>KB Name:</strong> {config.knowledgeBaseName}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Description:</strong> {config.description}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Pattern:</strong> {config.pattern}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Chunking:</strong> {config.chunking}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Embeddings:</strong> {config.embeddings}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Metrics:</strong> {config.metrics}
                </p>
                <p className="text-black flex flex-col justify-start border-l border-gray-300 pl-4">
                  <strong>Vector DB:</strong> {config.vectorDB}
                </p>
               
              </div>
            ))}
             <p  className="text-gray-400 text-center text-sm">A list of Your RAG Configuration</p>
          </div>
        </div>
       
      </>
      )}
    </main>
  );
}
