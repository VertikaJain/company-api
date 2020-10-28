// Selectors
const employeeName = document.querySelector('#employee-name')
const employeeEmail = document.querySelector('#employee-email')
const employeePhone = document.querySelector('#employee-phone')
const employeeProjectKey = document.querySelector('#employee-project-key')
const employeesTable = document.querySelector('.employees')
const employeeModal = document.querySelector('#add-employee-modal')

const title = document.querySelector('#project-title')
const projectKey = document.querySelector('#project-key')
const projectModal = document.querySelector('#add-project-modal')

const saveEmployeeBtn = document.querySelector('.save-employee-btn')
const saveProjectBtn = document.querySelector('.save-project-btn')

const employees = [], projects = []
// Event listeners
saveEmployeeBtn.addEventListener('click', addEmployee)
saveProjectBtn.addEventListener('click', addProject)

window.onload = function () {
    loadEmployees()
    loadProjects()
}

// Functions
// Add new employee 
function addEmployee() {
    let employee = {
        name: employeeName.value,
        email: employeeEmail.value,
        phone: employeePhone.value,
        projectKey: employeeProjectKey.value
    }

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 201) {
                $(employeeModal).modal('hide')
                let response = JSON.parse(xmlhttp.response)
                employees.push(response.employee)
                showEmployees(employees)
            }
            else {
                alert('There was an error saving employee');
            }
        }
    };
    xmlhttp.open("POST", "http://localhost:3000/employee", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.setRequestHeader('Accept', 'application/json');
    xmlhttp.send(JSON.stringify(employee));
}


function loadEmployees() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                let response = JSON.parse(xmlhttp.response)
                for (let employee of response.employees) {
                    employees.push(employee)
                }
                showEmployees(employees)
            }
            else {
                alert('There was an error loading employees');
            }
        }
    };

    xmlhttp.open("GET", "http://localhost:3000/employee", true);
    xmlhttp.send();
}


// display list of employees
function showEmployees(employees) {
    employeesTable.innerHTML = ''
    for (let employee of employees) {
        let employeeElement = document.createElement("tr")
        employeeElement.classList.add("employee")
        let employeeNameElement = document.createElement("td")
        employeeNameElement.innerText = employee["name"]
        employeeElement.appendChild(employeeNameElement)

        let employeeEmailElement = document.createElement("td")
        employeeEmailElement.innerText = employee["email"]
        employeeElement.appendChild(employeeEmailElement)

        let employeePhoneElement = document.createElement("td")
        employeePhoneElement.innerText = employee["phone"]
        employeeElement.appendChild(employeePhoneElement)

        let employeeProjectElement = document.createElement("td")
        employeeProjectElement.innerText = employee["project"]
        employeeElement.appendChild(employeeProjectElement)

        employeesTable.appendChild(employeeElement)
    }
}

// Add project data 
function addProject() {
    let project = {
        projectKey: projectKey.value,
        title: title.value
    }

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 201) {
                $(projectModal).modal('hide')
                projects.push(project)
                showProjects(projects)
            }
            else {
                alert('There was an error saving project');
            }
        }
    };

    xmlhttp.open("POST", "http://localhost:3000/project", true);
    xmlhttp.setRequestHeader('Accept', 'application/json');
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(project));
}

// display list of projects
function loadProjects() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                let response = JSON.parse(xmlhttp.response)
                for (let project of response.projects) {
                    projects.push(project)
                }
                showProjects(projects)
            }
            else {
                alert('There was an error loading projects');
            }
        }
    };

    xmlhttp.open("GET", "http://localhost:3000/project", true);
    xmlhttp.send();
}

function showProjects(projects) {
    employeeProjectKey.innerHTML = ''
    for (let project of projects) {
        let projectKeyElement = document.createElement("option")
        projectKeyElement.innerText = project["title"]
        projectKeyElement.value = project["projectKey"]
        employeeProjectKey.appendChild(projectKeyElement)
    }
}