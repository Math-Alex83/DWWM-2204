/*
# VARIABLES

# DEBUT DU PROGRAMME

ECRIRE "Quel est le rayon de la sphere? : " 

LIRE rayon

REELE r <-- rayon

REELE aire <-- 4 * pi * r^2
REELE vol <-- 4/3 * pi * r^3

ECRIRE "L'aire de la sphere est : ", aire , " et le volume est : " , vol

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

rayon = parseFloat(prompt("Quel est le rayon de la sphere? : " )) 

aire = 4* Math.PI * Math.pow(rayon, 2)
vol = 4/3 * Math.PI * Math.pow(rayon,3)

alert("L'aire de la sphere est : " + aire + " et le volume est : " + vol)