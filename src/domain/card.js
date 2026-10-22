// Card: { id: string, name: string, set: string, rarity: string, price: number, quantity: number }

export const RARITIES = Object.freeze(["commune", "peu-commune", "rare", "ultra-rare"])
export const SETS = Object.freeze(["Set de Base", "Jungle", "Fossile"])
export const SAMPLE_CARDS = Object.freeze([
  { id: "1", name: "Dracaufeu",  set: SETS[0], rarity: RARITIES[3], price: 48.9,  quantity: 1 },
  { id: "2", name: "Tortank",    set: SETS[0], rarity: RARITIES[2], price: 12.5,  quantity: 2 },
  { id: "3", name: "Pikachu",    set: SETS[0], rarity: RARITIES[0], price: 0.3,   quantity: 4 },
  { id: "4", name: "Ronflex",    set: SETS[1], rarity: RARITIES[3], price: 35,    quantity: 1 },
  { id: "5", name: "Pyroli",     set: SETS[1], rarity: RARITIES[2], price: 18.75, quantity: 1 },
  { id: "6", name: "Persian",    set: SETS[1], rarity: RARITIES[1], price: 1.2,   quantity: 3 },
  { id: "7", name: "Ptéra",      set: SETS[2], rarity: RARITIES[2], price: 9.9,   quantity: 0 },
  { id: "8", name: "Amonistar",  set: SETS[2], rarity: RARITIES[1], price: 0.8,   quantity: 2 },
]);

export function parseRarity(value) {
  return RARITIES.find(r => r === value)
}

export function isRare(card) {
  return card.rarity === RARITIES[2] || card.rarity === RARITIES[3];
}

const priceFormatter = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });
export function formatPrice(price) {
   return priceFormatter.format(price);
}

export function copyCount(cards) {
  return cards.reduce((acc, card) => acc + card.quantity, 0);
}

export function collectionValue(cards) {
  return cards.reduce((acc, card) => acc + card.quantity * card.price, 0);
}
