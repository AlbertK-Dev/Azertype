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
 * la Fonction Main qui lance tous les autres
 */
function lancerJeux() {
  let txtFrappeUser = document.querySelector(".txt--FrappeUser");
  let btnValider = document.querySelector(".btn--Valider");
  let indexDuMot = 0;
  let phraseDeFin =
    "Fin de la liste actuel, veuillez sélectionner une autre liste!";
  let score = 0;
  let zoneMot = document.querySelector(".appblock__zoneMot");
  let zoneScore = document.querySelector(".score");
  let Tableau_A_Parcourir;
  let radioMots = document.querySelector("#Mots");
  let radioPhrases = document.querySelector("#Phrases");
  let nbreDeQuestionPoser = 0;

  //déclarons un tableau qui contiendra le mot proposer
  //ainsi que le mot saisi par l'utilisateur et idem pour les phrases
  //j'ajoute aussi un booléen pour reussi et echoue afin de faciliter les opérations
  //lors du traitement du tableau
  let motsProposer = [];
  for (let i = 0; i < motsProposer.length; i++) {
    motsProposer[i] = [3];
  }
  let phrasesProposer = [];
  for (let i = 0; i < phrasesProposer.length; i++) {
    phrasesProposer[i] = [3];
  }
  let listeDeTextProposer;

  //ce qui à été sélectionné

  //valeur par defaut
  radioMots.checked = true;
  Tableau_A_Parcourir = [...ListeDesMots];
  listeDeTextProposer = motsProposer;
  zoneScore.textContent = score + "/" + nbreDeQuestionPoser;

  radioMots.addEventListener("change", () => {
    if (radioMots.checked) {
      Tableau_A_Parcourir = [...ListeDesMots];
      listeDeTextProposer = motsProposer;
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
      listeDeTextProposer = phrasesProposer;
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
    let textproposer = zoneMot.textContent;
    let textsaisie = txtFrappeUser.value;
    let trouver;
    if (txtFrappeUser.value === zoneMot.textContent) {
      score++;
      trouver = true;
    } else {
      score = score;
      trouver = false;
    }
    let tabRecapitulatif = [textproposer, textsaisie, trouver];
    listeDeTextProposer.push(tabRecapitulatif);

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

    //statistiques
    // let NombreDeQuestionPoser;
    // let NombreDeMotPoser;
    // let NombreDePhrasePoser;
    // let NombreDeMotjuste;
    // let NombreDePhraseJuste;
    // let NombreDeMotFaux;
    // let NombreDePhraseFaux;
    // let listeDerreur;

    //affichage des statistiques dans la console pour le moment
    console.clear();
    console.log("----> STATISTIQUES <----\n\n");
    for (let i = 0; i < motsProposer.length; i++) {
      console.log(motsProposer[i] + "\n");
    }
    for (let i = 0; i < phrasesProposer.length; i++) {
      console.log(phrasesProposer[i] + "\n");
    }
  });
}
