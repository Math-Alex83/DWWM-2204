/*
# VARIABLES

# DEBUT DU PROGRAMME

FAIRE
    ECRIRE "Saisir une temperature en C°/F° comprise entre -459.67 et 5 000 000 (laisser un espace entre la valeure et la mesure) : "
    LIRE temperature
    temp <-- temperature
    tabTemp <-- SPLIT temp " "
    LIRE tabTemp
TANT QUE REELE tabTemp1 < 459.67 && REELE tabTemp2 > 5000000
    ECRIRE "Temmperature invalide !"
FIN TANT QUE

    LIRE tabTemp
    SI tabTemp2 = "C" OU tabTemp2 = "c" 
    ALORS
        ECRIRE tabTemp1 + "F°" + " vaut : " + (REELE(2 decimales) tabTemp1 * 9 / 5) + 32  + "C°"
    SINON
        ECRIRE tabTemp1 + "C°" + " vaut : " + (REELE(2 decimales) tabTemp1 - 32) * 5 / 9  + "F°"
    FIN SI

# FIN DU PROGRAMME

____________________________________________________________________
____________________________________________________________________
Exemple en JAVASCRIPT
*/
do
{
	mesure=prompt("Entrez une mesure c(C°) ou f(F°) : ")
}
while(mesure.toUpperCase()!="C" && mesure.toUpperCase()!="F")
{

}

do
{
    try{
    valeurMin=parseFloat(prompt("Entrez une valeur minimal : "))
    }
    catch(err){
        console.log("Ce n'est pas un nombre !")
    }
}
while((valeurMin>=0)==false && (valeurMin<0)==false)
{

}

do
{

	try{
	valeurMax=parseFloat(prompt("Entrez une valeur maximal : "))
  }
  catch(err){
  console.log("Ce n'est pas un nombre !")
  }
}
while(((valeurMax>=0)==false && (valeurMax<0)==false) || valeurMax<=valeurMin)
{

}

if(mesure.toUpperCase=="C")
{
    console.log("Valeur minimal : " + valeurMin + "-C°" + " Valeur maximal :" + valeurMax + "-C°")
    console.log("vaut")
    console.log("Valeur minimal : " + ((valeurMin * 9 / 5) + 32 ).toFixed (2) + "-F°" + " Valeur maximal :" + ((valeurMax * 9 / 5) + 32 ).toFixed (2) + "-F°")
}
else
{
    console.log("Valeur minimal : " + valeurMin + "-F°" + " Valeur maximal :" + valeurMax + "-F°")
    console.log("vaut")
    console.log("Valeur minimal : " + ((valeurMin - 32) * 5 / 9 ).toFixed (2) + "-C°" + " Valeur maximal :" + ((valeurMax * 9 / 5) + 32 ).toFixed (2) + "-C°")
}