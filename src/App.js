import HomePage from "./components/pages/homepage/HomePage";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";



function App() {
  return (
    <div className="App">
     <Topbar/>
     {/* <HomePage/> */}
     {/* <Single/> */}
     {/* <Write/> */}
     <Settings/>
    </div>

  );
}

export default App;


