import react from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function GalleryItem({photo, getGalleryList}) {

  let string = '';
  const { id } = useParams();
  const [picStatus, setNewStatus] = useState(true);
  const [likes, setLikes] = useState(photo.likes)

  const togglePic = () => {
    setNewStatus(!picStatus);
    if (picStatus === true) {
      string = JSON.stringify(picStatus);
      console.log(`expect true ${string}`);
    } else if (picStatus === false) {
      string = JSON.stringify(picStatus);
      console.log(`expect false ${string}`)
    }
  };

  //! Something is wrong here. I can't quite figure it out.
  const increaseLikes = () => {
    console.log(photo.id)
    axios.put(`/gallery/like/${photo.id}`).then((response) => {
      console.log(`Sanity check`,response);
    }).catch((error) => {
      console.log(`Error in PUT ${error}`);
      alert(`Something went wrong`)
    })
  }

  return(
    <>
      <div>
        {
          picStatus === true ? (
            <img 
            key={id}
            onClick={togglePic}
            className="gallery-pics" 
            src={photo.path}    
            />
          ) : (
            <div 
            key={id}
            onClick={togglePic}
            className="gallery-pics" 
            alt={photo.description}
            >{photo.description}</div>
          )

        }
        <br/>
        <button onClick={increaseLikes}>Love it!</button>
        <br/>
        {photo.likes}
      </div>
    </>
  )
}


export default GalleryItem;