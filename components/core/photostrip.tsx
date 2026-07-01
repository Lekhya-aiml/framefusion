"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import Editor from "./Editor";

interface PhotostripProps {
  photos: string[];
  filter: string;
  theme: string;

  text: string;
  textColor: string;
  fontSize: number;

  setText: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function Photostrip({
  photos,
  filter,
  theme,

  text,
  textColor,
  fontSize,

  setText,
  setTextColor,
  setFontSize,
}: PhotostripProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  const themes = {
    white: "bg-white text-black border-gray-200",
    black: "bg-black text-white border-zinc-700",
    pink: "bg-pink-100 text-black border-pink-300",
    lavender: "bg-purple-100 text-black border-purple-300",
    cream: "bg-amber-50 text-black border-amber-200",
  };

  const downloadStrip = async () => {
    if (!stripRef.current) return;

    try {
      const dataUrl = await toPng(stripRef.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      const link = document.createElement("a");
      link.download = "FrameFusion.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (photos.length === 0) {
    return (
      <div className="bg-zinc-900 rounded-3xl p-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          📸 Photo Strip Preview
        </h2>

        <p className="text-zinc-400">
          Capture your photos to generate your Korean Photo Strip.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">

      <div
        ref={stripRef}
        className={`${themes[theme as keyof typeof themes]} rounded-[35px] border-4 p-5 w-80 shadow-2xl transition-all duration-500`}
      >

        <div className="space-y-4">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                style={{ filter }}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          ))}

        </div>

        {text && (
          <div
            className="text-center mt-5 font-bold break-words"
            style={{
              color: textColor,
              fontSize: `${fontSize}px`,
            }}
          >
            {text}
          </div>
        )}

        <div className="mt-5 border-t pt-5 text-center">

          <h2 className="text-2xl font-black tracking-wide">
            FRAMEFUSION
          </h2>

          <p className="text-sm opacity-70">
            Korean AI Photobooth
          </p>

          <p className="text-xs opacity-50 mt-2">
            © 2026 FrameFusion
          </p>

        </div>

      </div>

      <Editor
        text={text}
        setText={setText}
        textColor={textColor}
        setTextColor={setTextColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onDownload={downloadStrip}
      />

    </div>
  );
}