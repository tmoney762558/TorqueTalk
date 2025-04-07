import { FaBell, FaCar, FaHome, FaSearch } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideNav = ({
  setShowSearchBar,
}: {
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  let loggedIn = false;

  return (
    <nav className="lg:flex hidden flex-col justify-between w-fit h-full p-5 border-l-[1px] border-neutral-900 font-mono">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3>TorqueTalk</h3>
          <GiSpeedometer fontSize={"1.5rem"}></GiSpeedometer>
        </div>
        <NavLink
          className="flex items-center gap-2 cursor-pointer mt-[2rem]"
          to={"/"}
        >
          <FaHome fontSize={"1.25rem"}></FaHome>
          <p>Home</p>
        </NavLink>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowSearchBar(true);
          }}
        >
          <FaSearch fontSize={"1.25rem"}></FaSearch>
          <p>Search</p>
        </div>
        <NavLink
          className="flex items-center gap-2 cursor-pointer"
          to={"/notifications"}
        >
          <FaBell fontSize={"1.25rem"}></FaBell>
          <p>Notifications</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 cursor-pointer" to={"/messages"}>
          <IoIosMail fontSize={"1.25rem"}></IoIosMail>
          <p>Messages</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 cursor-pointer" to={"/listings"}>
          <FaCar fontSize={"1.25rem"}></FaCar>
          <p>Listings</p>
        </NavLink>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            className="w-9 aspect-square rounded-full object-cover bg-white"
            src={""}
          ></img>
          <p>Profile</p>
        </div>
        <button className="py-1 border-2 border-white rounded-full cursor-pointer">
          {loggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </nav>
  );
};

export default SideNav;
