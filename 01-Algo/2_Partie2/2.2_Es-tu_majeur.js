/*
# VARIABLES

ENTIER age <-- X

# DEBUT DU PROGRAMME

LIRE nb1

SI age >= 18 
ALORS
    ECRIRE "Vous etes majeur !"
OU SI age >= 0 ET age <18
ALORS
    ECRIRE "Vous etes mineur !"
SINON
    ECRIRE "Vous n'etes pas encore né !"
FIN SI


# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

age = Math.floor((Math.random() * 60) - 20)

alert("age de la personne : " + age + " ans !")

if(age >= 18) 
{
    alert("Vous etes majeur !")
}
else if (age >= 0)
{
    alert("Vous etes mineur !")
}
else
{
    alert("Vous n'etes pas encore né !")
}