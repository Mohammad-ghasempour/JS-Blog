import HomePage from "./components/pages/homepage/HomePage";
import Single from "./components/pages/single/Single";
import Topbar from "./components/topbar/Topbar";



function App() {
  return (
    <div className="App">
     <Topbar/>
     {/* <HomePage/> */}
     <Single/>
    </div>
  );
}

export default App;


