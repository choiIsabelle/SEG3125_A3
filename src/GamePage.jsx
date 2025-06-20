import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

const GameGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    padding: 10px;
`;

const CardWrapper = styled.div`
    perspective: 1000px;
`;

const Card = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FrontFace = styled(CardFace)`
    background-color: white;
`;

const BackFace = styled(CardFace)`
    transform: rotateY(180deg);
`;

const CatImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const GameContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
`;

const GameTitle = styled.h1`
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const TimerDisplay = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #e63946;
`;

// Function to shuffle an array
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const GamePage = ({ name, difficulty = 8, getGameStatus }) => {
    const catImages = useMemo(() => {
        const baseImages = Array.from({ length: difficulty }, (_, i) => `/cats/Cat_${(i % 24) + 1}.jpg`);
        return shuffleArray([...baseImages, ...baseImages]);
    }, [difficulty]);

    const [flippedCards, setFlippedCards] = useState(Array(catImages.length).fill(false));
    const [activeCards, setActiveCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameOver, setGameOver] = useState(false);

    // Timer countdown
    useEffect(() => {
        if (gameOver) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    getGameStatus(true, false);
                    setGameOver(true);
                    console.log("Fail! Time's up.");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameOver]);

    // Detect success before timer ends
    useEffect(() => {
        if (!gameOver && matchedCards.length === catImages.length) {
            console.log("Success! All cards matched.");
            getGameStatus(true, true);
            setGameOver(true);

        }
    }, [matchedCards, catImages.length, gameOver]);

    const handleCardClick = (index) => {
        if (gameOver || matchedCards.includes(index) || activeCards.includes(index)) return;

        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = true;
        setFlippedCards(newFlippedCards);

        const newActiveCards = [...activeCards, index];
        setActiveCards(newActiveCards);

        if (newActiveCards.length === 2) {
            const [firstIndex, secondIndex] = newActiveCards;
            if (catImages[firstIndex] === catImages[secondIndex]) {
                setMatchedCards([...matchedCards, firstIndex, secondIndex]);
                setActiveCards([]);
            } else {
                setTimeout(() => {
                    const resetFlippedCards = [...newFlippedCards];
                    resetFlippedCards[firstIndex] = false;
                    resetFlippedCards[secondIndex] = false;
                    setFlippedCards(resetFlippedCards);
                    setActiveCards([]);
                }, 1000);
            }
        }
    };

    return (
        <GameContainer>
            <GameTitle>Welcome to the Cat Matching Game, {name}!</GameTitle>
            <TimerDisplay>Time left: {timeLeft}s</TimerDisplay>

            <GameGrid>
                {catImages.map((src, index) => (
                    <CardWrapper key={index} onClick={() => handleCardClick(index)}>
                        <Card isFlipped={flippedCards[index]}>
                            <FrontFace />
                            <BackFace>
                                <CatImage src={src} alt={`Cat ${index + 1}`} />
                            </BackFace>
                        </Card>
                    </CardWrapper>
                ))}
            </GameGrid>
        </GameContainer>
    );
};

export default GamePage;
