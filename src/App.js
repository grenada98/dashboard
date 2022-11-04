import './App.scss';
import {Sidemenu} from './components/Sidemenu';
import {MainWindow} from './components/MainWindow';
import { useState} from 'react';



function App() {
  const [sideMenu, setSideMenu] = useState(false);
  const [category, setCategory] = useState("users");
  return (
      <div className="App">
        <div className={sideMenu? 'blocking active': 'blocking'}></div>
        <Sidemenu category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
        <MainWindow category={category} setCategory={setCategory} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
      </div>
  );
}

export default App;
