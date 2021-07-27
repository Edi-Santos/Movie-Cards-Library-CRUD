import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Movie Cards Library CRUD</h2>
        <Link className="add-card" to="/movies/new">ADICIONAR CARTÃO</Link>
      </header>
    );
  }
}

export default Header;
