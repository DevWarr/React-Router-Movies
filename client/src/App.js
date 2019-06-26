import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if(this.state.savedList.findIndex(m => m.id === movie.id) !== -1) {return}
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" render={props => <Movie 
          {...props}
          addToSavedList={this.addToSavedList} 
        />} />
      </div>
    );
  }
}
