import { Composition } from "remotion";
import { Story, STORY_TOTAL_FRAMES, FPS } from "./components/Story";

export const RemotionRoot = () => {
  return (
    <Composition
      id="StoryVideo"
      component={Story}
      durationInFrames={STORY_TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1620}
    />
  );
};
