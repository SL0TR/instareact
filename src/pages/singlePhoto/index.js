import React from 'react';
import Photo from '../../components/photo';
import { useSelector } from 'react-redux';

const SinglePhoto = ({ match: { params: { postId } } } ) => {
  const posts = useSelector(state => state.posts)

  const index = posts.findIndex( post => post.code === postId)
  const post = posts[index];

  return <Photo post={post} index={index}/>

}
 
export default SinglePhoto;