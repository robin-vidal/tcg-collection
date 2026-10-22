import CardTile from "./components/CardTile"
import { collectionValue, copyCount, formatPrice, SAMPLE_CARDS } from "./domain/card"

function App() {
  console.log("Élément :", <CardTile />);

  return (
    <main className="app">
      <header className="app-header">
        <h1>Ma collection TCG</h1>
      </header>

      <p className="summary">{SAMPLE_CARDS.length} cartes · { copyCount(SAMPLE_CARDS) } exemplaires · {formatPrice(collectionValue(SAMPLE_CARDS))}.</p>

      <div className="grid">
        <CardTile />
        <CardTile />
        <CardTile />
      </div>
    </main>
  )
}

export default App
