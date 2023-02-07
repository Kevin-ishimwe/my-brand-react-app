import Landing from "./components/landing";
import "./App.css";
import SliderComponent from "./components/slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/my-brand-react-app/" element={<Landing />} />
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
