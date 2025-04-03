let words: string[] = [
  "COMPUTADORA",
  "AGUACATE",
  "PAPAYA",
  "VEHÍCULO",
  "ANIMAL",
  "VETERINARIO",
  "CELULAR",
  "TELÉFONO",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
