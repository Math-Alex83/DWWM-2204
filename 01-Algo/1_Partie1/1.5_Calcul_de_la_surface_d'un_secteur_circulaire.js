/*
# VARIABLES

# DEBUT DU PROGRAMME

ECRIRE "Quel est le rayon du cercle? : "
LIRE rayon

ECRIRE "Quel est l'angle du secteur circulaire? (en degré(s)) : "
LIRE angle

REELE r <-- rayon
DEG a <-- angle

REELE aire <-- (pi * r^2 *a)/360

ECRIRE "L'aire du secteur circulaire est : " , aire

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

rayon = parseFloat(prompt("Quel est le rayon de la sphere? : " )) 
angle = parseFloat(prompt("Quel est l'angle du secteur circulaire? (en degré(s)) : " )) 

aire = (Math.PI * Math.pow(rayon,2) * angle) / 360

alert("L'aire du secteur circulaire est : " + aire.toFixed(2))