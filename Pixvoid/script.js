

// let uploadedFile;

// // Handle image preview
// imageUpload.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     uploadedFile = file;
//     const reader = new FileReader();
//     reader.onload = () => {
//       originalImage.src = reader.result;
//       originalImage.style.display = 'block';
//     };
//     reader.readAsDataURL(file);
//   }
// });

// // Handle background removal
// removeBgBtn.addEventListener('click', async () => {
//   if (!uploadedFile) {
//     alert('Please upload an image first!');
//     return;
//   }

//   const formData = new FormData();
//   formData.append('image', uploadedFile);

//   try {
//     // Use a background removal API (e.g., Remove.bg or DeepAI)
//     const response = await fetch('https://api.remove.bg/v1.0/removebg', {
//       method: 'POST',
//       headers: {
//         'X-Api-Key': 'YOUR_API_KEY_HERE',
//       },
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error('Failed to remove background');
//     }

//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);

//     // Display processed image
//     outputImage.src = url;
//     outputImage.style.display = 'block';

//     // Prepare download link
//     downloadLink.href = url;
//     downloadLink.style.display = 'inline-block';
//   } catch (error) {
//     alert('Error: ' + error.message);
//   }
// });


const imageUpload = document.getElementById('imageUpload');
const originalImage = document.getElementById('originalImage');
const outputImage = document.getElementById('outputImage');
const removeBgBtn = document.getElementById('removeBgBtn');
const downloadLink = document.getElementById('downloadLink');




var request = require('request');
var fs = require('fs');

request.post({
  url: 'https://api.pixian.ai/api/v2/remove-background',
  formData: {
    image: fs.createReadStream('targate.jpeg'), // TODO: Replace with your image
    // TODO: Add more upload options here
  },
  auth: {user: 'pxmll23ih5z749l', pass: 'm3ojrgue9hgtqrkpmn3i24j7fcnph1gca2el5gf5pk9otajt95lc'},
  followAllRedirects: true,
  encoding: null
}, function(error, response, body) {
  if (error) {
    console.error('Request failed:', error);
  } else if (!response || response.statusCode != 200) {
    console.error('Error:', response && response.statusCode, body.toString('utf8'));
  } else {
    // Save result
    fs.writeFileSync("pixian_result.png", body);
  }
});