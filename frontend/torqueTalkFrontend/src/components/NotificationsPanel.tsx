import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const NotificationsPanel = ({
  showSearchBar,
  setShowSearchBar,
}: {
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchAnimating, setSearchAnimating] = useState(false);
  const [notificationsTab, setNotificationsTab] = useState("Replies");

  return (
    <div className="flex flex-col justify-center w-full min-h-[50rem] h-screen bg-black border-x-[1px] border-neutral-900 text-white">
      <div className="flex justify-center relative w-full">
        <div className="w-full border-b-[1px] border-neutral-900">
          {showSearchBar || searchAnimating ? (
            <div className="flex justify-center items-center w-full h-[3.5rem]">
              <input
                className={`w-[90%] max-w-[50rem] px-4 py-1 bg-neutral-900 rounded-full outline-none ${
                  showSearchBar ? "scale-in-hor-center" : "scale-out-horizontal"
                }`}
                type="text"
                placeholder={
                  !searchAnimating
                    ? `Search your ${notificationsTab.toLocaleLowerCase()}`
                    : ""
                }
                onAnimationEnd={() => {
                  setSearchAnimating(false);
                }}
              ></input>
              {!searchAnimating ? (
                <IoClose
                  className="ml-[-2rem] z-10 cursor-pointer"
                  fontSize={"1.5rem"}
                  onClick={() => {
                    setShowSearchBar(false);
                    setSearchAnimating(true);
                  }}
                ></IoClose>
              ) : null}
            </div>
          ) : (
            <div className="w-full">
              <button
                className="w-1/2 h-[3.5rem] hover:bg-neutral-900 cursor-pointer slide-in-blurred-top"
                onClick={() => {
                  setNotificationsTab("Replies");
                }}
              >
                Replies
              </button>
              <button
                className="w-1/2 h-[3.5rem] hover:bg-neutral-900 cursor-pointer slide-in-blurred-top"
                onClick={() => {
                  setNotificationsTab("Follows");
                }}
              >
                Follows
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto mb-5">
        {notificationsTab === "Replies" ? (
          <div className="flex flex-col items-center w-full"></div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-between items-center w-full py-2 px-4 border-b-[1px] border-neutral-900">
              <div className="flex items-center gap-3">
                <img
                  className="w-7 aspect-square bg-white rounded-full"
                  src=""
                ></img>
                <p>Tyler has followed you!</p>
              </div>
              <button className="px-7 py-1 bg-neutral-800 rounded-full cursor-pointer">
                Clear
              </button>
            </div>
            <div className="flex justify-between items-center w-full py-2 px-4 border-b-[1px] border-neutral-900">
              <div className="flex items-center gap-3">
                <img
                  className="w-7 aspect-square bg-white rounded-full"
                  src=""
                ></img>
                <p>Tyler has followed you!</p>
              </div>
              <button className="px-7 py-1 bg-neutral-800 rounded-full">
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;
