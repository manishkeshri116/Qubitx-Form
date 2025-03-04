import { useState } from "react";

interface ConfigurationFormProps {
  onAddConfiguration: (formData: Configuration) => void;
}

interface Configuration {
  knowledgeBaseName: string;
  description: string;
  pattern: string;
  embeddings: string;
  chunking: string;
  metrics: string;
  vectorDB: string;
}

export default function ConfigurationForm({
  onAddConfiguration,
}: ConfigurationFormProps) {
  const [formData, setFormData] = useState<Configuration>({
    knowledgeBaseName: "",
    description: "",
    pattern: "",
    embeddings: "",
    chunking: "",
    metrics: "",
    vectorDB: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onAddConfiguration(formData);
    setFormData({
      knowledgeBaseName: "",
      description: "",
      pattern: "",
      embeddings: "",
      chunking: "",
      metrics: "",
      vectorDB: "",
    });
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-4 border shadow-xl rounded-md border-gray-300">
      <div>
        <label className="block font-medium text-black">
          Knowledge Base Name
        </label>
        <input
          name="knowledgeBaseName"
          value={formData.knowledgeBaseName}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black placeholder:text-gray-400"
          placeholder="Enter Knowledge Base Name"
        />
      </div>

      <div>
        <label className="block font-medium text-black">Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black placeholder:text-gray-400"
          placeholder="Enter Description"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-black">Pattern</label>
          <select
            name="pattern"
            value={formData.pattern}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          >
            <option value="" disabled>Select Pattern</option>
            <option value="Contextual RAG">Contextual RAG</option>
            <option value="Agentic RAG">Agentic RAG</option>
            <option value="Hybrid RAG">Hybrid RAG</option>
            <option value="Graph RAG">Graph RAG</option>
            <option value="Self-reflective RAG">Self-reflective RAG</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-black">Embeddings</label>
          <select
            name="embeddings"
            value={formData.embeddings}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          >
            <option value="" disabled>Select Embedding Size</option>
            <option value="256">256</option>
            <option value="512">512</option>
            <option value="768">768</option>
            <option value="1024">1024</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

     
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       

        <div>
          <label className="block font-medium text-black">Metrics</label>
          <select
            name="metrics"
            value={formData.metrics}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          >
            <option value="" disabled>Select Metric</option>
            <option value="Dot">Dot</option>
            <option value="Cosine">Cosine</option>
            <option value="Euclidean">Euclidean</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-black">Chunking</label>
          <select
            name="chunking"
            value={formData.chunking}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          >
            <option value="" disabled>Select Chunking Method</option>
            <option value="Fixed sized">Fixed Sized</option>
            <option value="Dynamic">Dynamic</option>
            <option value="Overlapping">Overlapping</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium text-black">Vector DB</label>
        <input
          name="vectorDB"
          value={formData.vectorDB}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black placeholder:text-gray-400"
          placeholder="Enter Vector DB (e.g., Pinecone, FAISS)"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded border border-[#3d7069] text-[#3d7069]"
        >
          Add Configuration
        </button>
      </div>
    </div>
  );
}
