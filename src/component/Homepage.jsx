import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-grow">
        <section
          className="text-center py-16 px-4 md:px-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/51/1e/41/511e419a8f9812affb0a585918a06222.jpg')",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Welcome to KiddoCare
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto drop-shadow-md">
            Helping you track vaccinations, book consultations, and ensure your newborn's health with ease and care.
          </p>
          <div className="mt-8 flex justify-center gap-4">

          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Features</h2>
            <p className="text-gray-500 mt-2">What makes us different</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
            <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Vaccine Tracker</h3>
              <p className="text-gray-600">Get timely reminders for your child’s vaccinations.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Consult Experts</h3>
              <p className="text-gray-600">Book appointments with qualified doctors easily.</p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Receive helpful health tips and schedule alerts.</p>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="text-center py-16 bg-blue-100">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Join thousands of parents using KiddoCare today.</p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
            
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
