import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <Header />
      <div className="outerDiv">
        <div>
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}  />
        </div>
        <div className="childDiv">
          {selectedTab==="CreatePost" ?<CreatePost />:<PostList />}
        
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
