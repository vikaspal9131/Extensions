// const btn = document.querySelector("#btn");
// const input = document.querySelector("#url");
// const image = document.querySelector("#qr-img");


// btn.addEventListener("click" , () =>{

//     const url = input.value;
//     if(url == ''){
//       alert('Please enter your URL')
//     }
//     else{
//       image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
//       const downloadBtn = document.querySelector(".download-btn");
//       downloadBtn.style.display = "block";
//     }

//     function downloadFile(url, filename) {
//       const link = document.createElement('a'); // Create an anchor element
//       link.href = url; // Set the URL of the file
//       link.download = filename; // Set the filename for the download
//       document.body.appendChild(link); // Append the link to the document
//       link.click(); // Programmatically click the link to trigger the download
//       document.body.removeChild(link); // Remove the link after the download
//     }
    
//     const downloadBtn = document.querySelector(".download-btn"); 
    
//     downloadBtn.addEventListener("click" , ()=> {
//       const url = image.src;
//     downloadFile(url, "kdsj.png")
//     console.log("sldjflks")
//     })
     
// })



const btn = document.querySelector("#btn");
const input = document.querySelector("#url");
const image = document.querySelector("#qr-img");
const downloadBtn = document.querySelector(".download-btn");

// Function to handle file download
function downloadFile(url, filename) {
  const link = document.createElement('a'); // Create an anchor element
  link.href = url; // Set the URL of the file
  link.download = filename; // Set the filename for the download
  document.body.appendChild(link); // Append the link to the document
  link.click(); // Programmatically click the link to trigger the download
  document.body.removeChild(link); // Remove the link after the download
}

// Event listener for the QR code generation
btn.addEventListener("click", () => {
  const url = input.value;
  if (url === '') {
    alert('Please enter your URL');
  } else {
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    downloadBtn.style.display = "block"; // Show the download button when QR code is generated
  }
});

// Event listener for the download button
downloadBtn.addEventListener("click", () => {
  const url = image.src; // Get the source URL of the generated QR image
  downloadFile(url, "qr-code.png"); // Trigger the download
  console.log("QR Code downloaded"); // Optional: Log to console when download starts
});


