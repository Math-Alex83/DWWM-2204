/*
# VARIABLES

REELE kmVersMiles <-- 1.609
STRING result <-- ""
kmDepart

# DEBUT DU PROGRAMME


FAIRE

LIRE kmVersMiles
LIRE result

ECRIRE "Entrez un nombre de km compris entre 0.01 et 1 000 000 : "
LIRE km
STRING nbKm <-- km
  SI nbKm = "q" OU nbKm = "Q"
  ALORS
    result <-- "Fin du programme !"
  SINON
    POUR element of nbKm
        SI ENTIER element >=0 OU ENTIER element <=9
        ALORS
            kmDepart <-- kmDepart + element
        FIN SI
    FIN POUR
    kmDepart <-- ENTIER kmDepart
  FIN SI

  SI nbKm CONTIENT "mi"
  ALORS
    nbKm <-- ENTIER nbKm
    result <-- nbKm + " mi = " + nbKm * kmVersMiles + " km"
  SINON
    nbKm <-- ENTIER nbKm
    result <-- nbKm + " km = " + nbKm / kmVersMiles + " mi"
  FIN SI
TANT QUE (nbKm < 0.01 || nbKm > 1000000) && (nbKm != "q" || nbKm != "Q") 

FIN TANT QUE

LIRE result
ECRIRE result

# FIN DU PROGRAMME


____________________________________________________________________
____________________________________________________________________
Exemple en JAVASCRIPT
*/

kmVersMiles=1.6091999
kmDepart=0
result=""

do
{
	nbKm=prompt("Entrez un nombre de kilometre(km)/miles(mi) compris entre 0.01 et 1 000 000 : ")

    if(nbKm=="Q" || nbKm=="q")
    {
        result="Fin du programme !"
    }
  	else
    {
        for(element of nbKm){
	        if(parseFloat(element) >= 0  || parseFloat(element) <= 9){
    	        kmDepart+=element
            }
        }
        kmDepart=parseFloat(kmDepart)
        if(nbKm.includes("mi"))
        {
            nbKm = kmDepart
      	    result = nbKm + " mi = " + nbKm*kmVersMiles + " km"
        }
        else
        {
            nbKm = kmDepart
      	    result = nbKm + " km = " + nbKm/kmVersMiles + " mi"
        }
    }
}
while((nbKm < 0.01 || nbKm >1000000) && (nbKm!="Q" || nbKm!="q"))
{

}
console.log(result)
