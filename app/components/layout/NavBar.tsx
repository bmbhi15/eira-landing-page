import { useState } from "react";

interface NavBarProps {
  onToggleChange: () => void;
}
export default function NavBar({ onToggleChange }: NavBarProps) {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggle = () => {
    onToggleChange();
    setIsStudent(!isStudent);
  };

  return (
    <div className="grid grid-cols-3 py-4">
      <div className="">
        <img src="app/assets/eira-logo.svg" alt="EIRA Logo" className="h-12" />
      </div>
      <div className="flex justify-center">
        <label className="relative flex justify-between items-center group p-2 text-base">
          <span className="text-primary-600">Tutor</span>
          <input
            type="checkbox"
            className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          />
          <span className="w-16 h-8 flex items-center flex-shrink-0 ml-2 p-1 bg-primary-500 rounded-full duration-300 ease-in-out peer-checked:bg-primary-600 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
          <span
            className={`${
              isStudent ? "text-primary-900" : "text-primary-600"
            } ml-2`}
          >
            Student
          </span>
        </label>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.anonymous.eiraapp&pli=1",
              "_blank"
            )
          }
          className="bg-white text-primary-600 text-base px-4 py-2 rounded-full border border-primary-200"
        >
          <span className="text-primary-600 text-base">Download App</span>
        </button>
      </div>
    </div>
  );
}
