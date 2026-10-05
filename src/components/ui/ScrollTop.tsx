"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center border border-[#E6E8EA] bg-white text-[#0B172A] shadow-[0_12px_30px_-18px_rgba(11,23,42,0.45)] transition-colors duration-300 hover:bg-[#F7F8F6]"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
