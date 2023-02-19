import Landing from "./components/landing";
import "./App.css";
import SliderComponent from "./components/slider";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBlogs from "./components/allBlogs";
import Singleblog from "./components/singleBlog";
function App() {
  return (
    <>
      <Router basename="/my-brand-react-app">
        <Routes>
          <Route exact path="/*" element={<Landing />} />
          <Route exact path="/my-brand-react-app/" element={<Landing />} />
          <Route exact path="/my-brand-react-app/login" element={<Login />} />
          <Route
            exact
            path="/my-brand-react-app/allblogs"
            element={<AllBlogs />}
          />
          <Route
            exact
            path="/my-brand-react-app/singleblog"
            element={<Singleblog />}
          />
          <Route
            exact
            path="/my-brand-react-app/slider"
            element={<SliderComponent />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
