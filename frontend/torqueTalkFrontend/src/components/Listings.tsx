import { useState } from 'react'
import ListingsPanel from './ListingsPanel'
import SideNav from './SideNav'

const Listings = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="flex justify-center w-full min-h-[50rem] h-screen bg-black text-white">
    <div className="flex w-full max-w-[100rem]">
      <SideNav setShowSearchBar={setShowSearchBar}></SideNav>
      <ListingsPanel showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></ListingsPanel>
    </div>
  </div>
  )
}

export default Listings