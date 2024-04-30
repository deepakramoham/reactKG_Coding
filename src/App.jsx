import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { useContext } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");

  return (
    <>
      <PostListProvider>
        <Header />
        <div className="outerDiv">
          <div>
            <SideBar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="childDiv">
            {selectedTab === "CreatePost" ? <CreatePost /> : <PostList />}
          </div>
        </div>

        <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
