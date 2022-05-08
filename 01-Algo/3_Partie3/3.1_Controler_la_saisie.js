/*
# VARIABLES

STRING prenom <-- "" 


# DEBUT DU PROGRAMME

TANT QUE |prenom| < 2
    ECRIRE "Quel est votre prenom? : "
    LIRE prenom
FIN TANT QUE


# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

prenom = "" 

while (prenom.length < 2)
{
    prenom=prompt ("Quel est votre prenom? : ")
}

alert("Bonjour " + prenom + " !")