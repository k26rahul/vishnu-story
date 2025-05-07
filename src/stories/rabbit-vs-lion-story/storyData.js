import { staticFile } from "remotion";

export const IMAGE_MAP = {
  1: staticFile("stories/rabbit-vs-lion-story/1_Lion King of Jungle.png"),
  2: staticFile("stories/rabbit-vs-lion-story/2_Clever Rabbit's Solution.png"),
  3: staticFile("stories/rabbit-vs-lion-story/3_Lions Reflection Surprise.png"),
  4: staticFile(
    "stories/rabbit-vs-lion-story/4_Celebrating Jungle Animals.png",
  ),
};

// Language constant (2-letter ISO 639)
export const STORY_LANG = "kn"; // "en" | "hi" | "kn"

export const STORY_BGM = "stories/rabbit-vs-lion-story/narration_bgm.mp3";

// https://elevenlabs.io/
export const STORY_NARRATION = {
  en: {
    src: "stories/rabbit-vs-lion-story/narration_en.mp3",
    duration: 35,
  },
  hi: {
    src: "stories/rabbit-vs-lion-story/narration_hi.mp3",
    duration: 37,
  },
  kn: {
    src: "",
    duration: 39,
  },
};

export const BG_START_END = {
  1: 0,
  2: 3,
  3: 9,
  4: 11,
};

export const STORY_LINES_EN = [
  { text: "There was a forest.", startAt: 0 },
  { text: "The king of the forest was a lion.", startAt: 1.5 },
  {
    text: "The lion used to demand one animal each day for his meal.",
    startAt: 3.8,
  },
  { text: "One day, it was the rabbit’s turn.", startAt: 7.8 },
  { text: "The rabbit was clever.", startAt: 10 },
  {
    text: "To trick the lion, he said another stronger lion lives in the forest.",
    startAt: 11.5,
  },
  { text: "The lion said, “Take me to him.”", startAt: 15.2 },
  {
    text: "The rabbit took the lion to a well and said,",
    startAt: 17.6,
  },
  { text: "“He lives inside this well.”", startAt: 19.8 },
  {
    text: "When the lion looked in, he saw his own reflection.",
    startAt: 22,
  },
  {
    text: "Thinking it was his enemy, he jumped in to fight.",
    startAt: 25.2,
  },
  { text: "The lion drowned.", startAt: 28.5 },
  {
    text: "All the animals lived happily after that.",
    startAt: 30.5,
  },
  { text: "Story by Vishnu", startAt: 33.5 },
];

export const STORY_LINES_HI = [
  { text: "एक जंगल था।", startAt: 0 },
  { text: "जंगल का राजा शेर था।", startAt: 1.5 },
  {
    text: "शेर हर दिन एक जानवर खाने के लिए बुलाता था।",
    startAt: 3.2,
  },
  { text: "एक दिन खरगोश की बारी आई।", startAt: 6 },
  { text: "खरगोश चालाक था।", startAt: 8 },
  {
    text: "उसने शेर से कहा कि जंगल में एक और ताकतवर शेर है।",
    startAt: 9.5,
  },
  { text: "शेर ने कहा, “मुझे वहाँ ले चलो।”", startAt: 13 },
  {
    text: "खरगोश शेर को एक कुएँ के पास ले गया और बोला,",
    startAt: 16,
  },
  { text: "“वह शेर इस कुएँ के अंदर रहता है।”", startAt: 19 },
  {
    text: "शेर ने अंदर देखा तो उसे अपनी ही परछाई दिखी।",
    startAt: 21.5,
  },
  {
    text: "उसे लगा वह दुश्मन है और वह लड़ने के लिए कूद गया।",
    startAt: 25.2,
  },
  { text: "शेर कुएँ में गिरकर मर गया।", startAt: 28.5 },
  {
    text: "अब सभी जानवर खुशी से रहने लगे।",
    startAt: 30.5,
  },
  { text: "कहानी: विष्णु", startAt: 33.5 },
];

export const STORY_LINES_KN = [
  { text: "ಒಂದು ಕಾಡಿತ್ತು.", startAt: 0 },
  { text: "ಕಾಡಿನ ರಾಜನು ಸಿಂಹ.", startAt: 3 },
  {
    text: "ಸಿಂಹನು ಪ್ರತಿ ದಿನ ಒಂದು ಪ್ರಾಣಿಯನ್ನು ಊಟಕ್ಕೆ ಕರೆದಿಕೊಳ್ಳುತ್ತಿದ್ದ.",
    startAt: 6,
  },
  { text: "ಒಂದು ದಿನ ಖರಗೋಶದ ಬಾರಿಗೆ ಬಂತು.", startAt: 9 },
  { text: "ಖರಗೋಶ ಚತುರನಾಗಿತ್ತು.", startAt: 12 },
  {
    text: "ಅವನ ಬಳಿ ಮತ್ತೊಬ್ಬ ಶಕ್ತಿಶಾಲಿ ಸಿಂಹನಿದ್ದಾನೆ ಎಂದು ಖರಗೋಶನು ತಿಳಿಸಿದ.",
    startAt: 15,
  },
  {
    text: "ಸಿಂಹನು ಹೇಳಿದ್ದು, ಅವನ ಬಳಿ ನನ್ನನ್ನ ಕೊಂಡೊಯಿರಿ.",
    startAt: 18,
  },
  {
    text: "ಖರಗೋಶನು ಸಿಂಹನನ್ನು ಬಾವಿಯ ಬಳಿ ಕರೆದುಕೊಂಡು ಹೇಳಿದನು,",
    startAt: 21,
  },
  { text: "ಅವನು ಈ ಬಾವಿಯ ಒಳಗೆ ವಾಸಿಸುತ್ತಾನೆ.", startAt: 24 },
  {
    text: "ಸಿಂಹನು ಒಳಗೆ ನೋಡಿದಾಗ ತನ್ನ ಪ್ರತಿಬಿಂಬವನ್ನೇ ಕಂಡನು.",
    startAt: 27,
  },
  {
    text: "ಅದು ಶತ್ರಿಯಾಗಿಯೆ ಅನಿಸಿ ಹೋರಾಡಲು ಬಾವಿಯಲ್ಲಿ ಹಾರಿದ.",
    startAt: 30,
  },
  { text: "ಸಿಂಹ ಬಾವಿಯಲ್ಲಿ ಬೀಳ್ಕೊಂಡು ಸತ್ತುಹೋಯಿತು.", startAt: 33 },
  {
    text: "ಈಗ ಎಲ್ಲಾ ಪ್ರಾಣಿಗಳು ಸಂತೋಷದಿಂದ ಬದುಕಿದರು.",
    startAt: 36,
  },
  { text: "ಕಥೆ: ವಿಷ್ಣು", startAt: 39 },
];

export const ALL_STORY_LINES = {
  en: STORY_LINES_EN,
  hi: STORY_LINES_HI,
  kn: STORY_LINES_KN,
};
