'use client';

import Image from "next/image";
import { useState } from "react";

type Item = {
  id: string;
  title: string;
  client?: string;
  youtubeId: string;
  thumbnail: string;
};

export function ProjectGrid({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group relative rounded-2xl overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-electric"
            aria-label={`Open video ${p.title}`}
          >
            <Image
              src={p.thumbnail}
              alt={p.title}
              width={640}
              height={360}
              className="w-full h-auto object-cover transition scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{p.title}</p>
                {p.client && <p className="text-xs text-white/70">{p.client}</p>}
              </div>
              <div className="rounded-full px-3 py-1 text-xs bg-electric/90">Play</div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 dialog-backdrop" onClick={() => setActive(null)} />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1 text-sm"
              aria-label="Close"
            >
              Close
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
