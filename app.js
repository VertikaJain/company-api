// Selectors
const employeeName = document.querySelector('#employee-name')
const employeeEmail = document.querySelector('#employee-email')
const employeePhone = document.querySelector('#employee-phone')
const employeeProjectKey = document.querySelector('#employee-project-key')
const employeesTable = document.querySelector('.employees')
const employeeModal = document.querySelector('#add-employee-modal')

const saveEmployeeBtn = document.querySelector('.save-employee-btn')

employees = []
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
    showEmployees(employees)
}

// display list of employees
function showEmployees(employees) {
    employeesTable.innerHTML = ''
    for (let employee of employees) {
        console.log(employee)
        let employeeElement = document.createElement("tr")
        employeeElement.classList.add("employee")

        let employeeNameElement = document.createElement("td")
        employeeNameElement.innerText = employee["employeeName"]
        employeeElement.appendChild(employeeNameElement)

        let employeeEmailElement = document.createElement("td")
        employeeEmailElement.innerText = employee["employeeEmail"]
        employeeElement.appendChild(employeeEmailElement)

        let employeePhoneElement = document.createElement("td")
        employeePhoneElement.innerText = employee["employeePhone"]
        employeeElement.appendChild(employeePhoneElement)

        let employeeProjectElement = document.createElement("td")
        employeeProjectElement.innerText = employee["employeeProjectKey"]
        employeeElement.appendChild(employeeProjectElement)

        employeesTable.appendChild(employeeElement)
    }
}