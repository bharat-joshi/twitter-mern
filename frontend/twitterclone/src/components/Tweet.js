import React from "react";
import { IoIosMore } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { BiBarChart } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
export default function Tweet() {
  return (
    <div className="flex flex-col border h-[400px]">
      <div className="flex px-4 py-4 justify-between">
        <div className="flex gap-2">
          <div>
            <img
              className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold">Bharat</h1>
              <p className="text-sm font-semibold">@bharatjoshi</p>
            </div>
            <div className="flex">
              <p>This is new twitter clone</p>
            </div>
          </div>
        </div>
        <div>
          <IoIosMore size={"26px"} />
        </div>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex gap-1">
          <div>
            <FaComment size={"20px"} />
          </div>
          <p className="text-sm">100</p>
        </div>

        <div className="flex gap-1">
          <div>
            <BiRepost size={"20px"} />
          </div>
          <p className="text-sm">200</p>
        </div>

        <div className="flex gap-1">
          <div>
            <SlLike size={"20px"} />
          </div>
          <p className="text-sm">300</p>
        </div>

        <div className="flex gap-1">
          <div>
            <BiBarChart size={"20px"} />
          </div>
          <p className="text-sm">400</p>
        </div>

        <div className="flex gap-1">
          <div className="flex gap-1">
            <div>
              <CiBookmark size={"20px"} />
            </div>
            <p className="text-sm">400</p>
          </div>

          <div className="flex gap-1">
            <div>
              <MdOutlineFileUpload size={"20px"} />
            </div>
            <p className="text-sm">400</p>
          </div>
        </div>
      </div>
    </div>
  );
}
