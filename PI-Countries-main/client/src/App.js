import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import { useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Detail from "./components/Detail/Detail";
import Home from './components/Home/Home';
import Form from './components/Activity/Form';



function App() {

  const location = useLocation()

  return (

    <div className="App">
{/* 
      {location.pathname !== "/" && <Nav />} */}

      <Routes>

        <Route exact path="" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path='/activities' element={<Form />} />


      </Routes>


    </div>
  );
}

export default App;
