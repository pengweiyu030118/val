"use client";

import { motion } from "framer-motion";

interface SoundToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-4 right-4 z-40 w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff15] flex items-center justify-center text-lg hover:border-[#ff4655]/50 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={enabled ? "关闭音效" : "开启音效"}
    >
      {enabled ? "🔊" : "🔇"}
    </motion.button>
  );
}
