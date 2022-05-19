import logo from "./logo.svg";
import "./App.css";
import County  from './components/County/County'
import Header  from './components/Header/Header'
import Outlook from "./components/outlook/Outlook";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlook />
    </div>
  );
}

export default App;
