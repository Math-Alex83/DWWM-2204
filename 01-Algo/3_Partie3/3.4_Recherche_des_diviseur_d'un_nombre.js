/*# VARIABLES

ENTIER nb1 <-- A
ENTIER div <-- A

# DEBUT DU PROGRAMME

LIRE nb1
LIRE div

TANT QUE div !=1
    LIRE nb1
    LIRE div
    SI nb1 % div =0
        ECRIRE div , " "
    FIN SI
    div <-- div - 1
FIN TANT QUE

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1=Math.floor((Math.random() * 100) + 1)
div=nb1-1
resultat="" + (div+1)

while(div !=1)
{    
    if(nb1 % div == 0)
    {
        resultat += " , " + div
    }       
    div -= 1
}
alert("Le(s) diviseur(s) de " + nb1 + " : \n" + resultat)