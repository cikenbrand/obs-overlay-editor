import { Rnd } from "react-rnd";

export default function EditorCanvas() {
  return (
    <div
      className="w-full aspect-video bg-[#383838] rounded-md"
      style={{
        backgroundSize: `${20}px ${20}px`,
        backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
    `,
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
}
