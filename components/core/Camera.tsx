"use client";

import { useRef, useState } from "react";
import Webcam from "react-webcam";

interface CameraProps {
  photoCount: number;
  timer: number;
  filter: string;
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Camera({
  photoCount,
  timer,
  filter,
  photos,
  setPhotos,
}: CameraProps) {
  const webcamRef = useRef<Webcam>(null);

  const [countdown, setCountdown] = useState<number | null>(null);
  const [capturing, setCapturing] = useState(false);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const runCountdown = () => {
    return new Promise<void>((resolve) => {
      let time = timer;

      setCountdown(time);

      const interval = setInterval(() => {
        time--;

        if (time === 0) {
          clearInterval(interval);
          setCountdown(null);
          resolve();
        } else {
          setCountdown(time);
        }
      }, 1000);
    });
  };

  const startCapture = async () => {
    setPhotos([]);
    setCapturing(true);

    for (let i = 0; i < photoCount; i++) {
      await runCountdown();

      const image = webcamRef.current?.getScreenshot();

      if (image) {
        setPhotos((prev) => [...prev, image]);
      }

      await wait(700);
    }

    setCapturing(false);
  };

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Camera
        </h2>

        <button
          onClick={startCapture}
          disabled={capturing}
          className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          {capturing ? "Capturing..." : "Start"}
        </button>

      </div>

      <div className="relative">

        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored={true}
          screenshotFormat="image/png"
          style={{ filter }}
          className="w-full rounded-3xl aspect-video object-cover"
        />

        {countdown && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <span className="text-9xl font-black">
              {countdown}
            </span>

          </div>
        )}

      </div>

      <div className="mt-6 text-center text-zinc-400">
        {photos.length} / {photoCount} Photos Captured
      </div>

    </div>
  );
}