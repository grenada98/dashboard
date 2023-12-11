import './App.scss';
import {Sidemenu} from './components/Sidemenu';
import {MainWindow} from './components/MainWindow';
import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [sideMenu, setSideMenu] = useState(false);
  const [category, setCategory] = useState("");
  useEffect(()=>{
    setSideMenu(false)
  }, [category])
  return (
    <Router>
      <div className="App">
        <div className={`blocking ${sideMenu?"active": ""}`}></div>
        <Sidemenu category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
        <MainWindow category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
      </div>
    </Router>
  );
}

export default App;
