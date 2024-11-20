"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";

const MyPhysicalHealth = () => {
    const [activeTab, setActiveTab] = useState("Workout");
    const router = useRouter();

    const tabs = ["Workout", "Diet", "Dental Health", "Medical Health"];

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6 bg-gradient-to-r from-pink-100 via-white to-purple-100 rounded-lg shadow-lg">
            {/* Navigation Pane */}
            <div className="flex justify-around bg-white shadow-md rounded-lg p-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full font-medium transition text-sm ${activeTab === tab
                            ? "bg-pink-500 text-white shadow-lg"
                            : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
                {activeTab === "Workout" && <WorkoutSection />}
                {activeTab === "Diet" && <DietSection />}
                {activeTab === "Dental Health" && <DentalHealthSection router={router} />}
                {activeTab === "Medical Health" && <MedicalHealthSection />}
            </div>
        </div>
    );
};

export default MyPhysicalHealth;

const WorkoutSection = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-600">Workout</h2>

            {/* Set Workout Goals */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Set Workout Goals</h3>
                <p className="text-gray-700">
                    Set your workout goals and receive tailored workout plans designed just
                    for you.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                    Set Goals
                </button>
            </div>

            {/* Get Workout Buddies */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Workout Buddies</h3>
                <p className="text-gray-700">
                    Find like-minded workout buddies to help keep you motivated.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                    Find Buddies
                </button>
            </div>

            {/* Access Workout Videos */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Workout Videos</h3>
                <ReactPlayer
                    url="https://youtu.be/ZhYnZIxxFuk"
                    className="rounded-lg overflow-hidden mt-2"
                    width="100%"
                    height="360px"
                    controls
                />
                <p className="text-gray-700 mt-2">Explore more workout videos to stay fit and healthy.</p>
            </div>
        </div>
    );
};

const DietSection = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-600">Diet</h2>

            {/* Healthy Eating Tips */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Healthy Eating Tips</h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Drink plenty of water daily.</li>
                    <li>Include more fruits and vegetables in your meals.</li>
                    <li>Avoid processed foods as much as possible.</li>
                </ul>
            </div>

            {/* Diet Resources */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Diet Resources</h3>
                <ReactPlayer
                    url="https://youtu.be/KJDc2fkjDxk"
                    className="rounded-lg overflow-hidden mt-2"
                    width="100%"
                    height="360px"
                    controls
                />
                <p className="text-gray-700 mt-2">Learn more about healthy dieting with curated resources.</p>
            </div>
        </div>
    );
};

const DentalHealthSection = ({ router }: { router: any }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-600">Dental Health</h2>

            {/* Dental Care Resources */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Dental Care Resources</h3>
                <p className="text-gray-700">
                    Access resources and tips to maintain healthy teeth and gums.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                    Explore Resources
                </button>
            </div>

            {/* Chat with a Dentist */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Chat with a Dentist</h3>
                <p className="text-gray-700">
                    Have questions about dental health? Chat with a dentist for free!
                </p>
                <button
                    onClick={() => router.push("/chat-with-dentist")}
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                    Chat Now
                </button>
            </div>
        </div>
    );
};

const MedicalHealthSection = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-600">Medical Health</h2>

            {/* Report Symptoms */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Report Symptoms</h3>
                <p className="text-gray-700">
                    Describe your symptoms and get predictive insights into possible conditions.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                    Report Symptoms
                </button>
            </div>

            {/* Learn Healthy Living */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-pink-600">Learn Healthy Living</h3>
                <p className="text-gray-700">
                    Discover essential tips and habits for maintaining a healthy lifestyle.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                    Learn More
                </button>
            </div>
        </div>
    );
};
