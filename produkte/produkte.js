export const gesamtWertdesLagers = (produkte) => {
  let summe = 0;
  for (const produkt of produkte) {
    summe += produkt.anzahl * produkt.preis;
  }
  return summe;
};

export const holeAlleProdukte = () => {
  //tun als hier ein datenbank kommen würde
  return [{ name: "Heuschrecken", preis: 4, anzahl: 5 }];
};
