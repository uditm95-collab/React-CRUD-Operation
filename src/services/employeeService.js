let employees = [];
let nextId = 1;

const getEmployees = () => {
  return [...employees];
};

const addEmployee = (employee) => {
  employee.id = nextId++;
  employees.push({ ...employee });
};

const updateEmployee = (employee) => {
  const index = employees.findIndex(e => e.id === employee.id);
  if (index !== -1) employees[index] = { ...employee };
};

const deleteEmployee = (id) => {
  employees = employees.filter(e => e.id !== id);
};

export default { getEmployees, addEmployee, updateEmployee, deleteEmployee };
