import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {
  return(
    <div className='cards'>
      <Link to={`/recipe/${props._id}`}>
        <img src={props.picture} alt={props.name} />

        <div className='card-info'>
          <p className='username'>Chef Name</p>
          <h2 className='title'>{props.name}</h2>
          <p className='description'>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;