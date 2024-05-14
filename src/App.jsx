import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

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
            <Outlet />
          </div>
        </div>

        <Footer />
      </PostListProvider>
    </>
  );
}
export const  postLoader = () => {
 return  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      return obj.posts;
    });
};

export default App;
