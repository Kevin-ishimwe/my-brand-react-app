import Landing from "./components/landing";
import "./App.css";
import SliderComponent from "./components/slider";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBlogs from "./components/allBlogs";
import Singleblog from "./components/singleBlog";
import Dashboard from "./components/admin/DASHBOARD";
import AddBlog from "./components/admin/AddBlog";
import ManageBlogs from "./components/admin/manageBlog";
import { BlogsProvider } from "./components/getblogs";
import { AuthProvider } from "./components/authContext";
import Queries from "./components/admin/queries";
import ProtectedRoute from "./protectedRoutes";
function App() {
  return (
    <>
      <Router basename="/my-brand-react-app">
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <BlogsProvider>
                  <Landing />
                </BlogsProvider>
              }
            />
            <Route
              exact
              path="/allblogs"
              element={
                <BlogsProvider>
                  <AllBlogs />
                </BlogsProvider>
              }
            />
            <Route
              exact
              path="/singleblog"
              element={
                <BlogsProvider>
                  <Singleblog />
                </BlogsProvider>
              }
            />
            <Route exact path="/slider" element={<SliderComponent />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/addblog"
              element={
                <ProtectedRoute>
                  <AddBlog />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/manageBlogs"
              element={
                <ProtectedRoute>
                  <BlogsProvider>
                    <ManageBlogs />
                  </BlogsProvider>
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/Queries"
              element={
                <ProtectedRoute>
                  <BlogsProvider>
                    <Queries />
                  </BlogsProvider>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
