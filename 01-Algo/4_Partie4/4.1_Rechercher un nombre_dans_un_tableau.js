/*
# VARIABLES

ENTIER tab[7] <-- {8,16,32,64,128,256,512}
ENTIER nb1 <-- A

# DEBUT DU PROGRAMME

LIRE tab
LIRE nb1

POUR i = 0 à |tab|-1
    SI tab[i] = nb1
    ALORS
        ECRIRE nb1 , " est dans le tableau!"
    SINON
        ECRIRE "Nombre non trouvé!"
    FIN SI
FIN POUR

# FIN DU PROGRAMME
___________________________________________________________________________
___________________________________________________________________________
Exemple en JAVASCRIPT
*/

tab = [8,16,32,64,128,256,512]
nb1 = 32
resultat="Nombre non trouvé !"
for(i = 0;i < tab.length;i++)
{
    if(tab[i] == nb1)
    {
        resultat = nb1 + " est dans le tableau!"
    }
}
alert(resultat)

//__________________________________
nombre=parseInt(prompt("Entrez un nombre entier positif : "))
tab=[30,50,80,100,120]
absent=true

for( index = 0 ; index<tab.length ; index++){
    if(tab[index]==nombre)
    {
        alert("Le nombre est dans le tableau !")
        index=tab.length+1
        absent=false
    }
}
if(absent){
alert("Le nombre n'est pas dans le tableau !")
}


//___________________________
nombre=parseInt(prompt("Entrez un nombre entier positif : "))
tab=[30,50,80,100,120]

for( index = tab.length/2 ; index<tab.length ; index++){
    temp=index
    if(nombre<tab[index]){
        index=parseInt(i/=2)
    }
    else if(nombre==tab[index]){
    console.log("nombre present")
    index=tab.length+1
    }
    else{
        index=parseInt(index+index/2)
    }
    if(temp==index){
        console.log("Le nombre n'est pas dans le tableau !")
        index=tab.length+1 
    }
}
//__________________________
tab=[10,20,30,40,50,60,70,80,90,100,110,120]
nombre=10

index=parseInt(tab.length/2)
diference=index
jeu=true

resultat="Le nombre n'est pas dans le tableau"

while(jeu){
	if(diference%2==0){
		diference/=2
  }
  else{
		diference=parseInt(diference/2+1)
  }
  if(tab[index] < nombre)
  {
    index+=diference
    //alert("Le nombre mystere se trouve entre : " + nbChoix + " et 100.")
  }
  else
  {  
    index-=diference
    //alert("Le nombre mystere se trouve entre : " + nbChoix + " et 0.")
  }
    if(tab[index] == nombre)
  {
  	resultat="Le nombre est dans le tableau"
    jeu = false
  }
  if(diference==1 || diference > tab.length){
  	jeu=false
  }
}
console.log(resultat)
