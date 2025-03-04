"use client";

export default function Security() {
  return (
    <div className="w-full p-6">
      <div className="bg-[#417568] text-white text-lg font-semibold p-3 rounded">
        Security Overview
      </div>
      <div className="bg-white border-2 shadow-md p-8 rounded-lg mt-4">
        <div className="flex gap-3 items-center cursor-pointer">
          <span className="text-gray-900 font-medium">Advanced Configuration</span>
          <span className="text-gray-900 font-medium">▶</span>
        </div>
      </div>
    </div>
  );
}
