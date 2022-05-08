/*
# VARIABLES

ENTIER nb1 <-- A
ENTIER nb2 <-- B

# DEBUT DU PROGRAMME

LIRE nb1
LIRE nb2

ECRIRE "A vaut : " , nb1
ECRIRE "B vaut : " , nb2

ENTIER nbTemp <-- nb1
nb1 <-- nb2
nb2 <-- nbTemp

ECRIRE "A vaut : " , nb1
ECRIRE "B vaut : " , nb2

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1=Math.floor(Math.random() * 101)
nb2=Math.floor(Math.random() * 101)
nbTemp=0

alert("A vaut : " + nb1 + "\n B vaut : " + nb2)

nbTemp = nb1
nb1 = nb2
nb2 = nbTemp

alert("A vaut : " + nb1 + "\n B vaut : " + nb2)
