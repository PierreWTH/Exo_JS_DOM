/* Dom = interface de programmation qui petmet a des scripts d'examiner et de modifier le contenu du navigateur web. C'est l'interface par laquellete JS passe pour ajouter, atteindre, modifier ou supprimer les balises d'une page HTML. 

Si on veut atteidre une liset qui est dans une ul qui est dans body et dans une balise html, au sein d'un document(document.html), on écrira : 



<script>
    let list = document.querySelector("ul")
</script>

/* querySelector() pemet de pointer le premier élément répondant a la requete spécifiée dans l'argument sous forme de chaine de cractère. La requete s'écrit de la meme manière qu'une règle CSS.

Si il y avais eu plusieurs ul, seul la premiere aurait été pointée.

Si on voulait récuperer tous les éléments de liste : 



<script>
    let list = document.querySelector("ul")
    let listElement = list.querySelectorAll("li")
</script>


On utilise maintenant query selector sur list pour récuperer tous les éléments de l'ul répondant a la requete.

Vérifions les valeurs de ces deux variables : 


<script>
    let list = document.querySelector("ul")

    let listElements = list.querySelectorAll("li")

    console.log("la liste", list)
    console.log("Les éléments", listElements)


</script>

La variable list contient une balise ul avec tous les noeuds qu'elle contient. Chaque li a un pseudo élément ::marker(la puce) et un noeud de texte entre guillemets. 

listElement comporte un objet NodeList avec trois entrées (les trois li)

On peut boucler sur la NodeList "listElement"

Ex pour changer la couleur du texte en rouge pour chaque li : 



<script>
let list = document.querySelector("ul")

let listElements = list.querySelectorAll("li")

listElements.forEach(function(element){
    element.style.color = "red"
})

</script>

Chaque li est représenté par la variable élément (qui peut etre nommée comme on le veut)

Pour connaitre les propriété d'un élément de DOM et cce qu'elles contiennent, on peut utiliser console.dir()

<script>
let list = document.querySelector("ul")

let listElements = list.querySelectorAll("li")

listElements.forEach(function(element){
    console.dir(element)
    element.style.color = "red"
})

</script>

cet objet HTML contient de nombreuses propriétés définissant tout ce dont la navigateur a besoin pour le position, definir son style, taille ect...

outerHTML et outerText : texte représentant le li soit en HTML soit uniquement sa représentation textuelle.

parentNode : élément du DOM parent du li

style : objet CSSStyleDeclaration qui contient toute les propriété CSS du li et leurs valeurs. C'est ce qui a été atteint pour mettre le texte en rouge.

tagname : nom de la balise utilisée pour cet élément Li.

et pleins d'autres... (voir ex)


*/