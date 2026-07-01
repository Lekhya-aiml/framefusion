"use client";

import Image from "next/image";

interface StickerPanelProps {
  onStickerSelect: (sticker: string) => void;
}

const stickers = [
  "/stickers/bow.png",
  "/stickers/heart.png",
  "/stickers/flower.png",
  "/stickers/star.png",
  "/stickers/cloud.png",
  "/stickers/sparkle.png",
  "/stickers/teddy.png",
  "/stickers/bunny.png",
];

export default function StickerPanel({
  onStickerSelect,
}: StickerPanelProps) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-4">

      <h2 className="text-xl font-bold mb-4">
        🎀 Stickers
      </h2>

      <div className="grid grid-cols-4 gap-3">

        {stickers.map((sticker) => (
          <button
            key={sticker}
            onClick={() => onStickerSelect(sticker)}
            className="bg-zinc-700 rounded-xl p-2 hover:scale-110 transition"
          >
            <Image
              src={sticker}
              alt="Sticker"
              width={60}
              height={60}
            />
          </button>
        ))}

      </div>

    </div>
  );
}