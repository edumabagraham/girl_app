"use client";

import React, { useState } from "react";

// Dummy names for users
const dummyNames = [
    "Ruthie",
    "Ella",
    "Nareen",
    "Ava",
    "Isabella",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Armabel",
];

// Function to get a random name from the dummyNames array
const getRandomName = () => {
    return dummyNames[Math.floor(Math.random() * dummyNames.length)];
};

// Colors for a vibrant, fun look
const backgroundColors = [
    "bg-pink-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-teal-200",
    "bg-yellow-200",
    "bg-orange-200",
    "bg-red-200",
    "bg-green-200",
];

const getRandomColor = () => {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

const Chatroom = () => {
    // Dummy stories with names
    const stories = Array.from({ length: 10 }).map((_, index) => ({
        id: index + 1,
        name: getRandomName(),
        content: `This is story ${index + 1}. What are your thoughts?`,
        likes: Math.floor(Math.random() * 50),
        comments: Math.floor(Math.random() * 20),
        views: Math.floor(Math.random() * 100),
        color: getRandomColor(),
    }));

    // Dummy comments
    const dummyComments = Array.from({ length: 5 }).map(() => ({
        name: getRandomName(),
        text: "This is a comment on the story. Great conversation!",
        likes: Math.floor(Math.random() * 30),
        color: getRandomColor(),
    }));

    // State to track the selected story
    const [selectedStory, setSelectedStory] = useState<{
        id: number;
        name: string;
        content: string;
        likes: number;
        comments: number;
        views: number;
        color: string;
    } | null>(null);

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg shadow-lg p-6 text-center">
                <h1 className="text-4xl font-bold text-pink-700">Girls' Chatroom</h1>
                <p className="text-gray-700 mt-2">
                    Explore stories, engage with others, and have fun!
                </p>
            </div>

            {/* Main Story Board */}
            {!selectedStory ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className={`${story.color} p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer`}
                            onClick={() => setSelectedStory(story)}
                        >
                            <p className="text-gray-800 text-lg">{story.content}</p>
                            <p className="text-sm text-gray-600 mt-2 italic">- {story.name}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="text-pink-600 hover:text-pink-800 flex items-center">
                                    ❤️ {story.likes}
                                </button>
                                <p className="text-gray-600 text-sm">
                                    💬 {story.comments} Comments • 👁️ {story.views} Views
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Selected Story Content
                <div>
                    {/* Selected Story */}
                    <div
                        className={`${selectedStory.color} rounded-lg shadow-lg p-6`}
                    >
                        <h2 className="text-2xl font-bold text-pink-700">Story</h2>
                        <p className="text-gray-800 mt-4">{selectedStory.content}</p>
                        <p className="text-sm text-gray-600 mt-2 italic">
                            - {selectedStory.name}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <button className="text-pink-600 hover:text-pink-800 flex items-center">
                                ❤️ {selectedStory.likes}
                            </button>
                            <p className="text-gray-600 text-sm">
                                💬 {selectedStory.comments} Comments • 👁️ {selectedStory.views} Views
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedStory(null)}
                            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700"
                        >
                            Back to Chatroom
                        </button>
                    </div>

                    {/* Comments Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                        <h2 className="text-2xl font-bold text-pink-700">Comments</h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {dummyComments.map((comment, index) => (
                                <div
                                    key={index}
                                    className={`${comment.color} p-4 rounded-lg shadow-lg`}
                                >
                                    <p className="text-gray-800">{comment.text}</p>
                                    <p className="text-sm text-gray-600 mt-2 italic">
                                        - {comment.name}
                                    </p>
                                    <button className="text-pink-600 hover:text-pink-800 mt-2 flex items-center">
                                        ❤️ {comment.likes}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatroom;
