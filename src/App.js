import './App.scss';
import {Sidemenu} from './components/Sidemenu';
import {MainWindow} from './components/MainWindow';
import { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [sideMenu, setSideMenu] = useState(false);
  const [category, setCategory] = useState("Carts");
  const [inputValue, setInputValue] = useState("");
  return (
    <Router>
      <div className="App">
        <div className={`blocking ${sideMenu?"active": ""}`}></div>
        <Sidemenu inputValue={inputValue} setInputValue={setInputValue} category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
        <MainWindow inputValue={inputValue} setInputValue={setInputValue} category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
      </div>
    </Router>
  );
}

export default App;
