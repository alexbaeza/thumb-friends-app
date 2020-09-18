import {
  accessoriesMap,
  beardMap,
  eyebrowsMap,
  eyesMap,
  hairMap,
  moustacheMap,
  mouthMap,
} from "../components/Avatar/Maps";
import {
  getIndexByKey,
  selectKeyByIndex,
  selectRandomKey,
} from "./object-utils";
import { indexAsString } from "./utils";
import {
  getIndexByProperty,
  selectPropertyByIndex,
  selectRandomProperty,
} from "./property-utils";
import colours from "../colours";

/**
 * Maps a 16 digits id to a set of choices by position
 * @param id the 16 digit id as a string
 * @returns preset of choices as an object
 */
function idToPreSetChoices(id) {
  return {
    accessoriesMapIndex: id.slice(0, 1),
    beardMapIndex: id.slice(1, 2),
    eyebrowsMapIndex: id.slice(2, 4),
    eyesMapIndex: id.slice(4, 6),
    hairMapIndex: id.slice(6, 8),
    moustacheMapIndex: id.slice(8, 9),
    mouthMapIndex: id.slice(9, 11),
    hairColourIndex: id.slice(11, 12),
    facialHairColourIndex: id.slice(12, 13),
    skinColourIndex: id.slice(13, 14),
    lipColourIndex: id.slice(14, 15),
    eyesColourIndex: id.slice(15, 16),
  };
}

export function idToProps(id) {
  const choices = idToPreSetChoices(id);
  return {
    /* eslint-disable max-len */
    accessory: choices.accessoriesMapIndex
      ? selectKeyByIndex(choices.accessoriesMapIndex, accessoriesMap)
      : selectRandomKey(accessoriesMap),
    beard: choices.beardMapIndex
      ? selectKeyByIndex(choices.beardMapIndex, beardMap)
      : selectRandomKey(beardMap),
    eyebrows: choices.eyebrowsMapIndex
      ? selectKeyByIndex(choices.eyebrowsMapIndex, eyebrowsMap)
      : selectRandomKey(eyebrowsMap),
    eyes: choices.eyesMapIndex
      ? selectKeyByIndex(choices.eyesMapIndex, eyesMap)
      : selectRandomKey(eyesMap),
    hair: choices.hairMapIndex
      ? selectKeyByIndex(choices.hairMapIndex, hairMap)
      : selectRandomKey(hairMap),
    moustache: choices.moustacheMapIndex
      ? selectKeyByIndex(choices.moustacheMapIndex, moustacheMap)
      : selectRandomKey(moustacheMap),
    mouth: choices.mouthMapIndex
      ? selectKeyByIndex(choices.mouthMapIndex, mouthMap)
      : selectRandomKey(mouthMap),
    hairColour: choices.hairColourIndex
      ? selectPropertyByIndex(choices.hairColourIndex, colours.hair)
      : selectRandomProperty(colours.hair),
    facialHairColour: choices.facialHairColourIndex
      ? selectPropertyByIndex(choices.facialHairColourIndex, colours.facialHair)
      : selectRandomProperty(colours.facialHair),
    skinTone: choices.skinColourIndex
      ? selectPropertyByIndex(choices.skinColourIndex, colours.skin)
      : selectRandomProperty(colours.skin),
    lipColour: choices.lipColourIndex
      ? selectPropertyByIndex(choices.lipColourIndex, colours.lipColours)
      : selectRandomProperty(colours.lipColours),
    eyeColour: choices.eyesColourIndex
      ? selectPropertyByIndex(choices.eyesColourIndex, colours.eyes)
      : selectRandomProperty(colours.eyes),
  };
}

export function propsToId(props) {
  const {
    skinTone,
    hairColour,
    facialHairColour,
    lipColour,
    eyeColour,
    hair,
    accessory,
    beard,
    eyebrows,
    eyes,
    moustache,
    mouth,
  } = props;

  const accessoriesMapIndex = getIndexByKey(accessory, accessoriesMap);
  const beardMapIndex = getIndexByKey(beard, beardMap);
  const eyebrowsMapIndex = getIndexByKey(eyebrows, eyebrowsMap);
  const eyesMapIndex = getIndexByKey(eyes, eyesMap);
  const hairMapIndex = getIndexByKey(hair, hairMap);
  const moustacheMapIndex = getIndexByKey(moustache, moustacheMap);
  const mouthMapIndex = getIndexByKey(mouth, mouthMap);
  const hairColourIndex = getIndexByProperty(hairColour, colours.hair);
  const facialHairColourIndex = getIndexByProperty(
    facialHairColour,
    colours.facialHair
  );
  const skinColourIndex = getIndexByProperty(skinTone, colours.skin);
  const lipColourIndex = getIndexByProperty(lipColour, colours.lipColours);
  const eyesColourIndex = getIndexByProperty(eyeColour, colours.eyes);

  return "".concat(
    accessoriesMapIndex,
    beardMapIndex,
    eyebrowsMapIndex,
    eyesMapIndex,
    hairMapIndex,
    moustacheMapIndex,
    mouthMapIndex,
    hairColourIndex,
    facialHairColourIndex,
    skinColourIndex,
    lipColourIndex,
    eyesColourIndex
  );
}

/**
 * Picks a number at random and appends a leading 0 if max value was bigger than 9 this helps when retrieving the pre-sets based on an id
 * @param max the object length or size
 * @returns {string} the randomly picked choice as a string with leading 0 if max value was bigger than 9
 */
function randomize(max) {
  const min = 0;
  const randomChoice = Math.floor(Math.random() * (max - min + 1)) + min;
  return indexAsString(randomChoice, max);
}

/**
 * Generates a random avatar id based on map and object sizes.
 * @returns {string} a random avatar id.
 */
function generateAvatarId() {
  const accessoriesMapIndex = randomize(accessoriesMap.size);
  const beardMapIndex = randomize(beardMap.size);
  const eyebrowsMapIndex = randomize(eyebrowsMap.size);
  const eyesMapIndex = randomize(eyesMap.size);
  const hairMapIndex = randomize(hairMap.size);
  const moustacheMapIndex = randomize(moustacheMap.size);
  const mouthMapIndex = randomize(mouthMap.size);
  const hairColourIndex = randomize(Object.keys(colours.hair).length - 1);
  const facialHairColourIndex = randomize(
    Object.keys(colours.facialHair).length - 1
  );
  const skinColourIndex = randomize(Object.keys(colours.skin).length - 1);
  const lipColourIndex = randomize(Object.keys(colours.lipColours).length - 1);
  const eyesColourIndex = randomize(Object.keys(colours.eyes).length - 1);

  return "".concat(
    accessoriesMapIndex,
    beardMapIndex,
    eyebrowsMapIndex,
    eyesMapIndex,
    hairMapIndex,
    moustacheMapIndex,
    mouthMapIndex,
    hairColourIndex,
    facialHairColourIndex,
    skinColourIndex,
    lipColourIndex,
    eyesColourIndex
  );
}

/**
 * Given an amount it generates n random avatar strings
 * @param amount amount of ids to generate
 * @returns {string[]} the randomly generated ids as an array
 */
export function generateRandomAvatarIds(amount) {
  return [...Array(amount)].map(generateAvatarId);
}
