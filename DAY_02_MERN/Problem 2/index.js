const axios = require('axios');

async function fetchUserData() {
    try {
        // Make a GET request to JSONPlaceholder's /users endpoint
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        // Extract the data from the response
        const users = response.data;

        // Display the results
        console.log('Users:');
        users.forEach((user) => {
            console.log(`- Name: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch user data
fetchUserData();
