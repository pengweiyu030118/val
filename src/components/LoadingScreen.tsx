"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-[#ff4655] rounded-full" />
          <div className="absolute inset-2 border-4 border-transparent border-t-[#ff6b7a] rounded-full"
            style={{ animationDuration: "1.5s" }}
          />
          <div className="absolute inset-4 border-4 border-transparent border-t-[#00e5ff] rounded-full"
            style={{ animationDuration: "1s" }}
          />
        </motion.div>
        <motion.p
          className="text-[#ff4655] text-xl font-bold tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING
        </motion.p>
        <motion.div
          className="mt-4 w-48 h-1 bg-[#1a1a1a] rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#ff4655] to-[#00e5ff] rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "60%" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
