'use client';

import React, { useState, useEffect } from 'react';

// Simulate fetching online players
const mockOnlinePlayers = [
    { id: 1, name: 'Sophia' },
    { id: 2, name: 'Olivia' },
    { id: 3, name: 'Emma' },
    { id: 4, name: 'Ava' },
    { id: 5, name: 'Isabella' },
];

// Helper function to check for a winner
const calculateWinner = (squares: string[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const TicTacToe = ({ opponent }: { opponent: string }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index: number) => {
        if (winner || board[index]) return; // Ignore clicks if game is over or square is filled
        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="max-w-md mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
                Playing Against: {opponent}
            </h3>
            <div className="grid grid-cols-3 gap-4">
                {board.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className="w-16 h-16 bg-gray-100 border-2 border-pink-400 rounded-lg flex items-center justify-center text-2xl font-bold text-pink-600 hover:bg-pink-200"
                    >
                        {value}
                    </button>
                ))}
            </div>
            {winner ? (
                <p className="text-center mt-4 text-xl text-green-500 font-semibold">
                    🎉 {winner} Wins!
                </p>
            ) : board.every(Boolean) ? (
                <p className="text-center mt-4 text-xl text-gray-600">It's a Draw!</p>
            ) : (
                <p className="text-center mt-4 text-xl text-gray-600">
                    Next Turn: {isXNext ? 'X' : 'O'}
                </p>
            )}
            <button
                onClick={resetGame}
                className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
            >
                Reset Game
            </button>
        </div>
    );
};

const GameSection = () => {
    const [onlinePlayers, setOnlinePlayers] = useState(mockOnlinePlayers);
    const [selectedOpponent, setSelectedOpponent] = useState<string | null>(null);

    useEffect(() => {
        // Simulate updating online players dynamically
        const interval = setInterval(() => {
            setOnlinePlayers(mockOnlinePlayers); // Replace with actual API calls in real applications
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Game Header */}
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg p-6 mb-6 text-center">
                <h2 className="text-3xl font-extrabold text-pink-800">Tic-Tac-Toe Battle</h2>
                <p className="text-gray-600">Play against other users and have fun!</p>
            </div>

            {/* Online Players Section */}
            {!selectedOpponent ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-pink-600 mb-4">Players Online</h3>
                    <p className="text-gray-600 mb-4">
                        {onlinePlayers.length} players are currently online. Select one to play!
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {onlinePlayers.map((player) => (
                            <button
                                key={player.id}
                                onClick={() => setSelectedOpponent(player.name)}
                                className="bg-pink-100 p-4 rounded-xl shadow hover:bg-pink-200 text-center"
                            >
                                <p className="text-pink-800 font-semibold">{player.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                // Game Board
                <TicTacToe opponent={selectedOpponent} />
            )}
        </div>
    );
};

export default GameSection;
