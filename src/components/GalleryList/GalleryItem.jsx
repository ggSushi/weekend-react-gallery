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
        alt={photo.description}        
        />
        {photo.description}
        {photo.likes}
      </div>
    </>
  )
}

//! Issues with the below code. not sure how to make this work


// function GalleryItem({photo, picStatus, setPicStatus, description}) {

//   const togglePic = () => {
//     setPicStatus(false);
//   }

//   return(
//     <>
//     <div>
//       {
//         picStatus === true ? (
//           <img 
//           onClick={togglePic}
//           className="gallery-pics" 
//           src={photo.path}
//           alt={photo.description}
//           />
//           // {photo.likes}
//         ) : (
//           <img 
//           onClick={togglePic}
//           className="gallery-pics" 
//           alt={photo.description}
//           />
//           // {photo.likes}
//         )
//       }
//     </div>
//     </>
//   )
// }

export default GalleryItem;