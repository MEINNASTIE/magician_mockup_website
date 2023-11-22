import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedData = JSON.parse(localStorage.getItem('contactFormData')) || [];
    storedData.push(formData);
    localStorage.setItem('contactFormData', JSON.stringify(storedData));

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mt-1 border shadow-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mt-1 border shadow-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 mt-1 border shadow-md"
          required
        ></textarea>
      </div>
      <button type="submit" className="border-2 border-[#7c264b] p-[10px] shadow-md hover:bg-[#7c264b] transition ease-out duration-300 hover:text-[#fff8f0] text-white">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
