const btn = document.querySelector(".gen-btn");
const input = document.querySelector("#url");
const canvas = document.querySelector("#qr-canvas");
const downloadBtn = document.querySelector(".download-btn");
const image = document.querySelector("#qr-img");


function downloadFileFromCanvas(canvas, filename) {
  canvas.toBlob(function (blob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); 
    link.download = filename; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  });
}


btn.addEventListener("click", () => {
  const url = input.value;
  if (url === '') {
    alert('Please enter your URL');
  } else {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous"; 
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    image.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      downloadBtn.style.display = "block"; 
    };
  }
});


downloadBtn.addEventListener("click", () => {
  downloadFileFromCanvas(canvas, "qr-code.png");
  console.log("QR Code downloaded");
});
