import Button from "../utils/Button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 gap-6 bg-[#191D20] text-[#878787]">
      {/* Search Input */}
        <div className="relative flex-1 bg-[#272A30] rounded-[5px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="search"
          placeholder="Search Food Item"
          className="w-full pl-10 pr-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-[#FF2424]"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <Button>
          Sign Up
        </Button>
        <Button>
          Login
        </Button>
        <img
          src="https://i.ibb.co/hJ8cymP3/6c3056665f8945b573189c004e90e2728a92eb63.png"
          alt="profile"
          className="w-[58px] h-[58px] rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
