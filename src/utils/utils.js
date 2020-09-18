import {
  accessoriesMap,
  beardMap,
  eyebrowsMap,
  eyesMap,
  hairMap,
  moustacheMap,
  mouthMap,
} from "../components/Avatar/Maps";
import colours from "../colours";

/**
 * Given an array of options selects a random value
 * @param options an array of strings
 * @return a value as a string
 */
export function selectRandomOption(options) {
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Helper function that returns index as a string with leading 0s
 */
export function indexAsString(index, length) {
  return length > 9 && index <= 9
    ? "0".concat(index.toString())
    : index.toString();
}

export function calculateTotalCombinations() {
  return (
    accessoriesMap.size *
    beardMap.size *
    eyebrowsMap.size *
    eyesMap.size *
    hairMap.size *
    moustacheMap.size *
    mouthMap.size *
    Object.keys(colours.hair).length *
    Object.keys(colours.facialHair).length *
    Object.keys(colours.skin).length *
    Object.keys(colours.lipColours).length *
    Object.keys(colours.eyes).length
  );
}
