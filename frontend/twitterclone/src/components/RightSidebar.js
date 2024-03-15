import React from "react";
import { CiSearch } from "react-icons/ci";
export default function RightSidebar() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 bg-gray-100  rounded-full w-[400px] px-3 py-3 my-2">
        <div>
          <CiSearch size={"30px"} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter here"
            className="border-none outline-none bg-gray-100"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-xl px-3 py-3">What to follow</p>

        <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div>
              <img
                className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-lg">Bharat Joshi</p>
              <p className="text-sm font-semibold">@BharatJoshi</p>
            </div>
            
          </div>
          <div>
            <button className="bg-black text-white px-4 rounded w-[100px] h-[30px]">
              Follow
            </button>
          </div>
        </div>



        <div className="flex justify-between">
          <div className="flex gap-3">
            <div>
              <img
                className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-lg">Amit Patel</p>
              <p className="text-sm font-semibold">@AmitPatel</p>
            </div>
            
          </div>
          <div>
            <button className="bg-black text-white px-4 rounded w-[100px] h-[30px]">
              Follow
            </button>
          </div>
        </div>

        </div>

      </div>
      
    </div>
  );
}
