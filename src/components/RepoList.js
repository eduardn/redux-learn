import React from 'react';
import Repo from './Repo/Repo';

var RepoList = ({ repos, loading, onFavoriteClick }) => {
  if (loading) {
    return <p>Loading...!</p>
  } else {
    return (
      <div>
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} onFavoriteClick={onFavoriteClick} />
        ))}
      </div>
    );
  }
};

export default RepoList;