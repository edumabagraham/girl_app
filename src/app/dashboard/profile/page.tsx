/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  date: string;
  isAnonymous: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

const samplePosts: Post[] = [
  {
    id: "1",
    content:
      "Just completed my morning yoga session! Feeling energized and balanced. Remember ladies, taking care of your body is a form of self-respect. 💪✨ #WellnessJourney #SelfCare",
    imageUrl:
      "https://media.istockphoto.com/id/1341378766/photo/happy-black-athletic-woman-doing-squats-with-resistance-band-on-her-around-her-legs-at-home.jpg?s=612x612&w=0&k=20&c=zOb6MPEcAwhmdlDxN_e2JSfN0WZ3Auwlg8iKz6o5WTU=",
    likes: 24,
    comments: 5,
    date: "2h ago",
    isAnonymous: false,
    author: {
      name: "Jane Doe",
      avatar: "JD",
    },
  },
];

export default function Profile() {
  const [notifications] = useState([
    "Jane liked your post!",
    "You have a new follower!",
    "Alex commented on your post!",
  ]);

  const [journalEntries, setJournalEntries] = useState<string[]>([]);
  const [newJournalEntry, setNewJournalEntry] = useState("");

  const handleAddJournalEntry = () => {
    if (newJournalEntry.trim()) {
      setJournalEntries([newJournalEntry, ...journalEntries]);
      setNewJournalEntry("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    alert("You have been logged out.");
    window.location.href = "/auth/login"; // Redirect to login page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg p-6 mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-pink-800">Jane Doe</h2>
            <p className="text-gray-600">Ghana</p>
            <div className="flex space-x-4 mt-2">
              <div className="text-sm">
                <span className="font-semibold text-pink-800">120</span>{" "}
                followers
              </div>
              <div className="text-sm">
                <span className="font-semibold text-pink-800">45</span> posts
              </div>
            </div>
          </div>
        </div>
        {/* Notification and Logout Buttons */}
        <div className="relative flex items-center space-x-4">
          <div>
            <button className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Public Posts Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-pink-600 mb-6">
          My Public Posts
        </h3>
        <div className="space-y-6">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                      {post.author.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {post.author.name}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    •••
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
              </div>
              {post.imageUrl && (
                <div className="relative w-full h-[300px] bg-gray-100">
                  <img
                    src={post.imageUrl}
                    alt="Post content"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journal Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h3 className="text-xl font-semibold text-pink-600 mb-4">My Journal</h3>
        <div className="space-y-4">
          <textarea
            value={newJournalEntry}
            onChange={(e) => setNewJournalEntry(e.target.value)}
            placeholder="Write your thoughts here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            onClick={handleAddJournalEntry}
            className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
          >
            Add Entry
          </button>
        </div>
        {journalEntries.length > 0 && (
          <div className="mt-6">
            {journalEntries.map((entry, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg mb-4 shadow"
              >
                {entry}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
