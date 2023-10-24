/**
 * Gestion de l'overlay dans lequel apparait notre formulaire
 */
let btnPartage = document.querySelector(".appblock__zonePartage button");
let overlayForm = document.querySelector(".overlay");
let overlayCrossClose = document.querySelector(".overlay__Close");

btnPartage.addEventListener("click", () => {
  overlayForm.style.display = "block";
});

overlayCrossClose.addEventListener("click", () => {
  overlayForm.style.display = "none";
});

/**
 * les fonctions de validation
 */
/**
 * cette fonction vérifie si un nom d'utilisateur est valide ou nom
 * @param {string} Nom le nom à valider
 * @returns true ou false
 */
function validerNom(Nom) {
  if (Nom === "") {
    throw new Error(`veuillez saisir votre nom !`);
  }
  const regex = new RegExp("[a-zA-Z]{1}[a-zA-Z1-9]{2,}");
  let valide = regex.test(Nom);

  if (valide === false) {
    throw new Error(
      `Le nom doit contenir au moins 03 caractères sans espace commençant par une lettre`
    );
  }
}

/**
 * cette fonction vérifie si l'email entrer par l'utilisateur
 * correspond au format d'email standard
 * @param {string} Email email à valider
 */
function validerEmail(Email) {
  if (Email === "") {
    throw new Error(`Le champs email ne peut etre vide !`);
  }
  const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
  let valide = regex.test(Email);
  if (valide === false) {
    throw new Error(`Le format de l'adresse email est incorrect`);
  }
}

function validateForm() {
  let nom = document.getElementById("nomUser").value;
  let email = document.getElementById("emailReceiver").value;
  validerNom(nom);
  validerEmail(email);
}

function afficherMsgErreur(message) {
  let span = `
  <span class="errorMessage"> ${message} </span>
  `;

  let myOverlayForm = document.querySelector(".overlay__Content form");
  myOverlayForm.innerHTML += span;
}

function effacerMsgErreur() {
  let myOverlayForm = document.querySelector(".overlay__Content form");
  let child = document.querySelector(".errorMessage");
  if (child) {
    myOverlayForm.removeChild(child);
  }
}

/**
 * Gestion du formulaire
 */
const shareForm = document.getElementById("shareForm");
shareForm.addEventListener("submit", (event) => {
  //gestion des erreur avec try catch
  try {
    //effaçons le message d'erreur
    effacerMsgErreur("");
    //empècher le comportemnt par défaut
    event.preventDefault();

    //récupération des informations du formulaire
    let nom = document.getElementById("nomUser").value;
    let email = document.getElementById("emailReceiver").value;
    let score = document.querySelector(".appblock__zoneScore .score").innerHTML;

    //Validation des Champs
    validateForm();

    //Gestion de l'email
    let objet = "Azertype - Fast typing Game";
    let message = madeEmailMsg(score, nom, email);
    console.log(objet);
    console.log(message);
    envoyerEmail(email, message);
  } catch (error) {
    afficherMsgErreur(error.message);
  }
});

/**
 *
 * @param {string} score le score sous la forme complète
 * @param {string} nom le nom du joueur qui envoie le message
 * @param {string} email l'adresse email de celui qui reçoit le message
 * @returns un bon message
 */
function madeEmailMsg(score, nom, email) {
  let introduction = "Salut, c'est " + nom + " ! \n";
  let corps =
    "je viens de terminer le jeux Azertype avec un score de " +
    score +
    " ! \n\n ";
  let conclusion =
    "cette email a été envoyer à " +
    email +
    " !\n ignorer-le s'il ne s'agit pas de vous.";

  let message = introduction + corps + conclusion;
  return message;
}
function envoyerEmail(emailDest, message) {
  let mailto = `mailto:${emailDest}?subject=Partage du score Azertype&body= ${message}`;
  location.href = mailto;
}
