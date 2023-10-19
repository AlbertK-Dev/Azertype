/**
 * Cette fonction affiche le résultat
 * @param {Number} score
 * @param {Number} nombreQuestions
 * @returns le message généré en fonction des données
 */
function afficherResultat(score, nombreQuestions) {
  let message = "Votre score est de " + score + " sur " + nombreQuestions;
  return message;
}

/**
 * cette fonction demande à l'utilisateur de choisir
 * entre mot ou phrase jusqu'a ce que l'entré soit valider
 * @returns le choix de l'utilisateur en minuscule.
 */
function choisirPhrasesOuMots() {
  let choix = "";
  do {
    choix = prompt(
      "Tapez <mot> pour avoir la liste des mots \n tapez < phrase > pour avoir la liste des phrases"
    );
    alert("valeur actuel de choix : " + choix);
  } while (choix !== "mot" && choix !== "phrase");

  return choix;
}

/**
 *
 * @param {Array[string]} ListeAUtiliser liste de mots ou de phrases
 * @returns le nombre de saisi correct de l'utilisateur
 */
function lancerBoucleDeJeux(ListeAUtiliser) {
  let score = 0;
  for (let i = 0; i < ListeAUtiliser.length; i++) {
    let FrappeUtilisateur = prompt(
      "Tapez ceci au plus vite : \n" + ListeAUtiliser[i]
    );
    if (FrappeUtilisateur === ListeAUtiliser[i]) {
      score++;
    }
  }
  return score;
}

/**
 * la Fonction Main qui lance tous les autres
 */
function lancerJeux() {
  /**
   * la variable score
   */
  let score = 0;

  /**
   * agissons en fonction du choix de l'utilisateur
   */
  let choix = choisirPhrasesOuMots();
  let longueurDeLaListeChoisiParlUtilisateur = 0;
  switch (choix) {
    /** cas d'une liste de mots */
    case "mot":
      score = lancerBoucleDeJeux(ListeDesMots);
      longueurDeLaListeChoisiParlUtilisateur = ListeDesMots.length;
      break;
    /** cas d'une liste de phrase */
    case "phrase":
      score = lancerBoucleDeJeux(ListeDesPhrases);
      longueurDeLaListeChoisiParlUtilisateur = ListeDesPhrases.length;
      break;

    default:
      console.log("Aucun choix effectuer !");
      break;
  }
  let message = afficherResultat(score, longueurDeLaListeChoisiParlUtilisateur);
  alert(message);
}
