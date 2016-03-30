import './repo.scss';

import React from 'react';

const Repo = ({ repo, onFavoriteClick }) => (
  <div className="row repo">
    <div className="column">
      <div className="repo-header">
        <h4>
          {repo.name} {' '}
          <i className={ 'fa ' + (repo.isFavorite ? 'fa-star' : 'fa-star-o') }
             onClick={ () => onFavoriteClick(repo.id) }></i>
        </h4>
      </div>

      <p>{ repo.description }</p>
    </div>
  </div>
);

export default Repo;