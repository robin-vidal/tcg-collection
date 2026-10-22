# TP01 - TCG Collection

> [!NOTE]
> School project (EPITA). My actual interests are in distributed systems.
> See my [multithreaded key-value store](https://github.com/robin-vidal/kvgo) (Go, Redis-compatible, WAL)
> and [container runtime](https://github.com/robin-vidal/tinydocker) (C, namespaces + cgroups).

## Questions

**Q0.1** Supprimez temporairement la `<div id="root">` d'index.html et rechargez. Quel message
apparaît dans la console ? Qu'en déduisez-vous sur le rôle de cette div ? (Remettez-la.)  

```plaintext
Uncaught Error: Target container is not a DOM element.
    createRoot React
    <anonymous> main.jsx:6
react-dom-client.development.js:31158:15
```

J'en déduis que cette `div` est celle ciblée par `document.getElementById('root')` dans `src/main.jsx`. Si elle est manquante `getElementById` retourne `null` ce qui provoque une erreur car `createRoot` dans `src/main.jsx` attend un élément du DOM valide.

**Q0.2** Modifiez le texte du `<h1>` et sauvegardez. La page change sans être rechargée : est-ce React ou
Vite qui fait cela ?  

C'est Vite qui fait cela, cette fonctionnalité s'appelle le **Hot Module Replacement**. Seul le module modifié est remplacé et non toute la page contrairement au **Hot Reload**.

**Q0.3** Combien de fichiers HTML votre application contient-elle ? Que signifie « SPA » ?   

L'application ne contient qu'un seul fichier HTML : `index.html`. SPA signifie **Single Page Application**, cela consiste en le chargement dynamique des éléments de l'application dans un unique HTML.

**Q1.1** Dans App, essayez `SAMPLE_CARDS.push(SAMPLE_CARDS[0])`. Quelle erreur apparaît dans la console
? Quel est le rôle d'`Object.freeze`, et pourquoi est-ce utile pour des données qu'on ne doit pas
modifier ? (Retirez la ligne.)

```plaintext
Uncaught TypeError: can't define array index property past the end of an array with non-writable length
    App App.jsx:4
    React 10
    performWorkUntilDeadline scheduler.development.js:45
```

Le role d'`Object.freeze` est de rendre ce tableau non-modifiable. Il est donc impossible d'insérer ou de retirer les données présentes à l'intérieur. Il est nécessaire de l'utiliser pour cet usage au lieu de `const` car ce dernier interdit seulement la réassignation de la variable et non sa modification.

**Q1.2** Dans `SAMPLE_CARDS`, remplacez une rareté par "legendaire". Une erreur est-elle signalée ? Que
devient la carte à l'écran (couleur, badge) ? Comment pourrait-on détecter ce genre de faute plus tôt ?
(Remettez la valeur.)  

Aucune erreur n'est signalée car le JS fait du typage dynamique, n'importe quelle string est acceptée. La carte est cependant affichée sans badge/couleur car le composant cherche `"legendaire"` dans `RARITIES` et ce n'est pas une rareté existante. On pourrait utiliser une validation au runtime avec `parseRarity` au moment de l'insertion ou remplacer les `string` par un ENUM en utilisant TypeScript par exemple.

**Q1.3** Pourquoi le formateur Intl.NumberFormat est-il créé hors de formatPrice plutôt qu'à chaque
appel ?  

On crée le formateur en dehors de la fonction car il est stateless et peut être réutilisé d'un appel de fonction à l'autre. Cela évite de faire une allocation sur la heap supplémentaire à chaque appel de la fonction.
