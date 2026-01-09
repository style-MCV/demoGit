function submit(){
    //récupérer le thème du site clair ou obscur

    if (document.getElementById("theme")){

    let theme = document.getElementById("theme").value;
    console.log(theme);
    //afficher dans le stockage local
    localStorage.setItem("theme", theme);
    //rafraîchir pour déclencher le changement de couleur
  }

    //récupérer l'élément coché entre liste et cartes
    let affichage = "Liste";
    if(document.getElementById("affichage_cartes").checked) {
        affichage = "Cartes";
    console.log(affichage);
    }
    localStorage.setItem("affichage", affichage);
    //rafraîchir 
    initiale();
}
// autre solution:  document.getElementById('submitId').on('clic', function() {actions});

function initiale(){

    let theme = "clair";
    if(localStorage.getItem("theme")){
        theme = localStorage.getItem("theme");//va chercher la valeur en face de la clé thème
    }

    let body = document.getElementsByTagName("body")[0];
    if(theme=="obscur"){
        body.style.backgroundColor = "#333333";
        body.style.color = "#ffff"  ;                     //s'applique au texte
        console.log(body.style);
    }else{

        body.style.backgroundColor = "rgb(176, 201, 247)";
        body.style.color = "#000"; 
    }
}

function switch_accueil () {
    let affichage = "Liste";
    if(localStorage.getItem("affichage")){
        affichage = localStorage.getItem("affichage");//va chercher la valeur en face de la clé affichage
    }

    if(affichage=="Cartes"){
       
       window.location.replace("index_cartes.html"); //je change de page pour accueil avec cartes
    }
}

//Pour mettre les données du promo.json dans les cartes d'index_cartes.html
 function fetch_apprenants(){

    fetch('promo.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            let conteneur = document.getElementById('cartes');
            for (student of data.apprenants) { //student=chaque élément du tableau apprenants
 
                    const detailsStudent = document.createElement('div');
                    detailsStudent.classList.add('box');

                    detailsStudent.innerHTML = "<br>" + student.prenom + ' ' + student.nom + "<br>" + "<br>" + student.ville + "<br>" + "<br>" + "<br>" +"<a href='#' class='detail'>Détail</a>";
                    conteneur.appendChild(detailsStudent);
            }
              });
}

function relie(){

    fetch_apprenants();
}

//Pour mettre les données du promo.json dans le tableau d'index.html

function fetch_apprenants_liste(){

    fetch('promo.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            let conteneur = document.getElementById('students');//students=id du tbody
            for (student of data.apprenants) { //student=chaque élément du tableau apprenants
 
                    const detailsStudent = document.createElement('tr');//1 ligne pour chaque apprenant

                    detailsStudent.innerHTML = "<td>" + student.prenom +"</td> <td>" + student.nom + "</td> <td> " + student.ville + "</td> <td> <a class='details' href='#dialog'>Détail</a></td>";//innerHTML=contenu
                    conteneur.appendChild(detailsStudent);//j'ajoute au tableau vide tbody chaque ligne d'apprenants
            }
              });
}

function autre_relie(){

    fetch_apprenants_liste();

}

/*MODALE POP-UP DIALOG essai 1
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});*/

/*MODALE POP-UP DIALOG essai 2*/

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a.Detail");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // empêche le lien de naviguer
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
/*fin MODALE POP-UP DIALOG essai 2*/


/*ESSAI 3

Pour mettre les données du promo.json dans la modale, le pop-up de index.html
 function fetch_apprenants(){

    fetch('promo.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            let conteneur = document.getElementById('donnees_modale');
            for (student of data.apprenants) { //student=chaque élément du tableau apprenants
 
                    const detailsStudent = document.createElement('h2');

                    detailsStudent.innerHTML = "<br>" + student.nom + '<br>' + student.prenomnom + "<br>" + "<br>" + student.ville + "<br>" + student.coordonnees.latitude + "<br>" + student.coordonnees.longitude +"<br>" ;
                    conteneur.appendChild(detailsStudent);
            }
              });
}*/















/*ESSAI AVEC TP DU COURS JSON
function displayData(data){

    localStorage.setItem("apprenants", JSON.stringify(data));

    let apprenants = JSON.parse(localStorage.getItem("apprenants"));
    console.log(JSON.parse(apprenants));
}
*/

/*relier avec id map sur map.html
let lat = 48.852969;
let lon = 2.349903;

let map = L.map("map", {
    zoom : 13,
    center: [lat, lon]
});

L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    minZoom: 1,
    maxZoom: 20,
    attribution: 'données ©  <a href="//osm.org/copyright">OpenStreetMap</a>/ODbl - rendu <a href="//openstreetmap.fr">OSM France</a>'

}).addTo(map);

let marker = L.marker([lat,lon]).addTo(map);*/
