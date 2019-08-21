function comments(state = [], action) {

  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  } 
  return state;
}

function postComments(state = [], { type, author, comment, index } ) {

  switch(type) {
    case 'ADD_COMMENT' :
      return [
        ...state,
        {
          user: author,
          text: comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, index),
        ...state.slice(index, 0)
      ]
    default:
      return state;
  }
}

export default comments;