"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";

export default function MyMentalHealth() {
  const [mood, setMood] = useState<string | null>(null);
  const [journalEntry, setJournalEntry] = useState<string>("");
  const [quote, setQuote] = useState(""); // State for quote
  const router = useRouter();

  useEffect(() => {
    // Randomize the quote on the client side
    const motivationalQuotes = [
      "It's okay to not be okay. Take it one step at a time.",
      "You are stronger than you think, and every step counts.",
      "Your mental health matters. Be kind to yourself.",
      "Small steps can lead to big changes. 💖",
    ];
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  const mentalHealthResources = [
    {
      title: "Managing Anxiety",
      description: "Learn effective ways to manage anxiety in your daily life.",
      link: "/resources/managing-anxiety",
    },
    {
      title: "Breathing Exercises for Relaxation",
      description: "Try guided breathing techniques to reduce stress.",
      link: "/resources/breathing-exercises",
    },
    {
      title: "Mindfulness for Beginners",
      description: "An introduction to mindfulness and its benefits.",
      link: "/resources/mindfulness",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-lg">
      {/* Daily Video Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600">
          Daily 5-Minute Video
        </h2>
        <div className="mt-4">
          <ReactPlayer
            url="https://youtu.be/DxIDKZHW3-E"
            className="rounded-lg overflow-hidden"
            width="100%"
            height="360px"
            controls
          />
          <p className="mt-4 text-gray-700 text-center">
            Check back daily for new content to improve your mental health!
          </p>
        </div>
      </div>

      {/* Mood Logging Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600">
          How Are You Feeling Today?
        </h2>
        <div className="flex justify-around mt-6">
          {["😊", "😐", "😢", "😡", "😴", "🤩"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setMood(emoji)}
              className={`text-4xl hover:scale-110 transition-transform ${
                mood === emoji ? "ring-4 ring-pink-500" : ""
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
        {mood && (
          <div className="mt-6">
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Describe what's on your mind..."
              className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <p className="mt-2 text-pink-600">
              Journaling can help you process emotions. Take your time. 💖
            </p>
          </div>
        )}
      </div>

      {/* 'I NEED HELP' Button */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600">Need Help?</h2>
        <p className="mt-4 text-gray-700 text-center">
          If you\&apos;re feeling overwhelmed, don\&apos;t hesitate to reach out
          to a mental health professional.
        </p>
        <button
          onClick={() => router.push("/contact-mental-health-professional")}
          className="mt-6 px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-all"
        >
          I NEED HELP
        </button>
      </div>

      {/* Mental Health Resources */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600">
          Mental Health Resources
        </h2>
        <ul className="mt-6 space-y-4">
          {mentalHealthResources.map((resource, index) => (
            <li key={index} className="bg-pink-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-pink-600">
                {resource.title}
              </h3>
              <p className="text-gray-600">{resource.description}</p>
              <button
                onClick={() => router.push(resource.link)}
                className="mt-2 px-4 py-2 text-sm font-medium text-pink-600 underline"
              >
                Learn More
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Motivational Quotes */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600">Motivational Quote</h2>
        <p className="mt-6 italic text-gray-700 text-center text-lg">{quote}</p>
      </div>
    </div>
  );
}
