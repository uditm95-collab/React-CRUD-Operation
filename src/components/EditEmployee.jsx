import React, { useState, useEffect } from "react";

const EditEmployee = ({ employee, onUpdate, onCancel }) => {
  const [editableEmployee, setEditableEmployee] = useState(employee);

  useEffect(() => {
    setEditableEmployee(employee);
  }, [employee]);

  const handleChange = e => {
    setEditableEmployee({ ...editableEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(editableEmployee);
  };

  if (!employee) return null;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={editableEmployee.name} onChange={handleChange} />
      <input name="email" value={editableEmployee.email} onChange={handleChange} />
      <input name="role" value={editableEmployee.role} onChange={handleChange} />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditEmployee;
