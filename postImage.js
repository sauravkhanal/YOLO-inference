const data = {path: "/images.jpg"}
const url = "http://127.0.0.1:8000/infer/";

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Corrected Content-Type
    },
    body: JSON.stringify(data), // Pass the image path directly without JSON.stringify
})
    .then(function (response) {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(function (responseData) {
        console.log(responseData);
    })
    .catch(function (error) {
        console.log('Fetch error', error);
    });
