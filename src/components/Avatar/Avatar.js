import React from 'react';
import Body from './Parts/bodies/body';
import BgCircle from './Parts/backgrounds/BgCircle';
import Nose from './Parts/nose/nose';
import {
  accessoriesMap, beardMap, eyebrowsMap, eyesMap, hairMap, moustacheMap, mouthMap,
} from './Maps';
import BgOutterCircle from './Parts/backgrounds/BgOutterCircle';
import colours from '../../colours';
import Ears from './Parts/ears/ears';

function Avatar(props) {
  const {
    skinTone,
    hairColour,
    facialHairColour,
    lipColour,
    eyeColour,
    hair,
    eyebrows,
    eyes,
    accessory,
    beard,
    mouth,
    moustache,
  } = props;

  const Accessory = accessoriesMap.get(accessory);
  const Beard = beardMap.get(beard);
  const EyeBrows = eyebrowsMap.get(eyebrows);
  const Eyes = eyesMap.get(eyes);
  const Hair = hairMap.get(hair);
  const Moustache = moustacheMap.get(moustache);
  const Mouth = mouthMap.get(mouth);

  const skinColours = colours.skin[skinTone];
  const hairColours = colours.hair[hairColour];
  const facialHairColours = colours.hair[facialHairColour];
  const lipColours = colours.lipColours[lipColour];
  const eyeColours = colours.eyes[eyeColour];

  return (
    <>
      <svg
        id="avatar"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 800 800"
      >
        <BgOutterCircle />
        <BgCircle />
        <Body skinColours={skinColours} />
        <EyeBrows hairColours={hairColours} />
        <Beard facialHairColours={facialHairColours} />
        <Moustache facialHairColours={facialHairColours} />
        <Eyes eyeColours={eyeColours} skinColours={skinColours} />
        <Mouth skinColours={skinColours} lipColours={lipColours} />
        <Nose skinColours={skinColours} />
        <Hair hairColours={hairColours} />
        <Ears skinColours={skinColours} />
        <Accessory />
      </svg>
    </>
  );
}

export default Avatar;
