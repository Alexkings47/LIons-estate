import "./App.css";
import Header  from './components/Header/Header'
import Outlook from "./components/outlook/Outlook";
import NewAdditions from "./components/NewAdditions";
import Featured from "./components/Featured";


function App() {
  return (
    <div className="App">
      <Header />
      <Outlook />
      <NewAdditions />
      <Featured />
    </div>
  );
}

export default App;
