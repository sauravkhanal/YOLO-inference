// Create an invisible file input element
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';

// Append the file input to the body of the document
document.body.appendChild(fileInput);

// Trigger a click on the file input to open the file dialog
fileInput.click();

// Add an event listener to handle file selection
fileInput.addEventListener('change', function () {
    // Access the selected file(s) using fileInput.files
    const selectedFile = fileInput.files[0];
    console.log('Selected file:', selectedFile);

    // Perform actions with the selected file, such as uploading it
    // Example: upload(selectedFile);

    // Clean up: remove the file input from the DOM
    document.body.removeChild(fileInput);
});
