// Selectors
const employeeName = document.querySelector('#employee-name')
const employeeEmail = document.querySelector('#employee-email')
const employeePhone = document.querySelector('#employee-phone')
const employeeProjectKey = document.querySelector('#employee-project-key')
const employeesTable = document.querySelector('.employees')
const employeeModal = document.querySelector('#add-employee-modal')

const saveEmployeeBtn = document.querySelector('.save-employee-btn')

// Event listeners
saveEmployeeBtn.addEventListener('click', addEmployee)

document.onload = function () {
    loadEmployees()
    showEmployees(employees)
    showProjects(projects)
}

// Functions
// Add new employee 
function addEmployee() {
    let employee = {
        employeeName: employeeName.value,
        employeeEmail: employeeEmail.value,
        employeePhone: employeePhone.value,
        employeeProjectKey: employeeProjectKey.value
    }
    employees.push(employee)
    console.log(employees)
    $(employeeModal).modal('hide')
}

