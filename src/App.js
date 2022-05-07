import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChildForm from "./components/ChildForm";
import RoomForm from "./components/RoomForm";
import EditChild from "./components/EditChild";

import PrivateOutlet from "./components/PrivateOutlet";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/private" element={<PrivateOutlet />} />
        <Route path="/private/user" element={<Home />} />
        <Route path="/private/rooms" element={<Rooms />} />
        <Route path="/private/childform" element={<ChildForm />} />
        <Route path="/private/roomform" element={<RoomForm />} />
        <Route path="/private/childedit/:childId" element={<EditChild />} />
      </Routes>
    </>
  );
}

export default App;
