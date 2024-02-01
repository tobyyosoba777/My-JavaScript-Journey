// const axiosRequest = require('axios');

// let response = axiosRequest.get('https://www.boredapi.com/api/activity');
// console.log(`you could ${response.data.activity}`);

import axios from 'axios';

async function fetchData() {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        console.log(`You could ${response.data.activity}`);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();

// import axios from 'axios';

const fetchData2 = async () => {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        console.log(`You Could Actually ${response.data.activity}`);
    }
    catch(error) {
        console.log(error.message);
    }    
}
fetchData2()

const fetchData3 = async () => {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity')
        console.log(`If you are bored, you can ${response.data.activity}`);
    }
    catch(error) {
        console.log("ERROR", error.message)
    }
    finally{
        setTimeout(() => {
            console.log("Finally, hope the suggestion was okay              
                ")
        }, 5000);
    }
}
fetchData3();