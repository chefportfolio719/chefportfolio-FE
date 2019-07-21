
import React, { Component } from 'react';
import { connect } from 'react-redux';


// import { Container } from 'reactstrap';


import { 
    HomePageDiv, 
    RightSide,
    Container, 
} from './Styles';
import Chef from './Chef';










class HomePage extends Component {

    componentDidMount() {
        this.props.getChef();
    }
    render() {
    return (
        <Container>
    
            <HomePageDiv>
                
             

                <RightSide>
                
                    
                    {this.props.fetchingChef === true ? <h1>Loading Chef...</h1> : null }
                    {this.props.error && this.props.error.length > 0 ? <h1>{this.props.error}</h1> : null}
                    {/* { this.props.categories.map((category, id) => <Category category={category} key={id}/>) } } */}
                  
                   <Chef/>
           
                   
                
                    
                </RightSide>
                
            </HomePageDiv>
        </Container>
    );
}
}
const mapStateToProps = state => {
    return {
        chefs: state.chefs,
        error: state.error,
        fetchingChef: state.fetchingChef
    }
}
export default connect(mapStateToProps, { })(HomePage);