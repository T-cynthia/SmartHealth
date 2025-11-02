import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#004f85] to-[#00bfa6] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">About Kiddocare</h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed">
            Empowering parents, nurses, and hospitals through smart healthcare
            technology for better child health management in Rwanda and beyond.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-20">
        {/* Our Story */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-[#004f85] mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kiddocare was born from a simple yet powerful idea: every child deserves the best start in life,
              and parents should have the tools to ensure their child's health journey is smooth and informed.
              Founded in Rwanda, we recognized the challenges in child healthcare management and set out to
              bridge the gap between families and healthcare providers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, Kiddocare serves as a comprehensive platform that digitizes newborn registration,
              vaccination tracking, and health monitoring, making healthcare more accessible and efficient
              for everyone involved.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-l-4 border-[#00bfa6]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#00bfa6] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#004f85]">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To connect families, medical professionals, and hospitals through digital innovation,
              ensuring every child receives timely and quality healthcare services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-l-4 border-[#004f85]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#004f85] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🔭</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#004f85]">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the leading smart healthcare platform in Africa, promoting efficiency,
              accessibility, and trust between healthcare providers and families.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-[#004f85] mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "👶", title: "Newborn Registration", desc: "Easy digital registration of newborns with complete health profiles." },
              { icon: "💉", title: "Vaccination Tracking", desc: "Automated reminders and tracking of vaccination schedules." },
              { icon: "📱", title: "SMS Notifications", desc: "Real-time SMS alerts for parents about upcoming health events." },
              { icon: "📊", title: "Health Analytics", desc: "Comprehensive dashboards for nurses and hospitals to monitor child health." }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-500">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#004f85] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Serve */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#004f85] mb-12">Who We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { role: "Parents", icon: "👨‍👩‍👧‍👦", desc: "Helping parents track vaccinations, receive reminders, and access health certificates." },
              { role: "Nurses", icon: "👩‍⚕️", desc: "Empowering nurses to register newborns and manage vaccination schedules efficiently." },
              { role: "Hospitals", icon: "🏥", desc: "Providing hospitals with centralized data management and reporting tools." }
            ].map((item) => (
              <div key={item.role} className="bg-gradient-to-br from-[#f4f7fa] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-[#00bfa6] mb-4">{item.role}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-[#004f85] mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "TUYIKUNDE Cynthia", role: "Founder & Owner", img: "https://via.placeholder.com/150?text=Cynthia" },
              { name: "IRADUKUNDA Rosine", role: "Lead Nurse", img: "https://via.placeholder.com/150?text=Rosine" },
              { name: "SAYINZOGA Esther", role: "Developer", img: "https://via.placeholder.com/150?text=Esther" },
              { name: "IRADUKUNDA Bonte", role: "Developer", img: "https://via.placeholder.com/150?text=Bonte" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#004f85] mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold text-[#004f85] text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { quote: "Kiddocare has made it so much easier to keep track of my baby's vaccinations. The SMS reminders are a lifesaver!", author: "Sarah, Mother of two" },
              { quote: "As a nurse, this platform has streamlined our workflow tremendously. Highly recommended!", author: "Dr. Emmanuel, Pediatric Nurse" }
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl text-[#00bfa6] mb-4">"</div>
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">{testimonial.quote}</p>
                <p className="text-[#004f85] font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-[#004f85] to-[#00bfa6] rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Join the Kiddocare Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the revolution in child healthcare. Sign up today and experience the difference.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-white text-[#004f85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#004f85] transition duration-300 inline-block"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: info@kiddocare.rw</p>
              <p>Phone: +250 788 123 456</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:text-[#00bfa6]">Facebook</a>
                <a href="#" className="hover:text-[#00bfa6]">Twitter</a>
                <a href="#" className="hover:text-[#00bfa6]">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block hover:text-[#00bfa6]">Home</Link>
                <Link to="/about" className="block hover:text-[#00bfa6]">About</Link>
                <Link to="/contact" className="block hover:text-[#00bfa6]">Contact</Link>
              </div>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Kiddocare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
