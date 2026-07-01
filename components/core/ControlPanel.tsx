"use client";

interface ControlPanelProps {
  photoCount: number;
  setPhotoCount: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function ControlPanel({
  photoCount,
  setPhotoCount,
  timer,
  setTimer,
  filter,
  setFilter,
  theme,
  setTheme,
}: ControlPanelProps) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl space-y-8">

      {/* Photos */}

      <div>
        <h2 className="text-xl font-bold mb-4">📸 Number of Photos</h2>

        <div className="grid grid-cols-2 gap-3">
          {[2, 4, 6, 8].map((num) => (
            <button
              key={num}
              onClick={() => setPhotoCount(num)}
              className={`py-3 rounded-xl transition-all ${
                photoCount === num
                  ? "bg-purple-500 text-white font-bold"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Timer */}

      <div>
        <h2 className="text-xl font-bold mb-4">⏱ Timer</h2>

        <select
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
          className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
        >
          <option value={3}>3 Seconds</option>
          <option value={5}>5 Seconds</option>
          <option value={10}>10 Seconds</option>
        </select>
      </div>

      {/* Filters */}

      <div>
        <h2 className="text-xl font-bold mb-4">🎨 Filters</h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
        >
          <option value="none">Normal</option>
          <option value="grayscale(1)">Black & White</option>
          <option value="sepia(1)">Vintage</option>
          <option value="brightness(120%)">Bright</option>
          <option value="contrast(150%)">Contrast</option>
          <option value="saturate(180%)">Vivid</option>
          <option value="hue-rotate(90deg)">Dream</option>
          <option value="hue-rotate(180deg)">Cyberpunk</option>
          <option value="blur(1px)">Soft Blur</option>
          <option value="opacity(0.9)">Matte</option>
          <option value="invert(1)">Negative</option>
          <option value="sepia(.6) saturate(1.5)">Film</option>
          <option value="brightness(110%) saturate(140%)">Warm</option>
          <option value="brightness(95%) saturate(80%)">Cool</option>
          <option value="contrast(120%) saturate(180%)">Korean Cafe</option>
          <option value="hue-rotate(45deg)">Pastel</option>
          <option value="contrast(170%) brightness(110%)">Glow</option>
        </select>
      </div>

      {/* Themes */}

      <div>
        <h2 className="text-xl font-bold mb-4">💜 Theme</h2>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
        >
          <option value="white">🤍 Classic White</option>
          <option value="black">🖤 Midnight Black</option>
          <option value="pink">🩷 Kawaii Pink</option>
          <option value="lavender">💜 Lavender</option>
          <option value="cream">💛 Cream</option>
        </select>
      </div>

    </div>
  );
}