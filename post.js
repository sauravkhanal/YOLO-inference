const url = "http://127.0.0.1:8000/items";

const data ={
    name: "FZs v3",
    description: "149.5cc Yamaha motorbike",
    price: 320000,
    tax: 6000,
    discount: 20000,
    total: null
};

fetch(
    url,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
)
.then(function(response) {
    if(!response.ok) {
        throw new Error(`Network response was not ok: ${response.body}` );
    }
    return response.json();
})
.then(function(responseData){
    console.log(responseData);
})
.catch(function(error) {
    console.error('Fetch Error: ', error);
});