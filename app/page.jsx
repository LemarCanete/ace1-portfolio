'use client';
import React, { use, useState } from 'react';
import HomePage from './Homepage/page';
import { useRouter } from 'next/navigation';

const Eye = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

export default function Home() {
    const router = useRouter();

    // State management for form inputs and password visibility
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handles the form submission
    const handleSubmit = () => {
        if(email === "ace1it@gmail.com" && password === "ace1it") {
            console.log('Email:', email);
           router.push('/Homepage');
        }else{
            setError('Invalid email or password');
        }
    };


    return (
        // Main container with a gradient background
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl m-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back!</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to continue to your account.</p>
        </div>
        
        {/* Login Form */}
        <form className="mt-8 space-y-6" >
          {/* Email Input */}
          <div className="relative">
             <label 
                htmlFor="email" 
                className="absolute -top-2 left-2 inline-block bg-white dark:bg-gray-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-300"
             >
                Email Address
             </label>
             <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 dark:text-white bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label 
                htmlFor="password" 
                className="absolute -top-4 left-2 inline-block bg-white dark:bg-gray-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-300"
            >
                Password
            </label>
            <div className="relative">
               <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-gray-900 dark:text-white bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
              </button>
            </div>
          </div>
          
          {/* Display Login Error */}
          {error && (
            <div className="text-sm text-red-500 dark:text-red-400 text-center">
                {error}
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
                onClick={handleSubmit}
              type="button"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                Not a member?{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Sign up now
                </a>
            </p>
        </div>
      </div>
    </div>
    );
}
