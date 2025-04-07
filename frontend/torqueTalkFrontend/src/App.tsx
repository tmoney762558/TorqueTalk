import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.tsx"
import Notifications from "./components/Notifications.tsx"
import Messages from "./components/Messages.tsx"
import Listings from "./components/Listings.tsx"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/notifications" element={<Notifications></Notifications>}></Route>
        <Route path="/messages" element={<Messages></Messages>}></Route>
        <Route path="/listings" element={<Listings></Listings>}></Route>
    </Routes>
  )
}

export default App