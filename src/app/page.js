import Image from "next/image";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mt-6">
          <UserButton afterSignOutUrl="/">
            <button className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
              User Account
            </button>
          </UserButton>
        </div>
        <h1 className="text-4xl font-bold mt-6 mb-6 text-center text-gray-800">Welcome to Our Site</h1>
        <div>
          <SignInButton>
            <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
              Sign In
            </button>
          </SignInButton>
        </div>
        <div className="mt-4">
          <SignUpButton>
            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}