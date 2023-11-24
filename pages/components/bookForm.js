import React, { useState, useEffect } from 'react'

const BookForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('contactFormData')) || {}
    setName(storedData.name || '')
    setEmail(storedData.email || '')
    setPhoneNumber(storedData.phoneNumber || '')
  }, []);

  useEffect(() => {
    const formData = { name, email, phoneNumber }
    localStorage.setItem('contactFormData', JSON.stringify(formData))
  }, [name, email, phoneNumber])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-[30px]">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 border shadow-md"
        />
      </label>
      <label className="block text-sm font-semibold text-white mb-[30px]">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-1 border shadow-md"
        />
      </label>
      <label className="block text-sm font-semibold text-white mb-[30px]">
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 mt-1 border shadow-md"
        />
      </label>
      <button type="submit" className="border-2 border-[#7c264b] p-[10px] shadow-md hover:bg-[#7c264b] transition ease-out duration-300 hover:text-[#fff8f0] text-white">
        Submit
      </button>
      </div>
    </form>
  );
};

export default BookForm

