import React, { useState } from "react";

const AddEmployee = ({ onAdd }) => {
  const [employee, setEmployee] = useState({ name: "", email: "", role: "" });

  const handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(employee);
    setEmployee({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
      <input name="role" placeholder="Role" value={employee.role} onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
