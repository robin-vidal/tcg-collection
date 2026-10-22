# TP01 - TCG Collection

> [!NOTE]
> School project (EPITA). My actual interests are in distributed systems.
> See my [multithreaded key-value store](https://github.com/robin-vidal/kvgo) (Go, Redis-compatible, WAL)
> and [container runtime](https://github.com/robin-vidal/tinydocker) (C, namespaces + cgroups).

## Questions

**Q0.1 Supprimez temporairement la <div id="root"> d'index.html et rechargez. Quel message
apparaît dans la console ? Qu'en déduisez-vous sur le rôle de cette div ? (Remettez-la.)**

```plaintext
Uncaught Error: Target container is not a DOM element.
    createRoot React
    <anonymous> main.jsx:6
react-dom-client.development.js:31158:15
```

J'en déduis que cette `div` est celle ciblée par `document.getElementById('root')` dans `src/main.jsx`. Si elle est manquante `getElementById` retourne `null` ce qui provoque une erreur car `createRoot` dans `src/main.jsx` attend un élément du DOM valide.
