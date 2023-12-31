'use strict'

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#search").addEventListener('keyup', searchbar);
    
    
    /* document.querySelector('form').addEventListener('submit', validateForm); */
    
});

// Cacher la notification d'erreur ou de succès après 3 secondes d'affichage
setTimeout(function () {
    document.querySelector('.notif').innerHTML = ''
}, 3000);

/* function validateBlock() {
    console.log('test');
    return window.confirm(`Êtes vous sûr de vouloir bloquer cet avis ?!`);
} */


/*
* searchbar function
*/
//let input = document.querySelector("#search");
//input.addEventListener('keyup', () => { // Ecoute d'évènement au keyup
function searchbar() {
    // Récupérer le texte tapé dans l'input par l'utilisateur
    let textFind = document.querySelector('#search').value;

    // Faire un objet de type request
    let myRequest = new Request('src/ajaxSearchbar.php', {
        method: 'POST',
        body: JSON.stringify({ textToFind: textFind })
    })
    // On attend la réponse du fichier ajaxSearchbar.php

    fetch(myRequest)
        // Récupère les données
        .then(res => res.text())

        // Exploite les données
        .then(res => {
            document.getElementById("result").innerHTML = res; // On met articles.phtml dans la div -> id=target
            // ou
            //location.reload(); // Pour une réactualisation de la page
        })
}
 // })

/* let fileInput = document.querySelector("#file");

input.addEventListener('keyup', () => { // Ecoute d'évènement au keyup

    // Récupérer le texte tapé dans l'input par l'utilisateur
    let textFind = document.querySelector('#search').value;

    // Faire un objet de type request
    let myRequest = new Request('src/ajaxSearchbar.php', {
        method  : 'POST',
        body    : JSON.stringify({ textToFind : textFind })
    })
        // On attend la réponse du fichier ajaxSearchbar.php
        // Portez-vous à la ligne 229 pour suivre la logique du code et vous reviendrez ici pour lire la suite du code JS

    fetch(myRequest)
        // Récupère les données
        .then(res => res.text())

        // Exploite les données
        .then(res => {
            document.getElementById("result").innerHTML = res; // On met articles.phtml dans la div -> id=target
            // ou
            //location.reload(); // Pour une réactualisation de la page
        })
})
*/










