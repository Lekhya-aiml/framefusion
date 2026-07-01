"use client";

import { useState } from "react";

import Camera from "@/components/core/Camera";
import ControlPanel from "@/components/core/ControlPanel";
import Photostrip from "@/components/core/photostrip";

export default function CameraPage() {
  const [photoCount, setPhotoCount] = useState(4);
  const [timer, setTimer] = useState(3);

  const [filter, setFilter] = useState("none");
  const [theme, setTheme] = useState("white");

  const [photos, setPhotos] = useState<string[]>([]);

  // Editor States
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(28);

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <h1 className="text-5xl font-black text-center">
          📸 FrameFusion
        </h1>

        <p className="text-center text-zinc-400 mt-2 mb-10">
          Korean AI Photobooth
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <Camera
              photoCount={photoCount}
              timer={timer}
              filter={filter}
              photos={photos}
              setPhotos={setPhotos}
            />
          </div>

          <ControlPanel
            photoCount={photoCount}
            setPhotoCount={setPhotoCount}
            timer={timer}
            setTimer={setTimer}
            filter={filter}
            setFilter={setFilter}
            theme={theme}
            setTheme={setTheme}
          />

        </div>

        <div className="mt-12">

          <Photostrip
            photos={photos}
            filter={filter}
            theme={theme}
            text={text}
            textColor={textColor}
            fontSize={fontSize}
            setText={setText}
            setTextColor={setTextColor}
            setFontSize={setFontSize}
          />

        </div>

      </div>

    </main>
  );
}