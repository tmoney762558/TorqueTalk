import { useState } from "react";
import Discover from "./Discover";
import SideNav from "./SideNav";

const Home = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="flex justify-center w-full min-h-[50rem] h-screen bg-black text-white">
      <div className="flex w-full max-w-[100rem]">
        <SideNav setShowSearchBar={setShowSearchBar}></SideNav>
        <Discover showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></Discover>
      </div>
    </div>
  );
};

export default Home;
