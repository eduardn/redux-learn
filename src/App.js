import React, { Component } from 'react';
import RepoListContainer from './containers/RepoListContainer';

export default class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>Github repos</h1>
          <RepoListContainer />
        </div>
    );
  }
}