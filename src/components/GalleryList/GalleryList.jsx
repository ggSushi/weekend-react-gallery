import react from 'react';
import GalleryItem from './GalleryItem';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

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
    {/* {JSON.stringify(gallery)} */}
      {
        gallery.map((photo) => (
          <GalleryItem 
            key={photo.id}
            photo={photo}
          />
        ))
      }
    </>
  )
}


//! Issues with below code

// function GalleryList({gallery, setGalleryList}) {

//   const { description } = useParams();

//   const [picStatus, setPicStatus] = useState(true);


//   const getGalleryList = () => {
//     axios.get('/gallery').then((response) => {
//       setGalleryList(response.data);
//     }).catch((error) => {
//       console.log(` Error in GET client ${error}`);
//       alert(`Something went wrong`);
//     })
//   }

//   useEffect(() => {
//     getGalleryList();
//   }, []);

//   return(
//     <>
//     {/* {JSON.stringify(gallery)} */}
//       {
//         gallery.map((photo) => (
//           <GalleryItem 
//             key={photo.id}
//             photo={photo}
//             picStatus={picStatus}
//             setPicStatus={setPicStatus}
//             description={description}
//           />
//         ))
//       }
//     </>
//   )
// }

export default GalleryList;