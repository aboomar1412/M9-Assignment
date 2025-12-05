// js/script.js
import { loadEmployees } from './modules/init.js';

// DOM Elements
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');

// Load data asynchronously on page load
document.addEventListener('DOMContentLoaded', async () => {
    const employees = await loadEmployees();
    buildGrid(employees);
});

// DELETE EMPLOYEE FROM TABLE ONLY
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let row = e.target.closest('tr');
            row.remove();
            updateCount();
        }
    }
});

// BUILD THE EMPLOYEES TABLE
function buildGrid(employees) {
    // Remove old tbody
    empTable.lastElementChild.remove();

    // Create new tbody
    let tbody = document.createElement('tbody');

    employees.forEach(emp => {
        tbody.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.ext}</td>
                <td><a href="mailto:${emp.email}">${emp.email}</a></td>
                <td>${emp.department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
        `;
    });

    empTable.appendChild(tbody);
    updateCount();
}

// UPDATE EMPLOYEE COUNT
function updateCount() {
    let rows = empTable.querySelectorAll('tbody tr').length;
    empCount.value = `(${rows})`;
}
