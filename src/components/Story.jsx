import { useCurrentFrame, staticFile, Img, Audio } from "remotion";

// Map image IDs to asset URLs using staticFile
const IMAGE_MAP = {
  1: staticFile("20250507_0218_Lion King of Jungle_simple_compose_01jtknkbs2fqa8vx74sfwhgtsk.png"),
  2: staticFile("20250507_0221_Clever Rabbit's Solution_remix_01jtkns7khejfs1vwwrdrdbx14.png"),
  3: staticFile("20250507_0223_Lion's Reflection Surprise_remix_01jtknxsvjfxsbnh47em5pztnb.png"),
  4: staticFile("20250507_0249_Celebrating Jungle Animals_remix_01jtkqdc8ce6f9rzk4cc6thsqn.png")
};

// Storylines as [text, imageId]
const STORY_LINES = [
  ["There was a forest.", 1],
  ["The king of the forest was a lion.", 1],
  ["The lion used to demand one animal each day for his meal.", 1],
  ["One day, it was the rabbit’s turn.", 2],
  ["The rabbit was clever.", 2],
  ["To trick the lion, he said another stronger lion lives in the forest.", 2],
  ["The lion said, “Take me to him.”", 2],
  ["The rabbit took the lion to a well and said,", 2],
  ["“He lives inside this well.”", 2],
  ["When the lion looked in, he saw his own reflection.", 3],
  ["Thinking it was his enemy, he jumped in to fight.", 3],
  ["The lion drowned.", 3],
  ["All the animals lived happily after that.", 4],
  ["Story by Vishnu", 4],
];


const SECONDS_PER_LINE = 3;
const FPS = 60;
const LINES_COUNT = STORY_LINES.length;
const TOTAL_FRAMES = LINES_COUNT * SECONDS_PER_LINE * FPS;

export const Story = () => {
  const frame = useCurrentFrame();
  const currentLine = Math.floor(frame / (SECONDS_PER_LINE * FPS));
  const [text, imageId] = STORY_LINES[currentLine] || ["", 1];
  const bgUrl = IMAGE_MAP[imageId];
  return (
    <div
      className="d-flex align-items-center justify-content-center h-100 text-dark p-4"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Audio src={staticFile("history-storytelling-155326.mp3")} />
      <Img
        src={bgUrl}
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <span className="text-center display-3" style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, position: 'relative', zIndex: 1 }}>
        {text}
      </span>
    </div>
  );
};

export { TOTAL_FRAMES as STORY_TOTAL_FRAMES, FPS };