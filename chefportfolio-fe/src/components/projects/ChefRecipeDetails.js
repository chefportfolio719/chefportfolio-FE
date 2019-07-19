import React from 'react';
import '../../App.css';

const ChefRecipeDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container recipe-details my-5">
      <div className="row">
        <div className="col-md-12">
          <div
            className="card p-3 mx-auto"
            style={{ fontSize: '14px' }}
          >
            <h2 className="card-title">
              Recipe Title - {id}
            </h2>
            <div
              className="card-body lead"
              style={{ fontSize: '18px' }}
            >
              <h4
                className="bg-orange text-white p-2 rounded font-weight-bolder"
                style={{ width: '115px' }}
              >
                Meal Type:
              </h4>{' '}
              <p>Breakfast</p>
              <h4
                className="bg-orange text-white p-2 rounded font-weight-bolder"
                style={{ width: '115px' }}
              >
                Ingredients:
              </h4>{' '}
              <p>
                2 Eggs, 4 Bacon Slices, 2 Maple Sausage
                Links, 1 Large Waffle
              </p>
              <h4
                className="bg-orange text-white p-2 rounded font-weight-bolder"
                style={{ width: '115px' }}
              >
                Instructions:
              </h4>{' '}
              <p>
                {' '}
                Start by cracking two eggs in a bowl. Beat
                eggs lightly for 1 minute. Add a sprinkle of
                salt and pepper to taste. Set aside...Fry 4
                slices of bacon to preferred state. Set
                aside. Fry sausage links until cooked
                through and dark golden brown outside. Set
                aside. Toast one Eggo waffle or make your
                own homemade. Once toasted, cut waffles into
                chunks. Also chop bacon and sausage.Get
                clear glass baking dish and grease it with a
                stick of butter. Add slices of butter to
                bottom. Place waffle pieces in dish, next
                add scrambled eggs, bacon and sausage. Mix
                all together gently in baking dish. Place
                aluminum foil over baking dish. Bake at 350
                degrees in oven for approximately 15 mins.
                Remove foil. Serve with your favorite syrup!
              </p>
              <hr />
              <div className="mt-4">
                <small className="text-muted">
                  Author: Author Name
                </small>
              </div>
              <div>
                <small className="text-muted">
                  Posted: July 18, 2019
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipeDetails;
