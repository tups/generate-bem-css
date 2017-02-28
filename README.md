CSS BEM
--------

Micro script pour générer des classes BEM ([Référence à la syntaxe BEM](http://getbem.com/naming/) ) pour une entité en fonction de leurs rôles.

Pour l'utiliser, il suffit déclarer le nom de l'entité sur laquelle on travaille.

Exemple pour une entité "block" :

```
    var blockBEM = $BEM('block');
```

Dans l'utilisation : 

Générer la class d'un `block` :

```
    blockBEM.getBlock(); // retourne 'block'
```

Générer la class d'un `element` :

```
    blockBEM.getElement('elem'); // retourne 'block__elem'
```

Générer la class d'un `modifier` :

```
    blockBEM.getModifier('mod'); // retourne 'block--mod'
```

Générer la class d'un `modifier` pour un `element` :
```
    blockBEM.getModifier('mod', 'elem'); // retourne 'block__elem--mod'
```

Générer le selecteur d'un `block` :

```
    blockBEM.selector.getBlock(); // retourne '.block'
```

Générer le selecteur d'un `element` :

```
    blockBEM.selector.getElement('elem'); // retourne '.block__elem'
```

Générer le selecteur d'un `modifier` :

```
    blockBEM.selector.getModifier('mod'); // retourne '.block--mod'
```

Générer le selecteur d'un `modifier` pour un `element` :
```
    blockBEM.selector.getModifier('mod', 'elem'); // retourne '.block__elem--mod'
```
