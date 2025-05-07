import React from "react";
import {
  useCurrentFrame,
  staticFile,
  Img,
  Audio,
  AbsoluteFill,
} from "remotion";

import {
  ALL_STORY_LINES,
  IMAGE_MAP,
  STORY_BGM,
  STORY_NARRATION,
  STORY_LANG,
  BG_START_END,
} from "../stories/rabbit-vs-lion-story/storyData.js";

const FONT_MAP = {
  en: "Gluten",
  hi: "Noto Sans Devanagari",
  kn: "Noto Sans Kannada",
};

const FPS = 60;
const TOTAL_FRAMES = Math.ceil(STORY_NARRATION[STORY_LANG].duration * FPS);

export const Story = () => {
  const fontFamily = FONT_MAP[STORY_LANG] || "Noto Sans";
  const frame = useCurrentFrame();
  const currentTime = frame / FPS;
  const lines = ALL_STORY_LINES[STORY_LANG];
  const activeLineIndex = lines.reduce(
    (acc, line, i) => (currentTime >= line.startAt ? i : acc),
    0,
  );
  const line = lines[activeLineIndex];
  const bgId = Object.entries(BG_START_END)
    .sort(([_, a], [__, b]) => b - a)
    .find(([_, start]) => activeLineIndex >= start)?.[0];
  const bgUrl = IMAGE_MAP[bgId];
  const text = line.text;

  return (
    <AbsoluteFill className="story-root d-flex align-items-center justify-content-center p-4 overflow-hidden text-dark">
      <Audio src={staticFile(STORY_BGM)} volume={0.05} />
      {STORY_NARRATION[STORY_LANG].src && (
        <Audio src={staticFile(STORY_NARRATION[STORY_LANG].src)} />
      )}
      <Img
        src={bgUrl}
        className="story-bg position-absolute w-100 h-100 object-fit-cover"
      />
      <span
        className="story-text text-center display-3 bg-white bg-opacity-75 rounded-4 p-4 z-1"
        style={{ fontFamily }}
      >
        {text}
      </span>
    </AbsoluteFill>
  );
};

export { TOTAL_FRAMES, FPS };
