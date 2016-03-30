export const types = {
  FAVORITE: 'FAVORITE',
  FETCH_REPOS: 'FETCH_REPOS',
  FETCHING_REPOS: 'FETCHING_REPOS',
  FETCH_REPOS_SUCCESS: 'FETCHED_REPOS_SUCCESS',
  FETCH_REPOS_ERROR: 'FETCH_REPOS_ERROR'
};

export function favorite(id) {
  return {
    type: types.FAVORITE,
    id
  };
}

export function fetchRepos() {
  return function(dispatch) {
    dispatch(fetchingRepos());

    return fetch('https://api.github.com/repositories')
      .then(response => response.json())
      .then(repos => dispatch(fetchReposSuccess(repos)));
  };
}

export function fetchingRepos() {
  return {
    type: types.FETCHING_REPOS
  };
}

export function fetchReposSuccess(repos) {
  return {
    type: types.FETCH_REPOS_SUCCESS,
    repos
  };
}

export function fetchReposError(error) {
  return {
    type: types.FETCH_REPOS_ERROR,
    error
  };
}

