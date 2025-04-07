import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { IoArrowBack, IoClose } from "react-icons/io5";

const MessagesPanel = ({
  showSearchBar,
  setShowSearchBar,
}: {
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchAnimating, setSearchAnimating] = useState(false);
  const [currentConversation, setCurrentConversation] = useState(-1);

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
                placeholder={!searchAnimating ? "Search your messages" : ""}
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
            <div className="flex justify-center items-center relative w-full h-[3.5rem] hover:bg-neutral-900 cursor-pointer slide-in-blurred-top">
              <h2 className="text-xl">
                {currentConversation === -1 ? "Messages" : "Tyler"}
              </h2>
              {currentConversation !== -1 ? (
                <button
                  className="absolute right-5 p-1 bg-neutral-800 rounded-full cursor-pointer"
                  onClick={() => {
                    setCurrentConversation(-1);
                  }}
                >
                  <IoArrowBack fontSize={"1.3rem"}></IoArrowBack>
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto mb-5">
        {currentConversation === -1 ? (
          <div className="flex justify-between items-center w-full py-2 px-4 border-b-[1px] border-neutral-900">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                setCurrentConversation(0);
              }}
            >
              <img
                className="w-7 aspect-square bg-white rounded-full"
                src=""
              ></img>
              <p>@Tyler</p>
            </div>
            <div className="flex gap-2 px-4 py-2 bg-neutral-900 rounded-full">
              <button className="p-2 bg-neutral-700 rounded-full cursor-pointer">
                <BiMessage
                  onClick={() => {
                    setCurrentConversation(0);
                  }}
                ></BiMessage>
              </button>
              <button className="p-2 bg-neutral-700 rounded-full cursor-pointer">
                <IoClose></IoClose>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex justify-between items-start gap-3 w-full p-4">
              <div className="shrink-0 flex lg:flex-row flex-col items-center lg:gap-3 gap-1 pr-2 border-r-[2px] border-neutral-700 cursor-pointer">
                <img
                  className="w-7 aspect-square bg-white rounded-full break-words"
                  src=""
                ></img>
                <div>
                  <p>Tyler</p>
                  <p className="text-neutral-600">4/1/24</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  esse adipisci officiis molestias omnis error incidunt,
                  exercitationem voluptatum cum in sit, voluptas laudantium!
                  Suscipit voluptate est iste quisquam alias dolores?
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-3 w-full pb-2 px-4">
              <div className="shrink-0 flex items-center gap-3  pr-2 border-r-[2px] border-neutral-700 cursor-pointer">
                <img
                  className=" w-7 aspect-square bg-white rounded-full break-words"
                  src=""
                ></img>
                <p>Tyler</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  esse adipisci officiis molestias omnis error incidunt,
                  exercitationem voluptatum cum in sit, voluptas laudantium!
                  Suscipit voluptate est iste quisquam alias dolores?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPanel;
