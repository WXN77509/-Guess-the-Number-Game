export function gen_random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSelectedValue(value: string): number {
  switch (value) {
    case "Facile":
      return 50;
    case "Moyen":
      return 100;
    case "Difficile":
      return 200;
    default:
      throw new Error("An error has occurred!");
  }
}
