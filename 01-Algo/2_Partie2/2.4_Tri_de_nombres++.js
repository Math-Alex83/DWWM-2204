/*
# VARIABLES

ENTIER nb1 <-- Random
ENTIER nb2 <-- Random
ENTIER nb3 <-- Random
ENTIER nbTmp <-- 0

# DEBUT DU PROGRAMME

LIRE nb1
LIRE nb2
LIRE nb3

ECRIRE nb1 + "  " + nb2 + "  " + nb3 

SI nb1 > nb2
ALORS
    nbTmp <-- nb2
    nb2 <-- nb1
    nb1 <-- nbTmp
FIN SI

SI nb1 <= nb3 ET nb2 >= nb3
ALORS
    nbTmp <-- nb3
    nb3 <-- nb2
    nb2 <-- nbTmp
FIN SI

SI nb3 < nbTemp1
ALORS
    nbTmp <-- nb3
    nb3 <-- nb2
    nb2 <-- nb1
    nb1 <-- nbTmp
FIN SI

LIRE nb1
LIRE nb2
LIRE nb3

ECRIRE "Dans l'ordre Décroissant : " + nb3 + " , " + nb2 + " , " + nb1 + " !"

# FIN DU PROGRAMME

______________________________________________________________________________________
______________________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1=Math.floor((Math.random() * 100) + 1)
nb2=Math.floor((Math.random() * 100) + 1)
nb3=Math.floor((Math.random() * 100) + 1)
nbTmp=0

alert(nb1 + " " + nb2 + " " + nb3)
if(nb1>nb2)
{
    nbTmp=nb2
    nb2=nb1
    nb1=nbTmp
}
if(nb1 <= nb3 && nb2 >= nb3)
{
    nbTmp=nb3
    nb3=nb2
    nb2=nbTmp
}
if(nb3<nb1)
{
    nbTmp=nb3
    nb3=nb2
    nb2=nb1
    nb1=nbTmp
}
alert("Dans l'ordre Décroissant : " + nb3 + " , " + nb2 + " , " + nb1 + " !")