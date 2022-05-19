import "./App.css";
import Header  from './components/Header/Header'
import Outlook from "./components/outlook/Outlook";
import NewAdditions from "./components/NewAdditions";


function App() {
  return (
    <div className="App">
      <Header />
      <Outlook />
      <NewAdditions />
    </div>
  );
}

export default App;
