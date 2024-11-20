'use client';

import React from 'react';
import {
    FaUserCircle,
    FaHeartbeat,
    FaBrain,
    FaDumbbell,
    FaTshirt,
    FaComments,
    FaGamepad,
} from 'react-icons/fa';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex bg-gradient-to-r from-pink-100 via-white to-purple-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-xl rounded-r-3xl p-6 fixed h-full">
                <h1 className="text-3xl font-extrabold text-pink-600 mb-8">Girls App</h1>

                <nav className="space-y-4">
                    <a
                        href="/dashboard/profile"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaUserCircle className="text-pink-600 text-lg" />
                        <span className="font-medium">Profile</span>
                    </a>
                    <a
                        href="/dashboard/my-body"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaHeartbeat className="text-pink-600 text-lg" />
                        <span className="font-medium">My Body</span>
                    </a>
                    <a
                        href="/dashboard/mental-health"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaBrain className="text-pink-600 text-lg" />
                        <span className="font-medium">My Mental Health</span>
                    </a>
                    <a
                        href="/dashboard/physical-health"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaDumbbell className="text-pink-600 text-lg" />
                        <span className="font-medium">My Physical Health</span>
                    </a>
                    <a
                        href="/dashboard/elegant-demure"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaTshirt className="text-pink-600 text-lg" />
                        <span className="font-medium">Elegant & Demure</span>
                    </a>
                    <a
                        href="/dashboard/chatroom"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaComments className="text-pink-600 text-lg" />
                        <span className="font-medium">Chatroom</span>
                    </a>
                    <a
                        href="/dashboard/games"
                        className="flex items-center space-x-4 px-4 py-3 text-gray-700 bg-[#FFF5E4] hover:bg-pink-100 rounded-xl transition-all"
                    >
                        <FaGamepad className="text-pink-600 text-lg" />
                        <span className="font-medium">Games</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="ml-64 flex-1">
                {/* Header */}
                <header className="bg-white shadow-md fixed w-full top-0 z-10 p-4 flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">
                        Welcome, Jane Doe!
                    </span>
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all">
                        Logout
                    </button>
                </header>

                {/* Page Content */}
                <main className="pt-20 px-8">{children}</main>
            </div>
        </div>
    );
}
