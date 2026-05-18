"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Personality } from "@/types";
import { generateShareText, copyToClipboard, shareToTwitter, shareToWeibo } from "@/utils/share";

interface ShareButtonProps {
  personality: Personality;
  shareUrl: string;
}

export default function ShareButton({ personality, shareUrl }: ShareButtonProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = generateShareText(personality);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowPanel(!showPanel)}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff4655] to-[#ff6b7a] text-white font-bold text-sm tracking-wider hover:shadow-[0_0_30px_rgba(255,70,85,0.4)] transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        分享结果
      </motion.button>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a1a] border border-[#ffffff15] rounded-xl p-4 shadow-2xl backdrop-blur-xl z-30"
          >
            <div className="space-y-2">
              <button
                onClick={handleCopyLink}
                className="w-full p-3 rounded-lg bg-[#ffffff08] hover:bg-[#ffffff12] text-white text-sm text-left flex items-center gap-3 transition-colors"
              >
                <span className="text-lg">🔗</span>
                {copied ? "已复制链接！" : "复制结果链接"}
              </button>
              <button
                onClick={() => shareToTwitter(shareText, shareUrl)}
                className="w-full p-3 rounded-lg bg-[#ffffff08] hover:bg-[#ffffff12] text-white text-sm text-left flex items-center gap-3 transition-colors"
              >
                <span className="text-lg">🐦</span>
                分享到 Twitter / X
              </button>
              <button
                onClick={() => shareToWeibo(shareText, shareUrl)}
                className="w-full p-3 rounded-lg bg-[#ffffff08] hover:bg-[#ffffff12] text-white text-sm text-left flex items-center gap-3 transition-colors"
              >
                <span className="text-lg">📱</span>
                分享到微博
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
