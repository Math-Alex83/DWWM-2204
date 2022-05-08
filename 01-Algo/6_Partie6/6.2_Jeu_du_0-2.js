/*
# VARIABLES

STRING joueur <-- ["joueur","ordinateur"]
ENTIER point <-- [0,0]
ENTIER choixNb <-- [0,0]
BOOLEN jeu <-- true

# DEBUT DU PROGRAMME

TANT QUE jeu = true
    LIRE joueur
    LIRE point
    LIRE choixNb
    LIRE jeu
    FONCTION choixDesNb()
    SI jeu = true
    ALORS
        FONCTION comparerLesNombres(0,1)
    FIN SI
    SI point1 >= 10 OU point2 >= 10
    ALORS
        jeu <-- false
        FONCTION afficherLesScores()
    FIN SI
FIN TANT QUE

# FIN DU PROGRAMME

FONCTION choixDesNb()
    choixNb <-- [FONCTION saisieNB(),RANDOM(0 à 2)]
FIN FONCTION

FONCTION saisieNB()
    saisie <-- 10
    TANT QUE !saisie >= 0 OU !saisie <= 2 ET jeu
        ENTIER ECRIRE "Entrez un chiffre entre 0 et 2 inclus : "
        saisie <-- chiffre
        SI saisie < 0
        ALORS
            jeu <-- false
            FONCTION afficherLesScores()
        FIN SI
    FIN TANT QUE
    RETOURNER saisie
FIN FONCTION

FONCTION comparerLesNombres(joueur1,ordi)
    LIRE choixNb

    SI (choixNb[joueur1] - choixDesNb[ordi]) = 2
    ALORS
        point[joueur1] <-- point[joueur1] + 1
    FIN SI
    SI (choixNb[joueur1] - choixNb[ordi]) = ABSOLU 1
    ALORS
        SI choixNb[joueur1] < choixNb[ordi]
        ALORS
            point[joueur1] <-- point[joueur1] + 1
        SINON 
            point[ordi] <-- point[ordi] + 1
        FIN SI
    FIN SI
FIN FONCTION

FONCTION afficherLesScores()
    alert("Score du Joueur : " + point1 + "\n \n Score du Joueur : " + point2)
FIN FONCTION
____________________________________________________________________
____________________________________________________________________
Exemple en JAVASCRIPT
*/

joueur = ["joueur","ordinateur"]
point = [0,0]
choixOrdi = [0,0]
jeu = true

while(jeu){
    choixDesNb()
    if(jeu)
    {
        comparerLesNombres(0,1)
        afficherResultat()
    } 
    if(point[0] >= 10  || point[1] >= 10)
    {
        jeu = false
        afficherLesScores()
        quiGagne()
    }
    
}


function choixDesNb()
{
    choixNb = [saisieNB(),Math.floor(Math.random() * 3)]
    console.log(choixNb[0] + " " + choixNb[1])
}

function saisieNB()
{
    saisie = 10
    while((saisie < 0 || saisie > 2 || !Number.isInteger(saisie)) && jeu )
    {
        saisie = parseInt(prompt("Entrez un chiffre entre 0 et 2 inclus : ")) 
        if(saisie < 0)
        {
            jeu = false
            afficherLesScores()
            quiGagne()
        } 
    }
    return saisie
}
    

function comparerLesNombres(joueur1,ordi)
{
    if(Math.abs(choixNb[joueur1] - choixNb[ordi]) == 2)
    {
        if(choixNb[joueur1] < choixNb[ordi])
        {
            point[ordi] = point[ordi] + 1
        }
        else
        {
            point[joueur1] = point[joueur1] + 1
        }
    }

    if(Math.abs(choixNb[joueur1] - choixNb[ordi]) == 1)
    {
        if(choixNb[joueur1] < choixNb[ordi])
        {
            point[joueur1] = point[joueur1] + 1
        }
        else
        {
            point[ordi] = point[ordi] + 1
        }
    }
}

function afficherResultat()
{
    alert("Le joueur a choisi : " + choixNb[0] + "\n \n L'ordinateur a choisi : " + choixNb[1] + " \n \n        Score \n Joueur : " + point[0] + "  Ordi :" + point[1])

}

function afficherLesScores()
{
    alert("Score du Joueur : " + point[0] + "\n \n Score de l'ordinateur : " + point[1])
}

function quiGagne()
{
    if(point[0]<point[1])
    {
        alert("BRAVO Ordi !! \n Tu es le vainqueur, felicitation !")
    }
    else if(point[0]==point[1])
    {
        alert("Quel dommage personne n'a gagner !")
    }
    else
    {
        alert("BRAVO Joueur !! \n Tu es le vainqueur, felicitation !")
    }
}