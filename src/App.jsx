
import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import MyProvider from "./Components/MyProvider";

function App() {



  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <div className="md:grid grid-cols-3 my-12">
        <MyProvider>
          <Blogs />
          <Bookmarks />
        </MyProvider>
      </div>
    </div>
  );
}

export default App;
