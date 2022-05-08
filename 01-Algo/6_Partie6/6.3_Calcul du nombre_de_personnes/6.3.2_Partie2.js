/*
# VARIABLES



# DEBUT DU PROGRAMME


# FIN DU PROGRAMME

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

