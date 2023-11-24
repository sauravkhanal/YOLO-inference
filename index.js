import infer from 'infer.js'
import handlePrediction from "./handle prediction";

async function handleClick(event) {
    
    //prevent page reload
    event.preventDefault();
    // alert("clicked");
    
    //show inferring... text
    const result = document.getElementById('loading');
    result.style.display = 'block';
    
    //access uploaded image
    const inpFile = document.getElementById('image-picker')
    const inpImage = inpFile.files[0];
    
    //create FormData object to send via POST
    const formData = new FormData();
    formData.append('image', inpImage)
    
    //now infer if user has uploaded image and clicked infer btn
    if (inpImage) {
        
        // alert("file chosen")
        
        //now infer here
        const prediction = infer(formData);
        handlePrediction(prediction);
    }
    else{
     alert("Please choose a file first.")
}


// await infer(result);

}
// async function infer(result){
//     alert("infer");
//     result.style.color = "red";
// }

