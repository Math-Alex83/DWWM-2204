/*
# VARIABLES

# DEBUT DU PROGRAMME

ECRIRE "Veuillez saisir un premier nombre"
LIRE nombre1

ECRIRE "Veuillez saisir un second nombre"
LIRE nombre2

ENTIER nb1 <-- nombre1
ENTIER nb2 <-- nombre2

REELE moy <-- (nb1 + nb2) / 2

ECRIRE "La moyenne de ",nb1," et ",nb2," est : ",moy

ECRIRE "Appuyez sur une touche pour quitter"
LIRE "touche"
# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

nb1=parseInt(prompt("Veuillez saisir un premier nombre")) 

nb2=parseInt(prompt("Veuillez saisir un deuxieme nombre")) 

moy = (nb1 + nb2) / 2

alert("La moyenne de " + nb1 + " et " + nb2 + " est : " + moy)

alert("Appuyez sur Ok pour quitter le programme")
console.log("Fin du programme")