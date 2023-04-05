import react from 'react';
import GalleryItem from './GalleryItem';
import axios from 'axios';
import {useEffect} from 'react';

function GalleryList({gallery, setGalleryList}) {

  const getGalleryList = () => {
    axios.get('/gallery').then((response) => {
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(` Error in GET client ${error}`);
      alert(`Something went wrong`);
    })
  }

  useEffect(() => {
    getGalleryList();
  }, []);

  return(
    <>
    {JSON.stringify(gallery)}
    </>
  )
}

export default GalleryList;