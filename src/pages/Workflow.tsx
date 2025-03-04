"use client";

export default function WorkflowPage() {
  return (
    <div className="w-full p-6">
      <div className="bg-[#417568] text-white text-base font-semibold p-3 rounded">
        Workflows
      </div>

      <div className="bg-[#F1F5F9] shadow-md p-4 rounded mt-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-base font-medium text-black">Workflow</h2>
          <button className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-lg mt-2 md:mt-0">
            + Add a workflow
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center md:text-left">
          No workflows
        </p>
      </div>

      <div className="bg-[#F1F5F9] shadow-md p-2 rounded mt-6 w-full">
        <textarea
          className="w-full text-sm mt-4 p-2 border border-gray-600 bg-white rounded-lg placeholder:text-black min-h-[80px] md:min-h-[120px] lg:min-h-[150px]"
          placeholder="Type @ to reference a workflow..."
        />
      </div>
    </div>
  );
}
