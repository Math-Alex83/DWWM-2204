/*
# VARIABLES

REELE solde <-- A
ENTIER mag <-- 0

# DEBUT DU PROGRAMME

LIRE solde
LIRE mag

TANT QUE solde !=0
    LIRE solde
    LIRE mag

    SI solde / 2 >= 1
    ALORS
        solde <-- solde / 2 + 1
        mag <-- mag + 1
    SINON
        solde <-- solde - solde
        mag <-- mag + 1
    FIN SI
FIN TANT QUE

LIRE mag

ECRIRE "Barnabé est allé dans " , mag , " magasin."

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
solde = Math.floor((Math.random() * 1000) + 1)
soldeDepart = solde
mag = 0
alert("La somme de départ de Barnabé est de : " + soldeDepart + "€ .")
console.log("La somme de départ de Barnabé est de : " + soldeDepart + "€ .")
while(solde != 0)
{
    if ((solde / 2) >= 1)
    {
        solde = solde / 2 - 1
        mag += 1
    }
    else
    {
        solde = 0
        mag += 1
    }

    console.log("Barnabé a depensé " + (soldeDepart-solde).toFixed(2) + "€ dans le magasin N°:" + mag)
    soldeDepart=solde
}

alert("Barnabé est allé dans " + mag + " magasin.")