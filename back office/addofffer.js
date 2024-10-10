document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("offerform").addEventListener('submit', validerformulaire);
});


function validerformulaire(event){

event.preventDefault();

    var titre = document.getElementById("Title").value;
    var destination = document.getElementById("destination").value;
    var datedep = document.getElementById("departure date").value;
    var dateret = document.getElementById("return date").value;
    var prix = document.getElementById("price").value;

   
         
        if (titre.length < 3) {
            displayError("titleError", "Le titre doit contenir au moins 3 caractères.");
         
        }
        else {
            displaySuccess("titleSuccess", "Titre valide !");
        }
       if (dateret <= datedep) {
        displayError("departureError", "Veuillez entrer une date de départ valide.");
      }
      
      var regexDestination =/^[a-zA-Z\s]/; 
      if (destination.length < 3 || !regexDestination.test(destination)) {
        displayError("destinationError", "La destination doit contenir au moins 3 caractères et uniquement des lettres et des espaces.");
        
      }
    if (isNaN(prix) || prix <= 0) {
        displayError("priceError", "Le prix doit être un nombre positif.");
        
    }

    
}
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message; 
}
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = ''; // Clear previous error messages
    });}
    function displaySuccess(elementId, message) {
        const successElement = document.getElementById(elementId);
        successElement.textContent = message; 
    }
    function clearSuccess() {
        const successElements = document.querySelectorAll('.success');
        successElements.forEach(element => {
            element.textContent = ''; // Clear previous success messages
        });
    }

