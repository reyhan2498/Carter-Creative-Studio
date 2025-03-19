import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import './App.css';
import Services from "./components/Services/services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Services />
    </div>
  );
}

export default App;
