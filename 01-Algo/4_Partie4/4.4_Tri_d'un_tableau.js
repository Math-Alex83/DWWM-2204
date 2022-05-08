/*
# VARIABLES

ENTIER compteur <-- 0
ENTIER tabNB <-- [128,64,8,512,16,256]
ENTIER valeur <-- 0
ENTIER index <-- 0

# DEBUT DU PROGRAMME

LIRE compteur

TANT QUE compteur < |tabNB|-1

    LIRE compteur
    LIRE valeur
    LIRE tabNB
    LIRE index

    valeur <-- tabNB[compteur]

    POUR i = compteur à |tabNB|-1
        SI tabNB[i] < valeur
        ALORS
            valeur <-- tabNB[i]
            index <-- i
        FIN SI
    FIN POUR

    ENTIER temp <-- tabNB[compteur]
    tabNB[compteur] <-- tabNB[valeur]
    tabNB[index] <-- temp

    compteur = compteur + 1
FIN TANT QUE

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

compteur = 0
tabNB = [128,64,8,512,16,256]
valeur = 0
index = 0

alert("Tableau avant le trie : \n" + tabNB)
while (compteur < tabNB.length)
{
    valeur = tabNB[compteur]

    for (i = compteur; i < tabNB.length; i++)
    {
        if (tabNB[i] < valeur)
        {
            valeur = tabNB[i]
            index = i
        }
    }

    temp = tabNB[compteur]
    tabNB[compteur] = valeur
    tabNB[index] = temp

    compteur +=1
}
alert(tabNB)