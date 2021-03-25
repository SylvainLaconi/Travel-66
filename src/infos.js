// Back-to-top
const bttButtonInfos = document.getElementById("backToTop_infos");

bttButtonInfos.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// appears after scroll

document.addEventListener("scroll", () => {
    if (window.scrollY < 50){
        backToTop_infos.style.display = "none"
    } else {
        backToTop_infos.style.display = "block"
    }  
}
)


// Transports 

let selectTransport = document.querySelectorAll("#transports .theme_title p");
console.log(selectTransport);

for (let p of selectTransport) {
  p.addEventListener("click", function () {
    //Récupérer le numéro du titre qui est cliqué
    let num = p.getAttribute("data-tab1");
    //Retirer la classe "titre" du précédent titre actif
    document.querySelector(".titleClicked1").classList.remove("titleClicked1");
    //Affecter la classe "titre" au titre qui est cliqué
    p.classList.add("titleClicked1");
    //Retirer la classe "active" du précédent DIV
    document.querySelector(".activeTransports").classList.remove("activeTransports");
    //Affecter la classe "active" au DIV dont l'ID a le même numéro que le titre
    document.querySelector("#transportsText" + num).classList.add("activeTransports");
  });
}

//test class active card 2 - Démarches

// boucle des enfers T_T ... QUI FONCTIONNE !
let selectTab = document.querySelectorAll("#demarches .theme_title p");
console.log(selectTab);

for (let p of selectTab) {
  p.addEventListener("click", function () {
    //Récupérer le numéro du titre qui est cliqué
    let num = p.getAttribute("data-tab");
    //Retirer la classe "titre" du précédent titre actif
    document.querySelector(".titleClicked").classList.remove("titleClicked");
    //Affecter la classe "titre" au titre qui est cliqué
    p.classList.add("titleClicked");
    //Retirer la classe "active" du précédent DIV
    document.querySelector(".activeDemarches").classList.remove("activeDemarches");
    //Affecter la classe "active" au DIV dont l'ID a le même numéro que le titre
    document.querySelector("#demarchesText" + num).classList.add("activeDemarches");
  });
}

// Conseils sur place
let selectConseils = document.querySelectorAll("#conseils .theme_title p");
console.log(selectConseils);

for (let p of selectConseils) {
  p.addEventListener("click", function () {
    //Récupérer le numéro du titre qui est cliqué
    let num = p.getAttribute("data-tab2");
    //Retirer la classe "titre" du précédent titre actif
    document.querySelector(".titleClicked2").classList.remove("titleClicked2");
    //Affecter la classe "titre" au titre qui est cliqué
    p.classList.add("titleClicked2");
    //Retirer la classe "active" du précédent DIV
    document.querySelector(".activeConseils").classList.remove("activeConseils");
    //Affecter la classe "active" au DIV dont l'ID a le même numéro que le titre
    document.querySelector("#conseilsText" + num).classList.add("activeConseils");
  });
}



