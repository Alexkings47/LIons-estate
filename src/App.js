import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Route exact path="page1" element={<Page1 />} />
        <Route exact path="page2" element={<Page2 />} />
        <Route exact path="page3" element={<Page3 />} /> */}
      </div>
    </Router>
  );
}

export default App;
