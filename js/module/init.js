export async function loadEmployees() {
    try {
        // Fetch the JSON file from the data folder
        const response = await fetch('./data/employees.json');
        
        // Convert the response to a JSON object
        const data = await response.json();
        
        // Return the data to the caller
        return data;
    } catch (error) {
        console.error('Error loading employees:', error);
    }
}