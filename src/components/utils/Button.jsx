const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#FF2424] text-[#F5F5F5] px-[60px] py-3 rounded-md hover:bg-[#FF2424]"
    >
      {children}
    </button>
  );
};

export default Button;
