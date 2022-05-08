/*
# VARIABLES

STRING chaine <-- TEXT
ENTIER compteur <-- 0
ENTIER occurence <-- 0
STRING lettre <-- CARACTERE


# DEBUT DU PROGRAMME

LIRE chaine
LIRE compteur
LIRE occurence
LIRE lettre

POUR i = 0 à |chaine|-1
    SI chaine[i] != " " ET chaine[i] != "."
    ALORS
        compteur <-- compteur + 1
    FIN SI
FIN POUR

LIRE compteur

SI compteur <= 0
ALORS
    ECRIRE "La chaîne est vide"
SINON 
    POUR i DANS chaine
        SI i = lettre
        ALORS
            occurence = occurence + 1
        FIN SI

LIRE occurence

SI occurence >0
ALORS  
    ECRIRE "La lettre est présente une ou plusieur fois"
SINON
        ECRIRE "La lettre n'est pas presente"
FIN SI

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
chaine = "Les Hippocampes (Hippocampus), du grec ἵππος, híppos, « cheval », et de κάμπος, kámpos, « poisson marin »1, aussi appelés familièrement chevaux de mer, sont un genre de poissons à nageoires rayonnées de la famille des Syngnathidae. Une cinquantaine d'espèces se répartissent dans les eaux tempérées et tropicales partout dans le monde. Comme beaucoup de poissons, ils souffrent de la destruction de leur habitat et de la surpêche2 liée au braconnage3."
compteur = 0
occurence = 0
lettre = "e"

for (i = 0 ; i < chaine.length ;i++)
{
    if (chaine[i] != " " && chaine[i] != ".")
    {
        compteur += 1
    }
}

if(compteur <= 0)
{
    alerte("La chaîne est vide")
}
else 
{
    for(var element of chaine)
    {   if (element == lettre)
        {
            occurence += 1
        }
    }
}
if (occurence >0)
{
    alert("La lettre est présente une ou plusieur fois \n la lettre est presente " + occurence + " fois ! ")
}
else
{
    alert("La lettre n'est pas presente")
}