import katarynaSmall from "../images/kataryna-castle-sm.jpg";
import frandsenSmall from "../images/frandsen-castle-sm.jpg";
import historyTowerSmall from "../images/history-tower-sm.jpg";
import katarynaLarge from "../images/kataryna-castle-lg.jpg";
import frandsenLarge from "../images/frandsen-castle-lg.jpg";
import historyTowerLarge from "../images/history-tower-lg.jpg";
import lakeCastleLarge from "../images/lake-castle-lg.jpg";
import lakeCastleSmall from "../images/lakecastle-castle-sm.jpg";
import hillsideCastleLarge from "../images/hillside-castle-lg.jpg";
import hillsideCastleSmall from "../images/hillside-castle-sm.jpg";
import swCastleLarge from "../images/sw-castle-lg.jpg";
import swCastleSmall from "../images/sw-castle-sm.jpg";
import riverTowerLarge from "../images/river-tower-lg.jpg";
import riverTowerSmall from "../images/river-tower-sm.jpg";
import katarynaTowerLarge from "../images/kataryna-tower-lg.jpg";
import katarynaTowerSmall from "../images/kataryna-tower-sm.jpg";
import snowyCastle from "../images/kataryna-snow-sm.jpg";

// Don't forget the curly braces and commas!

export const GALLERYPHOTOS = [
  {
    id: 0,
    alt: "Hillside Castle",
    src: hillsideCastleSmall,
    srcSet: `${hillsideCastleSmall} 500w, ${hillsideCastleLarge} 1200w`,
  },
  {
    id: 1,
    alt: "Sedro-Wooley Castle",
    src: swCastleSmall,
    srcSet: `${swCastleLarge} 500w, ${swCastleLarge} 1200w`,
  },
  {
    id: 2,
    alt: "Lake Castle",
    src: lakeCastleSmall,
    srcSet: `${lakeCastleSmall} 500w, ${lakeCastleLarge} 1200w`,
  },
  {
    id: 3,
    alt: "River Tower",
    src: riverTowerSmall,
    srcSet: `${riverTowerSmall} 500w, ${riverTowerLarge} 1200w`,
  },
  {
    id: 4,
    alt: "Castle Kataryna Tower",
    src: katarynaTowerSmall,
    srcSet: `${katarynaTowerSmall} 500w, ${katarynaTowerLarge} 1200w`,
  },
  {
    id: 5,
    alt: "Snowy Castle",
    src: snowyCastle,
    srcSet: `${snowyCastle} 500w`,
  },
  {
    id: 6,
    alt: "Castle Kataryna",
    src: katarynaSmall,
    srcSet: `${katarynaSmall} 500w, ${katarynaLarge} 1200w`,
  },
  {
    id: 7,
    alt: "Castle Kataryna",
    src: frandsenSmall,
    srcSet: `${frandsenSmall} 500w, ${frandsenLarge} 1200w`,
  },
  {
    id: 8,
    alt: "History Tower",
    src: historyTowerSmall,
    srcSet: `${historyTowerSmall} 500w, ${historyTowerLarge} 1200w`,
  },
];

export default GALLERYPHOTOS;
