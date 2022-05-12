/*# VARIABLES

ENTIER nb1 <-- A
ENTIER div <-- A - 1

# DEBUT DU PROGRAMME

LIRE nb1
LIRE div
ECRIRE "Les diviseur de " + nb1 + " sont"
TANT QUE div >1
    LIRE nb1
    LIRE div
    SI nb1 % div = 0
        ECRIRE div
    FIN SI
    div <-- div - 1
FIN TANT QUE 
# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/
nb1=Math.floor((Math.random() * 100) + 1)
div=nb1-1
resultat="" + (div+1)

while(div !=1)
{    
    if(nb1 % div == 0)
    {
        resultat += " , " + div
    }       
    div -= 1
}
alert("Le(s) diviseur(s) de " + nb1 + " : \n" + resultat)

//nb1=Math.floor((Math.random() * 100) + 1)
nb1=prompt("Entrez un nombre entier superieur a 1 : ")
div=nb1-1
resultat="" + (div+1)

while(div >1)
{    
    if(nb1 % div == 0)
    {
        resultat += " , " + div
    }       
    div--
}
alert("Le(s) diviseur(s) de " + nb1 + " : \n" + resultat)



nombre=prompt("Entrez un nombre entier positif :")
tab=[30,50,80,100,120]
compteur=0
while(tab[compteur]!=nombre||compteur>tab.length){
    if(tab[compteur]==nombre){
        alert("Le nombre est dans le tableau")
    }
    else{
        alert("Le nombre n'est pas dans le tableau")
    }
    compteur++
}