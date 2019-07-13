import React from 'react';

const Recipe = props => {
  return(
    <div className='cards'>
      <img src={props.pic} alt={props.recipe_name} />

      <div className='card-info'>
        <p className='username'>Chef Number {props.id}</p>
        <h2 className='title'>{props.recipe_name}</h2>
        <p className='description'>Soft, tender eggplant generously coated with an umami-packed miso glaze. A healthy, delicious side dish ready in under 20 minutes!</p>
      </div>
    </div>
  );
};

export default Recipe;