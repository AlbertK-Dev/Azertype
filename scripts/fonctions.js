/**
 *
 * @param {string} proposition cette proposition sera afficher
 * dans la zone de texte que l'utilisateur doit recopier
 */
function afficherProposition(proposition) {
  let zoneMot = document.querySelector(".appblock__zoneMot");
  zoneMot.textContent = proposition;
}

/**
 * gestion du btn valider
 */

/**
 * la Fonction Main qui lance tous les autres
 */
function lancerJeux() {
  let txtFrappeUser = document.querySelector(".txt--FrappeUser");
  let btnValider = document.querySelector(".btn--Valider");
  let indexDuMot = 0;
  let phraseDeFin = "Le jeu est terminée !";
  let score = 0;
  let zoneMot = document.querySelector(".appblock__zoneMot");
  let zoneScore = document.querySelector(".score");
  let Tableau_A_Parcourir;
  let radioMots = document.querySelector("#Mots");
  let radioPhrases = document.querySelector("#Phrases");
  let nbreDeQuestionPoser = 0;

  //ce qui à été sélectionné

  //valeur par defaut
  radioMots.checked = true;
  Tableau_A_Parcourir = [...ListeDesMots];
  zoneScore.textContent = score + "/" + nbreDeQuestionPoser;

  radioMots.addEventListener("change", () => {
    if (radioMots.checked) {
      Tableau_A_Parcourir = [...ListeDesMots];
      radioPhrases.checked = false;
      afficherProposition(Tableau_A_Parcourir[0]);
      //score = 0;
      zoneScore.textContent = score + "/" + nbreDeQuestionPoser;
      btnValider.disabled = false;
      indexDuMot = 0;
    }
  });

  radioPhrases.addEventListener("change", () => {
    if (radioPhrases.checked) {
      Tableau_A_Parcourir = [...ListeDesPhrases];
      radioMots.checked = false;
      afficherProposition(Tableau_A_Parcourir[0]);
      // score = 0;
      zoneScore.textContent = score + "/" + nbreDeQuestionPoser;
      btnValider.disabled = false;
      indexDuMot = 0;
    }
  });

  afficherProposition(Tableau_A_Parcourir[indexDuMot]);

  btnValider.addEventListener("click", () => {
    nbreDeQuestionPoser++;
    if (txtFrappeUser.value === zoneMot.textContent) {
      score++;
    } else {
      score = score;
    }

    txtFrappeUser.value = "";
    if (Tableau_A_Parcourir[indexDuMot + 1] === undefined) {
      afficherProposition(phraseDeFin);
      btnValider.disabled = true;
    } else {
      if (indexDuMot === Tableau_A_Parcourir.length + 1) {
        afficherProposition(Tableau_A_Parcourir[indexDuMot]);
      } else {
        afficherProposition(Tableau_A_Parcourir[indexDuMot + 1]);
      }
      txtFrappeUser.focus();
    }
    //mise à jour du score à chaque fois
    zoneScore.textContent = score + "/" + nbreDeQuestionPoser;

    indexDuMot++;
  });
}
