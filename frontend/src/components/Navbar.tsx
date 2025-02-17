import { BotMessageSquare, MapPin, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <BotMessageSquare className="h-6 w-6 text-blue-500" />
        <span className="text-white text-xl font-bold">AISlides</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/#features" className="text-gray-300 hover:text-white">
          Features
        </Link>
        <Link to="/#solutions" className="text-gray-300 hover:text-white">
          Solutions
        </Link>
        <Link to="/#pricing" className="text-gray-300 hover:text-white">
          Pricing
        </Link>
        <Link to="/#resources" className="text-gray-300 hover:text-white">
          Resources
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden md:block text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
          Login
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Try Free
        </button>
        <Menu className="md:hidden h-6 w-6 text-white" />
      </div>
    </nav>
  );
}

export default Navbar;
