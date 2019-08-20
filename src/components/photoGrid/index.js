import React from 'react'
import { useSelector } from 'react-redux';
import Photo from '../photo';
import { Grid,  Header, Icon } from 'semantic-ui-react'

const PhotoGrid = () => {
  const posts = useSelector(state => state.posts);

  return (
    <>
      <Grid columns={3} divided>
        <Header as='h2' icon textAlign='center' style={{ marginTop: 20 }}>
          <Icon name='images outline' circular />
          <Header.Content>Recent Posts</Header.Content>
        </Header>
      </Grid>
      <Grid columns={3} divided>
        <Grid.Row>
            {/* {posts && posts.map((post, i) => <Photo post={post} index={i} key={post.id} />)} */}
            {posts && posts.map((post, i) => (
              <Grid.Column  key={post.id} style={{ marginBottom: 20 }}>
                <Photo post={post} index={i} />
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    </>
   );
}
 
export default PhotoGrid;