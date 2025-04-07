import { useState } from "react";
import SideNav from "./SideNav";
import NotificationsPanel from "./NotificationsPanel";

const Notifications = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="flex justify-center w-full min-h-[50rem] h-screen bg-black text-white">
      <div className="flex w-full max-w-[100rem]">
        <SideNav setShowSearchBar={setShowSearchBar}></SideNav>
        <NotificationsPanel showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></NotificationsPanel>
      </div>
    </div>
  );
};

export default Notifications;
