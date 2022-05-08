/*
# VARIABLES

REELE kmVersMiles <-- 1.609
STRING result <-- ""

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
    nbKm <-- ENTIER nbKm
    result <-- nbKm + " km = " + nbKm/kmVersMiles + " mi"

  FIN SI
TANT QUE (nbKm < 0.01 && nbKm > 1000000) && nbKm != "q" 

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
	nbKm=prompt("Entrez un nombre de km compris entre 0.01 et 1 000 000 : ")
    if(nbKm=="Q" || nbKm=="q")
    {
        result="Fin du programme !"
    }
  	else
    {
    	nbKm = parseFloat(nbKm)
      result = nbKm + " km = " + nbKm/kmVersMiles + " mi"
    }
}
while((nbKm < 0.01 || nbKm >1000000) && (nbKm!="Q" || nbKm!="q"))
{

}
console.log(result)
