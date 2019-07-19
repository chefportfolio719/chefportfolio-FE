import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {
  return(
    <div className='cards'>
      <Link to={`/recipe/${props._id}`}>
        <img src={props.picture} alt={props.name} />
      </Link>
        <div className='card-info'>
      <Link to={`/chef/${props.chef._id}`}>
        <p className='username'>{`${props.chef.firstname} ${props.chef.lastname}`}</p>
      </Link>
      <Link to={`/recipe/${props._id}`}>
        <h2 className='title'>{props.name}</h2>
      </Link>
          <p className='description'>{props.description.slice(0, 80)}...</p>
        </div>
    </div>
  );
};

export default Recipe;