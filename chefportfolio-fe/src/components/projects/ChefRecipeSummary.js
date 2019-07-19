import React from 'react';

const ChefRecipeSummary = () => {
  return (
    <div className="card chef-summary my-5">
      {/* <img
      className="card-img-top"
      style={{ width: '400px' }}
      src={recipeImage}
      alt="image of recipe"
    /> */}
      <div className="card-body">
        <h2 className="card-title">
          Recipe Title: Waffle Bowl
        </h2>
        <div className="card-text">
          <p className="lead" style={{ fontSize: '18px' }}>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusantium aliquid ipsam ab
            dolorem nisi. Libero quod minima explicabo dolor
            culpa...
          </p>
        </div>
        <div>
          <small
            className="text-muted"
            style={{ fontSize: '12px' }}
          >
            Author: Author Name
          </small>
        </div>
        <div>
          <small
            class="text-muted"
            style={{ fontSize: '12px' }}
          >
            Posted: July 18, 2019
          </small>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipeSummary;
