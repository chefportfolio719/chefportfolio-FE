import React from 'react';

const Recipe = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card mb-5">
            <img src={props.picture} alt={props.name} />
            <div className="card-body">
              <h3 className="card-title">{props.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">
                {props.name}
              </h4>
              <p className="card-text">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card mb-5">
            <img src={props.picture} alt={props.name} />
            <div className="card-body">
              <h3 className="card-title">{props.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">
                {props.name}
              </h4>
              <p className="card-text">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card mb-5">
            <img src={props.picture} alt={props.name} />
            <div className="card-body">
              <h3 className="card-title">{props.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">
                {props.name}
              </h4>
              <p className="card-text">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="cards">
    //   <img src={props.picture} alt={props.name} />
    //   <div className="card-info">
    //     <p className="username">{props.name}</p>
    //     <h2 className="title">{props.name}</h2>
    //     <p className="description">{props.description}</p>
    //   </div>
    // </div>
  );
};

export default Recipe;
