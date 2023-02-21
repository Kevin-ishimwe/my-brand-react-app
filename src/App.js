import Landing from "./components/landing";
import "./App.css";
import SliderComponent from "./components/slider";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBlogs from "./components/allBlogs";
import Singleblog from "./components/singleBlog";
import Dashboard from "./components/admin/DASHBOARD";
import AddBlog from "./components/admin/AddBlog";
function App() {
  return (
    <>
      <Router basename="/my-brand-react-app">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/allblogs"
            element={<AllBlogs />}
          />
          <Route
            exact
            path="/singleblog"
            element={<Singleblog />}
          />
          <Route
            exact
            path="/slider"
            element={<SliderComponent />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/Dashboard"
            element={<Dashboard />}
          />
         <Route
            exact
            path="/addblog"
            element={<AddBlog />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
