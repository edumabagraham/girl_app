/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const ElegantAndDemure = () => {
  const [activeTab, setActiveTab] = useState("Spotlight on Trending Looks");

  const tabs = [
    "Spotlight on Trending Looks",
    "Your Personal Stylist",
    "Fashion Story of the Week",
    "Style Quiz",
    "Upload Your Look",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 bg-gradient-to-r from-pink-100 via-white to-purple-100 min-h-screen rounded-lg shadow-lg">
      {/* Hero Section */}
      <div className="bg-pink-200 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-700">
            Elegant and Demure
          </h1>
          <p className="text-gray-700">
            Celebrate your unique style, learn about fashion, and share your
            looks with our community. Let’s make every day a runway!
          </p>
        </div>
        <img
          src="https://via.placeholder.com/250x150"
          alt="Fashion Hero"
          className="rounded-lg shadow-lg mt-6 lg:mt-0"
        />
      </div>

      {/* Navigation Pane */}
      <div className="flex justify-around bg-white shadow-md rounded-lg p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition text-sm ${
              activeTab === tab
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {activeTab === "Spotlight on Trending Looks" && (
          <TrendingLooksSection />
        )}
        {activeTab === "Your Personal Stylist" && <PersonalStylistSection />}
        {activeTab === "Fashion Story of the Week" && <FashionStorySection />}
        {activeTab === "Style Quiz" && <StyleQuizSection />}
        {activeTab === "Upload Your Look" && <UploadLookSection />}
      </div>
    </div>
  );
};

export default ElegantAndDemure;

const TrendingLooksSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">
        Spotlight on Trending Looks
      </h2>
      <p className="text-gray-700">
        Explore what’s hot in the world of fashion right now!
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Wide-leg pants paired with crop tops</li>
        <li>Monochromatic pastel outfits</li>
        <li>Statement blazers with bold accessories</li>
      </ul>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src="https://via.placeholder.com/150x150"
          alt="Trending Look 1"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://via.placeholder.com/150x150"
          alt="Trending Look 2"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const PersonalStylistSection = () => {
  const [event, setEvent] = useState<"casual" | "formal" | "party" | "">("");
  const [suggestions, setSuggestions] = useState<string[] | null>(null);

  const handleGenerateOutfit = () => {
    const outfitIdeas = {
      casual: ["Denim jeans with a flowy blouse", "Summer dress with sandals"],
      formal: [
        "Elegant gown with heels",
        "Tailored suit with statement jewelry",
      ],
      party: ["Sequined dress with clutch", "Bold jumpsuit with strappy heels"],
    };

    if (event in outfitIdeas) {
      setSuggestions(outfitIdeas[event as keyof typeof outfitIdeas]);
    } else {
      setSuggestions(["No suggestions available."]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">
        Your Personal Stylist
      </h2>
      <p className="text-gray-700">
        Tell us about your event, and we’ll suggest outfit ideas just for you.
      </p>
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          value={event}
          onChange={(e) =>
            setEvent(
              e.target.value.toLowerCase() as "casual" | "formal" | "party"
            )
          }
          placeholder="Casual, Formal, Party"
          className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          onClick={handleGenerateOutfit}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Generate Outfit
        </button>
      </div>
      {suggestions && (
        <ul className="list-disc pl-6 text-gray-700 mt-4">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FashionStorySection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">
        Fashion Story of the Week
      </h2>
      <p className="text-gray-700">
        Learn about Coco Chanel, the revolutionary designer who gave us the
        iconic “little black dress” and timeless Chanel suits.
      </p>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Coco Chanel"
        className="rounded-lg shadow-md mt-4"
      />
      <p className="mt-4 italic text-gray-700">
        &quot;Fashion is not something that exists in dresses only. Fashion is
        in the sky, in the street, fashion has to do with ideas, the way we
        live, what is happening.&quot;
      </p>
    </div>
  );
};

const StyleQuizSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">Style Quiz</h2>
      <p className="text-gray-700">
        Find out what your fashion style is with our quick quiz!
      </p>
      <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
        Take the Quiz
      </button>
    </div>
  );
};

const UploadLookSection = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    alert(`You uploaded: ${file?.name || "No file selected"}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">Upload Your Look</h2>
      <p className="text-gray-700">
        Share your unique style with our community!
      </p>
      <div className="mt-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>
      <button
        onClick={handleUpload}
        className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
      >
        Upload
      </button>
    </div>
  );
};
