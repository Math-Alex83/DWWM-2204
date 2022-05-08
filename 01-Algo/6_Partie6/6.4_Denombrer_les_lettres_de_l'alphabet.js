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


consonne = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"]
voyelle = ["A","E","I","O","U","Y"]
chiffre = ["0","1","2","3","4","5","6","7","8","9"]
compteur = [0,0,0,0]
texte="Ossecour1234 haha"
resultat=""
texte = texte.toUpperCase()

if (texte.length > 2)
{
        for (var e of texte)
        {
            if(consonne.includes(e))
            { 
                compteur[0] += 1
            }
            if(voyelle.includes(e))
            {
            		compteur[1] += 1
            }
            if(chiffre.includes(e))
            {
            		compteur[2] += 1
                compteur[3] += parseInt(e)
            }
        }
        alert("Il y a " + compteur [0] + " consonne(s). \n Il y a " + compteur[1] + " voyelle(s). \n Il y a " + compteur[2] + " chiffre(s). \n Et la moyenne des chiffres est egal a : " + (compteur[3]/compteur[2]).toFixed (2))   
}
