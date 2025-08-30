import { Link } from "react-router-dom";

const Sidebar = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Your Order", path: "/" },
    { name: "Wallet", path: "/" },
    { name: "Profile", path: "/" },
    { name: "Logout", path: "/" },
  ];

  const moreLinks = [
    { name: "Our blogs", path: "/" },
    { name: "Upcoming Dishes", path: "/" },
    { name: "Our Story", path: "/" },
    { name: "Profile", path: "/" },
    { name: "Social Media Links", path: "/" },
  ];

  return (
    <aside className="bg-[#0C0E10] text-white min-h-screen h-full w-[320px] sticky top-0">
  
      <div className="p-8 text-center">
        <img
          src="https://i.ibb.co/hJ8cymP3/6c3056665f8945b573189c004e90e2728a92eb63.png"
          alt="profile"
          className="w-[200px] h-[200px] mx-auto rounded-full object-cover"
        />
        <h3 className="text-2xl mt-4">Your Restaurant Menu</h3>
        <p className="text-[#FF2424] text-xl">Your Slogan</p>
      </div>

      <nav className="border-t border-[#1C2025] px-8 py-4">
        <h3 className="text-2xl text-center pb-6 font-semibold">Quick Links</h3>
        {quickLinks.map((link, index) => (
          <Link key={index} to={link.path} className="block text-xl py-2 hover:text-[#FF2424]">
            {`${index + 1}. ${link.name}`}
          </Link>
        ))}
      </nav>

      <nav className="border-t border-[#1C2025] px-8 py-4">
        <h3 className="text-2xl text-center pb-6 font-semibold">More About Us</h3>
        {moreLinks.map((link, index) => (
          <Link key={index} to={link.path} className="block text-xl py-2 hover:text-[#FF2424]">
            {`${index + 1}. ${link.name}`}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
