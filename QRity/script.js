const btn = document.querySelector("#btn");
const input = document.querySelector("#url");
const image = document.querySelector("#qr-img")

btn.addEventListener("click" , () =>{
  const url = input.value.trim();
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
})