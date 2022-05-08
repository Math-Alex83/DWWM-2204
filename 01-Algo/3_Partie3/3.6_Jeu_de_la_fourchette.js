/*
# VARIABLES

nbEssaie <-- 0

# DEBUT DU PROGRAMME

LIRE nbEssaie
nbRandom <-- RANDOM 0-100

FAIRE
    LIRE nbEssaie
    LIRE nbRandom
    ECRIRE "Quel est le nombre mystere? : "
    LIRE nbChoix
    SI nbChoix = nbRandom
    ALORS
        ECRIRE "Bravo vous avez trouvez en " , nbEssaie , " essaie(s)."
    OU SI nbRandom > nbChoix
    ALORS
        ECRIRE "Le nombre mystere se trouve entre : " , nbChoix , " et 100."
    SINON  
        ECRIRE "Le nombre mystere se trouve entre : " , nbChoix , " et 0."
    FIN SI
    nbEssaie <-- nbEssaie + 1
TANT QUE nbChoix != nbEssaie
    
FIN TANT QUE

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nbEssaie = 1
nbRandom = Math.floor((Math.random() * 100) + 1)
nbChoix = 0
jeu = true

do
{
    nbChoix = parseInt(prompt("Quel est le nombre mystere? : ")) 
    if(nbChoix == nbRandom)
    {
        alert("Bravo vous avez trouvez en " + nbEssaie + " essaie(s).")
        jeu = false
    }
    else if(nbRandom > nbChoix)
    {
        alert("Le nombre mystere se trouve entre : " + nbChoix + " et 100.")
    }
    else
    {  
        alert("Le nombre mystere se trouve entre : " + nbChoix + " et 0.")
    }
    nbEssaie += 1
}
while(jeu)
{

}