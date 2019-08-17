import React from 'react';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { increment } from '../../actions/actionCreate';

const Photo = ({ post: { code, display_src, caption, likes }, index }) => {

  const dispatch = useDispatch();

  return ( 
    <figure>
      <Link to={`/photo/${code}`}>
        <img src={display_src} alt={caption}/>
      </Link>
      <figcaption>
        <p>{caption}</p>
      </figcaption>
      <div className="control-btns">
        <button onClick={() => dispatch(increment(index))}>&hearts; {likes}</button>
        <Link to={`/photo/${code}`}>
          <span>comment
          </span>
        </Link>
      </div>
    </figure>

   );
}
 
export default Photo;