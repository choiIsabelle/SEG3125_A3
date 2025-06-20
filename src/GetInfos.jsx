import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 700px;
    margin: auto;
`;
const Title = styled.h2`
    text-align: center; 
    color: #333;
    font-size: 2.25rem;
    margin-bottom: 1rem;
`;
const NameAndLevelContainer = styled.div`
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: space-between;
    flex-direction: row;

    & > * {
        flex: 1;
    }
`;

const LevelTitle = styled.h3`
    margin-top: 1rem;
    color: #555;
    font-size: 1.2rem;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const RoundedButton = styled.button`
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    background-color: ${(props) => props.bgColor || '#007BFF'};
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.hoverColor || '#0056b3'};
    }
`;

const GetInfos = ({handleGetInfos}) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(2);

    const handleSubmit = () => {
        alert(`Welcome, ${name}! You'll be playing at level: ${level}`);
        handleGetInfos(name, level);
    };

    const handleLevelSelector=(difficutly)=>{
        switch (difficutly) {
            case "easy":
                setLevel(2);
                break;
            case "hard":
                setLevel(32);
                break;
            case "random": {
                const randomLevel = Math.floor(Math.random() * 16 + 1) * 2; 
                setLevel(randomLevel);
                break;
            }
            default:
                setLevel(32);
        }
    }

    return (
        <FormContainer>
            <Title>Before We Begin...</Title>
            <NameAndLevelContainer>
                <div>
                    <LevelTitle>What is your name?</LevelTitle>
                    <label>
                        Name:
                        <StyledTextarea
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            rows="2"
                            placeholder="Enter your name"
                        />
                    </label>
                </div>
                <div>
                    <LevelTitle>What level do you wish to play at?</LevelTitle>
                    <label>
                        Level:
                        <StyledSelect value={level} onChange={(e) => setLevel(Number(e.target.value))}>
                            {[2, 4, 8, 16, 32].map((power) => (
                                <option key={power} value={power}>
                                    {power}
                                </option>
                            ))}
                        </StyledSelect>
                    </label>
                </div>
            </NameAndLevelContainer>
            <RoundedButton bgColor="green" onClick={()=>handleLevelSelector("easy")}>Play at easiest level</RoundedButton>
            <RoundedButton bgColor="blue" onClick={()=>handleLevelSelector("hard")}>Play at hardest level</RoundedButton>
            <RoundedButton bgColor="red" onClick={() =>handleLevelSelector("random")}>Choose a random level</RoundedButton>
            <RoundedButton bgColor="purple" onClick={handleSubmit}>Let's Begin!</RoundedButton>
        </FormContainer>
    );
};

export default GetInfos;