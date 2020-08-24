import React from "react";
import {Roller} from "react-awesome-spinners";
import styled from 'styled-components';

const Spinner =()=>{
    return(
        <SpinnerWrapper>
            <Roller color={'#000'}/>
        </SpinnerWrapper>
    )
}

export default Spinner;

const SpinnerWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`