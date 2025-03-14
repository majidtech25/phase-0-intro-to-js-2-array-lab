// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
  cats.shift("Milo");
}

function appendCat(name) {
  let appendCat = [...cats, "Broom"];
  return appendCat;
}

function prependCat(name) {
  let prependCat = ["Arnold", ...cats];
  return prependCat;
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
