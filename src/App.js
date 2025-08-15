import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import employeeService from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState(employeeService.getEmployees());
  const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = emp => {
    employeeService.addEmployee(emp);
    setEmployees(employeeService.getEmployees());
  };

  const updateEmployee = emp => {
    employeeService.updateEmployee(emp);
    setEmployees(employeeService.getEmployees());
    setEditingEmployee(null);
  };

  const deleteEmployee = id => {
    employeeService.deleteEmployee(id);
    setEmployees(employeeService.getEmployees());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>
      {!editingEmployee && <AddEmployee onAdd={addEmployee} />}
      {editingEmployee && <EditEmployee employee={editingEmployee} onUpdate={updateEmployee} onCancel={() => setEditingEmployee(null)} />}
      <EmployeeList employees={employees} onEdit={setEditingEmployee} onDelete={deleteEmployee} />
    </div>
  );
}

export default App;
