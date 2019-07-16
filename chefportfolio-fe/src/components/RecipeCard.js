import React from 'react';

const Recipe = props => {
  return (
    <div className="cards">
      <img src={props.picture} alt={props.name} />

      <div className="card-info">
        <p className="username">{props.name}</p>
        <h2 className="title">{props.name}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Recipe;
