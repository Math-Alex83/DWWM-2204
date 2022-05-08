/*
# VARIABLES

ENTIER age <-- X
ENTIER retraite <-- 60

# DEBUT DU PROGRAMME

LIRE age

SI age > retraite
ALORS 
    ECRIRE "Vous etes a la retraite !"

OU SI age = retraite
ALORS
    ECRIRE "Il est temps de prendre votre retraite !"

OU SI age > 0 ET age < retraite
ALORS 
    ECRIRE "Il vous reste : ",retraite-age," ans, " avant la retraite !"

SINON
    ECRIRE "La valeur fournie n'est pas un àge valide !"

FIN SI

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

age = Math.floor(Math.random() * 100) 
retraite = 60

alert("Vous avez " + age + " ans")

if (age > retraite)
{
    alert("Vous etes a la retraite !")
}
else if (age == retraite)
{
    alert("Il est temps de prendre votre retraite !")
}
else if (age > 0 && age < retraite)
{
    alert("Il vous reste : " + (retraite-age) + " ans avant la retraite !")
} 
else
{
    alert ("La valeur fournie n'est pas un àge valide !")
}
