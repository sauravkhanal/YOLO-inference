// import {infer} from './infer.js'
// import {handlePrediction} from "./handle_prediction.js";
function handleClick(event) {
    //prevent page reload, infer, show predictions
    //prevent page reload
    event.preventDefault();
    alert("clicked");

    //show inferring... text
    const result = document.getElementById('loading');
    result.style.display = 'block';

    //access uploaded image
    const inpFile = document.getElementById('image-picker')
    const inpImage = inpFile.files[0];

    //create FormData object to send via POST
    const formData = new FormData();
    formData.append('image', inpImage);

    //now infer if user has uploaded image and clicked infer btn
    if (inpImage) {

        // alert("file chosen")

        //now infer here
        const prediction = infer(formData);
        handlePrediction(prediction);
    }
    else {
        alert("Please Choose a file first")
    }

}


//infer.js

async function infer(formData){

    const url = "http://127.0.0.1:8000/infer"

    try{
        const response = await fetch(
            url,{
                method: 'POST',
                body: formData,
            }
        );

        if (response.ok) {
            return await response.json(); // return prediction result
        }
        else {
            console.error('Error: ', response.statusText);
        }

    }catch (error) {
        console.error('Error: ', error.message);
    }
}


//handle_prediction.js
