import react from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function GalleryItem({photo}) {

  const { description } = useParams();

  const [picStatus, setPicStatus] = useState(true);

  const togglePic = () => {
    setPicStatus(false);
  }


  return(
    <>
    <div>
      {
        picStatus === true ? (
          <img 
            onClick={togglePic}
            className="gallery-pics" 
            src={photo.path}/>
            // {photo.description}
            // {photo.likes}
          ) : (
          <img 
            onClick={togglePic}
            className="gallery-pics" 
            src={photo[description]}/>
        )
      }
    </div>
    </>
  )
}

export default GalleryItem;