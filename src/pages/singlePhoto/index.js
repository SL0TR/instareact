import React from 'react';
import Photo from '../../components/photo';
import { useSelector } from 'react-redux';
import Comments from '../../components/comments';
import { Grid, Divider, Segment } from 'semantic-ui-react';

const SinglePhoto = ({ match: { params: { postId } } } ) => {

  const posts = useSelector(state => state.posts)
  const comments = useSelector(state => state.comments)

  const index = posts.findIndex(post => post.code === postId)
  const post = posts[index];
  const postComments = comments[postId]||[];

  return (
    <Segment>
    <Grid  columns={2}>
      <Grid.Row>
        <Grid.Column fluid>
          <Photo post={post} index={index}/>
        </Grid.Column>
        <Grid.Column fluid>
          <Comments postId={postId} postComments={postComments} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider vertical />
    </Segment>
  )

}
 
export default SinglePhoto;