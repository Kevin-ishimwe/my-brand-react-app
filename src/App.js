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
      <Router>
        <Routes>
          <Route path="/my-brand-react-app/" element={<Landing />} />
          <Route path="/my-brand-react-app/login" element={<Login />} />
          <Route path="/my-brand-react-app/allblogs" element={<AllBlogs />} />
          <Route path="/my-brand-react-app/singleblog" element={<Singleblog />} />
          <Route
            path="/my-brand-react-app/slider"
            element={<SliderComponent />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
