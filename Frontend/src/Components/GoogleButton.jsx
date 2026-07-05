import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({ text = "Continue with Google", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl
      bg-[#111827] border border-gray-700 hover:border-blue-500
      hover:bg-[#1E293B] transition-all duration-300 group"
    >
      <FcGoogle className="text-2xl" />

      <span className="text-white font-medium">
        {text}
      </span>
    </button>
  );
};

export default GoogleButton;