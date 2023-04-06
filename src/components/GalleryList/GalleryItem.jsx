import react from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function GalleryItem({photo, picStatus, setPicStatus, description}) {


  return(
    <>
      <div>
        <img 
        className="gallery-pics" 
        src={photo.path}    
        />
        {photo.description}
        {photo.likes}
      </div>
    </>
  )
}


export default GalleryItem;