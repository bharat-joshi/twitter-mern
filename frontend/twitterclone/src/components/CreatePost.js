import React from "react";

export default function CreatePost() {
  return (
    <div className="flex flex-col w-[600px] h-[200px] border">
      <div className="flex  w-full border-b">
        <div className="font-bold text-lg cursor-pointer hover:bg-gray-100 w-[300px] text-center px-3 py-3">
          For you
        </div>
        <div className="font-bold text-lg cursor-pointer hover:bg-gray-100 w-[300px] text-center px-3 py-3">
          Following
        </div>
        {/* <div className="font-bold text-lg cursor-pointer text-center px-3 py-3 w-[200px]">
          <IoMdSettings size={"24px"} />
        </div> */}
      </div>
      <div className="flex px-4 py-4 gap-2">
        <img
          className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <input
          className="border-none outline-none"
          placeholder="Enter text here"
        />
      </div>
      <div className="flex justify-end px-4">
        <button className=" bg-blue-500 hover:bg-blue-700 w-[100px] text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </div>
    </div>
  );
}
