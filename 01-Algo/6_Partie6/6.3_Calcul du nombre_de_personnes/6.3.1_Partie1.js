/*
# VARIABLES

personne <-- []
boucle <-- true
saisie <-- 0

# DEBUT DU PROGRAMME

FONCTION Ajout()

# FIN DU PROGRAMME

FONCTION Ajout()
	TANT QUE boucle
	  saisie <-- ENTIER ECRIRE "Entrez l'age de la personne a enregistrer : "
    SI saisie > 0 ET saisie < 120
    ALORS
    	personne AJOUTER saisie
    SINON
    	ECRIRE "Ceci n'est pas un age valide ! \n il reste " + (20-personne.length) + " personne a enregistrer !"
    FIN SI

    SI |personne| >= 20
    ALORS
    	boucle <-- false
      FONCTION Verification()
    FIN SI
  FIN TANT QUE
FIN FONCTION

FONCTION Verification()
	temp <-- 0
  POUR element DANS personne
    SI element >= 20
    ALORS
			temp <-- temp + 1
    FIN SI
  FIN POUR
  ECRIRE "Il y a " + temp + " personne(s) de 20 ans ou plus. \n \n" + personne
FIN FONCTION
____________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________
Exemple en JAVASCRIPT
*/

personne=[]
boucle=true
saisie=0

Ajout()

function Ajout()
{
	while(boucle)
  {
	  saisie=parseInt(prompt("Entrez l'age de la personne a enregistrer : "))
    if(saisie > 0 && saisie <120)
    {
    	personne.push(saisie)
    }
    else
    {
    	alert("Ceci n'est pas un age valide ! \n il reste " + (20-personne.length) + " personne a enregistrer !")
    }
    if(personne.length >= 20)
    {
    	boucle = false
      Verification()
    }
  }
}

function Verification()
{
	temp=0
  for(var element of personne)
  {
    if(element >= 20)
    {
			temp += 1
    }
  }
  alert("Il y a " + temp + " personne(s) de 20 ans ou plus. \n \n" + personne)
}

