import React, { useState } from 'react'
import { Card, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import SingleComment from '../singleComments';
import { addComment } from '../../actions/actionCreate';
const Comments = ({ postComments, postId }) => {
  
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addComment(postId, author, comment));
    setAuthor('')
    setComment('');
  }

  return (
    <Card fluid>
      <Card.Content extra>
        {postComments.map((comment, i) => <SingleComment postId={postId} comment={comment} index={i} key={i} />)}
        <Form>
          <Form.Group widths='equal'>
            <Form.Input value={author} onChange={ e => { setAuthor(e.target.value) } } icon='user circle'         placeholder='Author' />
            <Form.Input value={comment} onChange={ e => { setComment(e.target.value) } } icon='comment outline' placeholder='Add a comment...' />
            <p onClick={handleSubmit} style={{ margin: '0 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><strong>Post</strong></p>
          </Form.Group>
        </Form>
      </Card.Content>
    </Card>
  );
}
 
export default Comments;