function generateQRCode(){
   let website=document.getElementById('website').value
   if(website){
       // Generate QR code
       let qrcodeContainer = document.getElementById('qrcode');
       qrcodeContainer.innerHTML = "";
         new QRCode(qrcodeContainer ,website)
         document.getElementById('qrcode-conatiner').style.display="block";
   }
   else{
       alert("Please enter a website URL");
   }
}