const btn = document.querySelector("#btn");
const input = document.querySelector("#url");
const canvas = document.querySelector("#qr-canvas");
const downloadBtn = document.querySelector(".download-btn");
const image = document.querySelector("#qr-img");

// Function to handle file download using the canvas
function downloadFileFromCanvas(canvas, filename) {
  canvas.toBlob(function (blob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); // Create an object URL for the blob
    link.download = filename; // Set the filename for the download
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link after the download
  });
}

// Event listener for the QR code generation
btn.addEventListener("click", () => {
  const url = input.value;
  if (url === '') {
    alert('Please enter your URL');
  } else {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Ensure cross-origin compatibility
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    image.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0); // Draw the QR code on the canvas
      downloadBtn.style.display = "block"; // Show the download button when QR code is ready
    };
  }
});

// Event listener for the download button
downloadBtn.addEventListener("click", () => {
  downloadFileFromCanvas(canvas, "qr-code.png");
  console.log("QR Code downloaded");
});
