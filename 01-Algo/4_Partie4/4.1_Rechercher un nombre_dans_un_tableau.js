/*
# VARIABLES

ENTIER tab[7] <-- {8,16,32,64,128,256,512}
ENTIER nb1 <-- A

# DEBUT DU PROGRAMME

LIRE tab
LIRE nb1

POUR i = 0 à |tab|-1
    SI tab[i] = nb1
    ALORS
        ECRIRE nb1 , " est dans le tableau!"
    SINON
        ECRIRE "Nombre non trouvé!"
    FIN SI
FIN POUR

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

tab = [8,16,32,64,128,256,512]
nb1 = 32
resultat="Nombre non trouvé !"
for(i = 0;i < tab.length;i++)
{
    if(tab[i] == nb1)
    {
        resultat = nb1 + " est dans le tableau!"
    }
}
alert(resultat)