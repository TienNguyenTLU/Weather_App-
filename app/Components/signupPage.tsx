"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cloud,
  User,
  Mail,
  Lock,
  ShieldCheck,
  Moon,
  Sun,
  Github
} from "lucide-react";

export default function SignupPage() {
  // Theme management state
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);

  // Toggle theme handler
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
    <div className={`font-sans min-h-screen flex items-center justify-center p-4 transition-colors duration-300 antialiased selection:bg-blue-500 selection:text-white ${theme === 'dark' ? 'dark' : ''} bg-[#F3F4F6] dark:bg-[#0F1115]`}>
      
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md bg-white dark:bg-[#161920] rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-[#2A2E37] overflow-hidden transform transition-all">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-500/10 text-blue-500">
            <Cloud className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Create an account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Join Weather Dashboard to track your local forecast
          </p>
        </div>

        {/* Form */}
        <form className="px-8 pb-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#2A2E37] rounded-lg leading-5 bg-white dark:bg-[#21242C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#2A2E37] rounded-lg leading-5 bg-white dark:bg-[#21242C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#2A2E37] rounded-lg leading-5 bg-white dark:bg-[#21242C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ShieldCheck className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="••••••••"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#2A2E37] rounded-lg leading-5 bg-white dark:bg-[#21242C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-[#21242C]"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                I agree to the{" "}
                <Link href="#" className="text-blue-500 hover:text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-500 hover:text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-[#161920] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-[#2A2E37]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#161920] text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-[#2A2E37] rounded-lg shadow-sm bg-white dark:bg-[#21242C] text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            >
              <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-[#2A2E37] rounded-lg shadow-sm bg-white dark:bg-[#21242C] text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="#" className="font-medium text-blue-500 hover:text-blue-600 hover:underline transition-colors">
              Log in
            </Link>
          </p>
        </form>
      </div>

      {/* Floating Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-[#161920] shadow-lg border border-gray-200 dark:border-[#2A2E37] text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors focus:outline-none z-50"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}