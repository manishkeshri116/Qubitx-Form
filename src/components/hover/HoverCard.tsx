// components/InfoCard.tsx
import React from "react";

interface InfoCardProps {
    location: string;
    title: string;
    subtitle: string;
    description: string;
    footerText: string;
    infromation?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
    location,
    title,
    subtitle,
    description,
    footerText,
    infromation,
}) => {
    return (
        <div
            className="w-[400px] h-[400px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden
            group cursor-pointer relative"
        >

            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-none opacity-0 group-hover:backdrop-blur-sm
                group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none"
            ></div>


            <div className="relative z-20 p-4 flex flex-col justify-end h-full space-y-1">

                <div>
                    <div className="text-sm text-gray-500 mb-1">📍 {location}</div>
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

                    <p
                        className="text-base text-gray-600 flex items-center justify-between mt-1
                        p-2 rounded-md transition-transform duration-300 "
                    >
                        {subtitle}
                        <svg
                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </p>
                </div>

                <div className="text-gray-700">{infromation}</div>

                <div
                    className="text-sm text-gray-700 max-h-0 overflow-hidden opacity-0 translate-y-6
    group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out"
                >
                    {description}
                </div>

                <div
                    className="text-xs text-gray-500 border-t border-gray-200 border-opacity-0 h-0 overflow-hidden
    opacity-0 translate-y-6
    group-hover:max-h-auto group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-opacity-100
    transition-all duration-500 ease-out"
                >
                    {footerText}
                </div>

            </div>
        </div>
    );
};

// components/InfoCard.tsx
// import React from "react";

// interface InfoCardProps {
//   location: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   footerText: string;
//   infromation?: string;
// }

// export const InfoCard: React.FC<InfoCardProps> = ({
//   location,
//   title,
//   subtitle,
//   description,
//   footerText,
//   infromation,
// }) => {
//   return (
//     <div
//       className="w-[400px] h-[400px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden
//       group cursor-pointer relative"
//     >
//       {/* Overlay for blur */}
//       <div
//         className="absolute inset-0 bg-black/20 backdrop-blur-none opacity-0 group-hover:backdrop-blur-sm
//           group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none"
//       ></div>

//       {/* Content container bottom aligned */}
//       <div className="relative z-20 p-4 flex flex-col justify-end h-full space-y-1">
//         {/* Location, Title, Subtitle, Info */}
//         <div>
//           <div className="text-sm text-gray-500 mb-1">📍 {location}</div>
//           <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

//           <p
//             className="text-base text-gray-600 flex items-center justify-between mt-1
//             p-2 rounded-md transition-transform duration-300"
//           >
//             {subtitle}
//             <svg
//               className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:rotate-180"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </p>
//         </div>

//         <div className="text-gray-700">{infromation}</div>

//         {/* Description and footer — initially hidden and collapsed using max-height */}
//         <div
//           className="text-sm text-gray-700 max-h-0 overflow-hidden opacity-0 translate-y-6
//           group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
//           transition-all duration-500 ease-out"
//         >
//           {description}
//         </div>

//         <div
//           className="text-xs text-gray-500 border-t border-gray-200 border-opacity-0 pt-2 max-h-0 overflow-hidden
//           opacity-0 translate-y-6
//           group-hover:max-h-20 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-opacity-100
//           transition-all duration-500 ease-out"
//         >
//           {footerText}
//         </div>
//       </div>
//     </div>
//   );
// };
