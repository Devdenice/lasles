import user from "/icons/user.svg";
import location from "/icons/location.svg";
import server from "/icons/servers.svg";

const Milestone = () => {
  return (
    // <div className="bg-white rounded-2xl drop-shadow-xl my-10 w-8/12 mx-auto py-12 md:mt-52 lg:mt-0 lg:w-full">
    //   <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-14 lg:gap-y-0">
    //     <div className="flex gap-x-4 w-[150px] lg:w-full ">
    //       <img src={user} />
    //       <div>
    //         <h1 className="font-extrabold">90+</h1>
    //         <h1 className="text-[#4F5665]">Users</h1>
    //       </div>
    //     </div>
    //     <div className="h-[100px] px-[1.5px] bg-black py-2"></div>
    //     <div className="flex gap-x-4 w-[150px] lg:w-full">
    //       <img src={location} />
    //       <div>
    //         <h1 className="font-extrabold">30+</h1>
    //         <h1 className="text-[#4F5665]">Locations</h1>
    //       </div>
    //     </div>
    //     <div className="h-[100px] px-[1.5px] bg-black py-2"></div>
    //     <div className="flex gap-x-4 w-[150px] lg:w-full">
    //       <img src={server} />
    //       <div>
    //         <h1 className="font-extrabold">50+</h1>
    //         <h1 className="text-[#4F5665]">Servers</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white rounded-xl drop-shadow-xl py-12 w-[60%] md:w-full mx-auto">
      <div className="flex flex-col gap-y-14 md:flex-row justify-around">
        <div className="flex items-center gap-x-4 w-[150px] mx-auto ">
          <img src={user} />
          <div>
            <h1 className="font-extrabold">90+</h1>
            <h1 className="text-[#4F5665]">Users</h1>
          </div>
        </div>
        <div className="h-100 px-[1.5px] bg-[#EEEFF2] py-10 hidden md:block"></div>
        <div className="flex items-center gap-x-4 w-[150px] mx-auto">
          <img src={location} />
          <div>
            <h1 className="font-extrabold">30+</h1>
            <h1 className="text-[#4F5665]">Locations</h1>
          </div>
        </div>
        <div className="h-100 px-[1.5px] bg-[#EEEFF2] py-2 hidden md:block"></div>
        <div className="flex items-center gap-x-4 w-[150px]  mx-auto">
          <img src={server} />
          <div>
            <h1 className="font-extrabold">50+</h1>
            <h1 className="text-[#4F5665]">Servers</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
