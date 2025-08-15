import axios from "axios";

const API_URL = "http://localhost:3001/employees";

const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

const updateEmployee = async (employee) => {
  const response = await axios.put(`${API_URL}/${employee.id}`, employee);
  return response.data;
};

const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default { getEmployees, addEmployee, updateEmployee, deleteEmployee };
