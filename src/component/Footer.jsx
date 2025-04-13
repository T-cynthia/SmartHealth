// src/component/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold mb-2">Smart Healthcare</h3>
          <p className="text-sm">
            Revolutionizing care through technology. We care for your well-being and your baby's future. 💙👶
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/appointment" className="hover:underline">Appointment</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/452240/twitter-1.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Smart Healthcare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
