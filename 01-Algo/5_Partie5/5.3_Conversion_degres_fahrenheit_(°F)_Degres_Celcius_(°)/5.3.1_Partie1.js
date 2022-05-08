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
    temp=prompt("Saisir une temperature en C°/F° comprise entre -459.67 et 5 000 000 (laisser un espace entre la valeure et la mesure) : ")
    tabTemp=temp.split(" ")
}
while((parseFloat(tabTemp[0])<459.67 && parseFloat(tabTemp[0])>5000000) || (tabTemp.length<2))
{

}

if(tabTemp[1].toUpperCase == "C")
{
    console.log(tabTemp[0] + "C°" +" vaut : " + ( (parseFloat(tabTemp[0]) * 9 / 5) + 32).toFixed (2) + "F°")
}
else
{
    console.log(tabTemp[0] + "F°" +" vaut : " + ( (parseFloat(tabTemp[0]) - 32 ) * 5 / 9).toFixed (2)  + "C°")
}