export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">
          FrameFusion
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          The Ultimate Interactive AI Photobooth
        </p>

        <a
          href="/camera"
          className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Start Session
        </a>
      </div>
    </main>
  );
}