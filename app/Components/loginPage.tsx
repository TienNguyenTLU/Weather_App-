"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sun, 
  Moon, 
  Thermometer, 
  CloudLightning, 
  Mail, 
  Lock, 
  Check 
} from "lucide-react";
export default function LoginPage() {
  // Theme management (Simulated for this component, usually handled by next-themes)
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-sans ${theme === 'dark' ? 'dark' : ''} bg-[#F3F4F6] dark:bg-[#0B0C10] text-gray-900 dark:text-gray-100`}>
      
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white dark:bg-[#15161C] border border-gray-200 dark:border-[#2D2D35] shadow-sm hover:shadow-md transition-all text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-6xl h-auto flex flex-col md:flex-row bg-white dark:bg-[#15161C] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-[#2D2D35]">
        {/* Left Side - Decorative Panel */}
        <div className="w-full md:w-1/2 bg-[#15161C] relative hidden md:flex flex-col justify-between p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg
              className="absolute top-0 left-0 w-full h-full text-blue-500"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,100 Q150,50 300,100 T600,100" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,200 Q150,150 300,200 T600,200" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,300 Q150,250 300,300 T600,300" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
          </div>

          {/* Logo Section */}
          <div className="relative z-10 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
              <Thermometer className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Weather Forecast App</h1>
          </div>
          {/* Footer */}
          <div className="relative z-10 text-xs text-gray-500">
            © 2024 Weather App Inc.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            {/* Mobile Header */}
            <div className="flex items-center space-x-2 md:hidden mb-6 text-blue-500">
              <Thermometer className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Weather Dashboard</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 mt-2">Welcome back</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your personal forecast dashboard.
            </p>
          </div>

          <form action="#" className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Email or Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2D2D35] rounded-lg leading-5 bg-[#F3F4F6] dark:bg-[#0B0C10] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Password
                </label>
                <Link href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2D2D35] rounded-lg leading-5 bg-[#F3F4F6] dark:bg-[#0B0C10] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded bg-[#F3F4F6] dark:bg-[#0B0C10] dark:border-[#2D2D35] cursor-pointer accent-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-[#0B0C10] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Social Login Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-[#2D2D35]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-[#15161C] text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-200 dark:border-[#2D2D35] rounded-lg shadow-sm bg-white dark:bg-[#15161C] text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2D2D35] transition-colors"
              >
                <svg className="h-5 w-5 mr-2" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    fill="currentColor"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-200 dark:border-[#2D2D35] rounded-lg shadow-sm bg-white dark:bg-[#15161C] text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2D2D35] transition-colors"
              >
                 <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.4005 12.0001L21.8488 2.00012H19.8475L12.5111 10.6865L6.65171 2.00012H0.500244L9.43265 15.2405L0.500244 25.8159H2.50159L10.3218 16.5542L16.5645 25.8159H22.716L13.4002 12.0001H13.4005ZM2.96495 3.53037H6.03923L19.8519 24.004H16.7777L2.96495 3.53037Z"></path>
                </svg>
                X (Twitter)
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link href="#" className="font-medium text-blue-500 hover:text-blue-600 transition-colors">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
