"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  const photos = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
  ];

  const videos = [
    "/gallery/video1.mp4",
    "/gallery/video2.mp4",
    "/gallery/video3.mp4",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-16 lg:px-32">

      {/* ---------------- TITLE ---------------- */}
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-16"
        style={{ color: "#191970" }}
      >
        Gallery
      </h1>

      {/* ================= PHOTOS SECTION ================= */}
      <section className="mb-20">
     

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => setLightbox({ type: "image", src })}
            >
              <img src={src} alt="gallery" className="w-full h-56 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VIDEOS SECTION ================= */}
      <section>
      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-black"
              onClick={() => setLightbox({ type: "video", src })}
            >
              <video src={src} className="w-full h-64 object-cover" muted />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX POPUP ================= */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full">
            
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <X size={26} />
            </button>

            {/* Image View */}
            {lightbox.type === "image" && (
              <img
                src={lightbox.src}
                className="w-full rounded-xl shadow-lg"
              />
            )}

            {/* Video View */}
            {lightbox.type === "video" && (
              <video
                src={lightbox.src}
                className="w-full rounded-xl shadow-lg"
                autoPlay
                controls
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
