import React, { useState } from 'react'
import { Icon, Divider } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeComment } from '../../actions/actionCreate';
const SingleComment = ({ comment: { user, text }, index, postId}) => {
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();
  return (
    <div onMouseEnter={() => { setShowDelete(true) } } onMouseLeave={ () => { setShowDelete(false) }} >
      <p><strong>{user}</strong>: {text} { showDelete && <Icon onClick={() => {dispatch(removeComment(postId, index))}} style={{ marginLeft: 10 }} name="close" />}</p>
      <Divider />
    </div>
   );
}
 
export default SingleComment;