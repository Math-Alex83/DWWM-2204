/*
# VARIABLES

STRING alphabet <-- "abcdefghijklmnopqrstuvwxyz"
ENTIER compteur <-- 0
STRING text <-- TEXTE

# DEBUT DU PROGRAMME

LIRE text

SI |text| > 120
ALORS
    POUR i = 0 à |alphabet|-1
        POUR i = 0 à |text|-1
            SI text[i] = alphabet[i]
            ALORS 
                compteur <-- compteur + 1
            FIN SI
        FIN POUR
        ECRIRE "Il y a " , compteur , " de fois la lettre " , alphabet[i]
        compteur <-- 0
    FIN POUR
FIN SI

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
compteur = 0
text = "Les Hippocampes (Hippocampus), du grec ἵππος, híppos, « cheval », et de κάμπος, kámpos, « poisson marin »1, aussi appelés familièrement chevaux de mer, sont un genre de poissons à nageoires rayonnées de la famille des Syngnathidae. Une cinquantaine d'espèces se répartissent dans les eaux tempérées et tropicales partout dans le monde. Comme beaucoup de poissons, ils souffrent de la destruction de leur habitat et de la surpêche2 liée au braconnage3."
tableau = []
resultat=""
text = text.toUpperCase()

if (text.length > 120)
{
    for (i = 0; i < alphabet.length; i++)
    { 
        for (e = 0; e < text.length; e++)
        {
            if(text[e] == alphabet[i])
            { 
                compteur += 1
            }
        }
        console.log("Il y a " + compteur + " de fois la lettre " + alphabet[i])
        tableau.push(compteur)
        compteur=0
        resultat+= alphabet[i] + " : " + tableau[i] + " "
    }
}
alert(resultat)