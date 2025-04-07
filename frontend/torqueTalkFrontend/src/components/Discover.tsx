import { IoClose } from "react-icons/io5";
import Post from "./Post";
import { useState } from "react";
import CreatePost from "./CreatePost";

const Discover = ({
  showSearchBar,
  setShowSearchBar,
}: {
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchAnimating, setSearchAnimating] = useState(false);
  const [notificationsTab, setNotificationsTab] = useState("For You");

  return (
    <div className="flex flex-col justify-center w-full min-h-[50rem] h-screen bg-black border-x-[1px] border-neutral-900 text-white">
      <div className="flex justify-center relative w-full">
        <div className="w-full border-b-[1px] border-neutral-900">
          {showSearchBar || searchAnimating ? (
            <div className="flex justify-center items-center w-full h-[3.5rem]">
              <input
                className={`w-[90%] max-w-[50rem] px-4 py-1 bg-neutral-900 rounded-full outline-none ${showSearchBar ? "scale-in-hor-center" : "scale-out-horizontal"}`}
                type="text"
                placeholder={!searchAnimating ? "Search for posts or listings" : ""}
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
              <button className="w-1/2 h-[3.5rem] hover:bg-neutral-900 cursor-pointer slide-in-blurred-top" onClick={() => {
                setNotificationsTab("For You")
              }}>
                For You
              </button>
              <button className="w-1/2 h-[3.5rem] hover:bg-neutral-900 cursor-pointer slide-in-blurred-top" onClick={() => {
                setNotificationsTab("Following");
              }}>
              
                Following
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto my-5">
        {notificationsTab === "For You" ? (
          <div className="flex flex-col items-center gap-5 w-full">
            <CreatePost></CreatePost>
            <Post></Post>
            <Post></Post>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 w-full"></div>
        )}
      </div>
    </div>
  );
};

export default Discover;
