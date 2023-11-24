const url = "http://127.0.0.1:8000/print/print whatever is here";

fetch(url)
.then(function(response){
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.text();
})
.then(function(data){
    console.log(data);
})
.catch(function(error)
{
    console.error("Fetch error: ", error);
})