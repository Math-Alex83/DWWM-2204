/*
# VARIABLES

ENTIER nb1 <-- A
ENTIER nb2 <-- B


# DEBUT DU PROGRAMME

LIRE nb1
LIRE nb2

TANT QUE nb1 != nb2
    LIRE nb1
    LIRE nb2
    SI nb1 < nb2
    ALORS
        ECRIRE nb1 + 1 , " , "
        nb1 <-- nb1 + 1
    SINON
        ECRIRE nb1 - 1 , " , "
        nb1 <-- nb1 - 1
    FIN SI
FIN TANT QUE


# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1=Math.floor((Math.random() * 20) + 1)
nb2=Math.floor((Math.random() * 20) + 1)
resultat="" + nb1
while (nb1 != nb2)
{
    if(nb1 < nb2)
    {
        nb1+=1
        resultat+=(" , " + nb1)
    }
    else
    {
        nb1-=1
        resultat+=(" , " + nb1)
    }
}
alert(resultat)