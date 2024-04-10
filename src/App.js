
import Header from "./components/navbar.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Maincontent from "./components/Maincontent/Maincontent.jsx";
import Dishes from "./components/Sampledishes/Sampledishes.jsx";
// import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <div className="App">
           <Landingpage/>
           <Maincontent/>
     <Header/>
     <Dishes/>
     

     
    

    </div>
  );
}

export default App;
