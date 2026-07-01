"use client";

interface EditorProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  onDownload: () => void;
}

export default function Editor({
  text,
  setText,
  textColor,
  setTextColor,
  fontSize,
  setFontSize,
  onDownload,
}: EditorProps) {
  return (
    <div className="mt-10 bg-zinc-900 rounded-3xl p-6 shadow-xl">

      <h2 className="text-3xl font-bold mb-8 text-center">
        ✨ Edit Your Photo Strip
      </h2>

      {/* TEXT */}

      <div className="mb-8">

        <h3 className="text-xl font-semibold mb-4">
          ✍ Caption
        </h3>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Besties ❤️"
          className="w-full bg-zinc-800 rounded-xl p-3 outline-none mb-4"
        />

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 text-sm">
              Text Color
            </label>

            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Font Size
            </label>

            <input
              type="range"
              min={18}
              max={50}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full"
            />

            <p className="text-center mt-2">
              {fontSize}px
            </p>
          </div>

        </div>

      </div>

      {/* DOWNLOAD */}

      <div className="flex justify-center">

        <button
          onClick={onDownload}
          className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-bold"
        >
          Download Strip
        </button>

      </div>

    </div>
  );
}