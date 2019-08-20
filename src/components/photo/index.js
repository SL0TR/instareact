import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../actions/actionCreate';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

const Photo = ({ post: { code, display_src, caption, likes }, index }) => {

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  return ( 
    <Card fluid>
    <Image  
      as='a'
      src={display_src ? display_src : 'https://picsum.photos/400/400/'} wrapped ui={false}
      href={`/photo/${code}`}
      />
    <Card.Content>
      <Card.Description>
        {caption}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button as='div' labelPosition='right' onClick={() => dispatch(increment(index))}>
      <Button basic color='teal'>
        <Icon name='heart' />
      </Button>
      <Label as='a' basic color='teal' pointing='left'>
        {likes}
      </Label>
    </Button>
    <Button labelPosition='right' as='a' href={`/photo/${code}`}>
      <Button basic color='blue' >
        <Icon name='comment' />
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        {comments[code] ? comments[code].length : 0 }
      </Label>
    </Button>
    </Card.Content>
  </Card>

   );
}
 
export default Photo;