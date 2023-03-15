import './App.css'
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { Routes , Route } from 'react-router-dom'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites';


function App () {

  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    setCharacters(characters.filter(char=> char.id !== id))
}

  function onSearch (id){
    const key = 'fc680417fad2.0f0b17f9fbd87e12ab40';
    const url_base = "https://be-a-rym.up.railway.app/api/character/";
    fetch(`${url_base}${id}?key=${key}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <NavBar onSearch={onSearch}/>      
      <Routes>

        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>

      <hr />
      </div>
  )
}

export default App
