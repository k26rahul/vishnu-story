import { Composition } from "remotion";
import { Story, TOTAL_FRAMES, FPS } from "./components/Story";

export const RemotionRoot = () => {
  return (
    <Composition
      id="StoryVideo"
      component={Story}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1620}
    />
  );
};
