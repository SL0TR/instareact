import React from 'react';
import { Link} from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';

const Photo = ({ post: { code, display_src, caption } }) => {
  return ( 
    <figure>
      <Link to={`/photo/${code}`}>
        <img src={display_src} alt={caption}/>
      </Link>
      <figcaption>
        <p>{caption}</p>
      </figcaption>
      <div className="control-btns">
        <button>&hearts;</button>
        <Link to={`/photo/${code}`}>
          <span>comment
          </span>
        </Link>
      </div>
    </figure>

   );
}
 
export default Photo;