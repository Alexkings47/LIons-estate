import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home"
import Houses from "./pages/properties"
import Agents from "./pages/agents"
import NewAdditions from "./components/NewAdditions";
import NewProperty from "./pages/newproperty"



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route exact path="/agents" element={<Agents />} />
          <Route exact path="/newproperty" element={<NewProperty />} />
        </Routes>

        {/* <Route exact path="page3" element={<Page3 />} /> */}
      </div>
    </Router>
  );
}

export default App;
