import { connect } from 'react-redux';

import RepoList from '../components/RepoList';
import * as RepoActions from '../actions/RepoActions';

const mapStateToProps = (state) => state;

const mapDispatchToProp = (dispatch) => {
  return {
    onFavoriteClick: (id) => {
      dispatch(RepoActions.favorite(id));
    }
  };
};

const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProp
)(RepoList);

export default RepoListContainer;
