function submit(){
    //récupérer clair ou obscur
    let theme = document.getElementById("theme").value;
    console.log(theme);
    //afficher dans le stockage local
    localStorage.setItem("theme", theme);
    //rafraichir pour declencher changement de couleur
    initiale();


    //récupérer l'élément coché entre liste et cartes
    let affichage = "Liste";
    if(document.getElementById("affichage_cartes").checked) {
        affichage = "Cartes";
    console.log(affichage);
    }
    localStorage.setItem("affichage", affichage);
    //rafraichir 
    initiale();
}
// autre solution:  document.getElementById('submitId').on('clic', function() {
    //actions});

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

        body.style.backgroundColor = "lightcyan";
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
