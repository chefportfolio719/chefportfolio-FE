import styled from 'styled-components';


// styles for signup/login components
const RegisterDiv = styled.div`
    border: 1px solid darkgray;
    width: 30%;
    margin: 0 auto;
    margin-top: 10%;
    box-shadow: 15px 12px 10px -8px #333;
`

const LinkDiv = styled.div`
    border: 1px solid darkgray;
    width: 30%;
    margin: 0 auto;
    margin-top: .8%;
    padding: 20px 0;
    box-shadow: 15px 12px 10px -8px #333;
`

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 40px;
`

const RegisterInput = styled.input`
    background-color: #FAFAFA;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid lightgray;
`

const RegisterButton = styled.button`
    margin: 20px 0 20px;
    background-color: #ff7600;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0c0034;
    }
`

const Registerh3 = styled.h3`
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    color: #444444;
    margin-top: 80px;
`

const RegisterP = styled.p`
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    color: #444444;
`

const HomePageDiv = styled.div`
    display: flex;        
`

const RightSide = styled.div`
    padding: 0 2.8rem 0 2.8rem;
    width: 70%;
    // background-color: #E9E9E9;
`

const Container = styled.div`
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
`


export {
    RegisterForm,
    RegisterInput,
    RegisterDiv,
    RegisterButton,
    Registerh3,
    RegisterP,
    LinkDiv,
    RightSide,
    Container,
    HomePageDiv

}