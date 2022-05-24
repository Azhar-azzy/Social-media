import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <div className="blur" style={{ top: "-18%", right: "0" }}></div>
    //   <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
    //   {/* <Home /> */}
    //   <Profile />
    //   {/* <Auth /> */}
    // </div>
  );
}

export default App;
