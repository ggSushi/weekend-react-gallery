import React from 'react';
import './App.css';
import {useState} from 'react';
import Gallery from '../GalleryList/GalleryList.jsx'
import Stack from '@mui/material/Stack';

function App() {

  const [gallery, setGalleryList] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <Stack 
        className="gallery-stack"
        direction="row" 
        justifyContent="space-around"
        flexWrap="wrap"
        sx={{ width: 500}}
        >
          <Gallery 
            gallery={gallery}
            setGalleryList={setGalleryList}
          />
        </Stack>
      </div>
    );
}

export default App;
