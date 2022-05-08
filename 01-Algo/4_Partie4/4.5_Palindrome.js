/*
# VARIABLES

ENTIER comptDebut <-- 0
ENTIER comptFin <-- 0
BOOLEEN boucle <-- true

# DEBUT DU PROGRAMME

ECRIR "quel est le mot a tester? : "
LIRE mot
motTest <-- mot

comptDebut <-- 0
comptFin <-- |motTest|-1

SI |mot|>2
ALORS
    TANT QUE boucle
        SI comptDebut < comptFin ET  mot[comptDebut] = mot[comptFin]
        ALORS
            comptDebut <-- comptDebut + 1
            comptFin <-- comptFin + 1
        OU SI comptDebut >= motcomptFin 
            ECRIRE mot , " est un palindrome."
        ALORS
            ECRIRE mot , " n'est pas un palindrome."
        FIN SI
    FIN TANT QUE
SINON
    ECRIRE "Ecrire un mot d'au moins 3 caracteres"
FIN SI

# FIN DU PROGRAMME


____________________________________________________________________
____________________________________________________________________
Exemple en code JAVASCRIPT
*/
comptDebut = 0
comptFin = 0
boucle=true

mot = prompt("Entrez un mot : ")

comptDebut = 0
comptFin = mot.length-1


if(mot.length > 2)
{
	while(boucle)
	{
		if(comptDebut < comptFin &&  mot[comptDebut].topUpperCase == mot[comptFin].topUpperCase)
		{
			comptDebut ++
            comptFin --	
		}
		else if(comptDebut >= comptFin)
		{
			console.log(mot + " est un palindrome.")
          	boucle=false
		}
		else
		{
			console.log(mot + " n'est pas un palindrome.")
            boucle=false
		}
	}
}
else
{
	console.log("Ecrire un mot d'au moins 3 caracteres")
}
