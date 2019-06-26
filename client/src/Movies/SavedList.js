import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <div className="saved-list-wrapper">
          {this.props.list.map(movie => (
            <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`} key={movie.id}>
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          ))}
        </div>
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
