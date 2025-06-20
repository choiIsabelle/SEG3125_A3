import React from 'react';
import styled from 'styled-components';
import * as ComponentLib from './ComponentLib.jsx';
import Star from './Icons/Star.jsx';

const Message = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${props => (props.status ? 'green' : 'red')};
    text-align: center;
    margin-top: 20px;
`;

const StyledStarContainer =styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 2rem;
    `

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    `

/**
 * GameOverPage component displays a message based on the game status and provides a button to restart the game.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.status - The status of the game; true if the player succeeded, false otherwise.
 * @param {Function} props.setPlayAgain - Callback function to trigger restarting the game.
 */
const GameOverPage = ({ status, setPlayAgain }) => {
    return (
        <StyledContainer>
            <StyledStarContainer>
                {Array.from({ length: 3 }, (_, index) => (
                    <Star fill={status ? "yellow" : "grey"} key={index} />
                ))}
            </StyledStarContainer>
            <Message status={status}>
                {status ? 'Congratulations! You succeeded!' : 'Game Over! Better luck next time!'}
            </Message>
            <ComponentLib.CustomButton handleOnClick={() => setPlayAgain()}>
                Play Again?
            </ComponentLib.CustomButton>
        </StyledContainer>
    );
};

export default GameOverPage;