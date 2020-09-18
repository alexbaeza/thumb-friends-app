import { indexAsString, selectRandomOption } from "./utils";

/**
 * Selects a random key from a map
 */
export function selectRandomKey(map) {
  const options = [...map.keys()];
  return selectRandomOption(options);
}

export function selectKeyByIndex(index, map) {
  // Safe-guard
  const intIndex = parseInt(index, 10);
  if (intIndex >= map.size) {
    return selectRandomKey(map);
  }
  const options = [...map.keys()];
  return options[intIndex];
}

export function getIndexByKey(key, map) {
  const options = [...map.keys()];
  const index = options.indexOf(key);

  return indexAsString(index, options.length);
}
