"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  const photos = [
    "/about1.jpg",
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


     <main className="bg-white text-gray-800">
        <section
      className="w-full h-[650px] py-16 px-6 border-b border-gray-200 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-experts.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#8b1f2fb0]"></div>
    
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl font-bold text-center pt-20 text-white leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Moments That Define Us
          </motion.h1>
    
          <motion.p
            className="mt-4 text-xl text-center font-semibold mx-1 text-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
Explore our journey through a collection of moments, milestones, and real project experiences. Our gallery highlights the dedication, teamwork, and expertise behind every solution we deliver. From events and client interactions to on-ground implementations, these visuals reflect who we are and the values we stand for.          </motion.p>
     <div
      className="
        mt-12      flex flex-col sm:flex-row 
        gap-4 
        w-full sm:w-auto
        justify-center sm:justify-start   /* mobile center, desktop left */
      "
    >
      <motion.button
        whileHover={{ scale: 1.07 }}
        className="
          bg-[#87CEEB] text-lg text-black font-bold px-5 py-2.5 rounded-md
          w-auto
          mx-auto sm:mx-0      /* center on mobile, normal on desktop */
          md:ml-130             /* apply margin only on desktop */
        "
      >
        Explore Our Solutions
      </motion.button>
    </div>
        
        </motion.div>
    
        <div
      className="
        mt-6 
        flex flex-col sm:flex-row 
        gap-4 
        w-full sm:w-auto
        justify-center sm:justify-start   /* mobile center, desktop left */
      "
    >
   
    </div>
    
      </div>
    </section>

{/*     
    <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-16 lg:px-32">


   
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-16"
        style={{ color: "#191970" }}
      >
        Movements
      </h1>

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

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full">
            
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <X size={26} />
            </button>

            {lightbox.type === "image" && (
              <img
                src={lightbox.src}
                className="w-full rounded-xl shadow-lg"
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
    </div> */}
        </main>
  );
}
