"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Іконки з Lucide

const items = [
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-2xl mx-auto border-t border-gray-200">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center py-6 text-left"
          >
            <span className="text-[#01005B] font-medium">{item.title}</span>
            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-[#676869] text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}