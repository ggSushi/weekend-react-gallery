import react from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function GalleryItem({photo}) {

  let string = '';

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

  const increaseLikes = () => {
    setLikes(likes + 1)
  }

  return(
    <>
      <div>
        {
          picStatus === true ? (
            <img 
            onClick={togglePic}
            className="gallery-pics" 
            src={photo.path}    
            />
          ) : (
            <div 
            onClick={togglePic}
            className="gallery-pics" 
            alt={photo.description}
            >{photo.description}</div>
          )

        }
        <br/>
        <button onClick={increaseLikes}>Love it!</button>
        <br/>
        {likes}
      </div>
    </>
  )
}


export default GalleryItem;