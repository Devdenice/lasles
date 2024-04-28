const Button = ({ title, red }) => {
  return (
    <button
      className={`border-2 px-12 py-1.5 text-xs sm:text-base border-[#F53855] text-[#F53855] font-semibold rounded-full ${
        red ? "bg-[#F53855] border-2 border-[#F53855] text-white" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
