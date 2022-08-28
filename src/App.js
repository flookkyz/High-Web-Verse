import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Admin from "./Page/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-40">
        <Navbar />
      </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
