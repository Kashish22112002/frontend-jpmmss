import React, { useState } from 'react';
import logo from "../assets/logo.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-evenly bg-orange-50 mx-8 md:mx-0">
      <img src={logo} alt="" className=' hidden md:block max-w-64' />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-green-800" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-800" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-800" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full h-32 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white p-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
