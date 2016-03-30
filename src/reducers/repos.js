import * as RepoActions from '../actions/RepoActions';

export default function repos(state = [], action) {
  switch (action.type) {
    case RepoActions.types.FETCH_REPOS_SUCCESS:
      // We want to replace the whole list
      // so we return the list as we receive it
      return action.repos;

    case RepoActions.types.FAVORITE:
      return state.map((repo) => {
        if (repo.id !== action.id) {
          return repo;
        }

        return Object.assign({}, repo, {
          isFavorite: !repo.isFavorite
        });
      });

    default:
      return state;
  }
}