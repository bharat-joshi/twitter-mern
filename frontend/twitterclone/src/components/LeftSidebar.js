import React from "react";
import { CiSearch,CiHome,CiBookmark,CiLogout   } from "react-icons/ci";
import { MdOutlineNotificationsNone } from "react-icons/md"; 
import { CgProfile } from "react-icons/cg";
export default function LeftSidebar() {
  return (
    <div>
      <div>
        <div className="mx-3">
          <img
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
            height={"24px"}
            width={"24px"}
          />
        </div>
        <div className="flex flex-col my-4 gap-4">
          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <CiHome  size={"24px"} />
            </div>
            <h1 className="font-bold ">Home</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <CiSearch  ome size={"24px"} />
            </div>
            <h1 className="font-bold ">Explore</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <MdOutlineNotificationsNone  size={"24px"} />
            </div>
            <h1 className="font-bold ">Notifications</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <CgProfile  size={"24px"} />
            </div>
            <h1 className="font-bold ">Profile</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <CiBookmark  size={"24px"} />
            </div>
            <h1 className="font-bold ">BookMarks</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer rounded-full hover:bg-gray-100 px-2 py-2">
            <div>
              <CiLogout   size={"24px"} />
            </div>
            <h1 className="font-bold ">Logout</h1>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-[130px]">Post</button>

        </div>
      </div>
    </div>
  );
}
