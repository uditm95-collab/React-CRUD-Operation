import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import employeeService from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Load employees on mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await employeeService.getEmployees();
    setEmployees(data);
  };

  const addEmployee = async (emp) => {
    await employeeService.addEmployee(emp);
    fetchEmployees();
  };

  const updateEmployee = async (emp) => {
    await employeeService.updateEmployee(emp);
    setEditingEmployee(null);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await employeeService.deleteEmployee(id);
    fetchEmployees();
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
export default App;
