import react from 'react';

function GalleryItem({photo}) {

  return(
    <>
    <div>
      <img className="gallery-pics" src={photo.path}/>
      {photo.description}
      {photo.likes}
    </div>
    </>
  )
}

export default GalleryItem;