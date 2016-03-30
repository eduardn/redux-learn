import * as RepoActions from '../actions/RepoActions';

export default function loading(state = false, action) {
  switch (action.type) {
    case RepoActions.types.FETCHING_REPOS:
      return true;
    // For success and error just set to false
    case RepoActions.types.FETCH_REPOS_ERROR:
    case RepoActions.types.FETCH_REPOS_SUCCESS:
      return false;
    default:
      return state;
  }
}