"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-video bg-bg-surface2">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {screenshot.caption && (
              <div className="p-4 border-t border-white/5">
                <p className="text-sm text-text-secondary">{screenshot.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-blue transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-accent-blue text-4xl font-bold p-2"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                fill
                className="object-contain bg-black"
              />
            </div>
            {screenshots[currentIndex].caption && (
              <p className="text-center text-white mt-6 text-lg font-medium">{screenshots[currentIndex].caption}</p>
            )}
            <p className="text-center text-text-muted mt-2 text-sm">
              {currentIndex + 1} / {screenshots.length}
            </p>
          </div>

          <button
            className="absolute right-4 text-white hover:text-accent-blue text-4xl font-bold p-2"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
