
import React, { useState } from 'react';
import './App.css'; 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h1 className="heading">User Registration</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <br />

        <label className="label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <br />

        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <br />

        <label className="label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <br />

        <button type="submit" className="button">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="submittedData">
          <h2>Submitted Data:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
