
import React, { Component } from 'react';
import { connect } from 'react-redux';


// import { Container } from 'reactstrap';


import { 
    HomePageDiv, 
    RightSide,
    Container, 
} from './Styles';










class HomePage extends Component {

    componentDidMount() {
       // this.props.getCategory();
    }
    render() {
    return (
        <Container>
    
            <HomePageDiv>
                
             

                <RightSide>
                
                    
                    {this.props.fetchingCategory === true ? <h1>Loading Category...</h1> : null }
                    {this.props.error && this.props.error.length > 0 ? <h1>{this.props.error}</h1> : null}
                    {/* { this.props.categories.map((category, id) => <Category category={category} key={id}/>) } } */}
                  
                   
           
                   
                
                    
                </RightSide>
                
            </HomePageDiv>
        </Container>
    );
}
}
const mapStateToProps = state => {
    return {
        categories: state.categories,
        error: state.error,
        fetchingCategory: state.fetchingCategory
    }
}
export default connect(mapStateToProps, { })(HomePage);