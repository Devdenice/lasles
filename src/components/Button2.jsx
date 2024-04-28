const Button2 = ({ title }) => {
  return (
    <div className="w-[193px] relative mx-auto lg:mx-0">
      <button className="z-20 text-sm sm:text-base rounded-lg font-bold bg-[#F53838] text-white px-6 lg:px-12 py-2.5 lg:py-3.5 ">
        {title}
        <div className="absolute inset-x-0 flex items-center justify-center">
          <div className=" z-[-1] px-10 lg:px-20 py-2 lg:apy-2.5 blur-xl  bg-[#F53838]"></div>
        </div>
      </button>
    </div>
  );
};

export default Button2;
