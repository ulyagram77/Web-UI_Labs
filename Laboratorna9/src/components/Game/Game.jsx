import { useState } from 'react';

import { Button, Input, Space, Result } from 'antd';
const { Search } = Input;

import './Game.css';

const Game = () => {
    const [numberToGuess, setNumberToGuess] = useState(null);

    const [resultMessage, setResultMessage] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const [hints, setHints] = useState([]); // Массив для хранения подсказок
    const [gameOver, setGameOver] = useState(false); // Объект для хранения результата игры

    const handleStartGame = () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        setNumberToGuess(randomNumber);
        setStartGame(true);
        setAttempts(0);
        setHints([]);
        setResultMessage('');
        setGameOver(false); // Сброс значения при новой игре
    };

    const handleUserGuess = (value) => {
        if (attempts >= 10) {
            setResultMessage('Ви проиграли! Кількість спроб перевисила 10.');
            setStartGame(true);
            setGameOver(true);
            return;
        }

        const hint = gameHints(value, numberToGuess);
        setHints([...hints, hint]);
        setAttempts(attempts + 1);

        if (hint.includes('Вы угадали')) {
            setStartGame(false);
            setGameOver(true);
        }
    };

    const gameHints = (userGuess, numberToGuess) => {
        if (userGuess > numberToGuess) {
            return `Ваше число ${userGuess} БІЛЬШЕ загаданного числа`;
        } else if (userGuess < numberToGuess) {
            return `Ваше число ${userGuess} МЕНШЕ загаданного числа`;
        } else {
            setResultMessage('Вы вгадали число!');
        }
    };

    return (
        <>
            <Space direction="vertical">
                <Space>
                    <Button
                        type="default"
                        disabled={startGame}
                        onClick={handleStartGame}
                    >
                        Start
                    </Button>
                    <Search
                        disabled={!startGame}
                        placeholder="type number"
                        enterButton="Check"
                        size="middle"
                        onSearch={handleUserGuess}
                    />
                </Space>
                <Space
                    direction="vertical"
                    className="game__field"
                >
                    Information:
                    <div className="hints">
                        {hints.map((hint, index) => (
                            <div
                                key={index}
                                className="hint"
                            >
                                {hint}
                            </div>
                        ))}
                    </div>
                    <div className="attempts">
                        Attempts: <span>{attempts}</span>
                    </div>
                    <div className="result">
                        Result: <span>{resultMessage}</span>
                    </div>
                    {gameOver && (
                        <Result
                            status="error"
                            title={resultMessage}
                        />
                    )}
                </Space>
            </Space>
        </>
    );
};

export default Game;
