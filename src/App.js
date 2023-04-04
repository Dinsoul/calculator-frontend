import './App.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Formaf from "./Components/Formaf";
import Frame from "./Components/Frame";
import {Route, Outlet, BrowserRouter as Router, Routes} from "react-router-dom";
import Clients from "./Components/Clients";
import ClientCard from "./Components/ClientCard";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
              <Route path="/" element={<Formaf/>}></Route>
              <Route path="client" element={<Clients/>}></Route>
              <Route path = "cards" element={<ClientCard />}></Route>
              <Route path = "frame" element={<Frame/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
