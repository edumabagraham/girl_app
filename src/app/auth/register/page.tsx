'use client';

import React, { useState } from 'react';

export default function Register() {
    const [image, setImage] = useState(null); // State for captured image

    // Function to handle face capture
    const handleCapture = async () => {
        const video = document.createElement('video');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 640;
        canvas.height = 480;

        // Wait for the camera to stabilize
        setTimeout(() => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const capturedImage = canvas.toDataURL('image/png');
            setImage(capturedImage);

            // Stop the video stream
            stream.getTracks().forEach((track) => track.stop());
        }, 1000);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(e.target);
        formData.append('image', image);

        // Send to backend API
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
            alert('Registration successful!');
        } else {
            alert(data.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 py-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-pink-600">
                    Join the Girls' World 💕
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 placeholder-gray-400 text-gray-700"
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 placeholder-gray-400 text-gray-700"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 placeholder-gray-400 text-gray-700"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="dateOfBirth">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="country">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 text-gray-700"
                            required
                        >
                            <option value="">Select your country</option>
                            <option value="ghana">Ghana</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="kenya">Kenya</option>
                            <option value="south_africa">South Africa</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 placeholder-gray-400 text-gray-700"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleCapture}
                            className="w-full bg-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
                        >
                            Capture Face
                        </button>
                    </div>
                    {image && (
                        <div className="mt-4">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Captured Image:</h3>
                            <img src={image} alt="Captured face" className="w-full rounded-lg shadow" />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
                    >
                        Create Account
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="/auth/login" className="text-pink-500 font-semibold hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}
