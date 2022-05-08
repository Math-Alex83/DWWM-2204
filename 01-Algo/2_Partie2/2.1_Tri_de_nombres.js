/*
# VARIABLES

ENTIER nb1 <-- A
ENTIER nb2 <-- B

# DEBUT DU PROGRAMME

LIRE nb1
LIRE nb2

SI nb1 <= nb2 
ALORS
    ECRIRE "Dans l'ordre croissant : ", nb1, " , ",nb2
SINON
    ECRIRE "Dans l'ordre croissant : ", nb2, " , ",nb1
FIN SI


# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

nb1=Math.floor((Math.random() * 20) + 1)
nb2=Math.floor((Math.random() * 20) + 1)

alert("Sans faire le trie : " + nb1 + " , " + nb2)

if(nb1 <= nb2) 
{
    alert("Dans l'ordre croissant : " + nb1 + " , " + nb2)
}
else
{
    alert("Dans l'ordre croissant : " + nb2 + " , " + nb1)
}