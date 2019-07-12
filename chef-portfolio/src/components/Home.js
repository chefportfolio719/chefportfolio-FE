import React from 'react';
import { connect } from 'react-redux';



class Home extends React.Component {
  render() {
    return (
      <div className='home-wrapper'>
        <h1>Chef Portfolio</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // State
  }
}

export default connect(mapStateToProps, {})(Home);