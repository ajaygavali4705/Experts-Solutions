"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [hoverImage, setHoverImage] = useState(null); // <-- Added this line
  const [lightbox, setLightbox] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  // -------------------------------
  // LOAD GALLERY FROM BACKEND
  // -------------------------------
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        const res = await fetch("http://localhost:5000/api/gallery", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        const data = await res.json();

        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.data)) items = data.data;
        else if (Array.isArray(data.gallery)) items = data.gallery;

        const backendPhotos = items
          .filter((item) => item.type === "photo")
          .map(
            (item) => `http://localhost:5000/uploads/gallery/${item.fileName}`
          );

        const backendVideos = items
          .filter((item) => item.type === "video")
          .map(
            (item) => `http://localhost:5000/uploads/gallery/${item.fileName}`
          );

        setPhotos(backendPhotos);
        setVideos(backendVideos);
      } catch (error) {
        console.error("Gallery fetch error:", error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION (unchanged) */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg-experts.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#8b1f2f90]"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-center pt-20 text-white leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Moments That Define Us
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-center mt-5 font-semibold mx-3 text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A glimpse into the milestones, collaborations, and achievements that shape who we are.
              Each moment reflects our journey, dedication, and growth.
            </motion.p>
          </motion.div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <motion.button
              whileHover={{ scale: 1.07 }}
              className="bg-[#87CEEB] text-lg text-black font-bold px-5 mb-5 py-2.5 rounded-md w-auto mx-auto sm:mx-0 md:ml-134"
            >
              Explore Our Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-16 lg:px-32">
        <h1
          className="text-center text-4xl md:text-5xl font-extrabold mb-16"
          style={{ color: "#191970" }}
        >
          Movements
        </h1>

        {/* IMAGES GRID */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoverImage(src)}
                onMouseLeave={() => setHoverImage(null)}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOVER PREVIEW POPUP */}
        {hoverImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm pointer-events-none">
            <motion.img
              src={hoverImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] rounded-xl shadow-2xl"
            />
          </div>
        )}

        {/* VIDEOS GRID */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-black"
                onClick={() => setLightbox({ type: "video", src })}
              >
                <video
                  src={src}
                  className="w-full h-64 object-cover"
                  muted
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX (unchanged) */}
        {lightbox && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-6">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-2 right-0 text-white bg-black/50 p-2 rounded-full hover:bg-black"
              >
                <X size={26} />
              </button>

              {lightbox.type === "image" && (
                <img
                  src={lightbox.src}
                  className="w-full rounded-xl shadow-lg my-6"
                />
              )}

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
    </main>
  );
}
