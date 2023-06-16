
"use strict"
window.addEventListener("load", function (){

/*Email funcion*/
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ngeww9j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      const name =  document.getElementById("from_name").value = "";
       const email = document.getElementById("to_email").value = "";
       const message = document.getElementById("message").value = "";
      btn.value = 'Enviado';
      Swal.fire(
  'Enviado correctamente!',
  'Presiona!',
  'success'
)
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});




  //efectos para texto
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

});
