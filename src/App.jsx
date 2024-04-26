import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";
import PostList from "./components/PostList";
function App() {
  return (
    <>
      <Header />
      <div className="outerDiv">
        <div>
          <SideBar />
        </div>
        <div className="childDiv">
          <CreatePost />
          <PostList />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
