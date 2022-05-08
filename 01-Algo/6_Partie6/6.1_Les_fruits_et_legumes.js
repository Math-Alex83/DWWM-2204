/*
# VARIABLES

TABLEAU fruit <-- 
TABLEAU prix <--
STRING saisie <-- ""
boucle <--

# DEBUT DU PROGRAMME
LIRE boucle

TANT QUE boucle = true
    FONCTION recuperation_saisie()
    FONCTION affichage_fruit_prix()
    FONCTION ajout_dans_tableau()
FIN TANT QUE

# FIN DU PROGRAMME

FONCTION recuperation_saisie()
    LIRE fruit
    LIRE prix
    ECRIRE "Entrez un fruit et un prix séparé par un espace : "
    LIRE fruit prix
    saisie <-- fruit prix
FIN FONCTION

FONCTION ajout_dans_tableau()
    LIRE fruit
    LIRE prix
    LIRE saisie
    saisie = saisie.split()
    fruit <-- saisie0
    prix <-- saisie1
    saisie <-- ""
FIN FONCTION

FONCTION affichage_fruit_prix()
    LIRE saisie
    LIRE fruit
    LIRE prix
    SI saisie.toUpperCase()="GO"
    ALORS
        POUR I=0 à |fruit|-1
            ECRIRE "1 Kilogramme de " + fruit[I] + " coute " + prix[I] + " euros."
        FIN POUR
    FIN SI
    ENTIER moins = FONCTION legume_moins_chere()
    ECRIRE "Légume le moins cher au kilo : " + fruit[moins]
    boucle = false
FIN FONCTION

FONCTION legume_moins_chere()
    LIRE prix
    ENTIER nbTmp <-- prix[0]
    POUR I DANS prix
        SI I <nbTmp
        ALORS
            nbTmp=I
        FIN SI
    FIN POUR
    RETOURNER nbTmp
FIN FONCTION

______________________________________________________________________________________
______________________________________________________________________________________
Exemple en JAVASCRIPT
*/

fruit =[]
prix =[]
saisie =""
boucle = true

while(boucle)
{
    recuperation_saisie()
    affichage_fruit_prix()
    ajout_dans_tableau()
}

function recuperation_saisie()
{
    saisie = prompt("Entrez un fruit et un prix séparé par un espace : ")
}

function ajout_dans_tableau()
{
    if(saisie.toUpperCase != "GO")
    {
        saisie = saisie.split(" ")
        fruit.push(saisie[0])
        prix.push(parseInt(saisie[1]))
        saisie = ""
    }
}

function affichage_fruit_prix()
{
    if(saisie.toUpperCase()=="GO")
    {
        for(i=0;i<fruit.length;i++)
        {
            console.log("1 Kilogramme de " + fruit[i] + " coute " + prix[i] + " euros.")
        }
    moins = legume_moins_chere()
    console.log("Fruit/Legume le moins cher au kilo est : " + fruit[moins] + " qui coute " + prix[moins] + "euro(s).")
    boucle = false
    }
}

function legume_moins_chere()
{
    nbTmp = prix[0]
    indexTmp = 0
    for(i=0;i<prix.length;i++)
    {
        if(prix[i] < nbTmp)
        {
            nbTmp=prix[i]
            indexTmp=i
        }
    }
    return indexTmp
}