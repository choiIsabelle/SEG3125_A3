import React from 'react'
import * as ComponentLib from './ComponentLib.jsx'
import GamePad from './Icons/GamePad.jsx'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem; /* Add spacing below the title */
`

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: black;
  padding: 0.5rem;
`

const StyledContainer = styled.div`
  gap: 1rem;
  background-image: url('/cats/Cat_29.jpeg'); /* Add the background image */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */
  padding-top: 7rem;
  min-height: 100vh;
  background-repeat: no-repeat; /* Prevent the image from repeating */
`

const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 2rem;
  max-width: 600px; /* Limit width for better readability */
  margin: 0 auto; /* Center the container */
  background-color: rgb(233, 233, 233); /* Light background for contrast */
`

const LandingPage = ({ handleGameStart }) => {
  return (
    <StyledContainer>
      <StyledItemsContainer>
        <StyledHeader>Welcome to the Cat Game!</StyledHeader>
        <ComponentLib.CustomButton
          Icon={GamePad}
          iconProps={{ width: 40, height: 40, fill: "white" }}
          handleOnClick={handleGameStart}
        >
          <StyledTitle>Start Game</StyledTitle>
        </ComponentLib.CustomButton>
      </StyledItemsContainer>
    </StyledContainer>
  );
};

export default LandingPage