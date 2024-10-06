/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Medical Management</h1>
      <p className="text-lg mb-8">Manage your health records, book appointments, and more.</p>
      <div className="flex space-x-4">
        <Link to="/register" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register</Link>
        <Link to="/login" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Login</Link>
      </div>
    </div>
  );
}

export default Home;
