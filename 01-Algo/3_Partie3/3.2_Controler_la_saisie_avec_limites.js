/*
# VARIABLES

STRING mdpConnexion <-- "formation" 
ENTIER itteration <-- 0


# DEBUT DU PROGRAMME

TANT QUE mdpConnexion != mdpUser ou itteration < 3
    ECRIRE "Quel est le mot de passe : "
    LIRE mdpUser
    iterration <-- iterration + 1
FIN TANT QUE

LIRE itteration

SI iterration >= 3
ALORS
    ECRIRE "Vôtre compte est bloqué"
SINON
    ECRIRE "Vous ête connecté !"
    itteration <-- 0
FIN SI


# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

mdpConnexion = "formation"
mdpUser = "" 
itteration = 0

while(mdpConnexion != mdpUser && itteration < 3)
{
    mdpUser = prompt("Quel est le mot de passe : ")
    itteration = itteration + 1
}

if(itteration >= 3)
{
    alert ("Vôtre compte est bloqué")
}
else
{
    alert("Vous ête connecté !")
    itteration = 0
}
