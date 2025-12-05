// js/modules/init.js

export async function loadEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        if (!response.ok) throw new Error('Failed to load employee data');
        const employees = await response.json();
        return employees;
    } 
    catch (err) {
        console.error('Error loading employee data:', err);
    }
}
