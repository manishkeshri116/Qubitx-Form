export default function OverlappingImages() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-900">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <img
          src="/image1.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-md opacity-60"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Overlapping images */}
      <div className="relative z-10 flex space-x-[-40px]">
        <img
          src="/image1.jpg"
          alt="Image 1"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
        <img
          src="/image2.jpg"
          alt="Image 2"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
        <img
          src="/image3.jpg"
          alt="Image 3"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <h1 className="text-red-400">jrg</h1>
      <h3 className="text-green-500">;ljng</h3>
    </div>
  );
}
