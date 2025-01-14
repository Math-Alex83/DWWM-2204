/*
# VARIABLES

STRING condition <-- ""
BOOLEN validation <-- true
STRING question <-- ""
STRING livre <-- ""

# DEBUT PROGRAMME

question <--"Est ce qu'il fait beau aujourd'hui ? (Y/N): "
FONCTION verification
LIRE condition
SI validation = true
ALORS
    ECRIRE "Il fait beau je vais me balader en bicyclette"

    question <-- "Le velo est il en bonne etat (Y/N)? : "
    FONCTION verification
    LIRE condition
    SI validation = true
    ALORS
        ECRIRE "Mon velo est en bon etat donc je vais me balader imediatement."
        ECRIRE "Fin du programme !"
    SINON
        ECRIRE "Mon velo est en mauvaise etat je doit l'amenner au garage avant d'aller me promener"
        question <-- "Les réparation seront elle rapide (Y/N)? : "
        FONCTION verification
        LIRE condition
        SI validation = true
        ALORS
            ECRIRE "Je me baladerai juste apres les reparations"
            ECRIRE ". . ."
            ECRIRE "Les réparation sont términé je vais me balader."
            ECRIRE "Fin du programme !"
        SINON
            ECRIRE "Les réparations prendront un moment, je vais donc me promener à pied au lac et ceuillir des joncs"
            ECRIRE "Fin du programme !"
        FIN SI
    FIN SI
SINON
    ECRIRE "J'aimerai relire le 1er tome de Game of throne"
    question <-- "Ce tome est il dans la bibliotheque de mon salon (Y/N?) : "
    FONCTION verification
    LIRE condition
    SI validation = true
    ALORS
        ECRIRE "Super! je vais pouvoir le lire immediatement."
        livre <-- "le 1er tôme de Game of throne"
    SINON
        ECRIRE "Je ne possede pas ce livre, je vais le chercher a la bibliotheque municipale"
        ECRIRE " --Se rend a la bibliotheque municipale"
        ECRIRE ". . ."
        question <-- "Je suis a la bibliotheque Municipale, Je cherche mais, on-t'il le 1er tôme de Game of throne (Y/N)? : "
        FONCTION verification
        LIRE condition
        SI validation = true
        ALORS
            ECRIRE "Le voila! Je vais l'emprunter."
            livre <-- "le 1er tôme de Game of throne"
        SINON
            ECRIRE "Mince! Je ne le trouve pas, je vais me rabatre sur roman policier."
            livre <-- "les Aventures de Sherlock Holmes"
        ECRIRE " --Rentre immédiatement avec le livre emprunter en poche."
        FIN SI
        LIRE livre
    ECRIRE "-- s'installe confortablement dans le salon pour lire " + livre +"."
    ECRIRE "Fin du programme !"
    FIN SI
FIN SI

# FIN PROGRAMME

FONCTION verification ()
    FAIRE
    LIRE condition
    LIRE validation
    LIRE question
        ECRIRE question
        condition <-- condition.toUpperCase()
        LIRE condition
        SI "N" EST DANS condition
        ALORS
            validation <-- false
        FIN SI

        SI "Y" EST DANS condition
        ALORS
            validation <-- true
        FIN SI
    TANT QUE condition != "O" && condition != "N"

    FIN TANT QUE
FIN FONCTION

______________________________________________________________________________________
______________________________________________________________________________________
Exemple de code en JAVASCRIPT
*/

validation = true
condition = ""
question = ""
livre = ""

question = "Est ce qu'il fait beau aujourd'hui ? (Y/N): "
verification()
if(validation)
{
    alert("Il fait beau je vais me balader en bicyclette")
    question = "Le velo est il en bonne etat (Y/N)? : "
    verification()
    if(validation)
    {
        alert("Mon velo est en bon etat donc je vais me balader imediatement.")
        console.log("Fin du programme !")
    }
    else
    {
        alert("Mon velo est en mauvaise etat je doit l'amenner au garage avant d'aller me promener")
        question = "Les réparation seront elle rapide (Y/N)? : "
        verification()
        if(validation)
        {
            alert("Je me baladerai juste apres les reparations")
            alert(". . .")
            alert("Les réparation sont términé je vais me balader.")
            console.log("Fin du programme !")
        }
        else
        {
            alert("Les réparations prendront un moment, je vais donc me promener à pied au lac et ceuillir des joncs")
            console.log("Fin du programme !")
        }
    }
}
else
{
    alert("J'aimerai relire le 1er tome de Game of throne")
    question = "Ce tome est il dans la bibliotheque de mon salon (Y/N?) : "
    verification()
    if(validation)
    {
        alert("Super! je vais pouvoir le lire immediatement.")
        livre = "le 1er tôme de Game of throne"
    }
    else
    {
        alert("Je ne possede pas ce livre, je vais le chercher a la bibliotheque municipale")
        alert("--Se rend a la bibliotheque municipale")
        alert(". . .")
        question = "Je suis à la bibliotheque Municipale, je cherche mais, on-t'il le 1er tôme de Game of throne (Y/N)? : "
        verification()
        if(validation)
        {
            alert("Le voila! Je vais l'emprunter.")
            livre = "le 1er tôme de Game of throne"
        }
        else
        {
            alert("Mince! Je ne le trouve pas, je vais me rabatre sur roman policier.")
            livre = "les Aventures de Sherlock Holmes"
        }
        alert("--Rentre immédiatement avec le livre emprunter en poche.")
    }
    alert("--S'installe confortablement dans le salon pour lire " + livre +".")
    console.log("Fin du programme !")
}

function verification() {
  do
  {
      condition = prompt(question)
      condition = condition.toUpperCase()
      if(condition.includes("N"))
      {
          validation=false
      }
      if(condition.includes("Y"))
      {
          validation=true
      }
  }
  while(!condition.includes("N") && !condition.includes("Y") )
  {

  }
}