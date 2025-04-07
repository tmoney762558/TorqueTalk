import { useState } from "react";
import SideNav from "./SideNav";
import MessagesPanel from "./MessagesPanel";

const Messages = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="flex justify-center w-full min-h-[50rem] h-screen bg-black text-white">
      <div className="flex w-full max-w-[100rem]">
        <SideNav setShowSearchBar={setShowSearchBar}></SideNav>
        <MessagesPanel showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></MessagesPanel>
      </div>
    </div>
  );
};

export default Messages;
