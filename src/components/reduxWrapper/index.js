import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreate';
import Home from '../home/index';

function mapStateDoProps(state) {
  const { posts, comments }=  state;

  return {
    posts,
    comments
  }
}

function mapDispachProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxWrapper = connect(mapStateDoProps, mapDispachProps)(Home);

export default ReduxWrapper;