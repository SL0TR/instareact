import React from 'react'
import { useSelector } from 'react-redux';
import Photo from '../photo';

const PhotoGrid = () => {
  const posts = useSelector(state => state.posts);

  return ( 
    <>
      <h2>I'm PhotoGrid</h2>
      <div className="photogrid">
        {posts && posts.map(post => <Photo post={post} key={post.id} />)}
      </div>
    </>
   );
}
 
export default PhotoGrid;