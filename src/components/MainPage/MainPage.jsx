import  { Component } from 'react';
import styled from "styled-components";



const Page = styled.div`
     width: 100%;
    display: flex;
    height:100vh;
    background-color:#171717;
    /* justify-content: center; */
   flex-direction: column;
 
`


class MainPage extends Component {

    render() {
        return (
            <>
              <Page></Page>
            </>
        )
    }
}
export default MainPage