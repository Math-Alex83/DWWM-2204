/*
# VARIABLES

ENTIER nombre <-- 0
ENTIER somme <-- 0
ENTIER compteur <-- 4

# DEBUT DU PROGRAMME

LIRE nombre
LIRE somme
LIRE compteur

TANT QUE
    LIRE somme
    LIRE compteur
    somme <-- 0
    
    POUR i = nombre-1 à 0

        SI nombre mod i = 0
        ALORS
            somme <-- somme + i
        FIN SI

    SI somme = nombre
    ALORS
        ECRIRE nombre , " est un nombre parfait !"
        compteur <-- compteur - 1
    FIN SI

    FIN POUR

    nombre <-- nombre + 1
FIN TANT QUE

# FIN DU PROGRAMME

____________________________________________________________________
____________________________________________________________________
Exemple en JAVASCRIPT
*/

nombre=0
somme=0
compteur=4

while (compteur!=0)
{
  somme=0
  for(i=nombre-1;i>0;i-=1)
  {
    if(nombre % i == 0)
    {
      somme+=i
    }
  }
  if(somme==nombre && nombre!=0)
  {
  	console.log(nombre + " est un nombre parfait")
    compteur-=1
  }
  nombre+=1
}