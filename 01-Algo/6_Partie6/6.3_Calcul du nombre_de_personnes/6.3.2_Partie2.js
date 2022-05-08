/*
# VARIABLES

//personne <-- []
//personne <-- [47,35,68,76,34,30,31,46,57,68,75,46,53,36,31,46,69,59,30,20]
//personne <-- [15,5,5,6,4,2,11,12,7,8,7,3,13,16,11,18,8,9,19,3]
personne <-- [45,35,65,77,38,20,20,30,30,30,20,20,30,20,30,20,20,8,15,23]
boucle <-- true
saisie <-- 0

# DEBUT DU PROGRAMME

// FONCTION Ajout()
FONCTION Verification()


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
			temp = temp + 1
    FIN SI
  FIN POUR

  SI temp = |personne|
  ALORS
    ECRIRE "Toute les personne presente on 20 ans ou plus"
  OU SI temp=0
  ALORS
    ECRIRE "Toute les personne presente on moins de 20 ans"
  SINON
    liste <-- FONCTION Comptage()
    ECRIRE "Il y a " + liste1 + " personnes de moins de 20 ans. \n Il y a " + liste2 + " personnes de 20 ans. \n Il y a " + liste3 + "personnes de plus de 20 ans."
  FIN SI
FIN FONCTION

FONCTION Comptage()
  liste <-- [0,0,0]
  POUR element DANS personne
    SI element < 20
    ALORS
      liste1 = liste1 + 1
    OU SI element > 20
    ALORS
      liste3 = liste3 + 1
    SINON
      liste2 = liste2 + 1
    FIN SI
  FIN POUR
  RETOURNER liste
FIN FONCTION
____________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________
Exemple en JAVASCRIPT
*/

//personne=[]
//personne=[47,35,68,76,34,30,31,46,57,68,75,46,53,36,31,46,69,59,30,20]
//personne=[15,5,5,6,4,2,11,12,7,8,7,3,13,16,11,18,8,9,19,3]
personne=[45,35,65,77,38,20,20,30,30,30,20,20,30,20,30,20,20,8,15,23]
boucle=true
saisie=0

// Ajout()
Verification()

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

  if(temp==personne.length)
  {
    alert("Toute les personne presente on 20 ans ou plus")
  }
  else if(temp==0)
  {
    alert("Toute les personne presente on moins de 20 ans")
  }
  else
  {
    liste=Comptage()
    alert("Il y a " + liste[0] + " personnes de moins de 20 ans. \n Il y a " + liste[1] + " personnes de 20 ans. \n Il y a " + liste[2] + "personnes de plus de 20 ans.")
  }
}

function Comptage()
{
  liste=[0,0,0]
  for(var element of personne)
  {
    if(element < 20)
    {
      liste[0]+=1
    }
    else if(element > 20)
    {
      liste[2]+=1
    }
    else
    {
      liste[1]+=1
    }
  }
  return liste
}