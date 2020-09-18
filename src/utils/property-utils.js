import { indexAsString, selectRandomOption } from "./utils";

export function selectRandomProperty(object) {
  const options = Object.keys(object);
  return selectRandomOption(options);
}

export function selectPropertyByIndex(index, object) {
  // Safe-guard
  const intIndex = parseInt(index, 10);
  if (intIndex >= object.length) {
    return selectRandomProperty(object);
  }
  const options = Object.keys(object);
  return options[intIndex];
}

export function getIndexByProperty(key, object) {
  const options = Object.keys(object);
  const index = options.indexOf(key);

  return indexAsString(index, options.length);
}
