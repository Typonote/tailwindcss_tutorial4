
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Stack from './components/stack';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';


function App() {

  const [isOpen , setIsOpen] = useState(false)
  const toggle = () => {
  setIsOpen(!isOpen);
  };

  useEffect(() =>{
    const hideMenu = () => {
      if(window.innerWidth > 760 && isOpen){
        setIsOpen(false)
        console.log("resize")
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div className="App">
      <Navigation toggle={toggle}/>
      <Dropdown isOpen={isOpen}  toggle={toggle} />
      <Header />
      <Stack />
    </div>
  );
}

export default App;
