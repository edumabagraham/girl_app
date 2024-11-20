'use client';

import { FormEvent } from 'react';

export default function Login() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard/profile';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-6 text-center text-pink-600">
          Welcome Back, Queen! 👑
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
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

          {/* Password Field */}
          <div>
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 placeholder-gray-400 text-gray-700"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <a href="/auth/register" className="text-pink-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
