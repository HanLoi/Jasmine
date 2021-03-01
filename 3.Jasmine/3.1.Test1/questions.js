
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => { 
    return texte1 + texte2

}
let afficherCar5 =  (texte) => {
    let a = texte.split("")
    return a[4]
}
let afficher9Car =  (texte) => {
    let a = texte.split("");
    let arr=[];
    let i = 0;
    for ( i; i<9; i++){
    arr.push(a[i])};
    return arr.join('');

}
let majusculeString =  (texte) => {
    return texte.toUpperCase();

}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
}
let IsString =  (texte) => {
    let a = false;
    if (typeof texte == "string"){
    a = true;
    return a}else {
        return a
    }
}

let AfficherExtensionString =  (texte) => {
    /*méthode substring - lastIndexOf
    var fichier = "fichier.zip";
    extension = fichier.substring(fichier.lastIndexOf('.') + 1);*/

    /* méthode Regex
    var fichier = "fichier.zip";
    regex = new RegExp('[^.]+$'); 
    extension = fichier.match(regex); 
    alert("l'extension du fichier est " + extension);*/
    let extension = texte.split('.').pop();
    return extension
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length - 1
}
let InverseString =  (texte) => {
 let split = texte.split("")
 let reverseSplit = split.reverse()
 let join = reverseSplit.join("")
 return join
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    let a = Math.pow(x,y)
    return a
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {

    /*for (let index = 0; index < array.length; index++) {
        array[index]=Math.abs(array[index]);
    }
    return array;*/
    return array.map(Math.abs);

}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*(Math.pow(rayon,2)))

}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab, ac)

}
let calculIMC =  (poids, taille) => {
    return new Number((poids/(taille*taille)).toFixed(2));
}
