import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    website: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form  style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px", margin: "auto" }} onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name}    style={{ padding: "8px", fontSize: "16px" }} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email}     style={{ padding: "8px", fontSize: "16px" }}onChange={handleChange} required />
      <input name="companyName" placeholder="Company Name" value={form.companyName}   style={{ padding: "8px", fontSize: "16px" }} onChange={handleChange} required />
      <input name="website" placeholder="Company Website" value={form.website}    style={{ padding: "8px", fontSize: "16px" }} onChange={handleChange} required />
      <button type="submit">Generate Profile</button>
    </form>
  );
};

export default Form;
