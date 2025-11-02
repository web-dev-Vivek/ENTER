import React from "react";

function TeamIt() {
  return (
    <div className="w-full h-[100vh]  bg-[url('../public/TeamIt.jpg')] bg-cover bg-center  flex md:flex-row items-center justify-center bg-[#aeb7a8]">
      <div className="flex flex-col justify-between w-[48vw] border-l-1 p-3 border-white h-full">
        <div className="flex flex-col items-start justify-start h-[80%] space-y-4">
          <div className="flex items-center space-x-2  text-sm">
            <div className="w-[15px] h-[15px] bg-[#fc6b3e] mr-2"></div>
            EXPLORE VIBES NEAR YOU
          </div>
          <div className="font-bold text-9xl">TEAM IT</div>
        </div>
        <button className="bg-[#fc6b3e] hidden md:flex text-sm md:text-xl justify-between font-bold w-[26vw] text-black pr-6 pl-6 p-4 rounded-xl">
          <p>FIND YOUR VISION</p>
          <p>{"  >"}</p>
        </button>
      </div>
      <div className="w-[48vw] border-r-1 flex justify-end items-end border-white h-full">
        <div className="flex flex-col border-l-1 items-start border-white justify-end h-[50vh] p-5 space-y-6">
          <h1 className="text-6xl font-bold">BUILD YOUR TEAM </h1>
          <p>
            Collaborate, connect, and create your dream team for any event.
            Build strong partnerships and achieve big together.
          </p>
          <button className="bg-[#fc6b3e] flex text-sm md:text-xl justify-between font-bold md:w-[26vw] text-black pr-6 pl-6 p-4 rounded-xl">
            <p>FIND TEAMMATES</p>
            <p>{"  >"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamIt;
