import React from 'react';
import './App.css';
import {useState} from 'react';
import Gallery from '../GalleryList/GalleryList.jsx'

function App() {

  const [gallery, setGalleryList] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <Gallery 
          gallery={gallery}
          setGalleryList={setGalleryList}
        />
      </div>
    );
}

export default App;
