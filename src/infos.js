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

// Rubrique Avion

const avionClick = document.getElementById("avion_title");
const avionText = document.getElementById("avion_text");

avionClick.addEventListener("click", () => {
        avionText.style.display = "block"
        voitureText.style.display = "none"
        metroText.style.display = "none"
    }
)

// Rubrique voiture

const voitureClick = document.getElementById("voiture_title");
const voitureText = document.getElementById("voiture_text");

voitureClick.addEventListener("click", () => {
        voitureText.style.display = "block"
        avionText.style.display = "none"
        metroText.style.display = "none"
    }
)

// Rubrique Métro
const metroClick = document.getElementById("metro_title");
const metroText = document.getElementById("metro_text");

metroClick.addEventListener("click", () => {
        metroText.style.display = "block"
        avionText.style.display = "none"
        voitureText.style.display = "none"
    }
)


//test class active card 2 - Démarches

// boucle des enfers T_T
let selectTab = document.querySelectorAll(".rubrique2");
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
    document.querySelector(".active").classList.remove("active");
    //Affecter la classe "active" au DIV dont l'ID a le même numéro que le titre
    document.querySelector("#demarchesText" + num).classList.add("active");
  });
}


/* boucle #Hell avec les byClassName & byId mais ça marche pas
let selectTab = document.getElementsByClassName("rubrique2");

for (let p of selectTab) {
  p.addEventListener("click", function () {
    //Récupérer le numéro du titre qui est cliqué
    let num = p.getAttribute("data-tab");
    //Retirer la classe "titre" du précédent titre actif
    document.getElementsByClassName("titleClicked").classList.remove("titleClicked");
    //Affecter la classe "titre" au titre qui est cliqué
    p.classList.add("titleClicked");
    //Retirer la classe "active" du précédent DIV
    document.getElementsByClassName("active").classList.remove("active");
    //Affecter la classe "active" au DIV dont l'ID a le même numéro que le titre
    document.getElementById("demarchesText" + num).classList.add("active");
  });
}
*/



/*
// Rubrique passeport very simple qui fonctionne 

const passeportClick = document.getElementById("passeport_title");
const passeportText = document.getElementById("passeport_text");

passeportClick.addEventListener("click", () => {
        passeportText.style.display = "block"
        documentsText.style.display = "none"
       
    }
)

// Rubrique documents
const documentsClick = document.getElementById("documents_title");
const documentsText = document.getElementById("documents_text");

documentsClick.addEventListener("click", () => {
    documentsText.style.display = "block"
    passeportText.style.display = "none"
    }
) 
*/




