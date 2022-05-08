/*
# VARIABLES

ENTIER nb1 <-- A
ENTIER nbTest <-- 0
# DEBUT DU PROGRAMME

LIRE nb1
LIRE nbTest

POUR i = 2 à nb1
    LIRE nb1
    LIRE nbTest
    LIRE i
    SI nb1 % i = 0
        ALORS
        nbTest <-- 1
    FIN SI
FIN POUR

LIRE nbTest

SI nbTest != 0
ALORS  
    ECRIRE nb1 , " n'est pas un nombre premier"
SINON
    ECRIRE nb1 , " est un nombre premier"
FIN SI
# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1 = Math.floor((Math.random() * 100) + 1)
nbTest = 0
alert("Le nombre aleatoire est : " + nb1)
for(i = 2; i < nb1;i++)
    if(nb1 % i == 0)
    {
        nbTest = 1
    }

if(nbTest != 0)
{
    alert(nb1 + " n'est pas un nombre premier")
}  
else
{
    alert(nb1 + " est un nombre premier")
}