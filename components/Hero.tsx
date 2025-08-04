import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden border-b border-white/10">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="relative container h-full flex flex-col justify-end pb-10">
        <h1 className="text-4xl md:text-6xl font-semibold max-w-3xl">AI-driven films & campaigns</h1>
        <p className="text-white/80 mt-3 max-w-2xl">We blend cinematic craft with generative models to create stories that stick.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/(site)/work" className="px-5 py-3 rounded-xl bg-electric text-white font-medium">See our work</Link>
          <Link href="/(site)/contact" className="px-5 py-3 rounded-xl bg-white/10">Start a project</Link>
        </div>
      </div>
    </section>
  );
}
